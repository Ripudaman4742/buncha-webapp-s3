import { Config } from "../../utils/types";
import { getConfig } from "../../utils/appInfo";
import { getMainDefinition } from "@apollo/client/utilities";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  InMemoryCache,
  MutationOptions,
  NormalizedCacheObject,
  QueryOptions,
  SubscriptionOptions,
  createHttpLink,
  split
} from "@apollo/client";

let gqlService: GraphQLService | undefined;

export class GraphQLService {
  private readonly client!: ApolloClient<NormalizedCacheObject>;

  private loginToken = "";

  constructor() {
    const cache = new InMemoryCache({
      typePolicies: {
        CartForRun: {
          fields: {
            items: {
              merge(_, incoming) {
                return incoming;
              }
            }
          }
        }
      }
    });

    const ENDPOINT_ENV =
    getConfig(Config.endpointEnv) ||
    "https://pikupapi-staging.pikup.io/graphql";
    const APP_VERSION = getConfig(Config.version);
    const httpLink = GraphQLService.initHttpLink(ENDPOINT_ENV);


    const combineLink = GraphQLService.createCombineLink(httpLink);

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("@tn") || this.loginToken;
      const authorization = token ? `Bearer ${token}` : "";
      return {
        headers: {
          ...headers,
          authorization: authorization,
          version: APP_VERSION || ""
        }
      };
    });

    const link = ApolloLink.from([
      this.createErrorLink(),
      authLink,
      combineLink
    ]);

    this.client = new ApolloClient({
      cache: cache,
      link: link,
      version: APP_VERSION,
      queryDeduplication: false,
      connectToDevTools: Boolean(getConfig(Config.devTool)) || false,
      assumeImmutableResults: true
    });
  }

  static initHttpLink(url: string) {
    return createHttpLink({
      uri: url
    });
  }

  static createCombineLink(httpLink: ApolloLink) {
    return split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition"
        );
      },
      httpLink
    );
  }


  createErrorLink() {
    return onError(({ graphQLErrors, networkError }) => {
      let unauthenticated = false;
      if (graphQLErrors)
        for (let err of graphQLErrors)
          switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            unauthenticated = true;
            break;
          default:
            // eslint-disable-next-line no-console
            console.log("err ===> ", networkError, err);
          }
      if (unauthenticated) this.handleUnauthenticate();
      // eslint-disable-next-line no-console
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });
  }

  handleUnauthenticate() {
    this.loginToken = "";
    // localStorage.removeItem("@tn");
  }

  getClient() {
    return this.client;
  }

  setLoginCredential(loginToken: string) {
    this.loginToken = loginToken;
  }

  async query<returnType = any>(info: QueryOptions) {
    const response = await this.client.query<returnType>(info);
    return response;
  }

  async mutation<returnType = any>(
    info: MutationOptions
  ): Promise<FetchResult<returnType> | null> {
    const response = await this.client.mutate<returnType>(info);
    return response;
  }

  subscription<returnType = any>(info: SubscriptionOptions) {
    const response = this.client.subscribe<returnType>(info);
    return response;
  }
}

export function initGraphQLService() {
  gqlService = new GraphQLService();
  return gqlService;
}
export { gqlService };

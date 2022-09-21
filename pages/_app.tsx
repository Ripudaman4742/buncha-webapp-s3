import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import React from "react";
import { store } from "../src/config/redux";
import { useRouter } from "next/router";

import { GraphQLService, initGraphQLService } from "../src/config/graphql";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  let service = React.useRef<GraphQLService | null>(null);

  if (!service.current) service.current = initGraphQLService();

  const router = useRouter();
  const token = router.query.token as string;

  function SafeHydrate({ children }: any) {
    return (
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : children}
      </div>
    );
  }

  // React.useEffect(() => {
  //   localStorage.removeItem("@tn");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  React.useEffect(() => {
    if (token && token.length > 0) localStorage.setItem("@tn", token);
  }, [ router.query.params, token ]);

  return (
    <React.StrictMode>
      <ApolloProvider client={service.current.getClient()}>
        <Provider store={store}>
          <CssBaseline />
          <SafeHydrate>
            <>
              <Component {...pageProps} />
            </>
          </SafeHydrate>
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default MyApp;

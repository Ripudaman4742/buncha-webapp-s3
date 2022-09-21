import {GET_CURRENT_USER} from "../../../config/graphql/doucment_node/queries"
import {LOG_MANAGER} from "../../../config/graphql/doucment_node/mutations"
import { LogsApiInterface } from "../type"
import {globalAction} from ".."
import {gqlService} from "../../../config/graphql"
import {useAppDispatch} from "../../../config/redux/hooks"

export function useGetCurrentUser() {
  const globalDispatcher = useAppDispatch()
  const getCurrentUser = async () => {
    try {
      const response = await gqlService?.query({
        query: GET_CURRENT_USER,
        fetchPolicy: "network-only"
      })
      const data = response?.data.currentUser
      globalDispatcher(globalAction.setCurrentUser(data))
      return data
    } catch (error: any) {
      return false
      // throw new Error(error.message)
    }
  }

  return {getCurrentUser}
}

export function useLogger() {
  const logData = async (params: LogsApiInterface) => {
    await gqlService?.mutation({
      mutation: LOG_MANAGER,
      fetchPolicy: "network-only",
      variables: params
    })
  }

  return { logData }
}

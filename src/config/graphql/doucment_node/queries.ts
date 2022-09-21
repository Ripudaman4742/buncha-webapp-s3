import { User } from "./fragmant";
import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query CurrentUserQuery {
    currentUser {
      ...User
    }
  }
  ${User}
`;

export const SEARCH_USER = gql`
  query searchUsers($searchQuery: String!, $skip: Int, $size: Int) {
    searchUsers(searchQuery: $searchQuery, skip: $skip, size: $size){
      ...User
    }
  }
  ${User}
`;

export const GET_USER_DETAILS = gql`
  query getUserDetails($userId: Int){
    getUserDetails(userId: $userId){
      user{
        ...User
        profileImage
        isDriver
        mostRecentAddress{
          address
          neighborhood{
            name
          }
        }
      }
      orderCount
      totalAmount
      userReferredCount
      totalSavedOnOrder
      totalSavedByReferrel
    }
  }
  ${User}
`;

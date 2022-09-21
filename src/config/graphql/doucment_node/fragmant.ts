import { gql } from "@apollo/client";

export const User = gql`
  fragment User on User {
    id
    firstName
    lastName
    avatar
    email
    phoneNumber
    userTypes
    createdAt
}
`;

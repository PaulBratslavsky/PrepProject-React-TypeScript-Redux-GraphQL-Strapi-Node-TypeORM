import { gql } from "@apollo/client";

export const GET_ORGANIZATIONS_BY_USER_ID = gql`
  query GetOrganizationsByUser($input: ID!) {
    user(id: $input) {
      firstName
      lastName
      avatar {
        url
      }
      organizations {
        name
        description
        id
        assets {
          id
          name
          description
        }
      }
    }
  }
`;
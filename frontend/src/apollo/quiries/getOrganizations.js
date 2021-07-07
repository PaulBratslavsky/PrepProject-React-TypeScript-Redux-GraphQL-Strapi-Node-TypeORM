import { gql } from "@apollo/client";

export const GET_ORGANIZATIONS = gql`
  query GetOrganizations {
    organizations {
      id
      name
      description
      assets {
        id
        name
        description
        milestones {
          name
          id
        }
      }
      members {
        firstName
        lastName
        id
      }
    }
  }
`;

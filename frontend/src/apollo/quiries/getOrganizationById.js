import { gql } from "@apollo/client";

export const GET_ORGANIZATION_BY_ID = gql`
  query GetOrganizationById($input: ID!) {
    organization(id: $input) {
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

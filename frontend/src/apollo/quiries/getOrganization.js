import { gql } from "@apollo/client";

export const GET_ORGANIZATION = gql`
  query GetOrganization($input: ID!) {
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
    }
  }
`;

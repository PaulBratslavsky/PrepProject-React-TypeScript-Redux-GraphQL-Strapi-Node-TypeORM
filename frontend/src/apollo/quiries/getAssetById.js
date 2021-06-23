import { gql } from "@apollo/client";

export const GET_ASSET_BY_ID = gql`
  query GetAssetById($input: ID!) {
    asset(id: $input) {
      id
      name
      description
      milestones {
        id
        name
        steps {
          id
          name
        }
      }
    }
  }
`;
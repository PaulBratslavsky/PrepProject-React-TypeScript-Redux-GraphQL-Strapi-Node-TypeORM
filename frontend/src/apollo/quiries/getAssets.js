import { gql } from "@apollo/client";

export const GET_ASSETS = gql`
  query GetAssets {
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
`;

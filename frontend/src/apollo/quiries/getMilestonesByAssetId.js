import { gql } from "@apollo/client";

export const GET_MILESTONES_BY_ASSET_ID = gql`
  query GetMilestonesByAssetId($input: ID!) {
    milestones(where: { asset: $input }) {
      name
      id
    }
  }
`;
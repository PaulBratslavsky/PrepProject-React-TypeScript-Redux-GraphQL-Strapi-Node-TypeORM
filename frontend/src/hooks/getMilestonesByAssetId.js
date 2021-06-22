import { gql, useQuery } from "@apollo/client";

const MILESTONES_BY_ASSET_ID = gql`
  query GetMilestonesByAssetId($input: ID!) {
    milestones(where: { asset: $input }) {
      name
      id
    }
  }
`;

export default function GetMilestonesByAssetId(id) {
  console.log(id, "<====== assetID ")
  const query = useQuery(MILESTONES_BY_ASSET_ID, {
    variables: { input: id },
  });

  return query;
}

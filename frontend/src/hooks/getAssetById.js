import { gql, useQuery } from "@apollo/client";

const ASSET_BY_ID = gql`
  query GetAssetById($input: ID!) {
    asset(id: $input) {
      id
      name
      description
      milestones {
        id
        name
      }
    }
  }
`;

export default function GetAssetById(id) {
  const query = useQuery(ASSET_BY_ID, {
    variables: { input: id },
  });

  return query;
}

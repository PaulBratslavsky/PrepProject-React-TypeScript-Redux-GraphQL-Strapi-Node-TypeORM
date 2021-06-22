import { gql, useQuery } from "@apollo/client";

const STEPS_BY_MILESTONE_ID = gql`
  query GetStepsByMilestoneId($input: ID!) {
    steps(where: { milestone: $input }) {
      id
      name
      dueDate
      type
      completed
      created_at
    }
  }
`;

export default function GetMilestonesByAssetId(id) {
  console.log(id, "hhhhhh")
  const query = useQuery(STEPS_BY_MILESTONE_ID, {
    variables: { input: id },
  });

  return query;
}

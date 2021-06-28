import { gql } from "@apollo/client";

export const GET_STEPS_BY_MILESTONE_ID = gql`
  query GetStepsByMilestoneId($input: ID!) {
    steps(where: { milestone: $input }) {
      id
      name
      type
      completed
    }
  }
`;

export const GET_MILESTONE_BY_MILESTONE_ID = gql`
  query GetMilestoneByMilestoneId($input: ID!) {
    milestone(id: $input) {
      id
      name
      steps {
        id
        name
        type
        completed
      }
    }
  }
`;

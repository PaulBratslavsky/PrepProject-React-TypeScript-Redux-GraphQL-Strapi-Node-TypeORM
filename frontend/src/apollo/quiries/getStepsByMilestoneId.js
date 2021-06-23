import { gql } from '@apollo/client'

export const GET_STEPS_BY_MILESTONE_ID = gql`
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
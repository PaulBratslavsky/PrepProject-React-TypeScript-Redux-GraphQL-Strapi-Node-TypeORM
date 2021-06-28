import { gql } from "@apollo/client";

export const POST_CREATE_STEP = gql`
  mutation CreateStep(
    $type: ENUM_STEP_TYPE
    $name: String!
    $description: String!
    $completed: Boolean
    $milestone: ID
    $created_by: ID
  ) {
    createStep(
      input: {
        data: {
          type: $type
          name: $name
          description: $description
          completed: $completed
          milestone: $milestone
          created_by: $created_by
        }
      }
    ) {
      step {
        id
      }
    }
  }
`;

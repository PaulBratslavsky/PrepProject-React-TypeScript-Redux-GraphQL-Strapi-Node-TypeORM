import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";

const ORGANIZATIONS_BY_USER = gql`
  query GetOrganizationsByUser($input: ID!) {
    user(id: $input) {
      firstName
      lastName
      avatar {
        url
      }
      organizations {
        name
        description
        id
        assets {
          id
          name
          description
        }
      }
    }
  }
`;

export default function GetOrganizationByUser() {
  const userId = useSelector((state) => state.user.id);
  const query = useQuery(ORGANIZATIONS_BY_USER, {
    variables: { input: userId },
  });

  return query;
}

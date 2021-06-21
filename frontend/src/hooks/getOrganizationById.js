import { gql, useQuery } from "@apollo/client";

 const ORGANIZATION_BY_ID = gql`
   query GetOrganizationById($input:ID!) {
	organization(id: $input) {
  	id
    name
    description
    assets {
      id
      name
      description
    }
    users {
      firstName
      lastName
      id
    }
  }
}
`;

export default function GetOrganizationById(id) {
  const query = useQuery(ORGANIZATION_BY_ID, {
    variables: { input: id },
  });

  return query;
}

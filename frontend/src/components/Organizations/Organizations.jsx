import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";

const ORGANIZATION_BY_USER = gql`
  query GetOrganizationByUser($input: ID!) {
    user(id: $input) {
      organizations {
        name
        description
        id
      }
    }
  }
`;

export default function Organizations() {
  const userId = useSelector((state) => state.user.id);

  const { loading, error, data } = useQuery(ORGANIZATION_BY_USER, {
    variables: { input: userId },
  });

  if (loading) return <p>...loading</p>;
  if (error) return <p>error</p>;
  console.log(data, "from organizations");

  const { firstName, lastName, organizations } = data.user;
  console.log(organizations, organizations.length);
  return (
    <div>
      <h2>Organization{organizations.length > 0 ? "s" : ""}</h2>
      {organizations.map((item) => (
        <div key={item.id}>name: {item.name}</div>
      ))}
    </div>
  );
}

import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { Row, Image } from "react-bootstrap";

const CURRENT_USER = gql`
  query GetCurrentUser($input: ID!) {
    user(id: $input) {
      firstName
      lastName
      avatar {
        url
      }
    }
  }
`;

export default function UserAvatar() {
  const userId = useSelector((state) => state.user.id);

  const { loading, error, data } = useQuery(CURRENT_USER, {
    variables: { input: userId },
  });

  if (loading) return <p>...loading</p>;
  if (error) return <p>error</p>;
  console.log(data, "from organizations");

  const { firstName, lastName, avatar } = data.user;
  return (
    <Row>
      <Image src={avatar.url} fluid />
      <h2>{`${firstName} ${lastName}`}</h2>
    </Row>
  );
}

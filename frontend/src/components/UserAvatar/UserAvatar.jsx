import { Row, Image, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../apollo/quiries/getUser";
import styles from "./user-avatar.module.scss";

export default function UserAvatar({showName = false}) {
  const { loading, error, data } =  useQuery(GET_USER, { variables: {input: 6}});

  if (loading) return <Spinner animation="grow" variant="primary" />
  if (error) return <p>error</p>

  return (
    <Row className={styles.userAvatar}>
      <Image src={data.user.avatar.url} />
      { showName && <h2>{data.user.firstName}</h2> } 
    </Row>
  );
}

import { Row, Image } from "react-bootstrap";
import styles from "./user-avatar.module.scss";

export default function UserAvatar({ user = null, showName = false}) {
  if (!user) return null;
  return (
    <Row className={styles.userAvatar}>
      <Image src={user.avatar.url} />
      { showName && <h2>{user.firstName}</h2> } 
    </Row>
  );
}

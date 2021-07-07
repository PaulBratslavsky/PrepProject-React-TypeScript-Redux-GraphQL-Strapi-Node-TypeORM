import UserAvatar from "../UserAvatar/UserAvatar";
import Organizations from "../Organizations/Organizations";

export default function SideMenu() {

  return (
    <div>
      <UserAvatar showName />
      <Organizations />
    </div>
  );
}

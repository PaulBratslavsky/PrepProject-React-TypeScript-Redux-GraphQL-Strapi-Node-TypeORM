import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ORGANIZATIONS_BY_USER_ID } from '../apollo/quiries'

export default function GetOrganizationByUser() {
  const userId = useSelector((state) => state.user.id);
  const query = useQuery(GET_ORGANIZATIONS_BY_USER_ID , {
    variables: { input: userId },
  });

  return query;
}

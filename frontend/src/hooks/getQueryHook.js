import { useQuery } from "@apollo/client";

export default function GetQueryHook(id, gqlQuery) {
  const query = useQuery(gqlQuery, {
    variables: { input: id },
  });

  return query;
}

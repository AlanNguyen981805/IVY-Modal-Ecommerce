import { dehydrate } from "@tanstack/query-core";
import ListUsers from "./list-users";
import getQueryClient from "@/utils/react-query/getQueryClient";
import Hydrate from "@/utils/react-query/hydrate.client";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as any[];
  return users;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
}

import { getConfigPage } from "@/services/setting/setting.api";
import ListUsers from "./list-users";

async function getUsers() {
  const res = await getConfigPage()
  return res as any;
}

export default async function InitialData() {
  const users: any = await getConfigPage();
  return <ListUsers users={users.data} />;
}

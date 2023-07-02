import { getConfigPage } from "@/services/setting/setting.api";
import ListUsers from "./list-users";

async function getUsers() {
  const res = await getConfigPage()
  return res as any;
}

export default async function InitialData() {
  const users: any = await getConfigPage();
    console.log('users :>> ', users.data);
  return <ListUsers users={users.data} />;
}

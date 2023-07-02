"use client";

import { getConfigPage } from "@/services/setting/setting.api";
import { useQuery } from "@tanstack/react-query";
import React from "react";


export default function ListUsers({ users }: { users: any[] }) {
  const [count, setCount] = React.useState(0);
  console.log('users2 :>> ', users);

  const { data, isLoading, isFetching, error } = useQuery<any>({
    queryKey: ["initial-users"],
    queryFn: () => getConfigPage(),
    initialData: users,
  });
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {/* {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))} */}
        </div>
      ) : null}
    </main>
  );
}

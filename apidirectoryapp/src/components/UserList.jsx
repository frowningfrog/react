import React from "react";
import { UserCard } from "./UserCard";

export function DisplayUsers({ users }) {
  return (
    <ul>
      {users && users.map((user) => <UserCard key={user.id} user={user} />)}
    </ul>
  );
}

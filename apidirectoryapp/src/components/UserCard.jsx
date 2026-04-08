import React from "react";

export function UserCard({ user }) {
  return (
    <li key={user.name}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </li>
  );
}

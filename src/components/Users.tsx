import { useState } from "react";

'use client'
export default function Users({ users }: { users: any }) {
  return (
    <>
      <h2>List of Users</h2>
      <p>{users.name}</p>
      <p>{users.email}</p>
    </>
  );
}

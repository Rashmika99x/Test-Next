import { Suspense } from "react";
import UserPosts from "./UserPosts";

export default function Users({ users,promise }: { users: any , promise:any}) {
  return (
    <>
      <p>{users.name}</p>
      <p>{users.email}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPosts prmoise={promise} />
        </Suspense>
    </>
  );
}

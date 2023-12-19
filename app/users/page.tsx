import Link from "next/link";
import getUsers from "../../lib/getUsers";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Users',
    description: 'This page shows list of users',
}

export default async function Users() {
    const usersPromise:Promise<any[]> = getUsers();
    const users = await usersPromise;      
    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </div>
    );
}


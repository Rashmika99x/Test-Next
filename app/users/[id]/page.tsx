import Users from "@/components/Users";
import getUser from "../../../lib/getUser";
import { Metadata } from "next";

export async function generateMetadata({params}: {params: {id: string}}): Promise<Metadata> {
    const user = await getUser(params.id);
    return {
        title: user.name,
        description: user.email
    }
}


async function getUsers() {
    console.log("Fetching data from server");
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`,{next:{revalidate:60}});
    const data = await res.json();
    return data;
}

export async function generateStaticParams() {
    
    const users = await getUsers();
    return users.map((user:any) => {
            id:user.id.toString()
        })
    
}

export default async function User({ params }: { params: { id: string } }) {
    const userData: Promise<any> = getUser(params.id);
    const user = await userData;
    return <Users users={user} />;

}
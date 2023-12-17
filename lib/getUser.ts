export default async function getUser(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{next:{revalidate:60}});
    return res.json();
}
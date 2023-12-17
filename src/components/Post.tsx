import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  //add a method to fetch posts from server
  async function fetchPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const newPost = await res.json();
  }

  return (
    <div>
      <p>Post {router.query.id}</p>
    </div>
  );
}

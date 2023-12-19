import React from "react";

export default async function UserPosts({ prmoise }: { prmoise: any }) {
  const posts = await prmoise;
  const content = posts.map((post: any) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br></br>
      </article>
    );
  });
  return content;
}

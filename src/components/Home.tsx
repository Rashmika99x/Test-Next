import Link from "next/link";

//this component should return styled home page
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        About
      </Link>
      <Link href="/users">
        Users
      </Link>
    </div>
  );
}

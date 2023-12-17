import {Suspense} from 'react'

export default function Page({ params }: { params: { posts: string } }) {
    return <div>My Post: {params.posts}</div>
  }
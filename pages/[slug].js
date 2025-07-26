import { useRouter } from 'next/router'

export default function PostPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>This is a dynamic route for blog posts.</p>
    </div>
  )
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <div>BlogPost {id}</div>
}

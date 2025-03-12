export default function BlogPost({ params }: { params: { id: string } }) {
  return <div>BlogPost {params.id}</div>
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // TODO: Fetch necessary data for the topic using params.slug
  return <h1>{params.slug}</h1>;
}

export default function BlogArticle({ params }: { params: { title: string } }) {
  return <div>BlogArticle page, title: {params.title}</div>;
}

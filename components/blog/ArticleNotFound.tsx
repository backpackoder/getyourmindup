type ArticleNotFoundProps = {
  title: string;
};

export function ArticleNotFound({ title }: ArticleNotFoundProps) {
  return <p>Article {`"${title}"`} not found</p>;
}

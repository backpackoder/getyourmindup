// Component
import { Article } from "@/components/blog/Article";
import { ArticleNotFound } from "@/components/blog/ArticleNotFound";

// Utils
import { articles } from "@/utils/blogArticles/articles";
import { getDecodedParam } from "@/utils/getDecodedParam";

export default function BlogArticle({ params }: { params: { title: string } }) {
  const decodedTitle = getDecodedParam(params.title);
  const article = articles.find((article) => article.title === decodedTitle);

  if (!article) return <ArticleNotFound title={decodedTitle} />;

  return article && <Article article={article} />;
}

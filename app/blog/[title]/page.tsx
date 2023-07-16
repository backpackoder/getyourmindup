import Image from "next/image";
import { Box, Typography } from "@mui/material";

// Utils
import { ARTICLES } from "@/utils/blogArticles";

export default function BlogArticle({ params }: { params: { title: string } }) {
  const article = ARTICLES.find((article) => article.title === decodeURIComponent(params.title));

  if (!article) return <ArticleNotFound title={params.title} />;

  return (
    article && (
      <Box>
        <Typography component="h2" variant="h3">
          {article.title}
        </Typography>

        <Image
          src={article.image}
          alt={article.title}
          width={300}
          height={0}
          className="rounded-[8px]"
        />

        <Typography component="p" variant="body1">
          {article.introduction}
          <br />
          <br />
          {article.body}
          <br />
          <br />
          {article.conclusion}
        </Typography>
      </Box>
    )
  );
}

function ArticleNotFound({ title }: { title: string }) {
  return <p>Article {`"${decodeURIComponent(title)}"`} not found</p>;
}

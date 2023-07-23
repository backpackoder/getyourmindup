import Image from "next/image";

import { Box, Typography } from "@mui/material";

// Types
import { Article } from "@/utils/blogArticles/types";

type ArticleProps = {
  article: Article;
};

export function Article({ article }: ArticleProps) {
  return (
    <Box>
      <Typography
        component="h2"
        variant="h3"
        sx={{
          mb: 4,
        }}
      >
        {article.title}
      </Typography>

      <Image
        src={article.image}
        alt={article.title}
        width={300}
        height={0}
        className="float-left rounded-[8px] mr-4"
      />

      <Typography
        component="p"
        variant="body1"
        sx={{
          fontStyle: "italic",
          mb: 4,
        }}
      >
        {article.introduction}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      />
      {article.body.map((part, index) => (
        <Box key={index} component="span">
          <Typography component="h3" variant="h6">
            {part.title}
          </Typography>

          {part.paragraphs.map((paragraph, index) => {
            return (
              <Typography
                key={index}
                component="p"
                sx={{
                  mb: 2,
                }}
              >
                {paragraph}
              </Typography>
            );
          })}
        </Box>
      ))}

      <Typography component="p" variant="body1">
        {article.conclusion}
      </Typography>
    </Box>
  );
}

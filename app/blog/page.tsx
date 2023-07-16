import Image from "next/image";
import { Box, Typography } from "@mui/material";

// Utils
import { ARTICLES } from "@/utils/blogArticles";

// Commons
import { ROUTES } from "@/commons/commons";

export default function Blog() {
  return (
    <Box
      sx={{
        maxWidth: 300,
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      {ARTICLES.map((article) => (
        <Box
          key={article.title}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            bgcolor: "lightgreen",
            padding: 2,
            borderRadius: "8px",
          }}
        >
          <Typography
            component="a"
            variant="h5"
            href={ROUTES.BLOG.ARTICLE(article.title)}
            sx={{
              textAlign: "center",
            }}
          >
            {article.title}
          </Typography>

          <Image
            src={article.image}
            alt={article.title}
            width={300}
            height={0}
            className="rounded-[8px]"
          />
        </Box>
      ))}
    </Box>
  );
}

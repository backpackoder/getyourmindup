import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

// import Carousel from "react-material-ui-carousel";

// Utils
import { articles } from "@/utils/blogArticles/articles";

// Commons
import { ROUTES } from "@/commons/commons";

export function BlogList() {
  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: "100%",
        padding: 4,
        border: "1px solid black",
        borderRadius: 4,
        boxShadow: "lg",
      }}
    >
      <Typography variant="h3" component="h2">
        Read some articles
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {articles.map((article) => (
          <Box
            key={article.title}
            sx={{
              maxWidth: "250px",
              bgcolor: "lightblue",
              padding: 2,
              borderRadius: "8px",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.05)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <Link
              href={ROUTES.BLOG.ARTICLE(article.title)}
              key={article.title}
              className="flex flex-col items-center justify-between gap-2 w-full h-full"
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                }}
              >
                {article.title}
              </Typography>

              <Image
                src={article.image}
                alt={article.title}
                width={200}
                height={0}
                className="rounded-[8px]"
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

import Image from "next/image";
import { Box, Typography } from "@mui/material";

// import Carousel from "react-material-ui-carousel";

// Utils
import { ARTICLES } from "@/utils/blogArticles";

// Commons
import { ROUTES } from "@/commons/commons";

export default function Blog() {
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

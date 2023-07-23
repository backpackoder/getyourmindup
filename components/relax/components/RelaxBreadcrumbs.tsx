"use client";

import { useRouter } from "next/navigation";
import { Breadcrumbs, Link as LinkMUI, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { BreadcrumbsItems } from "./types";

export type BreadcrumbsProps = {
  items: BreadcrumbsItems;
};

type LinkMUIItemProps = {
  data: {
    name: string;
    href: string;
  };
  handleClick: (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement, MouseEvent>,
    route: string
  ) => void;
};

type LinkMUICurrentItemProps = {
  name: string;
};

export function RelaxBreadcrumbs({ items }: BreadcrumbsProps) {
  const router = useRouter();

  function handleClick(
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement, MouseEvent>,
    route: string
  ) {
    e.preventDefault();
    router.push(route);
  }

  const breadcrumbs = [
    <LinkMUIBeforeItem
      key="Home"
      data={{ name: "Home", href: ROUTES.HOME }}
      handleClick={handleClick}
    />,

    ...items.before.map((item) => {
      return <LinkMUIBeforeItem key={item.name} data={item} handleClick={handleClick} />;
    }),

    <LinkMUICurrentItem key={items.current.name} name={items.current.name} />,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "lightblue",
        py: 1,
        px: 2,
        borderRadius: 2,
        mx: "auto",
      }}
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}

function LinkMUIBeforeItem({ data, handleClick }: LinkMUIItemProps) {
  return (
    <LinkMUI
      underline="hover"
      key={data.name}
      color="inherit"
      href={data.href}
      onClick={(e) => handleClick(e, data.href)}
    >
      {data.name}
    </LinkMUI>
  );
}

function LinkMUICurrentItem({ name }: LinkMUICurrentItemProps) {
  return (
    <Typography key={name} color="text.primary">
      {name}
    </Typography>
  );
}

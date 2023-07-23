"use client";

import { usePathname } from "next/navigation";

// Components
import { RelaxBreadcrumbs } from "@/components/relax/components/RelaxBreadcrumbs";

// Types
import { BreadcrumbsItems } from "@/components/relax/components/types";
import { getDecodedParam } from "@/utils/getDecodedParam";

export default function RelaxLayout({ children }: { children: React.ReactNode }) {
  const asPath = usePathname();

  function getPaths() {
    return asPath
      .split("/")
      .map((path) => getDecodedParam(path))
      .filter((path) => path !== "");
  }

  const paths = getPaths();

  const breadcrumbs: BreadcrumbsItems = {
    before: [],
    current: {
      name: paths[paths.length - 1],
    },
  };

  for (let index = 0; index < paths.length - 1; index++) {
    const path = paths[index];
    const breadcrumb = { href: `/${paths.slice(0, index + 1).join("/")}`, name: path };
    breadcrumbs.before.push(breadcrumb);
  }

  return (
    <>
      <RelaxBreadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}

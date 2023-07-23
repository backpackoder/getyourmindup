export type AccordionDatas = {
  redirect: string;
  name: string;
  description: string;
  images: AccordionDatasImage[];
};

export type AccordionDatasImage = {
  src: string;
  alt: string;
  width: number;
  height?: number;
};

export type BreadcrumbsItems = {
  before: {
    href: string;
    name: string;
  }[];
  current: {
    name: string;
  };
};

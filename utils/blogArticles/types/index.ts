import { StaticImageData } from "next/image";

export type Article = {
  title: string;
  image: StaticImageData;
  introduction: string;
  body: {
    title: string;
    paragraphs: string[];
  }[];
  conclusion: string;
};

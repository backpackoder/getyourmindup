// Components
import { GoodActionOfTheDay } from "@/components/goodActionOfTheDay/GoodActionOfTheDay";
import { Thank } from "@/components/thank/Thank";
import { Psychologist } from "@/components/psychologist/Psychologist";
import { Blog } from "@/components/blog/Blog";

export default async function Home() {
  return (
    <>
      <GoodActionOfTheDay />
      <Thank />
      <Psychologist />
      <Blog />
    </>
  );
}

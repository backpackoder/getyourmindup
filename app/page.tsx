// Components
import { GoodActionOfTheDay } from "@/components/goodActionOfTheDay/GoodActionOfTheDay";
import { Thank } from "@/components/thank/Thank";
import { Psychologist } from "@/components/psychologists/Psychologists";
import { BlogList } from "@/components/blog/BlogList";

export default async function Home() {
  return (
    <>
      <GoodActionOfTheDay />
      <Thank />
      <Psychologist />
      <BlogList />
    </>
  );
}

// Componentsn
import { GoodActionOfTheDay } from "@/components/goodActionOfTheDay/GoodActionOfTheDay";
import { Thank } from "@/components/thank/Thank";
import Blog from "@/components/blog/Blog";

export default function Home() {
  return (
    <>
      <GoodActionOfTheDay />
      <Thank />
      <Blog />
    </>
  );
}

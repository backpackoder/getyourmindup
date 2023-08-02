import Link from "next/link";

// Components
import { Logo } from "../ui/Logo";

// Commons
import { ROUTES } from "@/commons/commons";
const { GOOD_ACTION_OF_THE_DAY, HOME, RELAX_YOUR_MIND, THANK_FOR_SOMETHING, ABOUT, BLOG, PSYCHOLOGISTS } = ROUTES;

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-8 p-4 border-t-4 footer-bg">
      <Logo m="0" width={25} height={25} />

      <Link href={HOME}>Home</Link>

      <Link href={THANK_FOR_SOMETHING}>Thank</Link>

      <Link href={GOOD_ACTION_OF_THE_DAY}>Good action of the day</Link>


      <Link href={RELAX_YOUR_MIND}>Relax</Link>

      <Link href={ABOUT}>About us</Link>

      <Link href={BLOG.HOME}>Blog</Link>

      <Link href={PSYCHOLOGISTS.HOME}>Psychologists</Link>
    </footer>
  );
}

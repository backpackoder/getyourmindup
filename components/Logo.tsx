"use client";

import Image from "next/image";
import Link from "next/link";

import LOGO from "@/assets/imgs/logo/logo.png";

type LogoProps = {
  m?: string;
  width?: number;
  height?: number;
};

export function Logo({ m = "2", width = 50, height = 50 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center justify-center m-${m}`}>
      <Image
        src={LOGO}
        alt="Logo"
        width={width}
        height={height}
        className="w-auto h-auto cursor-pointer"
      />
    </Link>
  );
}

"use client";

import { Link } from "@tanstack/react-router";
import { Footer } from "flowbite-react";

export function FooterDown() {
  return (
    <Footer container className="rounded-none bg-darker font-medium">
      <Footer.Copyright
        className="text-white"
        href="/"
        by="yarsiShop™"
        year={2024}
      />
      <Footer.LinkGroup className="flex gap-3 pt-2 text-white lg:pt-0">
        <Link
          className="transistion ease uppercase duration-200 hover:underline"
          to={"/"}
        >
          Home
        </Link>

        <Link
          className="transistion ease uppercase duration-200 hover:underline"
          to={"/collection"}
        >
          Collection
        </Link>

        <Link
          className="transistion ease uppercase duration-200 hover:underline"
          to={"/about"}
        >
          About
        </Link>

        <Link
          className="transistion ease uppercase duration-200 hover:underline"
          to={"/contact"}
        >
          Contact
        </Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

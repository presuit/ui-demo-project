"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const TAB_DATA = ["Home", "Career", "Jobs", "Long Long Bull Shit"];

export default function TestObj() {
  const tabQuery = useSearchParams().get("q") ?? TAB_DATA[0];

  return (
    <ul className="relative flex items-center border-b border-zinc-800">
      {TAB_DATA.map((tab) => (
        <TabItem
          key={tab}
          href={`/test/animate-tab?q=${tab}`}
          title={tab}
          active={tab === tabQuery}
        />
      ))}
    </ul>
  );
}

function TabItem({
  href,
  title,
  active,
}: {
  title: string;
  href: string;
  active: boolean;
}) {
  return (
    <li className="relative">
      <Link
        data-active={active}
        className="block p-3 px-5 text-zinc-500 transition-colors hover:text-zinc-100 data-[active=true]:text-zinc-100"
        href={href}
      >
        {title}
      </Link>
      {active && (
        <motion.span
          layoutId={"tabActive"}
          className="absolute bottom-0 left-0 block h-[1px] w-full bg-zinc-100"
        ></motion.span>
      )}
    </li>
  );
}

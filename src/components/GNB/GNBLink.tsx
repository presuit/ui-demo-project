import Link from "next/link";

export default function GNBLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-lg hover:bg-blue-500/80 transition-colors p-3 px-5 bg-zinc-800"
      >
        {title}
      </Link>
    </li>
  );
}

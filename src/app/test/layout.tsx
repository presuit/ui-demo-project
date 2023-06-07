import { PropsWithChildren } from "react";

export default function TestLayout({ children }: PropsWithChildren) {
  return <div className="w-full min-h-screen bg-zinc-900">{children}</div>;
}

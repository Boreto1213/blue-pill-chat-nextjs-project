import { Icons } from "@/components/Icons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  return (
    <div className="w-full h-screen flex">
      <div className="h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"></div>
      <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
        <Icons.Logo className="h-4 w-auto text-indigo-600" />
      </Link>
      {children}
    </div>
  );
};

export default Layout;

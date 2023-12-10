import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default async function Home() {
  return (
    <div className="text-black">
      home pages
      <UserButton afterSignOutUrl="/" />
      <Link href="/about" className="text-blue-500">
        about
      </Link>
    </div>
  );
}

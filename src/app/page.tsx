import Link from "next/link";

export default function Home() {

  return (
    <div className="w-full min-h-screen">
      <Link href="/details/heiko-ruprecht">
        Heiko Ruprecht
      </Link>
    </div>
  );

}

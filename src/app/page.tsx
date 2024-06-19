import Link from "next/link";

export default function HomePage() {

  return (
    <div className="flex justify-center items-center">
      <Link href="/details/heiko-ruprecht">
        Heiko Ruprecht
      </Link>
    </div>
  );

}

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <h1 className="text-xl font-bold">EventApp</h1>

        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-300">
            Start
          </Link>

          <Link href="/om-oss" className="hover:text-blue-300">
            Om oss
          </Link>
        </div>
      </nav>
    </header>
  );
}
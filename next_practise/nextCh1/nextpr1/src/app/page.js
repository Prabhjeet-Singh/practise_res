import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">Home</Link>
     <Link href="/about">about</Link>
     <Link href="/contact">contact</Link>
     <Link href='/listForPost'>Post</Link>
    </main>
  )
}

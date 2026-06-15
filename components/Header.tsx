import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-[#eadfD2] bg-[#f8f3ed]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link href="/" className="text-xl font-bold tracking-wide text-[#2f261f]">
                    PUKUPIG
                </Link>

                <nav className="flex gap-6 text-sm font-medium text-[#5f5147]">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
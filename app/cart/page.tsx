import Link from "next/link";

export default function CartPage() {
    return (
        <main className="min-h-screen bg-[#f8f3ed] px-6 py-16 text-[#2f261f]">
            <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6f5a]">
                    PUKUPIG Cart
                </p>

                <h1 className="mb-6 text-4xl font-bold">Shopping Cart Coming Soon</h1>

                <p className="mb-6 text-lg leading-8 text-[#5f5147]">
                    Our online checkout is not available yet. PUKUPIG currently uses
                    Amazon for secure checkout, payment, shipping, and returns.
                </p>

                <p className="mb-8 text-lg leading-8 text-[#5f5147]">
                    Please visit the Amazon product page to complete your purchase.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/products"
                        className="rounded-full bg-[#2f261f] px-6 py-3 text-sm font-semibold text-white"
                    >
                        Back to Products
                    </Link>

                    <Link
                        href="/"
                        className="rounded-full border border-[#2f261f] px-6 py-3 text-sm font-semibold text-[#2f261f]"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
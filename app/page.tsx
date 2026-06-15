import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
      <main className="min-h-screen bg-[#f8f3ed] text-[#2f261f]">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a4583f]">
            PUKUPIG
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Seasonal Home Decor for Cozy North American Homes
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5147]">
            PUKUPIG creates festive home decor for Christmas, patriotic holidays,
            mantel styling, front doors, and family seasonal displays.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </main>
  );
}
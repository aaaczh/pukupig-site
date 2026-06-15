import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
    title: "Products | PUKUPIG",
    description: "Explore PUKUPIG seasonal home decor products.",
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#f8f3ed] px-6 py-16 text-[#2f261f]">
            <section className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a4583f]">
                    Products
                </p>

                <h1 className="mt-4 text-4xl font-bold">PUKUPIG Product Collections</h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f5147]">
                    Seasonal home decor designed for Christmas, patriotic holidays, front
                    doors, mantels, and cozy family spaces.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {products.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}
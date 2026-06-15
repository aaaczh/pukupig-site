import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import Image from "next/image";

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({
                                                    params,
                                                }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f8f3ed] px-6 py-16 text-[#2f261f]">
            <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
                <div className="relative aspect-square w-full max-w-[560px] overflow-hidden rounded-2xl bg-[#eadfd2]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 520px, 100vw"
                        priority
                    />
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a4583f]">
                        {product.category}
                    </p>

                    <h1 className="mt-4 text-4xl font-bold leading-tight">
                        {product.name}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-[#5f5147]">
                        {product.description}
                    </p>

                    <div className="mt-8 space-y-2 text-sm text-[#5f5147]">
                        <p>Size: {product.size}</p>
                        <p>Color: {product.color}</p>
                        <p>Material: {product.material}</p>
                    </div>

                    <ul className="mt-8 space-y-3 text-sm leading-6 text-[#5f5147]">
                        {product.highlights.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>

                    <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-10 inline-block rounded-full bg-[#2f261f] px-6 py-3 text-sm font-semibold text-white"
                    >
                        Buy on Amazon
                    </a>
                </div>
            </section>
        </main>
    );
}
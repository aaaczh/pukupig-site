import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative aspect-[1/1] bg-[#eadfd2]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                />
            </div>

            <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a4583f]">
                    {product.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#2f261f]">{product.name}</h3>

                <p className="mt-3 text-sm leading-6 text-[#6b5c50]">
                    {product.description}
                </p>

                <Link
                    href={`/products/${product.slug}`}
                    className="mt-6 inline-block rounded-full bg-[#2f261f] px-5 py-3 text-sm font-semibold text-white"
                >
                    View Details
                </Link>
            </div>
        </article>
    );
}
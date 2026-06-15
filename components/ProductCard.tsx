type Product = {
    slug: string;
    name: string;
    category: string;
    size: string;
    color: string;
    material: string;
    description: string;
    amazonUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a4583f]">
                {product.category}
            </p>

            <h3 className="mt-3 text-xl font-bold text-[#2f261f]">{product.name}</h3>

            <p className="mt-3 text-sm leading-6 text-[#6b5c50]">
                {product.description}
            </p>

            <div className="mt-5 space-y-1 text-sm text-[#5f5147]">
                <p>Size: {product.size}</p>
                <p>Color: {product.color}</p>
                <p>Material: {product.material}</p>
            </div>

            <a
                href={product.amazonUrl}
                className="mt-6 inline-block rounded-full bg-[#2f261f] px-5 py-3 text-sm font-semibold text-white"
                target="_blank"
                rel="noreferrer"
            >
                Buy on Amazon
            </a>
        </article>
    );
}
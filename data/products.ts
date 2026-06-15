export type Product = {
    slug: string;
    name: string;
    category: string;
    size: string;
    color: string;
    material: string;
    description: string;
    image: string;
    amazonUrl: string;
    highlights: string[];
};

export const products: Product[] = [
    {
        slug: "patriotic-bunting-banner",
        name: "PUKUPIG Patriotic Bunting Ribbon Banner",
        category: "Patriotic Decor",
        size: "2.3 x 4.3 ft",
        color: "Red, white, and blue",
        material: "Fabric, lace, satin ribbons, pom-poms",
        description:
            "A layered patriotic wall hanging designed for front doors, covered porches, entryways, and America's 250th celebration decor.",
        image: "/images/patriotic-bunting-banner.jpg",
        amazonUrl: "https://www.amazon.com/dp/your-asin",
        highlights: [
            "Layered red, white, and blue patriotic styling",
            "Designed for front doors, covered porches, and wall displays",
            "Suitable for 4th of July, Memorial Day, and America's 250th decor",
        ],
    },
    {
        slug: "christmas-tree-skirt",
        name: "PUKUPIG Christmas Tree Skirt",
        category: "Christmas Decor",
        size: "24 in / 36 in",
        color: "Red, cream white",
        material: "Knitted fabric",
        description:
            "A cozy Christmas tree skirt designed for warm holiday living rooms, family gift displays, and classic seasonal styling.",
        image: "/images/christmas-tree-skirt.jpg",
        amazonUrl: "https://www.amazon.com/PUKUPIG-Knitted-Christmas-Braided-Decorations/dp/B0FGY64JF8?ref_=ast_sto_dp",
        highlights: [
            "Cozy knitted look for Christmas tree displays",
            "Designed for gift setups and holiday living rooms",
            "Available in classic seasonal colors",
        ],
    },
];

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}
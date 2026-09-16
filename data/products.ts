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
        slug: "red-velvet-gold-holly-tree-skirt-32",
        name: "PUKUPIG 32 Inch Red Velvet Christmas Tree Skirt with Gold Holly Embroidery",
        category: "Christmas Tree Skirt",
        size: "32 in",
        color: "Christmas Red",
        material: "Velvet fabric with embroidered detailing",
        description:
            "A 32-inch red velvet Christmas tree skirt finished with elegant gold holly embroidery. Designed for smaller Christmas tree displays, it brings a classic and polished holiday look to living rooms, entryways, and family gift setups.",
        image: "/images/tree-skirt-velvet-gold-holly-32-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0GYZCBNZ3",
        highlights: [
            "32-inch size for smaller Christmas tree displays",
            "Rich Christmas red velvet surface",
            "Gold holly embroidery for a classic festive accent",
            "Ideal for traditional holiday living rooms and gift displays"
        ]
    },
    {
        slug: "red-velvet-gold-holly-tree-skirt-48",
        name: "PUKUPIG 48 Inch Red Velvet Christmas Tree Skirt with Gold Holly Embroidery",
        category: "Christmas Tree Skirt",
        size: "48 in",
        color: "Christmas Red",
        material: "Velvet fabric with embroidered detailing",
        description:
            "A 48-inch red velvet Christmas tree skirt featuring elegant gold holly embroidery. The larger size creates a generous decorative base for medium to large Christmas trees and wrapped holiday gifts.",
        image: "/images/tree-skirt-velvet-gold-holly-48-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0GYYMLBQQ",
        highlights: [
            "48-inch size for medium to large Christmas tree displays",
            "Rich Christmas red velvet surface",
            "Decorative gold holly embroidery",
            "Creates a refined base for trees and wrapped gifts"
        ]
    },
    {
        slug: "red-velvet-plush-trim-tree-skirt-32",
        name: "PUKUPIG 32 Inch Red Velvet Christmas Tree Skirt with Soft Plush Trim",
        category: "Christmas Tree Skirt",
        size: "32 in",
        color: "Christmas Red & White",
        material: "Velvet fabric with soft plush trim and embroidery",
        description:
            "A 32-inch red velvet Christmas tree skirt accented with soft white plush trim and festive embroidery. Its classic red-and-white styling works beautifully with traditional Christmas decorations and smaller tree setups.",
        image: "/images/tree-skirt-velvet-plush-trim-32-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0GYYKPNJF",
        highlights: [
            "32-inch size for compact Christmas tree displays",
            "Classic red velvet with contrasting white trim",
            "Soft plush edge for a cozy holiday look",
            "Festive embroidery adds seasonal detail"
        ]
    },
    {
        slug: "red-velvet-plush-trim-tree-skirt-48",
        name: "PUKUPIG 48 Inch Red Velvet Christmas Tree Skirt with Soft Plush Trim",
        category: "Christmas Tree Skirt",
        size: "48 in",
        color: "Christmas Red & White",
        material: "Velvet fabric with soft plush trim and embroidery",
        description:
            "A 48-inch red velvet Christmas tree skirt with soft white plush trim and festive embroidery. The generous size creates a warm, traditional base for medium to large Christmas trees and holiday gift arrangements.",
        image: "/images/tree-skirt-velvet-plush-trim-48-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0GYZ2F48L",
        highlights: [
            "48-inch size for medium to large Christmas trees",
            "Classic Christmas red velvet finish",
            "Soft white plush trim adds seasonal contrast",
            "Designed for traditional holiday and family gift displays"
        ]
    },
    {
        slug: "cream-white-cable-knit-tree-skirt-36",
        name: "PUKUPIG 36 Inch Cream White Cable-Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "36 in",
        color: "Cream White",
        material: "Soft knitted fabric",
        description:
            "A 36-inch cream white knitted Christmas tree skirt with classic cable-knit detailing. Its soft ivory-white tone and textured knit design complement farmhouse, traditional, and cozy Christmas interiors.",
        image: "/images/tree-skirt-cable-knit-36-cream-white.png",
        amazonUrl: "https://www.amazon.com/dp/B0GYYTP8HR",
        highlights: [
            "36-inch size for versatile Christmas tree setups",
            "Soft cream white knitted appearance",
            "Classic cable-knit decorative detailing",
            "Complements farmhouse and cozy holiday decor"
        ]
    },
    {
        slug: "soft-white-knit-tree-collar-adjustable-23-28",
        name: "PUKUPIG Adjustable 23–28 Inch Soft White Knit Christmas Tree Collar",
        category: "Christmas Tree Collar",
        size: "Adjustable 23–28 in bottom diameter, 10 in high",
        color: "Soft White",
        material: "Soft knitted fabric with adjustable elastic bands",
        description:
            "A soft white knitted Christmas tree collar designed to create a clean, finished look around the tree base. The adjustable 23–28 inch bottom diameter makes it easy to shape around different tree stands while the knitted pattern adds cozy seasonal texture.",
        image: "/images/tree-collar-knit-adjustable-23-28-soft-white.png",
        amazonUrl: "https://www.amazon.com/dp/B0GZ37FKFH",
        highlights: [
            "Adjustable 23–28 inch bottom diameter",
            "10-inch height designed to cover the Christmas tree stand",
            "Soft white knitted exterior with decorative seasonal pattern",
            "Three adjustable elastic bands help shape the collar around the tree base"
        ]
    },
    {
        slug: "red-dotted-knit-tree-skirt-30",
        name: "PUKUPIG 30 Inch Red Cable Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "30 in",
        color: "Christmas Red",
        material: "Soft knitted fabric",
        description:
            "A 30-inch red knitted Christmas tree skirt featuring a decorative cable knit pattern and braided detailing. The compact size is ideal for smaller trees and cozy holiday displays.",
        image: "/images/tree-skirt-dotted-knit-30-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0FGW8CZ29",
        highlights: [
            "30-inch size for smaller Christmas trees",
            "Classic Christmas red knitted design",
            "Decorative cable knit texture",
            "Braided detailing adds a handcrafted holiday look"
        ]
    },
    {
        slug: "red-dotted-knit-tree-skirt-40",
        name: "PUKUPIG 40 Inch Red Cable Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "40 in",
        color: "Christmas Red",
        material: "Soft knitted fabric",
        description:
            "A 40-inch red knitted Christmas tree skirt with decorative cable knit texture and braided detailing. Its larger coverage works well with fuller family Christmas trees and traditional red-and-gold holiday decor.",
        image: "/images/tree-skirt-dotted-knit-40-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0FGW89177",
        highlights: [
            "40-inch size for fuller Christmas tree setups",
            "Classic Christmas red knitted appearance",
            "Decorative cable knit pattern",
            "Pairs naturally with traditional holiday ornaments and gifts"
        ]
    },
    {
        slug: "red-textured-knit-tree-skirt-30",
        name: "PUKUPIG 30 Inch Red Textured Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "30 in",
        color: "Christmas Red",
        material: "Soft textured knitted fabric",
        description:
            "A 30-inch red knitted Christmas tree skirt with classic textured knit detailing. Designed for compact tree displays, it adds a warm traditional accent while keeping the tree base neatly covered.",
        image: "/images/tree-skirt-textured-knit-30-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0GZ27JNZM",
        highlights: [
            "30-inch size for compact Christmas trees",
            "Warm classic red holiday color",
            "Textured knit detailing for added visual depth",
            "Designed to create a neat decorative tree base"
        ]
    },
    {
        slug: "red-textured-knit-tree-skirt-40",
        name: "PUKUPIG 40 Inch Red Textured Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "40 in",
        color: "Christmas Red",
        material: "Soft textured knitted fabric",
        description:
            "A 40-inch red knitted Christmas tree skirt featuring classic textured knit detailing. The larger size provides balanced coverage beneath family Christmas trees while adding a warm seasonal accent.",
        image: "/images/tree-skirt-textured-knit-40-red.png",
        amazonUrl: "https://www.amazon.com/dp/B0GZ2NS6Z2",
        highlights: [
            "40-inch size for medium Christmas tree displays",
            "Classic Christmas red knitted design",
            "Textured knit detailing",
            "Provides an inviting base for ornaments and wrapped gifts"
        ]
    },
    {
        slug: "cream-white-dotted-knit-tree-skirt-30",
        name: "PUKUPIG 30 Inch Cream White Cable Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "30 in",
        color: "Cream White",
        material: "Soft knitted fabric",
        description:
            "A 30-inch cream white knitted Christmas tree skirt with decorative cable knit texture and braided detailing. Its warm ivory-white appearance works naturally with farmhouse, neutral, and classic Christmas interiors.",
        image: "/images/tree-skirt-dotted-knit-30-cream-white.png",
        amazonUrl: "https://www.amazon.com/dp/B0FGW8VH42",
        highlights: [
            "30-inch size for smaller Christmas tree displays",
            "Warm cream white knitted appearance",
            "Decorative cable knit texture",
            "Pairs easily with neutral, red, gold, and natural holiday decor"
        ]
    },
    {
        slug: "cream-white-dotted-knit-tree-skirt-40",
        name: "PUKUPIG 40 Inch Cream White Cable Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "40 in",
        color: "Cream White",
        material: "Soft knitted fabric",
        description:
            "A 40-inch cream white knitted Christmas tree skirt featuring decorative cable knit texture and braided detailing. The larger size gives family Christmas trees a soft, warm, and handcrafted-looking base.",
        image: "/images/tree-skirt-dotted-knit-40-cream-white.png",
        amazonUrl: "https://www.amazon.com/dp/B0FGW7DK98",
        highlights: [
            "40-inch size for medium Christmas tree displays",
            "Warm cream white color",
            "Decorative cable knit pattern",
            "Soft neutral styling for cozy and farmhouse Christmas interiors"
        ]
    },
    {
        slug: "cream-white-textured-knit-tree-skirt-30",
        name: "PUKUPIG 30 Inch Cream White Textured Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "30 in",
        color: "Cream White",
        material: "Soft textured knitted fabric",
        description:
            "A 30-inch cream white knitted Christmas tree skirt with classic textured knit detailing. Its warm neutral tone is designed to blend naturally with farmhouse, traditional, Scandinavian-inspired, and cozy holiday decor.",
        image: "/images/tree-skirt-textured-knit-30-cream-white.png",
        amazonUrl: "https://www.amazon.com/dp/B0FGY64JF8",
        highlights: [
            "30-inch size for compact Christmas tree setups",
            "Soft cream white knitted appearance",
            "Classic textured knit detailing",
            "Versatile neutral look for a variety of Christmas decorating styles"
        ]
    },
    {
        slug: "cream-white-textured-knit-tree-skirt-40",
        name: "PUKUPIG 40 Inch Cream White Textured Knit Christmas Tree Skirt",
        category: "Christmas Tree Skirt",
        size: "40 in",
        color: "Cream White",
        material: "Soft textured knitted fabric",
        description:
            "A 40-inch cream white knitted Christmas tree skirt with classic textured knit detailing. Designed for medium Christmas trees, it creates a warm neutral foundation for ornaments, lights, and wrapped gifts.",
        image: "/images/tree-skirt-textured-knit-40-cream-white.png",
        amazonUrl: "https://www.amazon.com/dp/B0FGY8FJLC",
        highlights: [
            "40-inch size for medium Christmas tree displays",
            "Warm cream white color",
            "Classic textured knit design",
            "Creates a soft neutral base beneath the Christmas tree"
        ]
    },
    // {
    //     slug: "patriotic-bunting-banner",
    //     name: "PUKUPIG Patriotic Bunting Ribbon Banner",
    //     category: "Patriotic Decor",
    //     size: "2.3 x 4.3 ft",
    //     color: "Red, white, and blue",
    //     material: "Fabric, lace, satin ribbons, pom-poms",
    //     description:
    //         "A layered patriotic wall hanging designed for front doors, covered porches, entryways, and America's 250th celebration decor.",
    //     image: "/images/patriotic-bunting-banner.jpg",
    //     amazonUrl: "https://www.amazon.com/",
    //     highlights: [
    //         "Layered red, white, and blue patriotic styling",
    //         "Designed for front doors, covered porches, and wall displays",
    //         "Suitable for 4th of July, Memorial Day, and America's 250th decor",
    //     ],
    // }
];

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}
export const metadata = {
    title: "About | PUKUPIG",
    description: "Learn more about PUKUPIG seasonal home decor.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#f8f3ed] px-6 py-16 text-[#2f261f]">
            <section className="mx-auto max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a4583f]">
                    About PUKUPIG
                </p>

                <h1 className="mt-4 text-4xl font-bold">Decor for Warm Seasonal Moments</h1>

                <p className="mt-6 text-lg leading-8 text-[#5f5147]">
                    PUKUPIG creates seasonal home decor for families who enjoy changing
                    their spaces throughout the year. Our products focus on festive
                    styling, cozy textures, and easy decorating for holidays and everyday
                    home moments.
                </p>

                <p className="mt-6 text-lg leading-8 text-[#5f5147]">
                    We currently focus on Christmas decor, patriotic decor, mantel
                    styling, front door accents, and home display pieces for North American
                    homes.
                </p>
            </section>
        </main>
    );
}
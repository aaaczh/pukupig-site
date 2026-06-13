export default function Home() {
  return (
      <main className="min-h-screen bg-[#f8f3ed] px-6 py-12 text-[#2f261f]">
        <section className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]">
            PUKUPIG
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Seasonal Home Decor for Cozy North American Homes
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-[#5f5147]">
            PUKUPIG creates festive home decor for Christmas, patriotic holidays,
            mantel styling, front doors, and family seasonal displays.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
                href="#collections"
                className="rounded-full bg-[#2f261f] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Collections
            </a>

            <a
                href="/about"
                className="rounded-full border border-[#2f261f] px-6 py-3 text-sm font-semibold"
            >
              About PUKUPIG
            </a>
          </div>
        </section>

        <section id="collections" className="mx-auto mt-20 max-w-5xl">
          <h2 className="mb-6 text-2xl font-bold">Featured Collections</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Christmas Decor</h3>
              <p className="text-[#5f5147]">
                Tree skirts, tree collars, stockings, ornaments, and cozy holiday
                accents.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Patriotic Decor</h3>
              <p className="text-[#5f5147]">
                Red, white, and blue decorations for front doors, porches, walls,
                and seasonal celebrations.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Home Decor</h3>
              <p className="text-[#5f5147]">
                Candle holders, mantel accents, and decorative pieces for everyday
                home styling.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
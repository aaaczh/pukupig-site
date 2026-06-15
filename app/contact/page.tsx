export const metadata = {
    title: "Contact | PUKUPIG",
    description: "Contact PUKUPIG for product support and cooperation inquiries.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#f8f3ed] px-6 py-16 text-[#2f261f]">
            <section className="mx-auto max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a4583f]">
                    Contact
                </p>

                <h1 className="mt-4 text-4xl font-bold">Contact PUKUPIG</h1>

                <p className="mt-6 text-lg leading-8 text-[#5f5147]">
                    For product support, order questions, or brand cooperation inquiries,
                    please contact us by email.
                </p>

                <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-[#2f261f]">Customer Support</p>
                    <a
                        href="mailto:support@pukupig.com"
                        className="mt-2 inline-block text-[#a4583f]"
                    >
                        support@pukupig.com
                    </a>
                </div>
            </section>
        </main>
    );
}
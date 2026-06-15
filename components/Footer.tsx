import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[#eadfd2] bg-[#f8f3ed]">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#6b5c50]">
                <p className="font-semibold text-[#2f261f]">PUKUPIG</p>

                <p className="mt-2 max-w-2xl">
                    Seasonal home decor for Christmas, patriotic holidays, mantel styling,
                    front doors, and cozy family spaces.
                </p>

                <div className="mt-5 flex flex-wrap gap-4">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-service">Terms of Service</Link>
                    <Link href="/return-refund-policy">Return & Refund</Link>
                    <Link href="/shipping-policy">Shipping Policy</Link>
                </div>

                <p className="mt-5">© 2026 PUKUPIG. All rights reserved.</p>
            </div>
        </footer>
    );
}
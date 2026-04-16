import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low py-12">
      <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-headline text-sm font-extrabold uppercase tracking-[0.14em] text-primary">
            DK Retail Services
          </p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-on-surface-variant">
            Reliable computer accessories supplier for businesses in Hosur.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Navigate</p>
          <div className="mt-3 grid gap-2 text-xs text-on-surface-variant">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/showcase" className="hover:text-primary">
              Showcase
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Contact</p>
          <div className="mt-3 grid gap-2 text-xs text-on-surface-variant">
            <p>+91 7639090715</p>
            <p>sales@dktetails.com</p>
            <p>Hosur, Tamil Nadu</p>
          </div>
        </div>
        <div>
          <div className="rounded-lg bg-surface-container-high p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              GSTIN
            </p>
            <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-on-surface-variant">
              33KPBPK8157L1ZD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

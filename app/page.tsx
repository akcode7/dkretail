import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-primary-container/30 blur-3xl md:h-96 md:w-96"></div>
        <div className="section-shell grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
              Hosur Based B2B Supplier
            </p>
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
              DK Retail Services
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
              Your trusted partner for bulk computer accessories in Hosur. We supply high-quality
              products to businesses, offices, and organizations with reliable service and
              competitive pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-surface-container px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-primary transition hover:bg-surface-container-high"
              >
                Get Business Quote
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="panel-soft overflow-hidden p-6 sm:p-8">
              <img
                src="images/keyboard2.png"
                alt="Mechanical keyboard"
                className="mx-auto w-full max-w-xl rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 md:py-20">
        <div className="section-shell">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">What We Do</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">
              Reliable Computer Accessories Supplier for Businesses
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">
              We specialize in bulk supply of computer accessories for startups, corporate offices,
              educational institutions, and growing organizations.
            </p>
          </div>
          <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
            <article className="group relative overflow-hidden rounded-xl sm:col-span-2 sm:row-span-2">
              <img
                src="images/keyboard1.png"
                alt="Keyboards"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/45 to-transparent p-4">
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-white">
                  Input Devices
                </h3>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-xl">
              <img
                src="images/networking2.png"
                alt="Mice"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-3">
                <p className="text-lg font-bold uppercase tracking-tight text-white">Connectivity</p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-xl">
              <img
                src="/images/storage.png"
                alt="Audio"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-3">
                <p className="text-lg font-bold uppercase tracking-tight text-white">Storage</p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-xl sm:col-span-2">
              <img
                src="images/monitors.png"
                alt="Monitors"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-3">
                <p className="text-lg font-bold uppercase tracking-tight text-white">Monitors</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="section-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
                Our Products
              </h2>
              <div className="mt-3 h-1 w-24 bg-primary"></div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: "Keyboards & Mouse",
                price: "Wired and wireless options",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuACNrZrVioit9Ehq_jJm6Z4DkJ_r_kZJHt5powJ-6jlBpKP5215nMnicXsbjM_qMn3rbjDM2jlimGSMtOjEK4_QOVJQ4EOZJJSjE7hJ3JVGf4mORtQnHxRczTPKehQXT7PqfspiEspc1x_6bOGMrQtRCuc8i-mnmXvipmpUASskPAOs9Iqyw-dkxJlp-HsT-iVBNorp6EHRJG8dvOtNudBco1PtmktEzpQpuvdeRdfvMJz_5ZeEtXLrgL9r_L3zw6rqCdPnFtKLghWr",
              },
              {
                name: "Monitors & Display Accessories",
                price: "Business and office display support",
                image:
                  "/images/monitors.png",
              },
              {
                name: "HDMI, VGA & LAN Cables",
                price: "Reliable connectivity products",
                image:
                  "/images/cables.png",
              },
              {
                name: "Networking and Laptop Accessories",
                price: "Adapters, SMPS, routers and more",
                image:
                  "/images/networking.png",
              },
            ].map((product) => (
              <article key={product.name} className="panel-soft p-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <h3 className="mt-4 text-lg font-black uppercase">{product.name}</h3>
                <p className="text-sm text-on-surface-variant">{product.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

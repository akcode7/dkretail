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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtfC2VP933gdDc0YNLFQw53qeEV1UEoaSLzL9ybnTQA9RDmmIxzaYmXV0BlSZyj39YGFJ6aKBVG5d02hiuA9bDOXm7dhE2w2E39yBF6es7ivBYRnDJodBN7kKnENkSU3t9IVjCrVbeJT4mg1QaEikhCGIGS_ZDiYoy6weF2OCxRUIJ_KrtXlYOFWb6QHgPa8kQSPMin781hWIg9NJLQSSuh1C9zwYEe0Cih7joO6AtnZ-OuXdfYnKjfKK91WxuOxFlcQ0vq1pOkIm0"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRmKRwxnmzXjK6Bu1dACVulkirbF6wIIcI0dhrKXjnzEpfL7P20LvgQve5KhHbcb0D3i6h_VzhxnUaJMh2XK7Jx2nQ7m2ceJpZ5kE3D5Fci62kBuDEK6NDZe9o_AFtaIPNRD1KJghz6eVhdb1dWpral7RzfIaOroAJrBaEddkv9XYMT2uc_zgnkhTtlGCis5GJGfxz2DfBcNrZWcnax7totDIhqzILHXAVadOjlkG0l5VkItODvueGy_yGUo3FZHFjtVQ8YJvX-Dc9"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1fvcspo2duFV78TAeAa5JWWNZjGdCl_bAH0AfpoCOWTazdNUidifeF4hK3I5FEsOsYQ_mHhtYcjioqYiYUCRF2AM7yu90Mwme_6BWM7zs_GVKLNbV3JMYZVSsYCvNatwtPW0i3FnLFmazwF3SeIoQUwBH65IQBQpkIj4qk6qm3C8ADvKJcXufYVJgqyY_LwXFhNFfL53SHFEek70svTN-Y3e1ARQTcsFWPgrt5UxBke1wwshhh_tyuxdnRQ7t4qGUYvUduvxKrUSS"
                alt="Mice"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-3">
                <p className="text-lg font-bold uppercase tracking-tight text-white">Connectivity</p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtgZ0F9xRlytKlgWTSDb7fppySkOSqUlX9hYkoMLxXdVpHeS_1RFEeiBiOBEmAj6hnHLEwR1pBwRxSEBp9N1A8O1gPqteQET3FXmXsHVv0RwB0ru54MmeA8VmqAw2-cBmYHh2T5278oCyALqzVzEVfu4if4Ql-zKu9eDsEZDKRbAhFDQSjZItnCUQl3CIEo7P3TBz_fHzsXpguwbhXukG5XOP9ctiE5HX8vFS56sGgh5vO8cNq8EvTCUu2NH6GkGqnaEhW6Wu1Mtv3"
                alt="Audio"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-3">
                <p className="text-lg font-bold uppercase tracking-tight text-white">Storage</p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-xl sm:col-span-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-ZnHZ-MH3tQ4cmVAICA1YW-EHS5JqmmEPMlXFCsbgpm0vWzQtdd2bZuuSeI71kJJtGB-e2AQZDXOsilGJKa3nwAzZpwqvIfbyZAQ73pHbS0aGdyVU_LXYbFk1CK6NL7DkCUoAOag2LZJQhkoUmnNsWVWnoJIqmQngb_uL0E5QRl8tCyC0XQafJKl208cwJh0f0wRbQA9bUwCjtcF_msBrDoXcDN4KBpiVxyoBrmowsLLgXFkSx3TGuQgwdCVZAi6iULVtOtYX_l1M"
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
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqW8hftJ6lc0LoJ23r3cBKbvdCL_KrdUj-TiaSwg2ag1Q_X9FG0ztiKRBmjpfMh4tHrvbOLvVCjeQzSIn0s84f8oCKgqOXtk-8MOx1QvVTrp8XM6WM5wp2FehoQsC4K9F5i8lDJBIi4sZuCk_RxRYk-NJDW3shcxhDCId7upwt_lBQF4k3DBhL1iwhchYcd5BMHIQEilUvkvB6KjTHKsBXE2yv4K3lff3u0INZ32jvY58aXBnz0mp-9ZsqcCVgGEbQ0qBRVCbQpscn",
              },
              {
                name: "HDMI, VGA & LAN Cables",
                price: "Reliable connectivity products",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFqF3ldeA80Xq0N7dWu1LB_MRre_jf5WQvWguQpA3-FMI3ZiFosgUZc7U1oFC61QK7yV7ZR0Z09fWDk-3nmg7P4b3GZ0hYo3pe_IQydKHh8dS86J4sAvz73qIsyXrbYYXTOxn0lb2OkjgvT2pjSinxaKT2aPWjv3-Kmfd2hqTaAhT3aK2ezJfG63jjWpJp2Pxi0lr3Dbs3k40YIR01TYWWWya9lgPOBpWD7ZAOMzorxTvQVA5uSYchp-YUqmv-Bsf23w4DCGZmG3GD",
              },
              {
                name: "Networking and Laptop Accessories",
                price: "Adapters, SMPS, routers and more",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCxZjo9F-eoqf7ogEFvRNWW_H3poS0prx3W8XczUnQpOaHoxeFoLmNJLKiSVLeaRlN03PK-mBlmtYbh3RFFEfyKFa3wuO5m3u3kM42DWylYANJlpCu1-hyWKrnPp0bITh24Ho-hHLEyFJQDmQHGX8uUvaIjvumcD95tn7uk4kSa8rQ8tOMAW2leUKK7pVjp0aVjJuhYFbEl9tMXtsxfZUuNrpLqHflNHr4pnSVOKoKeshnThOmAZ5AQPEwuj9QCVoM6FQhvlMjjWnUf",
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

import { ContactForm } from "../components/contact-form";

export default function ContactPage() {
  const mapQuery = "Alasanatham Rd, Hosur, Tamil Nadu 635109";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <main className="pt-16 md:pt-20">
      <section className="section-shell py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
              Get in Touch
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-7xl">
              DK Retail Services
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
              Bulk IT accessories and corporate supply partner in Hosur. We serve startups,
              offices, schools, and corporate companies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="panel-soft p-5 sm:p-8 lg:col-span-8 lg:p-10">
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl bg-surface-container p-5 sm:p-6">
              <h2 className="text-sm font-black uppercase tracking-[0.12em]">Business Details</h2>
              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em]">Coordinates</p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      No.#4/1, Subramania Siva Nagar,
                      <br />
                      Hosur - 635109,
                      <br />
                      Krishnagiri (Dt), Tamilnadu.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em]">Frequency</p>
                    <p className="mt-1 text-sm text-on-surface-variant">+91 7639090715</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em]">Transmission</p>
                    <p className="mt-1 text-sm text-on-surface-variant">sales@dktetails.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">business</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em]">GSTIN</p>
                    <p className="mt-1 text-sm text-on-surface-variant">33KPBPK8157L1ZD</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">Mon-Fri</p>
                  <p className="mt-1 text-xs font-semibold">09:00 - 18:00 IST</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">Sat-Sun</p>
                  <p className="mt-1 text-xs font-semibold">Support on request</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1DhRW1hCZkNat7NinFpQgBX5iGrcqLNj7xCPZ_ChXpgRv4spYCzL9a2mSf_lbaoRgzW9R4z5VqisLaNbM2Qa4My7QLnQha-ThTOfFO29hIdIHQwd_HFhpycczNvoKK9jo-9VPgZrnIhztLgMUpsq_1Az7TiIyH8liM8PG1swIpy_w1pUrUWj9dS24TeLfh0j9pyCjYpL2cXyzTnpKWn0jYeQpJB1jP6oZhCIm0VwlUvsobdYIW2pPRzU4pPs6gGIQgPVLE5_hIoPx"
                alt="DK RETAIL laboratory"
                className="h-52 w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent p-4">
                <p className="text-xl font-black uppercase tracking-tight text-white">DK Retail Services</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">
                  Your trusted B2B IT hardware vendor
                </p>
              </div>
            </div>

          </aside>
        </div>
      </section>

      <section className="relative h-70 overflow-hidden bg-[#051228] sm:h-90 md:h-105">
        <img
          src="images/map.png"
          alt="City map background"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[#02112a]/45"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full max-w-lg rounded-lg border border-white/20 bg-white/90 p-3 shadow-2xl sm:p-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full cta-gradient text-on-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-tight">Hosur Business Location</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                  Alasanatham Rd, Hosur, Tamil Nadu 635109
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-outline-variant/25">
              <iframe
                title="Alasanatham Road, Hosur location map"
                src={mapEmbedUrl}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

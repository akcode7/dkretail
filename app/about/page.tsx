export default function AboutPage() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-14 md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              About Us
            </p>
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Who We Are
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-lg leading-relaxed text-on-surface-variant">
              DK Retail Services is a growing computer accessories supplier based in Hosur, focused
              on serving businesses with reliable IT product solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 md:py-20">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-primary-container/30 p-6 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Our Mission</p>
            <h2 className="text-3xl font-black tracking-tight">
              Affordable quality for smooth business operations.
            </h2>
            <p className="mt-4 text-on-surface-variant">
              To provide businesses with affordable, high-quality computer accessories and ensure
              smooth operations through dependable supply.
            </p>
          </article>
          <article className="rounded-xl bg-secondary/10 p-6 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Our Vision</p>
            <h2 className="text-3xl font-black tracking-tight">Trusted B2B partner across Tamil Nadu.</h2>
            <p className="mt-4 text-on-surface-variant">
              To become a trusted B2B supplier for companies across Tamil Nadu by delivering
              consistent quality and service.
            </p>
          </article>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="section-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">What Makes Us Different</h2>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
              B2B Focus
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Strong B2B Supply",
                role: "Corporate and institutional requirements",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDu2tyo3HtL2P_w5Rr-5rim_DYQhT2zYb0F8lh4dhbqQBHHz0zTIw58K3zo_7YgVtKxXar23ahaxstGX1wPQJMIZhIfIbom1Ijq__dwgtGEai4y6xna2RWc0a_nz29zIkQ4x8puAVpjo1rEahbkGbbKs-2cA1xCqLckYeCPuBuI6-i-2qGwZH3-LGGFhg8psUSp4nAOb658zh7IUs8p8yArIluTgiC7a0SfGIjgsMr-uNxeb6xGK5LtuVWHQwAT42gB4TiAyqnBcXkz",
              },
              {
                name: "Corporate Understanding",
                role: "Products matched to business needs",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz9mW3W74sRLeB7ZhYeHbducrlV8PyA3RFZqMIuIEm8_QBc_afmboU5h9vMEO4fC39IiwEJs9lfKirqHTjoe1fjhaPvF7YjqZmdCYh5b7lnc2YUrmfERyEvVzgHFXK2ilEV304qydGtddOLvItQKwF3KKObK2WoxQdLRE_p7pikYMwrbKCyH4hhLL47hUdhT5_Jk_aoNU9nJa0IFCTd9ZjvvWfvgEXStFvp3yEbFR0CjNZOdh-DeRMUk_0PVAwXJGBOVcw1bgEPjGc",
              },
              {
                name: "Fast Response",
                role: "Quick order handling and support",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgYFm56NUFW-urSZSChWb6oxLzWBuvZIsLXdrl6XugHP6G3hdgTaGE1NM6r0rftcd5Vu6k1jX-soo1k30sEoC83I9Bma_Kr48-UmbScAVVSf9ws1_-IXggTdpXTVgfdgzZLOKKUefa16aQFq_oe6P2rXtpYbICvef0zcWiMWiQUSA6Os-tV5m3oMJ1rOc1r-IdHZVGb53dDyYzuxQVMpyVrKZgkukJgW_9ZJSz29okXnx7V9CBgODEnhjIJJJ2Rbu5GLoeOiDZ4bEF",
              },
              {
                name: "Long-Term Partnership",
                role: "Built on trust and consistency",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDvVqxD3PTlzsmWSIYZH9suVdgMAZp8w6rROfB8z5aLuo2gb9ktsgGWbwqQoctJ-BqCo1Zob2mfyusr4aHZ9JDUEnc7Z4cOJVSKaEQpI6mBuKS3YMiOeUSG7IzikiXW6t3p00qonX4W0LrdvaZRb-EpB5kjthG-m8G9kjI_3bCQ-OopIGZpHisSTjfR8pS39kU2s8ait2wIvuEltYNvR-wesS62rxJQsg6J5rFqq5BZ51sZZdKmyTzTICbvbyuLrgIo1sj_g4Di1zwR",
              },
            ].map((member) => (
              <article key={member.name} className="panel-soft overflow-hidden">
                <img src={member.image} alt={member.name} className="aspect-3/4 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-on-surface-variant">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 md:py-20">
        <div className="section-shell">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">Delivery & Support</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Fast order processing for business timelines.",
              "Local and nearby delivery support from Hosur.",
              "Assistance in selecting the right products.",
              "Reliable after-sales communication and follow-up.",
            ].map((text, index) => (
              <article key={text} className="rounded-xl bg-surface-container-lowest p-5">
                <p className="text-sm font-black text-primary">0{index + 1}</p>
                <p className="mt-2 text-on-surface-variant">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

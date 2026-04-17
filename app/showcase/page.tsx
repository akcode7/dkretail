export default function ShowcasePage() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="section-shell py-16 text-center md:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
          Bulk Computer Accessories Supply
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xs uppercase tracking-[0.22em] text-on-surface-variant md:text-sm">
          We provide a wide range of IT accessories for companies, startups, schools, and
          organizations.
        </p>
        <div className="mx-auto mt-10 h-20 w-px bg-primary/25"></div>
      </section>

      <section className="section-shell space-y-16 pb-16 md:space-y-24 md:pb-24">
        {[
          {
            id: "01 / Input Devices",
            title: "Keyboard & Mouse",
            description:
              "Reliable wired and wireless input devices for offices and teams with consistent quality and bulk availability.",
            image:
              "images/keyboard.png",
            specs: [
              ["Keyboard", "Wired and wireless options"],
              ["Mouse", "Office and performance models"],
              ["Supply", "Bulk order support"],
              ["Use Case", "Corporate and institutions"],
            ],
            reverse: false,
          },
          {
            id: "02 / Display & Connectivity",
            title: "Monitors, HDMI, VGA and LAN",
            description:
              "Complete display and connectivity supply for desks, labs, and business infrastructure projects.",
            image:
              "images/monitor-2.png",
            specs: [
              ["Monitors", "Business-ready display range"],
              ["HDMI / VGA", "Stable video connectivity"],
              ["LAN", "Networking cable support"],
              ["Delivery", "Fast local fulfillment"],
            ],
            reverse: true,
          },
          {
            id: "03 / Storage, Networking & Laptop",
            title: "Business Utility Products",
            description:
              "USB drives, external storage, routers, chargers, cooling pads, adapters, and SMPS for day-to-day IT operations.",
            image:
              "images/mouse.png",
            specs: [
              ["Storage", "USB drives and external devices"],
              ["Networking", "Routers and accessories"],
              ["Laptop", "Chargers and cooling pads"],
              ["Power", "Adapters and SMPS"],
            ],
            reverse: false,
          },
        ].map((item) => (
          <article key={item.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div
              className={`panel-soft p-4 sm:p-5 lg:col-span-7 lg:p-6 ${
                item.reverse ? "order-1 lg:order-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-4/3 w-full rounded-lg object-cover sm:aspect-square"
              />
            </div>
            <div
              className={`lg:col-span-5 ${
                item.reverse ? "order-2 lg:order-1 lg:pr-6" : "lg:pl-6"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{item.id}</p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                {item.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-base">
                {item.description}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-outline-variant/25 pt-6">
                {item.specs.map(([name, value]) => (
                  <div key={name}>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">{name}</p>
                    <p className="mt-1 text-xs text-on-surface-variant">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-surface-container-low py-12 md:py-16">
        <div className="section-shell">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Business Categories</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">Additional Product Groups</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {[
              {
                name: "USB Drives & Storage",
                meta: "Corporate data transfer and backup",
                image:
                  "images/ssd.png",
              },
              {
                name: "Networking Products",
                meta: "LAN cables, routers and accessories",
                image:
                  "images/networking1.png",
              },
              {
                name: "Laptop Accessories",
                meta: "Chargers, cooling pads, adapters, SMPS",
                image:
                  "images/cooling.png",
              },
            ].map((item) => (
              <article key={item.name} className="rounded-xl bg-surface-container-lowest p-4">
                <img src={item.image} alt={item.name} className="aspect-square w-full rounded-md object-cover" />
                <h4 className="mt-4 text-sm font-black uppercase tracking-tight">{item.name}</h4>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                  {item.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

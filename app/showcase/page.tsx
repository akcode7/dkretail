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
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDloF0h81JJM1T77W_o8S5tZonKhIGs045IcG3y40Df7HJ9jGJp23TkZAVk1cdn3wnDMRvRNjJcg_Fo_Z1wQWbzLnNShD_-c24CiTLWEB3CCK53Cx_RFT-GTpmLZ1YCXVCSHw0KSv9xmhUlZIAtlUKMjIxzMyZ-IBsfV-Jg_A98mu43xI0L6ogPh78R-1jHbSL_g51ggvZdjFlPu6gdj5u5EE_XP5El7rEyagcAT8FkBRxfz-CPTb6hMXojMj4-MCjlRTwu9WR07wah",
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
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCjg_LxGqyhVrKXbLc1GL1ndmNCBbuhLoxvobyW-2p_dXE1Msady4Z3OCGCn0JcJkT1ARupynAyS3jZx80DT6kODew3iet63qrHtqe2UOMJbWhn_nQSQ3UJ6xF-3obZkCa6VYfCCOvjNzAfQGwI350FFSSfOeBDzWiAuGR6P0P1gOsOuVSIB_apfB_y802oOgkK4xVQuygc0gufdV2yi1DlBZwwSH6LBJi6yxwd4rUpzMRzqNSqrkpmL7L5o80mHiHVY352VsJmNIJR",
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
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCt3TIExm2VfXbQTJzLNZE4iwEPwcTq9Dutqw6nqmeL0UkkbeOvJsJYfT1aoP1FJ2cFqOSn4W5ues7XqgmzKZBPG2J5Ulu92UPVsMREQ5o2JsCOTPqYsrIEiu8EA8nK4aetwDH5x5UsyX4vXzGX2kyGuRJgBW62eZnAQOK9wSORB5PTzHmOpppbKNdB9p_bLdpdjvppGMCKc78RKgVw_05ayA2TR38pkgFa7VBU7xMLB4m9BpXqTTfw4jtsrZjRwDfbu7f_8Ps-xS3j",
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
                className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-square"
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
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvYZrS0i7ScI3cGKAm8ieP_v0x3xsSd6P0Jf2pYYEJzht7jsP2_rUTP2D9FpLK3VhwmU0-H48O09tgXIPXHP_lrPj9ScH9O2q7PKDsR-Xd9H-Xn2tyOAtlroQWHv2r3LotgzaPWgb6NoGONnHflzpLMulKiVbuTtnMut4ZZTZoFfzHzYh5QjFQtJ3EdhagRpfhlxL4Jlxc417EDi-VwEz3e3FV7ZYubXDY3JC3RVQQ4Udo9tx1YTAIt2EWBbJN1-rzVhE7Y5VgZbFy",
              },
              {
                name: "Networking Products",
                meta: "LAN cables, routers and accessories",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3BrX79zCJPeUwzGA8-BB9L2s6yZdigTfV2hC06weXntC3J0fNs1uOoNABzkBLVBxhzyFN0nEA50Tllb7fjg0OBX9iNPNTVAenRUEFxzSp1VTGCnKtrDpEwPIyW9-oabz6807biTB9vYZmjy9IL2Lt3MW5DnjuMwIyDFMJT4Nl6DS3vk9qwZ7KXlOTP7m4o650F-4NqNMwQtPDntWhg1nnkrtcFwSVWFOQnI4ptyrQ34bvJxdXkFbznkAFnwMvAQrg74wr3swrS5Rr",
              },
              {
                name: "Laptop Accessories",
                meta: "Chargers, cooling pads, adapters, SMPS",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuACNrZrVioit9Ehq_jJm6Z4DkJ_r_kZJHt5powJ-6jlBpKP5215nMnicXsbjM_qMn3rbjDM2jlimGSMtOjEK4_QOVJQ4EOZJJSjE7hJ3JVGf4mORtQnHxRczTPKehQXT7PqfspiEspc1x_6bOGMrQtRCuc8i-mnmXvipmpUASskPAOs9Iqyw-dkxJlp-HsT-iVBNorp6EHRJG8dvOtNudBco1PtmktEzpQpuvdeRdfvMJz_5ZeEtXLrgL9r_L3zw6rqCdPnFtKLghWr",
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

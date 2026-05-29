import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-cream">
      <div className="max-w-4xl mx-auto text-center pt-16 pb-12 px-5">
        <div className="inline-flex items-center gap-2 border border-caramel/50 rounded-full px-5 py-1.5 mb-10">
          <span className="font-handwritten text-caramel text-base">
            ☕ Brewing Daily · 9am–5pm · #01-29 Katong Shopping Centre
          </span>
        </div>

        <h1 className="font-handwritten text-[88px] md:text-[128px] leading-[0.9] text-espresso mb-6 tracking-tight">
          about<br />coffee co.
        </h1>

        <p className="text-roast text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
          Honest coffee. Daily in-house bakes. Right in the heart of Katong.
          No fuss — just good stuff.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#bakes"
            className="bg-espresso text-cream px-8 py-3.5 rounded-full font-medium hover:bg-roast transition-colors"
          >
            Today&apos;s Bakes
          </a>
          <a
            href="#order"
            className="border-2 border-espresso text-espresso px-8 py-3.5 rounded-full font-medium hover:bg-espresso hover:text-cream transition-colors"
          >
            Pre-Order Pickup
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-latte">
          <span>📍 865 Mountbatten Rd, Singapore 437844</span>
          <span>🕐 Mon – Sun, 9am – 5pm</span>
          <span>💳 PayNow &amp; Cash only</span>
        </div>
      </div>

      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-1 h-56 md:h-72 overflow-hidden">
        <div className="relative col-span-1">
          <Image
            src="/images/storefront.webp"
            alt="About Coffee Co storefront at Katong Shopping Centre"
            fill
            className="object-cover"
            sizes="33vw"
            priority
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/images/interior-1.webp"
            alt="Inside About Coffee Co café"
            fill
            className="object-cover"
            sizes="33vw"
            priority
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/images/interior-2.webp"
            alt="About Coffee Co café seating area"
            fill
            className="object-cover"
            sizes="33vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function FindUs() {
  return (
    <section id="find-us" className="py-20 px-5 bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-handwritten text-caramel text-2xl">come visit us</span>
          <h2 className="font-display text-4xl text-espresso mt-1">How to Find Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {/* Storefront photo */}
            <div className="relative rounded-xl overflow-hidden h-64 border border-espresso/10">
              <Image
                src="/images/storefront.webp"
                alt="About Coffee Co entrance at Katong Shopping Centre #01-29"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Signboard photo */}
            <div className="relative rounded-xl overflow-hidden h-52 border border-espresso/10">
              <Image
                src="/images/signboard.webp"
                alt="About Coffee Co outdoor signboard"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-handwritten text-xl text-caramel mb-2">📍 Address</h3>
              <p className="font-semibold text-espresso">#01-29 Katong Shopping Centre</p>
              <p className="text-roast text-sm">865 Mountbatten Rd, Singapore 437844</p>
              <p className="text-latte text-xs mt-1">Look for the signage near the staircase to Level 1</p>
            </div>

            <div>
              <h3 className="font-handwritten text-xl text-caramel mb-2">🕐 Opening Hours</h3>
              <p className="text-espresso font-semibold">Monday – Sunday</p>
              <p className="text-roast text-sm">9:00am – 5:00pm (including public holidays)</p>
            </div>

            <div>
              <h3 className="font-handwritten text-xl text-caramel mb-2">💳 Payment</h3>
              <p className="text-roast text-sm">PayNow and Cash only</p>
            </div>

            <div>
              <h3 className="font-handwritten text-xl text-caramel mb-2">🚌 By MRT / Bus</h3>
              <p className="text-roast text-sm">
                <span className="font-medium">MRT:</span> Mountbatten Station (CC7) — 8 min walk
              </p>
              <p className="text-roast text-sm mt-1">
                <span className="font-medium">Bus:</span> Stops along Mountbatten Rd (10, 10e, 32, 40)
              </p>
            </div>

            <div>
              <h3 className="font-handwritten text-xl text-caramel mb-2">🅿️ Parking</h3>
              <p className="text-roast text-sm">
                Basement carpark at Katong Shopping Centre — enter via Mountbatten Rd.
              </p>
              <p className="text-latte text-xs mt-1">
                Parkway Parade carpark also nearby (~5 min walk)
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=865+Mountbatten+Rd+Katong+Shopping+Centre+Singapore+437844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-espresso text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-roast transition-colors"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const products = [
  "Whole Bean (250g / 500g)",
  "Drip Bags (10-pack)",
  "Capsules (Nespresso compatible)",
];

export default function OnlineStore() {
  return (
    <section id="store" className="py-20 px-5 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-handwritten text-caramel text-2xl">shop online</span>
          <h2 className="font-display text-4xl text-espresso mt-1">Get Our Coffee Delivered</h2>
          <p className="text-latte mt-3 text-sm">
            Coffee beans, drip bags &amp; capsules — available on Shopee and Lazada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bg-paper rounded-xl p-8 border border-espresso/10 text-center">
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="font-display text-2xl text-espresso mb-1">Shopee</h3>
            <p className="text-latte text-sm mb-6">Beans · Drip Bags · Capsules</p>
            <a
              href="#"
              className="inline-block text-white px-8 py-3 rounded-full font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#EE4D2D" }}
            >
              Shop on Shopee
            </a>
          </div>

          <div className="bg-paper rounded-xl p-8 border border-espresso/10 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="font-display text-2xl text-espresso mb-1">Lazada</h3>
            <p className="text-latte text-sm mb-6">Beans · Drip Bags · Capsules</p>
            <a
              href="#"
              className="inline-block text-white px-8 py-3 rounded-full font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#F72D45" }}
            >
              Shop on Lazada
            </a>
          </div>
        </div>

        <div className="bg-paper rounded-xl p-6 border border-caramel/25">
          <h3 className="font-handwritten text-xl text-caramel mb-4">What&apos;s available online:</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {products.map((item) => (
              <div key={item} className="bg-cream rounded-lg p-3 text-center">
                <p className="text-roast text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const promises = [
  {
    icon: "🌅",
    title: "Baked Fresh Every Morning",
    desc: "Every bake is made in-house each morning before we open. No day-old stock, ever.",
  },
  {
    icon: "☕",
    title: "Brewed to Order",
    desc: "Every coffee is pulled fresh for you. We don't pre-make, batch, or reheat.",
  },
  {
    icon: "🌿",
    title: "Real Ingredients Only",
    desc: "No preservatives. What you eat here is honest food — simple, quality ingredients.",
  },
  {
    icon: "🤝",
    title: "Leftovers Go to Good Use",
    desc: "Unsold bakes at closing time are donated locally. Nothing goes to waste.",
  },
];

export default function FreshnessGuarantee() {
  return (
    <section id="guarantee" className="py-20 px-5 bg-espresso">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-handwritten text-caramel text-2xl">our promise</span>
        <h2 className="font-display text-4xl text-cream mt-1 mb-12">
          Freshness &amp; Taste Guarantee
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 text-left">
          {promises.map((p) => (
            <div
              key={p.title}
              className="bg-cream/5 border border-cream/10 rounded-xl p-6"
            >
              <span className="text-3xl block mb-3">{p.icon}</span>
              <h3 className="font-display text-lg text-cream mb-2">{p.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-handwritten text-2xl text-caramel">
          &ldquo;If you&apos;re not happy, tell us. We&apos;ll make it right.&rdquo;
        </p>
      </div>
    </section>
  );
}

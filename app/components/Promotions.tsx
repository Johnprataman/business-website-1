const promos = [
  {
    tag: "Ongoing",
    title: "Early Bird Discount",
    desc: "10% off all orders before 10am. Just mention it at the counter — no app, no code needed.",
    bg: "bg-caramel/10 border-caramel/25",
  },
  {
    tag: "Loyalty",
    title: "Buy 9, Get 1 Free",
    desc: "Collect stamps on your loyalty card. Your 10th coffee is on us. Cards available at the counter.",
    bg: "bg-sage/10 border-sage/25",
  },
  {
    tag: "Weekend",
    title: "Weekend Bake Box",
    desc: "Pre-order a weekend assortment box by Friday 5pm. Mixed fresh bakes, handpicked for you.",
    bg: "bg-roast/8 border-roast/15",
  },
  {
    tag: "New",
    title: "Monthly Coffee Subscription",
    desc: "Fresh-roasted beans delivered monthly, or ready for pickup. From $24/month. DM us on Instagram to sign up.",
    bg: "bg-caramel/8 border-caramel/20",
  },
];

export default function Promotions() {
  return (
    <section id="events" className="py-20 px-5 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-handwritten text-caramel text-2xl">what&apos;s on</span>
          <h2 className="font-display text-4xl text-espresso mt-1">Promotions &amp; Events</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {promos.map((p) => (
            <div key={p.title} className={`rounded-xl p-6 border ${p.bg}`}>
              <span className="font-handwritten text-sm text-latte">{p.tag}</span>
              <h3 className="font-display text-xl text-espresso mt-1 mb-2">{p.title}</h3>
              <p className="text-roast/80 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Sarah L.",
    rating: 5,
    text: "The focaccia here is honestly one of the best in Singapore. Warm, cheesy, perfectly herby. And the coffee is no joke — smooth, not bitter at all.",
    date: "2 weeks ago",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Hidden gem in Katong Shopping Centre. Been coming every Saturday morning for the cinnamon rolls. They sell out fast so get there early!",
    date: "1 month ago",
  },
  {
    name: "Priya N.",
    rating: 5,
    text: "Loved the pre-order system. Pre-ordered my box, showed up, and everything was perfectly packed. Great neighbourhood café vibe — will definitely be back.",
    date: "3 weeks ago",
  },
  {
    name: "James W.",
    rating: 4,
    text: "Really solid flat white and the sourdough toast is simple but perfect. Love that they're honest about what they do — no gimmicks, no pretence.",
    date: "1 month ago",
  },
  {
    name: "Chloe K.",
    rating: 5,
    text: "The cold brew is so good. Bought a bag of beans from their Shopee listing too — super easy. Great local coffee shop, please support them!",
    date: "2 months ago",
  },
  {
    name: "Ahmad R.",
    rating: 5,
    text: "Came for the coffee, stayed for the banana bread. This place has that warm, no-pretense energy that's getting rare in Singapore. A proper gem.",
    date: "3 weeks ago",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-5 bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-handwritten text-caramel text-2xl">what people say</span>
          <h2 className="font-display text-4xl text-espresso mt-1">Google Reviews</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-caramel text-lg tracking-widest">★★★★★</span>
            <span className="text-roast font-semibold">4.9 / 5</span>
            <span className="text-latte text-sm">(127 reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-cream rounded-xl p-5 border border-espresso/5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-espresso text-sm">{r.name}</p>
                  <p className="text-xs text-latte">{r.date}</p>
                </div>
                <span className="text-caramel text-sm">{"★".repeat(r.rating)}</span>
              </div>
              <p className="text-roast/80 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-roast border border-espresso/20 px-6 py-3 rounded-full hover:bg-espresso hover:text-cream hover:border-espresso transition-colors"
          >
            View all reviews on Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}

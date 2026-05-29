import Image from "next/image";

const reviews = [
  {
    name: "Nanananana",
    badge: "5 reviews · 8 photos",
    rating: 5,
    date: "6 months ago",
    price: "$10–20",
    text: "Such a nice and cozy space! Visited on a vibey day — they had a special brewer come in, one of their regular baristas was DJ-ing (so cool!) and though the cafe was pretty filled up it wasn't uncomfortable and the atmosphere was overall very relaxed. Coffee was amazing (I got two cups) and I never tried the matcha but from reading the other reviews it sounds like I must. All hits so far — you can tell that everyone who comes by is really passionate about coffee, they're so open and friendly. The guest brewer went around chatting to people and entertained all my questions about coffee too. 10/10 recommend!!",
    scores: "Food: 5/5  ·  Service: 5/5  ·  Atmosphere: 5/5",
    screenshot: "/images/review-1.png",
  },
  {
    name: "Josephine W",
    badge: "Local Guide · 267 reviews · 3049 photos",
    rating: 5,
    date: "6 months ago",
    price: "$1–10",
    text: "About Coffee Co is a cosy little café located on Level 1 of Katong Shopping Centre, perfect for a quiet catch-up or a slow coffee moment. The minimalist space brings a sense of serenity and calm! For the filter handbrew, they offer a number of single-origin beans, each with unique flavour profiles. Payment is by PayNow or cash only, so come prepared. The café can be easy to miss — look out for their signage near the staircase leading up to Level 1.",
    scores: "Food: 5/5  ·  Service: 5/5  ·  Atmosphere: 5/5",
    screenshot: "/images/review-2.png",
  },
  {
    name: "janie cai",
    badge: "Local Guide · 18 reviews · 12 photos",
    rating: 5,
    date: "2 months ago",
    price: "Dine in",
    text: "Really enjoyed getting coffee and tea at this corner coffeeshop at Katong Shopping Centre. The owners are passionate about their product and brew up excellent coffees, with an exceptional matcha latte that is smooth, creamy and lacks the bitter aftertaste often present in over-brewed matcha. The space is cozy and has lots of natural light. It was a great place to take my mum and sisters for a tea break. There's even a resident rooster that struts by occasionally. Will be back!",
    scores: "Food: 5/5  ·  Service: 5/5  ·  Atmosphere: 5/5",
    screenshot: "/images/review-3.png",
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
            <span className="text-latte text-sm">on Google Maps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-cream rounded-xl border border-espresso/5 overflow-hidden flex flex-col">
              <div className="p-5 flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="font-semibold text-espresso text-sm">{r.name}</p>
                    <p className="text-xs text-latte leading-tight mt-0.5">{r.badge}</p>
                  </div>
                  <span className="text-caramel text-sm shrink-0 ml-2">{"★".repeat(r.rating)}</span>
                </div>
                <p className="text-xs text-latte mb-3">{r.date} · {r.price}</p>
                <p className="text-roast/80 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs text-latte mt-3 font-medium">{r.scores}</p>
              </div>
              <div className="relative h-48 w-full border-t border-espresso/5">
                <Image
                  src={r.screenshot}
                  alt={`Google review by ${r.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=865+Mountbatten+Rd+Katong+Shopping+Centre+Singapore+437844"
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

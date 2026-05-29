import Image from "next/image";

const schedule = [
  { day: "Mon", items: ["Cheese & Herb Focaccia", "Banana Bread", "Almond Croissant"] },
  { day: "Tue", items: ["Sourdough Loaf", "Plain Croissants", "Lemon Tart"] },
  { day: "Wed", items: ["Cinnamon Rolls", "Scones", "Sourdough Loaf"] },
  { day: "Thu", items: ["Herb Focaccia", "Banana Bread", "Chocolate Babka"] },
  { day: "Fri", items: ["Sourdough Loaf", "Croissants", "Kouign-Amann ✦"] },
  { day: "Sat", items: ["Cheese Focaccia", "Cinnamon Rolls", "Weekend Special ✦"] },
  { day: "Sun", items: ["Sourdough Loaf", "Banana Bread", "Scones"] },
];

export default function DailyBakes() {
  const today = new Date().getDay(); // 0=Sun, 1=Mon … 6=Sat

  return (
    <section id="bakes" className="py-20 px-5 bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-handwritten text-caramel text-2xl">in-house bakes!</span>
          <h2 className="font-display text-4xl text-espresso mt-1">Daily Bake Calendar</h2>
          <p className="text-latte mt-3 text-sm">
            Fresh every morning. Limited quantities — come early or pre-order!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          {/* Bake display photo */}
          <div className="relative rounded-xl overflow-hidden h-64 border border-espresso/10">
            <Image
              src="/images/bakes-display.webp"
              alt="About Coffee Co in-house bake display"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Calendar */}
          <div className="grid grid-cols-7 gap-1.5 content-start">
            {schedule.map((s, i) => {
              const dayOfWeek = i === 6 ? 0 : i + 1;
              const isToday = dayOfWeek === today;
              return (
                <div
                  key={s.day}
                  className={`rounded-lg p-2 border transition-colors ${
                    isToday
                      ? "bg-caramel/20 border-caramel"
                      : "bg-cream border-espresso/10"
                  }`}
                >
                  <div
                    className={`font-handwritten text-base text-center mb-1.5 ${
                      isToday ? "text-caramel font-bold" : "text-roast"
                    }`}
                  >
                    {s.day}
                    {isToday && (
                      <span className="block text-xs font-normal leading-none">today</span>
                    )}
                  </div>
                  <ul className="space-y-1">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="font-handwritten text-xs text-espresso/80 leading-tight"
                      >
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center font-handwritten text-base text-latte">
          ✦ = Special weekly bake &nbsp;·&nbsp; Quantities limited &nbsp;·&nbsp; Pre-order recommended
        </p>
      </div>
    </section>
  );
}

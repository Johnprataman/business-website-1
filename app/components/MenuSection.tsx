"use client";
import { useState } from "react";

const coffeeItems = [
  { name: "Filter Coffee", price: "$3.50", desc: "House blend, black" },
  { name: "Cappuccino", price: "$5.00", desc: "Double shot, steamed milk" },
  { name: "Latte", price: "$5.50", desc: "Double shot, your choice of milk" },
  { name: "Flat White", price: "$5.50", desc: "Ristretto, velvety microfoam" },
  { name: "Long Black", price: "$4.50", desc: "Double ristretto, hot water" },
  { name: "Cold Brew", price: "$6.00", desc: "12-hour steep, served over ice" },
];

const morningFood = [
  { name: "Cheese & Herb Focaccia", price: "$4.50", desc: "Warm from the oven" },
  { name: "Sourdough Toast", price: "$3.50", desc: "With butter and house jam" },
  { name: "Croissant", price: "$4.00", desc: "Plain, or with butter" },
  { name: "Banana Bread", price: "$4.50", desc: "A thick slice, served warm" },
  { name: "Cinnamon Roll", price: "$5.00", desc: "When available" },
];

const afternoonFood = [
  { name: "Focaccia Sandwich", price: "$7.50", desc: "Cheese, ham & herbs on focaccia" },
  { name: "Sourdough Cheese Toast", price: "$5.50", desc: "Thick-cut, proper melted cheese" },
  { name: "Cookie", price: "$3.00", desc: "Chocolate chip or oat raisin" },
  { name: "Scone", price: "$4.00", desc: "With clotted cream and jam" },
  { name: "Slice of the Day", price: "$5.00", desc: "Ask us what's fresh today" },
];

function MenuItem({ name, price, desc }: { name: string; price: string; desc: string }) {
  return (
    <div className="flex items-start justify-between bg-paper p-3.5 rounded-lg border border-espresso/5">
      <div>
        <p className="font-medium text-espresso text-sm">{name}</p>
        <p className="text-xs text-latte mt-0.5">{desc}</p>
      </div>
      <span className="font-handwritten text-xl text-caramel ml-4 shrink-0 pt-0.5">{price}</span>
    </div>
  );
}

export default function MenuSection() {
  const [tab, setTab] = useState<"morning" | "afternoon">("morning");
  const food = tab === "morning" ? morningFood : afternoonFood;

  return (
    <section id="menu" className="py-20 px-5 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-handwritten text-caramel text-2xl">what we serve</span>
          <h2 className="font-display text-4xl text-espresso mt-1">Our Menu</h2>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {(["morning", "afternoon"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                tab === t
                  ? "bg-espresso text-cream border-espresso"
                  : "border-espresso/25 text-roast hover:border-espresso/50"
              }`}
            >
              {t === "morning" ? "Morning  9am–12pm" : "Afternoon  12pm–5pm"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-handwritten text-2xl text-caramel mb-4">☕ Coffee</h3>
            <div className="space-y-2.5">
              {coffeeItems.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-handwritten text-2xl text-caramel mb-4">🥖 Bakes & Food</h3>
            <div className="space-y-2.5">
              {food.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-latte mt-8">
          All prices in SGD · Subject to daily availability · Bake items vary by day
        </p>
      </div>
    </section>
  );
}

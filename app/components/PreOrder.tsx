"use client";
import { useState } from "react";

export default function PreOrder() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="order" className="py-20 px-5 bg-espresso">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-handwritten text-caramel text-2xl">skip the queue</span>
          <h2 className="font-display text-4xl text-cream mt-1">Pre-Order for Pickup</h2>
          <p className="text-cream/60 mt-3 text-sm">
            Order ahead, pick up at #01-29 Katong Shopping Centre. We&apos;ll confirm by WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="text-center bg-cream/10 border border-cream/15 rounded-2xl p-14">
            <p className="font-handwritten text-4xl text-caramel mb-3">Order received!</p>
            <p className="text-cream/70 text-sm">
              We&apos;ll WhatsApp you to confirm your order and pickup time. See you at the counter!
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-cream/60 block mb-1.5">Name</label>
                <input
                  required
                  className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-caramel text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-cream/60 block mb-1.5">WhatsApp / Phone</label>
                <input
                  required
                  className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-caramel text-sm"
                  placeholder="+65 9123 4567"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-cream/60 block mb-1.5">Pickup Date &amp; Time</label>
              <input
                required
                type="datetime-local"
                className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream/80 focus:outline-none focus:border-caramel text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-cream/60 block mb-1.5">Your Order</label>
              <textarea
                required
                rows={4}
                className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-caramel resize-none text-sm"
                placeholder="e.g. 1× Cheese Focaccia, 2× Latte, 1× Banana Bread..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-caramel text-espresso py-4 rounded-full font-semibold text-base hover:bg-caramel-light transition-colors"
            >
              Submit Pre-Order
            </button>
            <p className="text-center text-xs text-cream/40">
              We&apos;ll confirm via WhatsApp within a few hours during opening hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

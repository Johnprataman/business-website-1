"use client";
import { useState } from "react";

const times = [
  "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm",
  "3:00pm", "3:30pm", "4:00pm", "4:30pm",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="booking" className="py-20 px-5 bg-paper">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-handwritten text-caramel text-2xl">reserve a spot</span>
          <h2 className="font-display text-4xl text-espresso mt-1">Book a Table</h2>
          <p className="text-latte mt-3 text-sm">
            We have limited seating. Book ahead so we can save your spot!
          </p>
        </div>

        {submitted ? (
          <div className="text-center bg-caramel/10 border border-caramel/30 rounded-2xl p-14">
            <p className="font-handwritten text-4xl text-caramel mb-3">Booking received!</p>
            <p className="text-roast/70 text-sm">
              We&apos;ll WhatsApp you to confirm. See you soon!
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-cream rounded-2xl p-8 border border-espresso/10 space-y-4"
          >
            <div>
              <label className="text-xs text-roast block mb-1.5">Name</label>
              <input
                required
                className="w-full border border-espresso/20 rounded-lg px-4 py-3 bg-paper text-espresso placeholder:text-latte focus:outline-none focus:border-caramel text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-roast block mb-1.5">WhatsApp / Phone</label>
              <input
                required
                className="w-full border border-espresso/20 rounded-lg px-4 py-3 bg-paper text-espresso placeholder:text-latte focus:outline-none focus:border-caramel text-sm"
                placeholder="+65 9123 4567"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-roast block mb-1.5">Date</label>
                <input
                  required
                  type="date"
                  className="w-full border border-espresso/20 rounded-lg px-4 py-3 bg-paper text-espresso focus:outline-none focus:border-caramel text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-roast block mb-1.5">Time</label>
                <select
                  required
                  className="w-full border border-espresso/20 rounded-lg px-4 py-3 bg-paper text-espresso focus:outline-none focus:border-caramel text-sm"
                >
                  <option value="">Select time</option>
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs text-roast block mb-1.5">Guests</label>
              <select
                required
                className="w-full border border-espresso/20 rounded-lg px-4 py-3 bg-paper text-espresso focus:outline-none focus:border-caramel text-sm"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-espresso text-cream py-4 rounded-full font-semibold hover:bg-roast transition-colors"
            >
              Request Booking
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

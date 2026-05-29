const social = [
  { icon: "📷", label: "Instagram", href: "https://instagram.com/aboutcoffeeco" },
  { icon: "🎵", label: "TikTok", href: "https://tiktok.com/@aboutcoffeeco" },
  { icon: "✉️", label: "hello@aboutcoffeeco.sg", href: "mailto:hello@aboutcoffeeco.sg" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-16 pb-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <p className="font-handwritten text-3xl text-cream mb-2">about coffee co.</p>
            <p className="text-cream/50 text-sm leading-relaxed">
              Honest coffee and daily in-house bakes at Katong Shopping Centre.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream/40 mb-4">Hours</h4>
            <p className="text-cream/70 text-sm">Monday – Sunday</p>
            <p className="text-cream font-semibold text-sm">9:00am – 5:00pm</p>
            <p className="text-cream/40 text-xs mt-1">Including public holidays</p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream/40 mb-4">Location</h4>
            <p className="text-cream/70 text-sm">#01-29 Katong Shopping Centre</p>
            <p className="text-cream/70 text-sm">865 Mountbatten Rd</p>
            <p className="text-cream/70 text-sm">Singapore 437844</p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream/40 mb-4">Connect</h4>
            <div className="space-y-2.5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 text-cream/60 hover:text-caramel text-sm transition-colors"
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-wrap justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} about coffee co. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-cream/30">
            <a href="#home" className="hover:text-cream/60 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// components/sections/CTA.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 shadow-2xl">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/40 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-blue-400/30 blur-2xl" />
          <div className="pointer-events-none absolute top-10 right-1/3 h-40 w-40 rounded-full bg-white/10 blur-xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 py-12 md:px-14 md:py-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to Upskill Your Workforce?
              </h2>
              <p className="mt-4 text-sm md:text-base text-blue-50 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Partner with Accredian to build a future-ready team through
                enterprise learning programs designed for measurable impact.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm md:text-base font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-50 whitespace-nowrap"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
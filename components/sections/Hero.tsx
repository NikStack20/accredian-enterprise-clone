// components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface Feature {
  label: string;
}

const features: Feature[] = [
  { label: "Tailored Solutions" },
  { label: "Industry Insights" },
  { label: "Expert Guidance" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12">
      <Container>
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 py-14 md:px-12 lg:px-16 lg:py-16">
            <div className="max-w-xl relative z-10">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-xs md:text-sm font-medium text-blue-700">
                Enterprise Learning Solutions
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Build Future-Ready Teams with Industry{" "}
                <span className="text-blue-600">Expertise</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                Partner with Accredian to design customized, outcome-driven
                learning programs that upskill your workforce and drive
                measurable business impact.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700 font-medium">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <PrimaryButton text="Talk to an Expert" />
                </Link>
              </div>
            </div>

            <div className="relative mt-10 lg:mt-0 h-[280px] sm:h-[360px] lg:h-[440px] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[45%]">
              <Image
                src="/assets/hero/hero.webp"
                alt="Enterprise learning professionals collaborating"
                fill
                priority
                className="object-contain object-bottom lg:object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
// components/sections/WhoShouldJoin.tsx
import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Audience {
  title: string;
  description: string;
  icon: LucideIcon;
}

const audiences: Audience[] = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase,
  },
];

export function WhoShouldJoin() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 px-8 py-10 md:px-14 md:py-14">
            <div className="flex flex-col h-full">
              <span className="text-sm font-medium text-blue-100">
                Who Should Join?
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Strategic Skill Enhancement
              </h2>
              <p className="mt-4 text-sm md:text-base text-blue-50 leading-relaxed max-w-md">
                Accredian&apos;s enterprise programs are built for every
                professional ready to grow, regardless of background or
                experience level.
              </p>
              <div className="mt-auto pt-6 relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 self-start">
                <Image
                  src="/assets/who-should-join.png"
                  alt="Professionals collaborating"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                  className="object-contain object-left-bottom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 content-start">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="transition-all duration-300 hover:translate-y-1"
                >
                  <audience.icon size={28} className="text-white" strokeWidth={1.75} />
                  <h3 className="mt-3 text-base md:text-lg font-semibold text-white">
                    {audience.title}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm text-blue-50 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
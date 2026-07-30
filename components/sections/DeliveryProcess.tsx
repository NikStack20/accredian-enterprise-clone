// components/sections/DeliveryProcess.tsx
import { SearchCheck, ClipboardList, CalendarClock, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessCard } from "@/components/ui/ProcessCard";

interface Process {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const processes: Process[] = [
  {
    step: "1",
    title: "Skill Gap Analysis",
    description:
      "We assess your team's current capabilities to identify the most critical skill gaps.",
    icon: SearchCheck,
  },
  {
    step: "2",
    title: "Customized Learning Plan",
    description:
      "A tailored curriculum is designed around your enterprise's goals and workforce needs.",
    icon: ClipboardList,
  },
  {
    step: "3",
    title: "Flexible Program Delivery",
    description:
      "Programs are delivered through flexible formats that fit your team's schedule and scale.",
    icon: CalendarClock,
  },
];

export function DeliveryProcess() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="How We Deliver Results"
          subtitle="A proven delivery process that ensures measurable learning outcomes for enterprise teams."
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process) => (
            <ProcessCard
              key={process.step}
              step={process.step}
              title={process.title}
              description={process.description}
              icon={process.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
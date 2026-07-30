// components/sections/CATFramework.tsx
import { Lightbulb, Wrench, Layers, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FrameworkCard } from "@/components/ui/FrameworkCard";

interface Framework {
  title: string;
  description: string;
  icon: LucideIcon;
}

const frameworks: Framework[] = [
  {
    title: "Concept",
    description:
      "Build strong theoretical foundations through structured, expert-led curriculum design.",
    icon: Lightbulb,
  },
  {
    title: "Application",
    description:
      "Translate concepts into practice through real-world, industry-aligned project work.",
    icon: Layers,
  },
  {
    title: "Tools",
    description:
      "Gain hands-on proficiency with the tools and platforms used by leading enterprises.",
    icon: Wrench,
  },
];

export function CATFramework() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="The CAT Framework"
          subtitle="A structured learning methodology that builds capability through concept mastery, applied practice, and tool proficiency."
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {frameworks.map((framework) => (
            <FrameworkCard
              key={framework.title}
              title={framework.title}
              description={framework.description}
              icon={framework.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
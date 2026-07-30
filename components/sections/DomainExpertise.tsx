// components/sections/DomainExpertise.tsx
import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Database,
  Code2,
  ClipboardList,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

interface Domain {
  title: string;
  description: string;
  icon: LucideIcon;
}

const domains: Domain[] = [
  {
    title: "AI & Machine Learning",
    description:
      "Build expertise in intelligent systems, deep learning, and applied AI for business impact.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Computing",
    description:
      "Master modern cloud infrastructure, deployment, and scalable architecture practices.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    description:
      "Develop strong foundations in securing systems, networks, and enterprise data.",
    icon: ShieldCheck,
  },
  {
    title: "Data Science",
    description:
      "Gain hands-on skills in data analysis, statistical modeling, and decision intelligence.",
    icon: Database,
  },
  {
    title: "Software Engineering",
    description:
      "Strengthen core engineering practices across design, development, and deployment.",
    icon: Code2,
  },
  {
    title: "Product Management",
    description:
      "Learn to lead product strategy, execution, and cross-functional collaboration.",
    icon: ClipboardList,
  },
];

export function DomainExpertise() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Domain Expertise"
          subtitle="Deep, industry-relevant expertise across the technology domains shaping the future of enterprise talent."
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <FeatureCard
              key={domain.title}
              title={domain.title}
              description={domain.description}
              icon={domain.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
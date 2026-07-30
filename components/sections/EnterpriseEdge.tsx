// components/sections/EnterpriseEdge.tsx
import {
  Users,
  Video,
  Route,
  FolderKanban,
  BriefcaseBusiness,
  LineChart,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Industry Experts",
    description:
      "Learn directly from practitioners who have led teams and shipped products at top global organizations.",
    icon: Users,
  },
  {
    title: "Live Mentorship",
    description:
      "Get personalized guidance through live sessions designed to accelerate your learning curve.",
    icon: Video,
  },
  {
    title: "Custom Learning Paths",
    description:
      "Curriculum tailored to your team's goals, skill gaps, and business outcomes.",
    icon: Route,
  },
  {
    title: "Real Projects",
    description:
      "Apply concepts to real-world, industry-grade projects that build practical expertise.",
    icon: FolderKanban,
  },
  {
    title: "Placement Support",
    description:
      "Dedicated support to help learners transition into impactful, high-growth roles.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Progress Tracking",
    description:
      "Transparent dashboards to monitor learner progress and measure training ROI.",
    icon: LineChart,
  },
];

export function EnterpriseEdge() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="The Accredian Edge"
          subtitle="Enterprises partner with Accredian for outcome-driven learning experiences built on real expertise and measurable impact."
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "10K+",
    label: "Professionals Trained",
  },
  {
    value: "500+",
    label: "Enterprise Clients",
  },
  {
    value: "250+",
    label: "Learning Programs",
  },
  {
    value: "95%",
    label: "Completion Rate",
  },
];

export function TrackRecord() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Our Track Record"
          subtitle="Delivering measurable impact through enterprise-grade learning solutions trusted by leading organizations worldwide."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
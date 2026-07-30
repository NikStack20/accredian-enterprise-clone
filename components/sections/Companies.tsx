// components/sections/Companies.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Company {
  name: string;
}

const companies: Company[] = [
  { name: "Google" },
  { name: "Microsoft" },
  { name: "Amazon" },
  { name: "Infosys" },
  { name: "TCS" },
  { name: "Accenture" },
  { name: "Wipro" },
  { name: "Deloitte" },
];

export function Companies() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeading
          title="Trusted by Leading Enterprises"
          subtitle="Empowering workforce transformation for global organizations across technology and consulting."
          center
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white h-24 px-4 transition-all duration-300 hover:shadow-md"
            >
              <span className="text-sm md:text-base font-semibold text-gray-500">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
// components/sections/Testimonials.tsx
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "VP of Engineering",
    company: "Nexora Technologies",
    review:
      "Accredian's enterprise program transformed how our engineering team approaches problem-solving. The customized curriculum was directly aligned with our tech stack.",
    rating: 5,
    image: "/assets/testimonials/testimonial-1.webp",
  },
  {
    name: "Rohan Mehta",
    role: "Head of Learning & Development",
    company: "Finlytics Corp",
    review:
      "The delivery process was seamless from skill gap analysis to program rollout. Our team's productivity and confidence improved significantly.",
    rating: 5,
    image: "/assets/testimonials/testimonial-2.webp",
  },
  {
    name: "Priya Nair",
    role: "Director of Product",
    company: "CloudSprint Systems",
    review:
      "Exceptional mentorship and real-world project exposure. Accredian's programs are genuinely built for enterprise-scale impact.",
    rating: 4,
    image: "/assets/testimonials/testimonial-33.webp",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="What Our Partners Say"
          subtitle="Trusted by enterprise teams to deliver measurable learning outcomes."
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }
                  />
                ))}
              </div>
              <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                {testimonial.review}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
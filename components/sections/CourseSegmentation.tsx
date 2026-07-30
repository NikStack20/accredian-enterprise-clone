// components/sections/CourseSegmentation.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/ui/CourseCard";

interface Course {
  title: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Program Specific",
    description:
      "Structured programs mapped to certifications and long-term career progression tracks.",
    image: "/assets/course-segmentation/course-program-specific-1.webp",
  },
  {
    title: "Industry Specific",
    description:
      "Curriculum tailored to the demands and workflows of specific industry verticals.",
    image: "/assets/course-segmentation/course-program-specific-2.webp",
  },
  {
    title: "Topic Specific",
    description:
      "Focused modules built around a single high-impact skill or technology area.",
    image: "/assets/course-segmentation/course-program-specific-3.webp",
  },
  {
    title: "Level Specific",
    description:
      "Learning paths designed around experience level, from beginner to advanced practitioner.",
    image: "/assets/course-segmentation/course-program-specific-4.webp",
  },
];

export function CourseSegmentation() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Tailored Course Segmentation"
          subtitle="Enterprise learning journeys structured around programs, industries, topics, and experience levels to maximize workforce impact."
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
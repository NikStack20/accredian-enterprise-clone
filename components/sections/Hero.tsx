import Image from "next/image";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid items-center gap-10 rounded-2xl bg-slate-100 p-8 lg:grid-cols-2">

          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Next-Gen
              <br />
              <span className="text-blue-600">
                Expertise
              </span>{" "}
              For
              <br />
              Your Enterprise
            </h1>

            <p className="mt-6 text-gray-600">
              Cultivate high-performance teams through expert
              learning.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>✔ Tailored Solutions</span>
              <span>✔ Industry Insights</span>
              <span>✔ Expert Guidance</span>
            </div>

            <div className="mt-8">
              <PrimaryButton text="Enquire Now" />
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/hero.png"
              alt="Enterprise"
              width={500}
              height={450}
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
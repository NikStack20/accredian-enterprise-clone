import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { EnterpriseEdge } from "@/components/sections/EnterpriseEdge";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { WhoShouldJoin } from "@/components/sections/WhoShouldJoin";
import { CATFramework } from "@/components/sections/CATFramework";
import { Testimonials } from "@/components/sections/Testimonials";
import { DeliveryProcess } from "@/components/sections/DeliveryProcess";
import { Companies } from "@/components/sections/Companies";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrackRecord />
        <EnterpriseEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <Testimonials />
        <DeliveryProcess />
        <Companies/>
      </main>
    </>
  );
}
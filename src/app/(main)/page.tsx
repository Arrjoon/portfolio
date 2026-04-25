
import ChatWidget from "@/components/ChatWidget";
import Skills from "@/components/Experience";
import ImpactSection from "@/components/ImpactSection";
import InitialSection from "@/components/InitialSection";
import ProjectsCardSection from "@/components/ProjectCard";
import WorkExperience from "@/components/WorkExperience";
import WorkTogetherSection from "@/components/WorkTogether";

export default function Home() {
  return (
    <>
      <InitialSection />

      <WorkTogetherSection />

      <ProjectsCardSection />

      <Skills />

      <WorkExperience />

      <ImpactSection />

      <ChatWidget />
    </>
  );
}

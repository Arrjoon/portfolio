
import AnimatedSection from '@/components/AnimatedSection';
import Skills from '@/components/Experience';
import Footer from '@/components/Footer';
import ImpactSection from '@/components/ImpactSection';
import InitialSection from '@/components/InitialSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkExperience from '@/components/WorkExperience';
import WorkTogetherSection from '@/components/WorkTogether';

export default function Home() {
  return (
    <>
      <AnimatedSection animation="zoomIn" delay={0.1}>
        <InitialSection />
      </AnimatedSection>

     
      <WorkTogetherSection/>
   

      <AnimatedSection animation="zoomIn" delay={0.2}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection animation="scaleUp" delay={0.3}>
        <WorkExperience />
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={0.4}>
        <Skills />
      </AnimatedSection>


      <AnimatedSection  delay={0.3}>
        <ImpactSection/>
      </AnimatedSection>

      {/* <AnimatedSection  animation="swirl"  delay={0.4}>
        <Footer/>
      </AnimatedSection> */}
    </>
  );
}
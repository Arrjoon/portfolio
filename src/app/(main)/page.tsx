
import AnimatedSection from '@/components/AnimatedSection';
import BannerSection from '@/components/BannerSection';
import Skills from '@/components/Experience';
import Footer from '@/components/Footer';
import InitialSection from '@/components/InitialSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkExperience from '@/components/WorkExperience';

export default function Home() {
  return (
    <>
      <AnimatedSection animation="zoomIn" delay={0.1}>
        <InitialSection />
      </AnimatedSection>

      <AnimatedSection animation="swirl" delay={1}>
        <BannerSection />
      </AnimatedSection>

      <AnimatedSection animation="zoomIn" delay={0.2}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection animation="scaleUp" delay={0.3}>
        <WorkExperience />
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={0.4}>
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection animation="slideLeft" delay={0.4}>
        <Footer/>
      </AnimatedSection>
    </>
  );
}
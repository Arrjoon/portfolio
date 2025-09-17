import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";

const InitialSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-section-1 p-6">
      <div className="text-center max-w-3xl">
        <AnimatedText
          text="Hi, I'm Er.Arjun Nepali Currently Fullstack developer"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-text-primary"
        />
        <h2 className="text-xl sm:text-2xl text-text-secondary mb-8">
          Computer Engineer
        </h2>
        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="https://www.linkedin.com/in/arjun-nepali-32b876244/"
            className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors text-text-primary"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InitialSection;

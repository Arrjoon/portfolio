import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-blue-50 dark:bg-gray-800 p-6">
      <div className="text-center max-w-3xl">
        <AnimatedText 
          text="Hi, I'm  Er.Arjun Nepali Currently Fullstack developer" 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
        />
        <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full stack developer Developer 
        </h2>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
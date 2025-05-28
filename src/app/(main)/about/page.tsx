export const metadata = {
  title: 'About Arjun Nepali',
};

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          I am a passionate frontend developer with 5 years of experience building
          modern web applications. My expertise includes React, Next.js, and
          TypeScript.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript/TypeScript</li>
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
    </section>
  );
}
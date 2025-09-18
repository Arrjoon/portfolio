export const metadata = {
  title: 'About Arjun Nepali',
};

export default function About() {
  return (
    <section className="text-center max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-text-primary">About Me</h1>
      <div className="prose dark:prose-invert max-w-none text-text-primary text-lg">
        <p className="mb-6">
          I am a passionate and dedicated developer with almost 2 years of experience 
          creating modern web applications that deliver exceptional user experiences. 
          My expertise includes React, Next.js,python and django, but what truly sets me 
          apart is my commitment to understanding user needs and solving real problems.
        </p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-6 text-accent">My Approach</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2 text-text-primary">Creative Problem-Solving</h3>
            <p className="text-text-secondary">
              I thrive on tackling complex challenges and finding innovative solutions 
              that balance technical excellence with practical usability.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2 text-text-primary">Continuous Learning</h3>
            <p className="text-text-secondary">
              In the rapidly evolving tech landscape, I maintain a growth mindset, 
              constantly exploring new technologies and methodologies to enhance my skills.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2 text-text-primary">Collaborative Spirit</h3>
            <p className="text-text-secondary">
              I believe the best products are built through teamwork, open communication, 
              and shared vision. I value diverse perspectives and constructive feedback.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2 text-text-primary">User-Centered Design</h3>
            <p className="text-text-secondary">
              Every line of code I write is guided by the end-user's experience. 
              I prioritize accessibility, performance, and intuitive interfaces.
            </p>
          </div>
        </div>
        
        <p className="mt-10 text-text-primary">
          Beyond technical skills, I bring dedication, adaptability, and a genuine passion 
          for creating digital solutions that make a positive impact on people's lives.
        </p>
      </div>
    </section>
  );
}
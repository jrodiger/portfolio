import Image from "next/image";

export function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="container flex items-center justify-center">
        <div className="w-full max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12 items-start text-left">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                I specialize in developing scalable software solutions, interactive web applications, 
                and robust data pipelines for complex biological analyses. With over 7 years of experience spanning full-stack web development, 
                relational database optimization, and leveraging large language models for advanced data aggregation, my work consistently 
                bridges the gap between bioinformatics innovation and practical applications in genomic research and drug discovery. 
                I'm passionate about creating tools that not only streamline scientific workflows but also empower researchers to explore 
                data intuitively and effectively.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Core Strengths</h3>
                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="mr-3 text-primary">•</span>
                    Pipeline Development & Workflow Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-primary">•</span>
                    Cloud Computing & Infrastructure Design
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-primary">•</span>
                    Data Analysis & Scientific Computing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-primary">•</span>
                    Software Architecture & Best Practices
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Technical Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">PostgreSQL</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">Django</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">Nextflow</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">AWS</span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">AI Agents</span>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-24 w-full">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/profile.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

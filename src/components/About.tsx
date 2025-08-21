import React from 'react';
import { Brain, Code, Database, Cpu } from 'lucide-react';

const About = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI & LLM Expertise',
      description: 'RAG, fine-tuning, agents, evals, guardrails.'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Web, mobile, APIs, secure auth.'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'ETL/ELT, lakehouse, vector DBs, dashboards.'
    },
    {
      icon: Cpu,
      title: 'Hardware + IoT',
      description: 'embedded firmware, sensors, cloud integration.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-alkatra font-bold mb-6">
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-subtle-gray leading-relaxed">
            <p>
              Alloc builds intelligent digital solutions—from AI-powered apps and LLMs to data systems and smart hardware—seamlessly connecting software with the physical world.
            </p>
            <p>
              We combine full-stack engineering, AI expertise, and embedded/IoT to ship reliable, future-ready products.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 animate-on-scroll">
          <div className="glass-card max-w-3xl mx-auto p-8 text-center">
            <h3 className="text-2xl font-alkatra font-semibold mb-4 text-teal">Our Mission</h3>
            <p className="text-xl text-white leading-relaxed">
              "To allocate intelligence and innovation into every project."
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="glass-card p-8 text-center hover-glow animate-on-scroll group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal to-violet rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-alkatra font-semibold mb-4 text-white group-hover:text-teal transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-subtle-gray leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
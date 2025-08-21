import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated orb background */}
      <div className="absolute inset-0">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          {/* Logo/Monogram */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-teal to-violet rounded-2xl flex items-center justify-center glass-card">
              <span className="text-2xl font-alkatra font-bold text-white">A</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-alkatra font-bold mb-6 leading-tight">
            <span className="block text-white">Where Software Meets Hardware,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal via-electric-blue to-violet">
              Hardware, Powered by
            </span>
            <span className="block">Intelligence.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-subtle-gray mb-12 max-w-4xl mx-auto leading-relaxed">
            Websites, apps, AI & LLMs, data systems, and smart hardware—seamlessly connected.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNavClick('#contact')}
              className="primary-button group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => handleNavClick('#services')}
              className="secondary-button group"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-teal/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { 
  Smartphone, Brain, Zap, Cloud, RefreshCw, Shield,
  Target, Lightbulb, Building, Palette, Server, Cog,
  Wifi, CheckCircle, Code, Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Application Services',
      description: 'Web/mobile apps, APIs, real-time backends.'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence & LLMs',
      description: 'RAG, agents, fine-tuning, safety.'
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'workflows, chatbots, integrations.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS/Azure/GCP, Kubernetes, Terraform, CI/CD.'
    },
    {
      icon: RefreshCw,
      title: 'Core Modernization',
      description: 'refactors, microservices, performance.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'authN/Z, secrets, compliance, audits.'
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'roadmaps, ROI, discovery workshops.'
    },
    {
      icon: Lightbulb,
      title: 'Engineering R&D',
      description: 'prototypes, POCs, feasibility studies.'
    },
    {
      icon: Building,
      title: 'Enterprise Platforms',
      description: 'CRM/ERP integrations, SSO.'
    },
    {
      icon: Palette,
      title: 'Experience (UX/UI)',
      description: 'design systems, motion, accessibility.'
    },
    {
      icon: Server,
      title: 'Infrastructure Services',
      description: 'observability, scaling, cost control.'
    },
    {
      icon: Cog,
      title: 'Intelligent Process Automation',
      description: 'LLM tools + systems.'
    },
    {
      icon: Wifi,
      title: 'IoT & Engineering',
      description: 'edge devices, gateways, telemetry.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Engineering & Assurance',
      description: 'testing, reliability.'
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'full-cycle delivery.'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'architecture, due diligence, training.'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-alkatra font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-violet">Services</span>
          </h2>
          <p className="text-lg text-subtle-gray max-w-3xl mx-auto">
            Comprehensive solutions spanning the entire technology ecosystem
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.title}
                className={`glass-card p-6 hover-glow animate-on-scroll group ${
                  isEven ? 'slide-in-left' : 'slide-in-right'
                }`}
                style={{ animationDelay: `${Math.floor(index / 3) * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-violet rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-alkatra font-semibold mb-2 text-white group-hover:text-teal transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-subtle-gray text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
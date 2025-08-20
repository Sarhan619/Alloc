import React from 'react';
import { TrendingUp, Leaf, Eye, Brain, Building2, Zap } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Modern Business',
      gradient: 'from-teal to-electric-blue'
    },
    {
      icon: Leaf,
      title: 'Sustainability & Resilience',
      gradient: 'from-electric-blue to-violet'
    },
    {
      icon: Eye,
      title: 'Tech to Watch',
      gradient: 'from-violet to-teal'
    },
    {
      icon: Brain,
      title: 'Confident AI Adoption',
      gradient: 'from-teal to-violet'
    },
    {
      icon: Building2,
      title: 'Future-Ready Cities',
      gradient: 'from-electric-blue to-teal'
    },
    {
      icon: Zap,
      title: 'Think like an AI-native business',
      gradient: 'from-violet to-electric-blue'
    }
  ];

  return (
    <section id="insights" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-alkatra font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-violet">Insights</span>
          </h2>
          <p className="text-lg text-subtle-gray max-w-3xl mx-auto">
            Exploring the intersection of technology, business, and innovation
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            
            return (
              <div
                key={insight.title}
                className="glass-card p-8 hover-lift animate-on-scroll group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${insight.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-alkatra font-semibold text-center text-white group-hover:text-teal transition-colors duration-300">
                  {insight.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
import React, { useState } from 'react';
import { Mail, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const engagementModels = [
    'Pilot — Quick proof-of-concept projects',
    'Retainer — Ongoing development partnership',
    'Enterprise — Large-scale transformation initiatives'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8 mb-8">
              <p className="text-lg text-white mb-8 leading-relaxed">
                Ready to transform your ideas into reality? Whether you're looking to build cutting-edge AI applications, modernize your infrastructure, or create innovative IoT solutions, we're here to help.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-alkatra font-semibold mb-4 text-teal">Engagement Models</h3>
                <ul className="space-y-3">
                  {engagementModels.map((model, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                      <span className="text-subtle-gray">{model}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal" />
                  <span className="text-white">hello@alloc.ai</span>
                </div>
                
                <button className="secondary-button group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a call
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-space/50 border border-subtle-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-subtle-gray/70 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-space/50 border border-subtle-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-subtle-gray/70 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-space/50 border border-subtle-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-subtle-gray/70 transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-space/50 border border-subtle-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-subtle-gray/70 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full primary-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-teal bg-teal/10 px-4 py-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-subtle-gray/20 animate-on-scroll">
          <p className="text-subtle-gray">
            © {new Date().getFullYear()} Alloc — "Smartly Distributed, Seamlessly Connected."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  MessageCircle, Clock, CheckCircle, User, Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log(formData);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="text-blue-600" size={18} />,
      label: "Email",
      value: "ranawatnityanshu31@gmail.com",
      href: "mailto:ranawatnityanshu31@gmail.com"
    },
    {
      icon: <Phone className="text-emerald-600" size={18} />,
      label: "Phone",
      value: "+91-7877640913",
      href: "tel:+917877640913"
    },
    {
      icon: <MapPin className="text-red-600" size={18} />,
      label: "Location",
      value: "Vadodara, Gujarat, India",
      href: "https://maps.google.com/?q=Vadodara,Gujarat,India"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={16} />,
      label: "GitHub",
      href: "https://github.com/nityanshu31",
      color: "hover:text-slate-800"
    },
    {
      icon: <Linkedin size={16} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nityanshu-ranawat-a0556a219/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-5xl mx-auto">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">Contact</h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Compact */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-orange-100">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-800 text-sm">{method.label}</h3>
                      <p className="text-blue-600 text-sm">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links - Compact */}
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Connect</h2>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-all duration-300 ${social.color}`}
                  >
                    <div className="p-2 rounded-lg bg-orange-200">
                      {social.icon}
                    </div>
                    <span className="font-medium text-slate-800 text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Info - Compact */}
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Availability</h2>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-emerald-600" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-blue-600" />
                  <span>IST (GMT+5:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Compact */}
          <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Send Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-emerald-600 mx-auto mb-3" size={48} />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600 text-sm">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 text-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 text-sm"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-white border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 text-sm resize-none"
                    placeholder="Tell me more..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 disabled:from-slate-400 disabled:to-slate-500 text-white rounded-lg transition-all duration-300 font-medium text-sm shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

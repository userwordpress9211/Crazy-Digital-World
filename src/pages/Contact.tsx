import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["123 Digital Avenue, Tech City", "TC 54321, United States"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@crazydigitalworld.com", "support@crazydigitalworld.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] mb-6">
                Get in <span className="text-[#1EA6DA]">Touch</span>
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Have a project in mind? Let's discuss how we can help you achieve 
                your business goals with our IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold font-heading text-[#1F2933] mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="w-12 h-12 bg-[#EAF6FB] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#1EA6DA]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1F2933] mb-1">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-[#4B5563] text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 h-64 bg-[#F8FBFD] rounded-2xl border border-[#E3E8EE] flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20" />
                  <span className="text-[#1EA6DA] font-bold relative z-10">Map Integration</span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#E3E8EE] rounded-3xl p-8 md:p-10 shadow-sm">
                  <h2 className="text-2xl font-bold font-heading text-[#1F2933] mb-8">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1F2933]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8EE] bg-white text-[#1F2933] focus:outline-none focus:ring-2 focus:ring-[#1EA6DA] transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1F2933]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8EE] bg-white text-[#1F2933] focus:outline-none focus:ring-2 focus:ring-[#1EA6DA] transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1F2933]">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (234) 567-890"
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8EE] bg-white text-[#1F2933] focus:outline-none focus:ring-2 focus:ring-[#1EA6DA] transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1F2933]">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your Company"
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8EE] bg-white text-[#1F2933] focus:outline-none focus:ring-2 focus:ring-[#1EA6DA] transition-all"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#1F2933]">
                        Service Interested In
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8EE] bg-white text-[#1F2933] focus:outline-none focus:ring-2 focus:ring-[#1EA6DA] transition-all appearance-none"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        <option value="it-consulting">IT Services & Consulting</option>
                        <option value="ecommerce">E-Commerce & Listings</option>
                        <option value="workflow">Operations & Workflow</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="custom-software">Custom Software Development</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#1F2933]">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8EE] bg-white text-[#1F2933] focus:outline-none focus:ring-2 focus:ring-[#1EA6DA] transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#1EA6DA] text-white hover:bg-[#0F5FA8] h-14 text-lg font-bold rounded-xl shadow-lg shadow-[#1EA6DA]/20">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "What is your typical project timeline?", a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months." },
                { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive maintenance and support packages for all our projects." },
                { q: "What is your pricing model?", a: "We offer flexible pricing models including fixed-price, time & materials, and dedicated team arrangements." },
                { q: "Can you work with our existing team?", a: "Absolutely! We can seamlessly integrate with your in-house team or work independently." },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-[#E3E8EE] rounded-2xl p-8 shadow-sm">
                  <h3 className="font-bold text-[#1F2933] mb-3">{faq.q}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

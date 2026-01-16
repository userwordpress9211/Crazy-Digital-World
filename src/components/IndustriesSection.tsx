import { Heart, Utensils, Plane, Building2, Truck, Share2, ShoppingBag, Landmark } from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce Industry",
    description: "Scale your online store with our expert listing and management services for major platforms.",
    features: ["Amazon & Flipkart Management", "Inventory Optimization", "Sales Growth Strategies"],
  },
  {
    icon: Landmark,
    title: "Finance Industry",
    description: "Secure and robust financial systems for modern banking and fintech applications.",
    features: ["Automated Billing Systems", "Secure Payment Gateways", "Financial Analytics"],
  },
  {
    icon: Share2,
    title: "Social Media Platforms",
    description: "Engaging social networking solutions with real-time features and AI-driven content.",
    features: ["Real-time Messaging", "Content Personalization", "Interactive UI/UX"],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Optimize your logistics with end-to-end visibility and intelligent tracking solutions.",
    features: ["Real-time Tracking", "Warehouse Management", "Route Optimization"],
  },
  {
    icon: Building2,
    title: "Real Estate Apps",
    description: "Modern property management and listing platforms with immersive virtual experiences.",
    features: ["Virtual Property Tours", "Lead Management CRM", "Smart Search Filters"],
  },
  {
    icon: Heart,
    title: "Healthcare Solutions",
    description: "Compliant and secure healthcare applications for better patient care and management.",
    features: ["Telemedicine Platforms", "Patient Records Management", "Health Analytics"],
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-[#F8FBFD]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Tailored Solutions for Every Sector
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            We combine industry expertise with technical excellence to deliver solutions 
            that address the unique challenges of your business sector.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E3E8EE] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#EAF6FB] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1EA6DA] transition-all duration-300">
                <industry.icon className="w-7 h-7 text-[#1EA6DA] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3 group-hover:text-[#1EA6DA] transition-colors">
                {industry.title}
              </h3>
              <p className="text-[#4B5563] mb-6 text-sm leading-relaxed">
                {industry.description}
              </p>
              <ul className="space-y-3">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <div className="w-1.5 h-1.5 bg-[#1EA6DA] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

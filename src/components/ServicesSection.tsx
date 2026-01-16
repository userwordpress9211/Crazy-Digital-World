import { Laptop, ShoppingCart, Settings, Code, Smartphone, Globe, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "IT Services & Consulting",
    description: "Strategic IT consulting to align your technology with business goals and drive innovation.",
    color: "#1EA6DA"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Listings",
    description: "Expert management for Flipkart, Amazon, Myntra, and eBay to boost your online sales.",
    color: "#2EC4F1"
  },
  {
    icon: Settings,
    title: "Operations & Workflow",
    description: "Streamline your business processes with automated workflows and intelligent systems.",
    color: "#3B82F6"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailor-made software solutions designed to solve your unique business challenges.",
    color: "#1EA6DA"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "High-performance iOS and Android apps that provide seamless user experiences.",
    color: "#2EC4F1"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive, and SEO-friendly websites built with the latest technologies.",
    color: "#3B82F6"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Featured Services
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            We offer a comprehensive suite of digital solutions designed to accelerate your growth 
            and streamline your business operations.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E3E8EE] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30 hover:-translate-y-1"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3 group-hover:text-[#1EA6DA] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-bold text-[#1EA6DA] hover:text-[#0F5FA8] transition-colors"
              >
                Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

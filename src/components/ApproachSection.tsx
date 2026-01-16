import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We dive deep into your business processes to identify growth opportunities and technical gaps.",
    color: "#1EA6DA"
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our experts craft a tailored roadmap that aligns technology with your specific business objectives.",
    color: "#2EC4F1"
  },
  {
    icon: Code,
    title: "Development & Integration",
    description: "We build and integrate robust solutions using cutting-edge technologies and agile methodologies.",
    color: "#3B82F6"
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Continuous monitoring and optimization to ensure your digital solutions deliver maximum impact.",
    color: "#1EA6DA"
  }
];

const ApproachSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Development Approach
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            We follow a structured, transparent, and result-oriented approach to ensure 
            every project we undertake is a success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-[#1EA6DA]/20 via-[#2EC4F1]/20 to-[#1EA6DA]/20 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-white border-2 border-[#E3E8EE] group-hover:border-[#1EA6DA] group-hover:shadow-lg transition-all duration-300 relative z-10"
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1EA6DA] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  0{index + 1}
                </div>
                <step.icon className="w-10 h-10 text-[#1EA6DA]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3">
                {step.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

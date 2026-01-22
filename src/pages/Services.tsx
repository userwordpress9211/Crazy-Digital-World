import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";


import { 
  Laptop, 
  ShoppingCart, 
  Settings, 
  Code, 
  Smartphone, 
  Globe, 
  Cloud, 
  Shield,
  ArrowRight,
  Search,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "IT Services & Consulting",
    description:
      "Strategic IT consulting to align technology with business goals and drive innovation.",
    slug: "it-services-consulting",
    features: [
      "IT Strategy & Roadmapping",
      "Digital Transformation",
      "Technology Audits",
      "Infrastructure Planning",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Marketplace Management",
    description:
      "Expert management for Amazon, Flipkart, Myntra, and eBay to maximize online sales.",
    slug: "ecommerce-listings",
    features: [
      "Product Listing Optimization",
      "Account Management",
      "Marketplace Ads",
      "Sales & Performance Analytics",
    ],
  },
  {
    icon: Settings,
    title: "Operations & Workflow Automation",
    description:
      "Automate and optimize business processes with intelligent workflow solutions.",
    slug: "operations-workflow-automation",
    features: [
      "Business Process Automation",
      "Workflow Design",
      "CRM & Tool Integration",
      "Task & Approval Management",
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions built to solve complex business challenges.",
    slug: "custom-software-development",
    features: [
      "Enterprise Software Development",
      "SaaS Product Development",
      "API Development & Integration",
      "Legacy System Modernization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android apps delivering seamless user experiences.",
    slug: "mobile-app-development",
    features: [
      "Native iOS & Android Apps",
      "React Native Development",
      "Flutter App Development",
      "App Store Optimization",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive, and SEO-friendly websites built with cutting-edge technologies.",
    slug: "web-development",
    features: [
      "React & Next.js Development",
      "WordPress & CMS Solutions",
      "E-Commerce Development",
      "Performance & SEO Optimization",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Scalable and secure cloud solutions to improve agility and reduce infrastructure costs.",
    slug: "cloud-services",
    features: [
      "AWS, Azure & GCP",
      "Cloud Migration",
      "DevOps & CI/CD",
      "Serverless Architecture",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive security solutions to protect systems, data, and digital assets.",
    slug: "cybersecurity-solutions",
    features: [
      "Security Audits & Assessments",
      "Data Protection & Encryption",
      "Threat Detection & Response",
      "Compliance & Risk Management",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Services",
    description:
      "Grow your brand visibility and engagement with result-driven digital marketing.",
    slug: "digital-marketing-services",
    features: [
      "Marketing Strategy",
      "Paid Advertising Campaigns",
      "Content Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Improve search rankings, organic traffic, and long-term online visibility.",
    slug: "seo-services",
    features: [
      "Keyword Research",
      "On-Page & Technical SEO",
      "Content Optimization",
      "Link Building",
    ],
  },
  {
    icon: Globe,
    title: "Performance Marketing",
    description:
      "ROI-focused marketing campaigns designed to maximize conversions and revenue.",
    slug: "performance-marketing",
    features: [
      "Google & Meta Ads",
      "Conversion Tracking",
      "Landing Page Optimization",
      "A/B Testing & Scaling",
    ],
  },
  {
    icon: Cloud,
    title: "Lead Generation",
    description:
      "Targeted strategies to generate high-quality, sales-ready business leads.",
    slug: "lead-generation",
    features: [
      "Audience Targeting",
      "Lead Funnel Design",
      "CRM Integration",
      "Lead Nurturing Automation",
    ],
  },
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    description:
      "Engage audiences and build brand loyalty across social media platforms.",
    slug: "social-media-marketing",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Paid Social Campaigns",
    ],
  },
];


const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Our Expertise
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] mb-6">
                Our <span className="text-[#1EA6DA]">Services</span>
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Transform your business with our comprehensive suite of IT solutions. 
                From custom software development to cloud services, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white border border-[#E3E8EE] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#EAF6FB] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1EA6DA] transition-all duration-300">
                    <service.icon className="w-7 h-7 text-[#1EA6DA] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3 group-hover:text-[#1EA6DA] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#4B5563] mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <div className="w-1.5 h-1.5 bg-[#1EA6DA] rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#1EA6DA]">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button className="bg-white text-[#1EA6DA] hover:bg-[#EAF6FB] h-14 px-10 rounded-xl text-lg font-bold shadow-xl" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

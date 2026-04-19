import {
  Laptop,
  ShoppingCart,
  Settings,
  Code,
  Smartphone,
  Globe,
  Cloud,
  Shield,
  TrendingUp,
  Search,
  Megaphone,
} from "lucide-react";

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  slug: string;
  color: string;
}

export const services: ServiceItem[] = [
  {
    icon: Laptop,
    title: "IT Services & Consulting",
    description:
      "Strategic IT consulting and infrastructure solutions aligned with your business goals.",
    slug: "it-services-consulting",
    color: "#1EA6DA",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Marketplace Management",
    description:
      "Complete management for Amazon, Flipkart, Myntra, and eBay to boost sales.",
    slug: "ecommerce-listings",
    color: "#2EC4F1",
  },
  {
    icon: Settings,
    title: "Operations & Workflow Automation",
    description:
      "Automate and optimize workflows with scalable business systems.",
    slug: "operations-workflow-automation",
    color: "#3B82F6",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions to solve complex business challenges.",
    slug: "custom-software-development",
    color: "#1EA6DA",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android applications with seamless UX.",
    slug: "mobile-app-development",
    color: "#2EC4F1",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive, and SEO-friendly websites built to convert.",
    slug: "web-development",
    color: "#3B82F6",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    description:
      "Data-driven marketing strategies to grow visibility and engagement.",
    slug: "digital-marketing-services",
    color: "#1EA6DA",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Improve rankings, organic traffic, and online visibility.",
    slug: "seo-services",
    color: "#2EC4F1",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "ROI-focused campaigns designed to maximize conversions.",
    slug: "performance-marketing",
    color: "#3B82F6",
  },
  {
    icon: Cloud,
    title: "Lead Generation",
    description:
      "Targeted strategies to generate high-quality business leads.",
    slug: "lead-generation",
    color: "#1EA6DA",
  },
  {
    icon: Shield,
    title: "Social Media Marketing",
    description:
      "Engage and grow audiences across social platforms.",
    slug: "social-media-marketing",
    color: "#2EC4F1",
  },
];

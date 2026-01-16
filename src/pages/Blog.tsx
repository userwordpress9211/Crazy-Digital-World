import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "WordPress Development for Fast, High Performing Websites",
    excerpt: "Discover how WordPress can be optimized for enterprise-grade performance while maintaining ease of use and flexibility.",
    date: "17 Dec 2024",
    author: "Rahul Gupta",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    slug: "wordpress-development-fast-websites",
  },
  {
    id: 2,
    title: "MERN Stack Development: Built for Growth, Not Rebuilds",
    excerpt: "Learn why MERN stack is the go-to choice for scalable web applications and how it can future-proof your digital investments.",
    date: "15 Dec 2024",
    author: "Priya Sharma",
    readTime: "7 min read",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    slug: "mern-stack-development-growth",
  },
  {
    id: 3,
    title: "December 2024 Core Update | Why Your SEO Rankings Shifted",
    excerpt: "Google's latest core update has impacted many websites. Here's what changed and how to adapt your SEO strategy.",
    date: "13 Dec 2024",
    author: "Amit Verma",
    readTime: "6 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    slug: "december-2024-core-update-seo",
  },
  {
    id: 4,
    title: "The Future of AI in Mobile App Development",
    excerpt: "Explore how artificial intelligence is transforming mobile app development and what it means for your next project.",
    date: "10 Dec 2024",
    author: "Neha Patel",
    readTime: "8 min read",
    category: "AI & Mobile",
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=600&h=400&fit=crop",
    slug: "ai-mobile-app-development",
  },
  {
    id: 5,
    title: "Cloud Migration: A Step-by-Step Guide for Enterprises",
    excerpt: "Planning to move to the cloud? This comprehensive guide covers everything you need to know for a successful migration.",
    date: "8 Dec 2024",
    author: "Vikram Singh",
    readTime: "10 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    slug: "cloud-migration-guide-enterprises",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Small businesses are increasingly targeted by cyber attacks. Learn how to protect your business with these essential practices.",
    date: "5 Dec 2024",
    author: "Ananya Reddy",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    slug: "cybersecurity-best-practices-small-businesses",
  },
];

const categories = ["All", "Web Development", "Full Stack", "SEO", "AI & Mobile", "Cloud", "Security"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Insights, tutorials, and industry updates from our team of experts. 
                Stay ahead with the latest in technology and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="section-container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </span>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-secondary/50">
          <div className="section-container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

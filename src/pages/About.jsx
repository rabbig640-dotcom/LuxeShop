import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      bio: "Visionary leader with 15 years in e-commerce"
    },
    {
      name: "Lisa Chen",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      bio: "Creating beautiful experiences since 2015"
    },
    {
      name: "Marcus Thompson",
      role: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      bio: "Building robust solutions for modern commerce"
    },
    {
      name: "Sarah O'Connor",
      role: "Customer Success",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      bio: "Ensuring every customer leaves happy"
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality First",
      description: "We never compromise on quality. Every product is carefully curated and tested."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Constantly pushing boundaries to bring you the latest and greatest products."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Customer Love",
      description: "Our customers are at the heart of everything we do. Your satisfaction is our mission."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable sourcing for a better tomorrow."
    }
  ];

  const milestones = [
    { year: "2018", event: "LuxeShop founded with a vision to make premium shopping accessible" },
    { year: "2019", event: "Reached 10,000 happy customers and expanded product categories" },
    { year: "2020", event: "Launched sustainable product line and carbon-neutral shipping" },
    { year: "2021", event: "Opened first flagship store and introduced AR shopping experience" },
    { year: "2022", event: "Surpassed 100,000 customers and won Best E-Commerce Platform award" },
    { year: "2023", event: "Global expansion to 50+ countries with localized experiences" },
    { year: "2024", event: "Launched AI-powered personalized shopping and reached 500+ products" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to redefine online shopping by combining premium products, 
            exceptional design, and a seamless customer experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white">
                Why We Exist
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                LuxeShop was born from a simple idea: shopping for quality products shouldn't be complicated. 
                We saw a gap in the market between luxury accessibility and everyday convenience, 
                and we set out to bridge it.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we curate the finest products from around the world, ensuring each item meets 
                our rigorous standards for quality, design, and sustainability. Our team personally 
                tests and approves every product before it reaches your doorstep.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">500+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Premium Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Countries Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">10K+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">6+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            The passionate people behind LuxeShop who work tirelessly to bring you the best shopping experience
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 inline-block">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 items-start animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-24 pt-1">
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-700 rounded-xl p-5 shadow-sm relative">
                  <div className="absolute left-0 top-6 w-3 h-3 bg-primary-500 rounded-full -translate-x-[1.65rem]" />
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Ready to Experience Premium Shopping?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join thousands of satisfied customers who trust LuxeShop for quality products.
          </p>
          <Link to="/products">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Shopping Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
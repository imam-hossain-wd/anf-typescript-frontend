"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Heart, 
  Users, 
  Shield, 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Play,
  Star,
  CheckCircle,
  Calendar,
  MapPin
} from "lucide-react";


// Mock data - replace with actual API calls
const featuredPrograms = [
  {
    id: 1,
    title: "Zakat Distribution",
    description: "Proper distribution of Zakat to eligible recipients according to Islamic principles",
    raised: 125000,
    goal: 250000,
    donors: 1247,
    image: "/images/zakat-program.jpg"
  },
  {
    id: 2,
    title: "Emergency Relief",
    description: "Immediate aid for flood-affected families with food and shelter",
    raised: 75000,
    goal: 150000,
    donors: 892,
    image: "/images/emergency-relief.jpg"
  },
  {
    id: 3,
    title: "Education Support",
    description: "Sponsoring education for underprivileged children in rural areas",
    raised: 89000,
    goal: 200000,
    donors: 567,
    image: "/images/education-support.jpg"
  }
];

const recentActivities = [
  {
    id: 1,
    title: "Winter Blanket Distribution",
    location: "Northern Bangladesh",
    date: "2024-01-15",
    volunteers: 45,
    beneficiaries: 1200
  },
  {
    id: 2,
    title: "Quran Distribution Program",
    location: "Rural Madrashas",
    date: "2024-01-10",
    volunteers: 23,
    beneficiaries: 500
  },
  {
    id: 3,
    title: "Medical Camp Setup",
    location: "Coastal Areas",
    date: "2024-01-08",
    volunteers: 67,
    beneficiaries: 800
  }
];

const stats = [
  { number: "2.5M+", label: "Lives Impacted", icon: Users },
  { number: "75K+", label: "Donors Worldwide", icon: Heart },
  { number: "120+", label: "Projects Completed", icon: CheckCircle },
  { number: "15+", label: "Years of Service", icon: Clock }
];

export default function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Your Sadaqah Changes Lives",
      subtitle: "Join us in making a lasting impact through continuous charity",
      image: "/images/hero-1.jpg",
      cta: "Donate Now",
      link: "/donate"
    },
    {
      title: "Emergency Relief for Flood Victims",
      subtitle: "Provide immediate aid to families affected by natural disasters",
      image: "/images/hero-2.jpg",
      cta: "Help Now",
      link: "/donate/emergency"
    },
    {
      title: "Build a Masjid, Earn Jariyah",
      subtitle: "Support the construction of As Sunnah Complex",
      image: "/images/hero-3.jpg",
      cta: "Learn More",
      link: "/donate/assunnah-complex"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-800/60 z-10"></div>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
        
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-10 z-20"></div>
        
        {/* Hero Content */}
        <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <Star className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-medium">Trusted Islamic Charity Since 2009</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={heroSlides[currentSlide].link}
              className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Heart className="h-5 w-5" />
              {heroSlides[currentSlide].cta}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/about"
              className="group border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <Play className="h-5 w-5" />
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amber-400 scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Featured Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in these ongoing charitable initiatives and earn continuous rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-green-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Raised: ৳{program.raised.toLocaleString()}</span>
                      <span>Goal: ৳{program.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(program.raised / program.goal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <Users className="h-4 w-4 inline mr-1" />
                      {program.donors.toLocaleString()} donors
                    </div>
                    <Link
                      href={`/donate/${program.title.toLowerCase().replace(' ', '-')}`}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      Donate
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group"
            >
              View All Programs
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how your donations are making a real difference in communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-amber-500 mb-3">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">{new Date(activity.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{activity.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-emerald-50 rounded-xl p-3">
                      <Users className="h-6 w-6 text-emerald-600 mx-auto mb-1" />
                      <div className="font-bold text-gray-900">{activity.volunteers}</div>
                      <div className="text-xs text-gray-600">Volunteers</div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3">
                      <Heart className="h-6 w-6 text-amber-600 mx-auto mb-1" />
                      <div className="font-bold text-gray-900">{activity.beneficiaries}</div>
                      <div className="text-xs text-gray-600">Beneficiaries</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <BookOpen className="h-16 w-16 text-amber-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Charity, Eternal Rewards
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            "The example of those who spend their wealth in the way of Allah is like a seed 
            which grows seven spikes; in each spike is a hundred grains." - Quran (2:261)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Heart className="h-5 w-5" />
              Make a Donation
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Users className="h-5 w-5" />
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
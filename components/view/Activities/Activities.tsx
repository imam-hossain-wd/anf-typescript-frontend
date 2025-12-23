'use client'
import { BookOpen, Heart, TreePine, Home, Users, GraduationCap, Droplets, ShoppingBag, Shield, Leaf, Calendar, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Map activity slugs to icons
const activityIcons: Record<string, any> = {
  'dawah-education': BookOpen,
  'emergency-relief': Shield,
  'iftar': Calendar,
  'winter-relief': Home,
  'tree-plantation': TreePine,
  'skill-development-institute': GraduationCap,
  'skill-based-entrepreneurship': ShoppingBag,
  'self-reliance': Users,
  'safe-drinking-water': Droplets,
  'qurbani': HandHeart,
  'meritorious': Heart
};

// Color schemes for different activities
const activityColors: Record<string, { 
  gradient: string; 
  bg: string; 
  border: string;
  text: string;
  iconBg: string;
}> = {
  'dawah-education': {
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  'emergency-relief': {
    gradient: 'from-red-500 to-orange-500',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-600',
    iconBg: 'bg-red-100'
  },
  'iftar': {
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    iconBg: 'bg-purple-100'
  },
  'winter-relief': {
    gradient: 'from-sky-500 to-blue-400',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-600',
    iconBg: 'bg-sky-100'
  },
  'tree-plantation': {
    gradient: 'from-emerald-500 to-green-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    iconBg: 'bg-emerald-100'
  },
  'skill-development-institute': {
    gradient: 'from-amber-500 to-yellow-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
    iconBg: 'bg-amber-100'
  },
  'skill-based-entrepreneurship': {
    gradient: 'from-indigo-500 to-purple-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    iconBg: 'bg-indigo-100'
  },
  'self-reliance': {
    gradient: 'from-teal-500 to-cyan-400',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-600',
    iconBg: 'bg-teal-100'
  },
  'safe-drinking-water': {
    gradient: 'from-cyan-500 to-blue-400',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    iconBg: 'bg-cyan-100'
  },
  'qurbani': {
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-600',
    iconBg: 'bg-rose-100'
  },
  'meritorious': {
    gradient: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-600',
    iconBg: 'bg-violet-100'
  }
};

// Activity data - in real app, this would come from your activities array
const activities = [
  {
    slug: 'skill-development-institute',
    title: 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট',
    description: 'জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ কর্তৃক নিবন্ধিত একটি আত্ম-উন্নয়ন ও দক্ষতা বৃদ্ধিমূলক প্রতিষ্ঠান।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'emergency-relief',
    title: 'দুর্যোগে ত্রাণ ও পুনর্বাসন',
    description: 'বন্যা, ঘূর্ণিঝড়, অগ্নিকাণ্ড—প্রতিটি দুর্যোগে অসহায় মানুষের পাশে আছে আস-সুন্নাহ ফাউন্ডেশন।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'skill-based-entrepreneurship',
    title: 'দক্ষতাভিত্তিক উদ্যোক্তা তৈরি',
    description: 'দক্ষতা থাকা সত্ত্বেও শুধু পুঁজির অভাবে যারা উদ্যোগ নিতে পারছেন না, তাদের পাশে দাঁড়ানোর একটি মানবিক প্রয়াস।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'self-reliance',
    title: 'স্বাবলম্বীকরণ',
    description: 'এই কার্যক্রমের আওতায় কর্মক্ষম দরিদ্রদের উপার্জন উপকরণ দেয়া হয়।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'meritorious',
    title: 'মেধাবী কার্যক্রম',
    description: 'সৎ, দক্ষ ও মানবিক মূল্যবোধসম্পন্ন প্রজন্ম বিনির্মাণের প্রয়াস।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'dawah-education',
    title: 'দাওয়াহ কার্যক্রম',
    description: 'বিশুদ্ধ জ্ঞান ছড়িয়ে দিয়ে ইসলামী চেতনায় উজ্জীবিত করতে আস-সুন্নাহ ফাউন্ডেশনের দাওয়াহমূলক উদ্যোগ।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'tree-plantation',
    title: 'বৃক্ষরোপণ',
    description: 'গাছ লাগিয়ে সবুজ পৃথিবী গড়ার এই মহতী উদ্যোগে শামিল হতে পারেন আপনিও।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'qurbani',
    title: 'সবার জন্য কুরবানী',
    description: 'প্রান্তিক মানুষের আমিষের ঘাটতি পূরণ, ঈদের হাসি ছড়িয়ে দেয়া এবং সর্বোপরি আল্লাহর সন্তুষ্টির জন্য একটি কুরবানী করতে পারেন।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'iftar',
    title: 'ইফতার বিতরণ',
    description: 'আপনার সহযোগিতায় আমরা দুস্থ রোযাদারদের জন্য ইফতার আয়োজন করি। আমাদের এই কল্যাণকর্মে আপনিও শরিক হোন।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'winter-relief',
    title: 'শীতবস্ত্র বিতরণ',
    description: 'দরিদ্র মানুষের শরীরে উষ্ণতা ছড়িয়ে দিতে আমাদের আন্তরিক প্রয়াস।',
    tag: 'নিয়মিত কার্যক্রম'
  },
  {
    slug: 'safe-drinking-water',
    title: 'নলকূপ ও পানি শোধনাগার স্থাপন',
    description: 'আপনাদের সহযোগিতায় আমরা দরিদ্র মানুষের জন্য বিশুদ্ধ পানীয় জল নিশ্চিত করছি। এই মানবিক উদ্যোগে আপনিও অংশ নিন।',
    tag: 'নিয়মিত কার্যক্রম'
  }
];

export default function ActivitiesSection() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-white via-emerald-50/10 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Decorative Lines */}
        <div className="absolute top-40 left-10 right-10 h-px bg-gradient-to-r from-transparent via-emerald-200/50 to-transparent" />
        <div className="absolute bottom-40 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl px-6 py-3 border border-emerald-200 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 font-semibold text-sm tracking-wide font-bangla">
              মানুষের সেবায় নিরলস
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-bangla leading-tight">
            <span className="block pb-4 border-b-4 border-emerald-500/30 inline-block">
              চলমান
            </span>
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              কার্যক্রমসমূহ
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bangla leading-relaxed">
            মানুষের সার্বিক কল্যাণ ও সামাজিক উন্নয়নে আস-সুন্নাহ ফাউন্ডেশনের নানা রকম কার্যক্রম চলমান রয়েছে। 
            প্রতিটি কার্যক্রম পরিচালিত হয় স্বচ্ছতা, জবাবদিহিতা ও সর্বোচ্চ মানের নিশ্চয়তা নিয়ে।
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.slug] || Heart;
            const colors = activityColors[activity.slug] || activityColors['dawah-education'];
            
            return (
              <Link 
                key={activity.slug} 
                href={`/activities/${activity.slug}`}
                className="group block"
              >
                <div className={`
                  relative h-full rounded-3xl overflow-hidden
                  bg-white border-2 ${colors.border}
                  shadow-xl shadow-gray-200/50
                  transition-all duration-300 ease-in-out
                  hover:shadow-2xl hover:shadow-gray-300/50
                  hover:-translate-y-2
                  ${colors.bg}
                `}>
                  {/* Gradient Top Bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${colors.gradient}`} />

                  {/* Card Content */}
                  <div className="p-8 h-full flex flex-col">
                    {/* Icon and Tag */}
                    <div className="flex items-start justify-between mb-8">
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center
                        ${colors.iconBg} border-2 ${colors.border}
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      
                      {/* Activity Tag */}
                      <span className={`
                        px-4 py-1.5 rounded-full text-xs font-semibold
                        ${colors.bg} border ${colors.border} ${colors.text}
                      `}>
                        {activity.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-2xl font-bold text-gray-900 mb-4 font-bangla
                      leading-tight group-hover:${colors.text} transition-colors duration-300
                    `}>
                      {activity.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-8 flex-grow font-bangla text-lg">
                      {activity.description}
                    </p>

                    {/* Action Indicator */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                      <span className={`text-sm font-semibold ${colors.text} font-bangla`}>
                        বিস্তারিত দেখুন
                      </span>
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${colors.iconBg} ${colors.text}
                        group-hover:bg-gradient-to-r ${colors.gradient}
                        group-hover:text-white transition-all duration-300
                      `}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 ${colors.border} rounded-tr-3xl`} />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 ${colors.border} rounded-bl-3xl`} />

                  {/* Hover Overlay */}
                  <div className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.gradient}
                    opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10
                  `} />
                </div>

                {/* Background Glow on Hover */}
                <div className={`
                  absolute -inset-4 rounded-3xl bg-gradient-to-br ${colors.gradient}
                  opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-20
                `} />
              </Link>
            );
          })}
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-xl opacity-20" />
            
            {/* Main Container */}
            <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-12 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-bangla">
                সকল কার্যক্রম দেখুন
              </h3>
              
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8 rounded-full" />
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-bangla leading-relaxed">
                প্রতিটি কার্যক্রমের বিস্তারিত বিবরণ, প্রভাব পরিসংখ্যান এবং অংশগ্রহণের সুযোগ সম্পর্কে জানতে 
                আমাদের সকল কার্যক্রম দেখুন
              </p>
              
              <Link href="/activities">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-8 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bangla min-w-[280px]"
                >
                  <span>কার্যক্রমসমূহ</span>
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-bangla mb-2">১০০% স্বচ্ছতা</div>
                  <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-bangla mb-2">সরকারি নিবন্ধিত</div>
                  <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-bangla mb-2">আন্তর্জাতিক মান</div>
                  <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Grid Pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #0000000a 1px, transparent 1px),
            linear-gradient(to bottom, #0000000a 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}
import { BookOpen, HeartHandshake, Users, ArrowRight, GraduationCap, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'শিক্ষা',
    icon: GraduationCap,
    description: 'দ্বীনি ও সাধারণ শিক্ষার সমন্বিত সিলেবাসের মাদরাসা প্রতিষ্ঠা; স্কুল, কলেজ ও বিশ্ববিদ্যালয়সহ বিভিন্ন সাধারণ ও কারিগরি বিদ্যালয় প্রতিষ্ঠা; এছাড়া অপ্রাতিষ্ঠানিক শিক্ষার উদ্যোগ গ্রহণ',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'সেবা',
    icon: HeartHandshake,
    description: 'দরিদ্রদের স্বাবলম্বীকরণ, বন্যার্তদের ত্রাণ ও পুনর্বাসন, নলকূপ ও পানি শোধনাগার স্থাপন, বৃক্ষরোপণ, শীতবস্ত্র বিতরণ, ইফতার বিতরণ, সবার জন্য কুরবানীসহ বিভিন্ন সেবামূলক কার্যক্রম',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600'
  },
  {
    id: 3,
    title: 'দাওয়াহ',
    icon: MessageCircle,
    description: 'বই-পুস্তক রচনা ও প্রকাশনা, মসজিদ ও অডিটোরিয়ামভিত্তিক দ্বীনি হালাকাহ, দাওয়াহ বিষয়ক প্রশিক্ষণ ও কর্মশালাসহ অনলাইন-অফলাইনভিত্তিক বহুমাত্রিক কার্যক্রম',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600'
  }
];

export default function ServiceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200 mb-6 shadow-sm">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm font-bangla">
              উম্মাহর সেবায় নিবেদিত
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-bangla leading-tight">
            উম্মাহর স্বার্থে,{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              সুন্নাহর সাথে
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bangla leading-relaxed">
            ইসলামের সুমহান শিক্ষা ও মানবসেবার আলোকে আমরা পরিচালনা করি বহুমুখী কার্যক্রম, 
            যার মাধ্যমে প্রতিষ্ঠিত হয় সমাজের সার্বিক উন্নয়ন ও ইসলামের প্রচার-প্রসার
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className={`
                  relative bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                  border ${service.borderColor} 
                  transition-all duration-500 ease-out 
                  transform group-hover:-translate-y-2 
                  h-full flex flex-col overflow-hidden
                `}>
                  {/* Header with Gradient */}
                  <div className={`
                    relative p-8 pb-6 
                    bg-gradient-to-br ${service.color}
                  `}>
                    {/* Icon Container */}
                    <div className={`
                      w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm 
                      flex items-center justify-center mb-4 
                      border border-white/30
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white font-bangla mb-2">
                      {service.title}
                    </h3>
                    
                    {/* Decorative Line */}
                    <div className="w-12 h-1 bg-white/50 rounded-full mb-4"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 pt-6">
                    <p className="text-gray-700 leading-relaxed font-bangla text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`
                    absolute inset-0 rounded-3xl 
                    bg-gradient-to-br ${service.color} 
                    opacity-0 group-hover:opacity-5 
                    transition-opacity duration-300
                  `}></div>
                </div>

                {/* Floating Elements */}
                <div className={`
                  absolute -top-2 -right-2 w-6 h-6 
                  bg-gradient-to-br ${service.color} 
                  rounded-full opacity-0 
                  group-hover:opacity-100 
                  transition-all duration-500 delay-200
                  transform group-hover:scale-110
                `}></div>
                <div className={`
                  absolute -bottom-2 -left-2 w-4 h-4 
                  bg-gradient-to-br ${service.color} 
                  rounded-full opacity-0 
                  group-hover:opacity-100 
                  transition-all duration-500 delay-300
                  transform group-hover:scale-110
                `}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-bangla">
              আমাদের কার্যক্রমে অংশগ্রহণ করুন
            </h3>
            <p className="text-gray-600 mb-8 text-lg font-bangla">
              আপনার অংশগ্রহণ ও সমর্থন আমাদের কার্যক্রমকে আরও বিস্তৃত করতে সাহায্য করবে
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bangla group"
              >
                <span>আরও জানুন</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 font-bangla"
              >
                স্বেচ্ছাসেবক হোন
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">৫০+</div>
            <div className="text-gray-600 font-bangla">সক্রিয় প্রকল্প</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">১০০+</div>
            <div className="text-gray-600 font-bangla">নিবেদিত কর্মী</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">২৫+</div>
            <div className="text-gray-600 font-bangla">বছরের অভিজ্ঞতা</div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DonationCard from './DonationCard';
import { homeBaanner } from '@/utils/assets';


const { zakat,
  emergncy,
  education } = homeBaanner;

const heroSlides = [
    {
        id: 1,
        image:zakat,
        alt: 'Islamic charity volunteers distributing food',
    },
    {
        id: 2,
        image:education,
        alt: 'Education support for underprivileged children',
    },
    {
        id: 3,
        image:emergncy,
        alt: 'Emergency relief for flood victims',
    },
];

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

        emblaApi.on('select', onSelect);
        onSelect();
        return () => {
            if (emblaApi) {
                emblaApi.off('select', onSelect);
            }
        };
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const interval = setInterval(() => emblaApi.scrollNext(), 5000);
        return () => {
            clearInterval(interval);
        };
    }, [emblaApi]);

    return (
        <section className="w-full">
            {/* Carousel */}
            <div className="embla h-[75vh]" ref={emblaRef}>
                <div className="embla__container h-full flex">
                    {heroSlides.map((slide) => (
                        <div
                            className="embla__slide h-full flex-[0_0_100%] min-w-0"
                            key={slide.id}
                        >
                            <div
                                className="h-full w-full bg-cover bg-center rounded-none"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section (normal flow, no absolute) */}
            <div className="w-full h-[500px] bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-green-900/90 py-14">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl -mt-4 md:mt-10">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-4">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-white text-sm font-medium font-bangla">
                                নিবন্ধন নম্বর: এস-০০০০/২০২৫
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-bangla">
                            আন-নুসরা ফাউন্ডেশন
                        </h1>

                        {/* Subtitle */}
                        <p className="text-md text-white/90 mb-8 leading-relaxed font-bangla">
                            আস-সুন্নাহ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণ মানবকল্যাণে নিবেদিত সেবামূলক সরকার-নিবন্ধিত প্রতিষ্ঠান।
                        </p>

                        {/* Buttons */}
    

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* Primary Button - Gradient */}
                            <Button
                                size="lg"
                                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bangla min-w-[200px]"
                            >
                                <div className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>আরও জানুন</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Button>

                            {/* Secondary Button - Modern Outline */}
                            <Button
                                variant="outline"
                                size="lg"
                                className="group border-2 border-white/80 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 font-bangla min-w-[200px]"
                            >
                                <div className="flex items-center gap-2">
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>কার্যক্রমসমূহ</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-5'>
                <div className='w-[90%] mx-auto -mt-[100px] md:-mt-[100px]'>
                    <DonationCard />
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Heart,
    Phone,
    MessageCircle,
    User,
    Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";


interface BottomNavProps {
    className?: string;
}

export function BottomNav({ className }: BottomNavProps) {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(pathname);
    const { callLink, whatsappLink, displayNumber } = SiteConfig;

    const menuItems = [
        {
            name: "Home",
            href: "/",
            icon: Home,
            type: "link"
        },
        {
            name: "Donate",
            href: "/donate",
            icon: Heart,
            type: "link"
        },
        {
            name: "Call",
            href: callLink,
            icon: Phone,
            type: "action"
        },
        {
            name: "WhatsApp",
            href: whatsappLink,
            icon: MessageCircle,
            type: "action"
        },
        {
            name: "Account",
            href: "/auth/signin",
            icon: User,
            type: "link"
        }
    ];

    const handleItemClick = (href: string, type: string) => {
        setActiveItem(href);

        if (type === "action") {
            // Add click feedback for action items
            const element = document.activeElement as HTMLElement;
            if (element) {
                element.style.transform = "scale(0.95)";
                setTimeout(() => {
                    element.style.transform = "scale(1)";
                }, 150);
            }
        }
    };

    return (
        <>
            {/* Spacer for fixed bottom nav */}
            <div className="h-16 md:hidden" />

            {/* Bottom Navigation */}
            <nav className={cn(
                "fixed bottom-0 left-0 right-0 z-50 md:hidden",
                "bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/95",
                "border-t border-gray-200/80 shadow-2xl",
                className
            )}>


                {/* Menu Items */}
                <div className="flex items-center justify-between px-4 py-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.href;

                        return (
                            <div key={item.name} className="flex-1 flex justify-center">
                                {item.type === "link" ? (
                                    <Link
                                        href={item.href}
                                        onClick={() => handleItemClick(item.href, item.type)}
                                        className={cn(
                                            "flex flex-col items-center justify-center",
                                            "transition-all duration-300 relative group",
                                            "min-w-12"
                                        )}
                                    >
                                        {/* Background Glow Effect */}
                                        <div className={cn(
                                            "absolute inset-0 rounded-2xl transition-all duration-300",
                                            "group-hover:bg-emerald-50 group-active:bg-emerald-100",
                                            isActive ? "bg-emerald-50 scale-110" : "scale-100"
                                        )} />

                                        {/* Icon Container */}
                                        <div className={cn(
                                            "relative p-1 rounded-xl transition-all duration-300",
                                            "group-hover:scale-110 group-active:scale-95",
                                            isActive
                                                ? "text-emerald-600 transform scale-110"
                                                : "text-gray-500 hover:text-emerald-500"
                                        )}>
                                            <Icon className="h-6 w-6" />

                                            {/* Active Indicator */}
                                            {isActive && (
                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                            )}
                                        </div>

                                        {/* Label */}
                                        <span className={cn(
                                            "text-xs font-medium mt-1 transition-all duration-300",
                                            "relative z-10",
                                            isActive
                                                ? "text-emerald-600 font-semibold scale-105"
                                                : "text-gray-600 group-hover:text-emerald-600"
                                        )}>
                                            {item.name}
                                        </span>

                                        {/* Hover Effect Line */}
                                        <div className={cn(
                                            "absolute bottom-0 w-6 h-0.5 bg-emerald-500 rounded-full",
                                            "transition-all duration-300 transform origin-center",
                                            isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                                            "group-hover:scale-100 group-hover:opacity-100"
                                        )} />
                                    </Link>
                                ) : (
                                    // Action Items (Call, WhatsApp)
                                    <a
                                        href={item.href}
                                        onClick={() => handleItemClick(item.href, item.type)}
                                        className={cn(
                                            "flex flex-col items-center justify-center",
                                            "transition-all duration-300 relative group",
                                            "min-w-12 cursor-pointer"
                                        )}
                                    >
                                        {/* Background Glow Effect */}
                                        <div className={cn(
                                            "absolute inset-0 rounded-2xl transition-all duration-300",
                                            item.name === "Call"
                                                ? "group-hover:bg-green-50 group-active:bg-green-100"
                                                : "group-hover:bg-emerald-50 group-active:bg-emerald-100",
                                            isActive ? "scale-110" : "scale-100",
                                            item.name === "Call" && isActive ? "bg-green-50" : "",
                                            item.name === "WhatsApp" && isActive ? "bg-emerald-50" : ""
                                        )} />

                                        {/* Icon Container */}
                                        <div className={cn(
                                            "relative p-3 rounded-xl transition-all duration-300",
                                            "group-hover:scale-110 group-active:scale-95",
                                            isActive ? "transform scale-110" : "",
                                            item.name === "Call"
                                                ? "text-green-600 group-hover:text-green-700"
                                                : "text-emerald-600 group-hover:text-emerald-700"
                                        )}>
                                            <Icon className="h-5 w-5" />

                                            {/* Pulse Animation for Action Items */}
                                            <div className={cn(
                                                "absolute inset-0 rounded-xl border-2",
                                                "animate-ping opacity-0 group-hover:opacity-100",
                                                item.name === "Call" ? "border-green-400" : "border-emerald-400"
                                            )} />
                                        </div>

                                        {/* Label */}
                                        <span className={cn(
                                            "text-xs font-medium mt-1 transition-all duration-300",
                                            "relative z-10",
                                            isActive ? "font-semibold scale-105" : "",
                                            item.name === "Call"
                                                ? "text-green-600 group-hover:text-green-700"
                                                : "text-emerald-600 group-hover:text-emerald-700"
                                        )}>
                                            {item.name}
                                        </span>

                                        {/* Hover Effect Line */}
                                        <div className={cn(
                                            "absolute bottom-0 w-6 h-0.5 rounded-full",
                                            "transition-all duration-300 transform origin-center",
                                            isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                                            "group-hover:scale-100 group-hover:opacity-100",
                                            item.name === "Call" ? "bg-green-500" : "bg-emerald-500"
                                        )} />
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Safety Area for iOS */}
                <div className="h-1 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
            </nav>

            {/* Interactive Background Effects */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .floating-donate {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </>
    );
}

import Link from "next/link";
import { TailwindcssButtons } from "@/components/button"; // Adjust the path as necessary
import Countdown from "./Countdown";
import Image from "next/image";

export function HeroSection() {
    return (
        <>
        <div className="mt-10 mb-3">
            <Countdown targetDate={new Date('2025-03-27T00:00:00')}/>
        </div>
        <div className="hero-section  items-center justify-center">
            
            <Image src="/ideathonimg2.png" alt="Hero Image" className="hero-image" style={{ width: '1280px', height: '410px' }} />
            
            <Link href="https://qr.me-qr.com/i3ABqeTC" target="_blank" className="cta-button flex items-center justify-center">
                <div className="flex items-center justify-center mt-3">
                    <TailwindcssButtons />
                </div>
            </Link>
        </div>
        </>
    );
}

export function HeroSectionMobile() {
    return (
        <>
        <div className="hero-section  items-center justify-center">
        <Image src="/ideathonimg2.png" alt="Hero Image" className="hero-image" style={{ width: '1280px', height: '410px' }} />
            <Link href="https://qr.me-qr.com/i3ABqeTC" target="_blank" className="cta-button flex items-center justify-center">
                <div className="flex items-center justify-center mt-3">
                    <TailwindcssButtons />
                </div>
            </Link>
        </div>
        </>
    );
}
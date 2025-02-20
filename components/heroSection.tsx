import Link from "next/link";
import { TailwindcssButtons } from "@/components/button"; // Adjust the path as necessary

export function HeroSection() {
    return (
        <div className="hero-section  items-center justify-center">
            <img src="/ideathonimg1.png" alt="Hero Image" className="hero-image" style={{ width: '1280px', height: '410px' }} />
            <Link href="https://qr.me-qr.com/i3ABqeTC" target="_blank" className="cta-button flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <TailwindcssButtons />
                </div>
            </Link>
        </div>
    );
}

export function HeroSectionMobile() {
    return (
        <div className="hero-section flex flex-col items-center justify-center">
            <img src="/ideathonimg1.png" alt="Hero Image" className="hero-image" style={{ width: '1280px', height: '410px' }} />
            <Link href="https://qr.me-qr.com/i3ABqeTC" target="_blank" className="cta-button flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <TailwindcssButtons />
                </div>
            </Link>
        </div>
    );
}
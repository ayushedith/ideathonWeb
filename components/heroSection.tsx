import Link from "next/link";

export function HeroSection() {
    return (
        <div className="hero-section">
            <img src="/ideathonimg1.png" alt="Hero Image" className="hero-image" style={{ width: '1280px', height: '410px' }} />
            <Link href="https://qr.me-qr.com/i3ABqeTC" target="_blank" className="cta-button items-center justify-center">
                Register Now
            </Link>
            <button className="register-button">Register Now</button>
        </div>
    );
}


export function HeroSectionMobile() {
    return (
        <div className="hero-section">
            <img src="/ideathonimg1.png" alt="Hero Image" className="hero-image" style={{ width: '1280px', height: '410px' }} />
            <Link href="https://qr.me-qr.com/i3ABqeTC" target="_blank" className="cta-button items-center justify-center">
                Register Now
            </Link>
            <button className="register-button">Register Now</button>
        </div>
    );
}
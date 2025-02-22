"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Shield, ChevronDown, ShieldCheck, AtSign, Info } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { href: "/about", icon: Info, label: "About", separateFromHere: true },
  { href: "/contact", icon: AtSign, label: "Contact" },
  { href: "/privacy-policy", icon: ShieldCheck, label: "Privacy" },
  { href: "/terms-of-services", icon: Shield, label: "Terms" },
];

export default function Header() {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[100px]");
      } else {
        setShow("shadow-md bg-[#5551FFf1d] backdrop-blur-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 80 && rect.bottom >= 80) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "text-black px-8 py-4 border-2 bg-blue-10 border-[#000000] rounded-full max-sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full flex items-center justify-between cursor-none",
        show
      )}
    >
      <Link href="../" className="cursor-none">
        <Image src="/logo.png" alt="Logo" width={160} height={160} />
      </Link>
      <div className="gap-5 items-center text-2xl font-medium hover:font-semibold cursor-none hover:text-opacity-50 hidden sm:flex">
        <DropdownMenu>
          <DropdownMenuTrigger className="group hidden items-center md:flex focus-visible:outline-none">
            <p className="text-2xl font-medium hover:font-semibold cursor-none hover:text-opacity-50 hidden sm:flex">
              Menu
            </p>
            <ChevronDown
              size={15}
              className="ml-1 translate-y-0.5 text-dark/70 group-hover:text-dark/90"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={15}
            className="w-[180px] rounded-xl border border-border/70  p-1.5 py-2 shadow-xl backdrop-blur-lg"
          >
            <DropdownMenuGroup>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <DropdownMenuItem
                    asChild
                    className={`group cursor-pointer rounded-lg focus:bg-[#2186d8] ${
                      index !== menuItems.length - 1 ? "mb-1" : ""
                    }`}
                    key={item.href + index}
                  >
                    <Link
                      href={item.href}
                      className="flex w-full items-center focus:shadow-md"
                    >
                      <item.icon
                        size={18}
                        className="mr-3 h-4 w-4  text-dark/80 group-focus:text-[#edf2ff]/90"
                      />
                      <span className="font-medium group-focus:text-[#edf2ff]/90">
                        {item.label}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  {item.separateFromHere && (
                    <DropdownMenuSeparator
                      key={item.label}
                      className="mb-1 opacity-80"
                    />
                  )}
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScs4vx3Yn6i55C2cMfK7lVqVTW4fTRQgflXgNh5aiwoUf8K9A/viewform"
          className={cn(
            activeSection === "home" ? "active" : "",
            "cursor-none"
          )}
        >
          Register
        </Link>
        <Link
          href="./#faqs"
          className={cn(
            activeSection === "faqs" ? "active" : "",
            "cursor-none"
          )}
        >
          FAQs
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="../" onClick={() => setIsSheetOpen(false)}>
                  <Image src="/logo.png" alt="Logo" width={35} height={35} />
                </Link>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="pt-4 flex flex-col gap-4 text-xl max-sm:text-sm font-medium">
              
              <Link
                href="./#faqs"
                onClick={() => setIsSheetOpen(false)}
                className={cn(
                  activeSection === "faqs" ? "active" : "",
                  "cursor-none"
                )}
              >
                FAQs
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScs4vx3Yn6i55C2cMfK7lVqVTW4fTRQgflXgNh5aiwoUf8K9A/viewform"
                onClick={() => setIsSheetOpen(false)}
                className={cn(
                  activeSection === "home" ? "active" : "",
                  "cursor-none"
                )}
              >
                Register
              </Link>
              <Link
                href="/about"
                onClick={() => setIsSheetOpen(false)}
                className={cn(
                  activeSection === "about" ? "active" : "",
                  "cursor-none"
                )}
              >
                About
              </Link>
              <Link
                href="/rewards"
                onClick={() => setIsSheetOpen(false)}
                className={cn(
                  activeSection === "prompts" ? "active" : "",
                  "cursor-none"
                )}
              >
                Rewards & Prizes
              </Link>

              
              <Link
                href="/contact"
                onClick={() => setIsSheetOpen(false)}    
                className={cn(
                  activeSection === "contact" ? "active" : "",
                  "cursor-none"
                )}
              >
                Contact
              </Link>
                
              
              
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

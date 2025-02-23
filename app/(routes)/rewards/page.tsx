"use client";

import Link from "next/link";
import Image from "next/image";
import { shapes } from "@/lib/shapes";
import { FAQData } from "@/data/faq_data";
import { Label } from "@/components/ui/label";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Section from "@/components/common/section";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Rewards() {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full max-w-[90vw] mx-auto pt-8">
        <Header />
      </div>
      <div className="relative z-10 min-h-fit w-full">
        <Section id="about">
          <div className="w-screen min-h-[40vh] mx-auto flex flex-col items-center justify-center">
            <div className="w-full flex flex-col gap-16 items-center">
              <Label className="text-5xl max-sm:text-2xl font-bold">
                <span className="text-slate-50">About </span>
                <span className="text-core-pink"> US</span>
              </Label>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative z-10 w-full bg-black">
        <div className="py-20 px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          <div className="w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">
              What is HACKVISION VAULT?
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              HackVision Vault 2K25 is an exciting ideathon designed to bring
              together innovative minds to solve real-world challenges.
              Organized by Maharishi Markandeshwar (Deemed to Be University),
              this event provides a platform for students to showcase their
              creativity, problem-solving skills, and technical expertise.
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              Participants will work in teams of 2-4 members to develop unique
              ideas aligned with various themes such as AI, Sustainability,
              Healthcare, Finance, and IoT & Beyond. Through this competition,
              students will gain hands-on experience, network with like-minded
              tech enthusiasts, and present their solutions to a panel of
              judges.
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-pop-blue text-justify">
              HackVision Vault 2K25 is the perfect opportunity to turn your
              ideas into reality!
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              Join us on March 12, 2025, at the Reading Room, Engineering
              Block-1, and be a part of the future of innovation!
              <strong> #hackvision2025</strong>
            </Label>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/hackvison.png"
              alt="figbruary"
              width={634}
              height={382}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-fit w-full">
        <div className="w-screen min-h-[40vh] mx-auto flex flex-col items-center justify-center">
          <div className="w-full flex flex-col gap-16 items-center">
            <Label className="text-5xl max-sm:text-2xl font-bold">
              <span className="text-slate-50">Themes </span>
              <span className="text-core-pink"> HACKVISION VAULT</span>
              <span className="text-slate-50"> 2k25</span>
            </Label>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-black">
        <div className="py-20 px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/hackvison.png"
              alt="figbruary"
              width={634}
              height={382}
            />
          </div>
          <div className="w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">
              Themes for HackVision Vault 2K25
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>AI(Artificial Intelligence)</strong>{" "}
                  <p>
                    Explore groundbreaking AI-driven solutions that enhance
                    automation, decision-making, and human-machine interactions
                    across various industries.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>Sustainability</strong>{" "}
                  <p>
                    Develop innovative ideas to tackle environmental challenges,
                    promote renewable energy, and create sustainable solutions
                    for a greener future.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-justify">
              <ol>
                <li>
                  <strong>Healthcare</strong>{" "}
                  <p>
                    Leverage technology to improve patient care, medical
                    diagnostics, and health accessibility through AI, IoT, and
                    data-driven innovations.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>IoT & Beyond</strong>{" "}
                  <p>
                    Design smart, connected systems that integrate IoT, edge
                    computing, and emerging technologies to enhance automation,
                    security, and efficiency in various domains.
                  </p>
                </li>
              </ol>
            </Label>
          </div>
        </div>
      </div>

      <Section id="faqs">
        <div className="relative z-10 w-full py-24 max-sm:py-12 max-sm:gap-6 flex flex-col gap-12 items-center bg-blue-10 cursor-none">
          <Label className="flex w-full max-sm:text-2xl items-center justify-center  text-5xl font-bold text-black cursor-none gap-2">
            Frequently
            <span className="text-pop-orange">Asked</span>
            Questions
          </Label>
          <div className="w-full max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-sm:space-x-0 space-x-4">
            <div className="w-full flex flex-col cursor-none">
              <Accordion type="single" collapsible className="cursor-none">
                {FAQData[0].map((item, index) => (
                  <AccordionItem
                    value={item.value}
                    key={index}
                    className="cursor-none"
                  >
                    <AccordionTrigger className="cursor-none">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="cursor-none">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="w-full flex flex-col">
              <Accordion type="single" collapsible>
                {FAQData[1].map((item, index) => (
                  <AccordionItem
                    value={item.value}
                    key={index}
                    className="cursor-none"
                  >
                    <AccordionTrigger className="cursor-none">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="cursor-none">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </Section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Section from "@/components/common/section";


export default function About() {
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
                <span className="text-core-pink">US</span>
              </Label>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative w-full bg-black mb-20">
        <div className="py-20 px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          <div className="w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">
              HACKVISION VAULT
            </Label>
            <Label className="cursor-none text-3xl max-sm:text-xl font-bold text-black">
              Unleash Ideas, Ignite Innovation!🚀
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              HACKVISION VAULT is more than just an ideathon—it’s a launchpad
              for groundbreaking ideas and transformative solutions. Our mission
              is to bring together creative minds, problem-solvers, and tech
              enthusiasts to tackle real-world challenges through innovation and
              collaboration.
            </Label>
            <Label className="cursor-none text-3xl max-sm:text-xl font-bold text-black">
              Our Vision
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              At HACKVISION VAULT, we envision a world where technology and
              creativity come together to solve real-world problems. Our goal is
              to create an ecosystem where students, developers, designers, and
              entrepreneurs can collaborate, learn, and turn their ideas into
              impactful solutions.
            </Label>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/hackvison.png"
              alt="hackvision"
              width={634}
              height={382}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full bg-black mb-20">
        <div className="py-20 px-8  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          <div className="mt-10 w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">
              What Makes HACKVISION VAULT Unique?
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xl font-bold text-black">
              At HACKVISION VAULT, we go beyond traditional hackathons by
              fostering an environment where creativity, collaboration, and
              real-world problem-solving take center stage. Here’s what sets us
              apart:
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>💡 Innovation-Driven Approach</strong>{" "}
                  <p>
                    We believe in pushing boundaries and challenging
                    conventional thinking. Participants are encouraged to
                    explore disruptive ideas, experiment with emerging
                    technologies, and develop solutions that can make a tangible
                    impact.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>🤝 Collaborative Community</strong>{" "}
                  <p>
                    HACKVISION VAULT is not just a competition—it&apos;s a thriving
                    community of tech enthusiasts, problem-solvers, and industry
                    experts. Whether you&apos;re a beginner or an experienced
                    innovator, you&apos;ll have the opportunity to collaborate,
                    network, and exchange knowledge with like-minded
                    individuals.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>🌍 Real-World Impact</strong>{" "}
                  <p>
                    Our ideathon focuses on solving real-world problems across
                    various domains, from healthcare and sustainability to
                    fintech and AI. We emphasize practical, scalable solutions
                    that can be implemented beyond the event, creating lasting
                    change.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <ol>
                <li>
                  <strong>🚀 Hands-On Learning & Mentorship</strong>{" "}
                  <p>
                    We provide more than just a platform to compete.
                    Participants gain hands-on experience, access to mentorship
                    from industry professionals, and exposure to the latest
                    technologies. Whether it&apos;s coding, designing, or
                    strategizing, every participant walks away with valuable
                    skills and insights.
                  </p>
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <strong>
                HACKVISION VAULT is more than an event—it&apos;s a launchpad for
                innovation and a stepping stone toward real-world success!
              </strong>
            </Label>
          </div>
        </div>
        <div className="py-20 px-8  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          <div className="mt-10 w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">
              Who Can Participate?
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xl font-bold text-black">
              HACKVISION VAULT is open to all passionate innovators, creators,
              and problem-solvers who want to make a difference through
              technology. Whether you&apos;re a developer, designer, entrepreneur, or
              simply someone with a groundbreaking idea, this is your chance to
              collaborate, learn, and build something impactful.
            </Label>
            <Label className="cursor-none text-2xl max-sm:text-xs font-normal text-black text-justify">
              <strong>Minimum Requirements</strong>
              <p>
                To ensure effective teamwork and collaboration, each
                participating team must have 2 to 4 members. This team size
                allows for diverse skill sets, better brainstorming, and a
                balanced workload during the ideathon.
              </p>
            </Label>
            <Label className="cursor-none text-2xl max-sm:text-xs font-normal text-black text-justify">
              <strong>Who Should Join?</strong>{" "}
              <ol>
                <li>
                  <strong>🚀 Developers & Programmers</strong> – Whether you&apos;re
                  a beginner or an experienced coder, use your technical skills
                  to bring innovative solutions to life.
                </li>
                <li>
                  <strong>🎨 UI/UX Designers </strong>  Design plays a crucial
                  role in creating impactful projects. If you&apos;re skilled in user
                  experience and interface design, your creativity can elevate
                  the team&apos;s project.
                </li>
                <li>
                  <strong>💡 Innovators & Thinkers</strong>  Even if you&apos;re not
                  a coder, your ability to think critically, solve problems, and
                  contribute ideas can be a game-changer for your team.
                </li>
                <li>
                  <strong>📊 Entrepreneurs & Strategists</strong> Every great
                  idea needs a strong execution plan. If you understand business
                  strategies, market needs, or project management, your insights
                  will add immense value.
                </li>
                <li>
                  <strong>🤝 Students & Enthusiasts</strong>  HACKVISION VAULT
                  is a learning experience. If you&apos;re a student or tech
                  enthusiast eager to learn and build, this is the perfect
                  opportunity to gain hands-on experience.
                </li>
              </ol>
            </Label>
            <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
              <strong>
                No matter your background, if you have a passion for innovation
                and teamwork, HACKVISION VAULT is the place for you! 🚀
              </strong>
            </Label>
          </div>
        </div>
      </div>
      <div className="py-20 px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        <div className="mt-10 w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
          <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">
            Why Attend?
          </Label>
          <Label className="cursor-none text-3xl max-sm:text-xs font-normal text-black text-justify">
            <strong>✨ Win Exciting Prizes & Certificates</strong>
            <p>Get rewarded for your innovation and hard work.</p>
          </Label>
          <Label className="cursor-none text-3xl max-sm:text-xs font-normal text-black text-justify">
            <strong>🚀 Experience Cutting-Edge Innovation</strong>
            <p>Work on real-world challenges with the latest tech.</p>
          </Label>
          <Label className="cursor-none text-3xl max-sm:text-xs font-normal text-black text-justify">
            <strong>💡 Showcase Your Talent </strong>
            <p>Prove your skills and gain industry recognition.</p>
          </Label>
          <Label className="cursor-none text-3xl max-sm:text-xs font-normal text-black text-justify">
            <strong>🤝 Connect with Tech Leaders & Innovators</strong>
            <p>Network with like-minded professionals and experts.</p>
          </Label>
        </div>
        <div className="w-full flex items-center justify-center bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <Image
              src="/hackvison.png"
              alt="hackvision"
              width={634}
              height={382}
            />
          </div>
      </div>

      <div className="relative ">
        <Footer />
      </div>
    </div>
  );
}

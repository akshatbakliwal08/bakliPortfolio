import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";
import { Download } from "lucide-react";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Akshat Bakliwal
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I bring ideas to life through code. Whether developing a website
              or creating a digital product, I approach every project with a
              dedication to design precision and a focus on delivering
              exceptional user experiences.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in Reactjs, Nextjs, Javascript, Typescript
              and web development.
            </p>
          </FadeUp>
          {/* Download Resume Button */}
          <FadeRight key="resume-download" duration={0.6} delay={0.6}>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href={siteMetadata.resume} // Ensure the resume file is placed in the public folder
                download="Akshat_Bakliwal_Resume.pdf"
                className="flex items-center gap-2 rounded-lg border-2 border-accent px-5 py-3 text-lg font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white"
              >
                <Download className="h-5 w-5" /> Download Resume
              </a>
            </div>
          </FadeRight>
          {/* <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/us.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              San Francisco, USA.
            </span>
          </FadeRight> */}
        </AnimatePresence>
      </div>
    </div>
  );
}

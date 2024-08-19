import Image from "next/image";
import { Inter } from "next/font/google";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { images } from '@/components/images-slider_items'
import Link from "next/link";
import { Flex } from "@mantine/core";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Hi there, <br /> I'm Abhishek Goenka
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link href='/aboutme'>Discover me →</Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </>

  );
}

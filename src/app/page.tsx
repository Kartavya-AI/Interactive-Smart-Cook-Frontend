"use client";

import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Marquee } from "@/components/magicui/marquee";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import VantaFog from "@/components/VantaFog";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import {
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

import paneertikka from '../../public/images/suchandra-varma-5fn0mTdDkGY-unsplash.jpg'
import pasta from '../../public/images/sarang-pande-wAwEmrUUV0w-unsplash.jpg'
import biryani from '../../public/images/mario-raj-n1z3gc9gJ8I-unsplash.jpg'
import rajma from '../../public/images/deepal-tamang-93L024xGEUM-unsplash.jpg'
import dosa from '../../public/images/deepal-tamang-5oF7d_hPJG4-unsplash.jpg'
import butterchicken from '../../public/images/perspective-studio-zRZxs9tDha0-unsplash.jpg'
import Image from "next/image";

const steps = [
    {
        title: "Step 1: Enter a Recipe Query",
        description:
            "Start by typing what you want to cook, like 'How to make paneer tikka'. The smart assistant understands and fetches the recipe instantly.",
    },
    {
        title: "Step 2: Let AI Guide You",
        description:
            "AI breaks down the recipe into step-by-step instructions, starting with preparation. It waits for your input (e.g., 'next', 'done') before moving ahead.",
    },
    {
        title: "Step 3: Automation Begins",
        description:
            "Once cooking starts, the assistant automatically adjusts the gas flame, monitors timing, and ensures each step is safely executed.",
    },
    {
        title: "Step 4: Get Real-Time Prompts",
        description:
            "Smart sensors track ingredient status and pan heat. You’ll be notified when it’s time to add, stir, or wait — no guesswork, no stress.",
    },
    {
        title: "Step 5: Cook Safely & Effortlessly",
        description:
            "The gas shuts off when done or in case of anomalies. Recipes are saved to your profile for instant access anytime you want to cook again.",
    },
];

const foodItems = [
  {
    name: "Paneer Tikka",
    caption: "Spiced grilled cottage cheese",
    img: paneertikka,
  },
  {
    name: "Rajma Chawal",
    caption: "Kidney beans with rice",
    img: rajma,
  },
  {
    name: "Butter Chicken",
    caption: "Creamy tomato chicken curry",
    img: butterchicken,
  },
  {
    name: "Masala Dosa",
    caption: "South Indian crispy dosa",
    img: dosa,
  },
  {
    name: "Veg Biryani",
    caption: "Spiced rice with veggies",
    img: biryani,
  },
  {
    name: "White Sauce Pasta",
    caption: "Creamy Italian pasta",
    img: pasta,
  },
];


const FoodCard = ({
  img,
  name,
  caption,
}: {
  img: StaticImageData;
  name: string;
  caption: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-64 rounded-xl overflow-hidden border p-2",
        "border-gray-200 dark:border-gray-700 bg-background hover:scale-[1.02] transition-transform"
      )}
    >
      <Image
        src={img.src}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
        width={1}
        height={1}
        unoptimized
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{caption}</p>
      </div>
    </div>
  );
};

export default function Home() {
    const { theme } = useTheme();
      const firstRow = foodItems.slice(0, foodItems.length / 2);
  const secondRow = foodItems.slice(foodItems.length / 2);
   
    return (
        <>
            <VantaFog />
            <section className=" mt-20 px-4 md:px-36 flex flex-col justify-center items-center  text-center">
                <div className="group mb-5 relative  mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        Interactive Smart Cook
                    </AnimatedGradientText>
                    <ChevronRight
                        className="ml-1 size-4 stroke-neutral-500 transition-transform
                        duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Hands-Free, AI-Powered Cooking with{" "}
                    <AuroraText>Smart Assistant</AuroraText> – Safe, Simple, and
                    Smarter Meals.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Just say your recipe, and let AI walk you through each step
                    with safety, precision, and automation.
                </p>

                <Link href={"/search"}>
                    <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Start Cooking
                        </span>
                    </ShimmerButton>
                </Link>
            </section>

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

            <section className="px-4 md:px-36">
               <div className="relative flex w-full  flex-col items-center justify-center overflow-hidden py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Popular Dishes</h2>
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((item) => (
          <FoodCard key={item.name} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((item) => (
          <FoodCard key={item.name} {...item} />
        ))}
      </Marquee>

          </div>
            </section>

             <section className="px-4 md:px-36 mt-16">
    <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
    >
        <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

        <AccordionItem value="item-1">
            <AccordionTrigger>
                1. What is Interactive Smart Cook?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Interactive Smart Cook is a hands-free AI cooking assistant that guides you step-by-step through recipes while automatically managing gas flame, timing, and safety using smart sensors.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>
                2. How do I start cooking with it?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Simply enter a dish like “how to make paneer tikka” in the search box and click “Start Cooking.” The AI will analyze the recipe and guide you through each step interactively.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>
                3. What makes this platform hands-free?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    It supports voice control, smart sensors, and mobile/touch inputs. You can say “next” or “done” to proceed through steps, and the system adjusts flame and timing without needing manual input.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger>
                4. Is it safe to use around gas stoves?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes, it’s designed with built-in safety mechanisms. It can automatically shut off the gas if no input is received for a long time or if abnormal conditions are detected by sensors.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
            <AccordionTrigger>
                5. Do I need to follow exact ingredients?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    No, the assistant is flexible. It guides you with default ingredients but adapts instructions as you go. You can always skip or customize steps to suit your needs.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
            <AccordionTrigger>
                6. Can I repeat a step if I missed it?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Absolutely! Just say “repeat” or enter it in the query box, and the assistant will restate the current step.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
            <AccordionTrigger>
                7. Do I need any extra hardware?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    You can use the platform without hardware for guidance-only mode. For full automation, a compatible smart stove setup is required to control flame and timing.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
            <AccordionTrigger>
                8. Is it beginner friendly?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes! It’s perfect for beginners, busy families, or elderly users. You don’t need cooking experience—just follow the steps and say “next” to move forward.
                </p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</section>

           
        </>
    );
}

"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useUser } from "@clerk/nextjs";
import VantaFog from "@/components/VantaFog";

const dishSuggestions = [
    "how to make paneer tikka",
    "how to cook rajma chawal",
    "how to make butter chicken",
    "how to prepare dosa batter",
    "how to cook biryani",
    "how to make pasta in white sauce",
];

function useTypewriter(words: string[], speed = 100, delay = 2000) {
    const [index, setIndex] = useState(0); // current word
    const [subIndex, setSubIndex] = useState(0); // current character
    const [forward, setForward] = useState(true);
    const [placeholder, setPlaceholder] = useState("");
    useEffect(() => {
        const currentWord = words[index];

        const timeout = setTimeout(
            () => {
                if (forward) {
                    setSubIndex((prev) => prev + 1);
                    setPlaceholder(currentWord.slice(0, subIndex + 1));
                    if (subIndex === currentWord.length) {
                        setForward(false);
                        setTimeout(() => {}, delay);
                    }
                } else {
                    setSubIndex((prev) => prev - 1);
                    setPlaceholder(currentWord.slice(0, subIndex - 1));
                    if (subIndex === 0) {
                        setForward(true);
                        setIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            forward ? speed : speed / 2
        );

        return () => clearTimeout(timeout);
    }, [subIndex, index, forward, words, speed, delay]);

    return placeholder;
}

function Page() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<{
        stepNumber: string;
        instruction: string;
        progress: string;
        nextUp: string;
    } | null>(null);

    const [error, setError] = useState("");

    const placeholder = useTypewriter(dishSuggestions);

    const { user, isLoaded } = useUser();

    if (!isLoaded) return null;

    const email = user?.primaryEmailAddress?.emailAddress;

    const handleCook = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.post(
                "https://master-cheif-voice-977121587860.europe-west1.run.app/cook",
                {
                    user_query: query,
                    user_id: email,
                    save_to_memory: true,
                }
            );

            const raw = res.data.result.raw
                .replace(/^```[\s\S]*?\n/, "") // remove initial ```
                .replace(/```$/, "") // remove ending ```
                .trim();

            const stepTitleMatch = raw.match(/### Current Step:\s*(.+)/);
            const instructionBlockMatch = raw.match(
                /\*\*(.*?)\*\*\n([\s\S]*?)\n\n\*/
            );
            const progressMatch = raw.match(/\*\*Progress:\*\*\s*(.*?)\s*\|/);
            const nextUpMatch = raw.match(/\| Next up:\s*(.+)/);

            const parsedStep = {
                stepNumber: stepTitleMatch?.[1]?.trim() || "",
                instruction: `${instructionBlockMatch?.[1]?.trim() || ""}\n${
                    instructionBlockMatch?.[2]?.trim() || ""
                }`,
                progress: progressMatch?.[1]?.trim() || "",
                nextUp: nextUpMatch?.[1]?.trim() || "",
            };

            setStep(parsedStep);
        } catch (err) {
            console.error("Error during cooking analysis", err);
            setError("Failed to load recipe step. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <VantaFog />
            <section className="px-4 mt-16 md:px-36 py-12 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Hands-Free AI Cooking with{" "}
                    <AuroraText>Smart Assistant</AuroraText>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                    Just enter the name of a dish, and let the AI guide you
                    step-by-step while handling flame, timing, and safety
                    automatically.
                </p>

                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    rows={3}
                    className="w-full max-w-xl p-4 border border-border bg-background rounded-md mb-4"
                />

                <RainbowButton
                    variant="outline"
                    onClick={handleCook}
                    disabled={loading}
                >
                    {" "}
                    {loading ? "Analyzing Recipe..." : "Start Cooking"}
                </RainbowButton>

                {error && <p className="text-red-600 mt-6">{error}</p>}

                {step && (
                    <div className="mt-10 w-full max-w-2xl bg-muted p-6 rounded-xl text-left">
                        <h2 className="text-xl font-bold text-primary mb-2">
                            Step {step.stepNumber}
                        </h2>
                        <p className="mb-4 whitespace-pre-wrap text-muted-foreground">
                            {step.instruction}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                            {step.progress}
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                            Next up: {step.nextUp}
                        </p>

                        <button
                            className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
                            onClick={() => {
                                setQuery("next");
                                handleCook();
                            }}
                        >
                            Next Step
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Page;

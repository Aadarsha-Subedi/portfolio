import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom type scale so `text-headline` and `text-red` don't collide.
const twMerge = extendTailwindMerge({
	extend: { classGroups: { "font-size": [{ text: ["display", "headline", "numeral"] }] } },
});

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

import type { ImageData } from "@/components/ui/image-sphere";

/*
 * Placeholder tiles for the hero's image sphere until real photos and project
 * shots are chosen. Each is a small inline SVG in the site's palette, so the
 * sphere renders without any network requests.
 */
const swatches = [
	{ bg: "#11151a", fg: "#f5f6f8" },
	{ bg: "#d41a1b", fg: "#ffffff" },
	{ bg: "#0284c7", fg: "#ffffff" },
	{ bg: "#e9ebef", fg: "#11151a" },
	{ bg: "#ffffff", fg: "#11151a" },
	{ bg: "#5b6270", fg: "#ffffff" },
];

const COUNT = 60;
const BASE = 12;

function tile(n: number, bg: string, fg: string) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="240" height="240" fill="${bg}"/><text x="120" y="138" text-anchor="middle" font-family="Archivo, Arial, sans-serif" font-size="56" font-weight="700" fill="${fg}">${String(n).padStart(2, "0")}</text></svg>`;
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const sphereFillers: ImageData[] = Array.from({ length: COUNT }, (_, i) => {
	const n = (i % BASE) + 1;
	const { bg, fg } = swatches[i % swatches.length];
	return {
		id: `filler-${i + 1}`,
		src: tile(n, bg, fg),
		alt: `Placeholder ${n}`,
		title: `Placeholder ${n}`,
		description: "A filler tile. A photo or project shot goes here.",
	};
});

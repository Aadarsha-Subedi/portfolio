import type { CircularGalleryItem } from "@/components/react-bits/circular-gallery";

/* Placeholder cards for the hero gallery: two projects and two roles. Swap each image for a real screenshot later. */
function placeholder(kind: string, fill: string, accent: string) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="${fill}"/><rect x="48" y="48" width="704" height="904" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="640" cy="200" r="72" fill="${accent}"/><text x="72" y="120" font-family="Archivo, sans-serif" font-size="28" letter-spacing="4" fill="${accent}">${kind}</text></svg>`;
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const galleryItems: CircularGalleryItem[] = [
	{
		image: placeholder("PROJECT", "#11151a", "#f4f1ea"),
		text: "ResolveAI",
		description: "A multi-tenant AI support desk with human-reviewed reply drafts.",
	},
	{
		image: placeholder("EXPERIENCE", "#d41a1b", "#f4f1ea"),
		text: "Vanarx Tech",
		description: "Full Stack Engineer",
	},
	{
		image: placeholder("PROJECT", "#e7e2d6", "#11151a"),
		text: "Pro-Goal",
		description: "Project management with tasks, versioned notes and Slack sync.",
	},
	{
		image: placeholder("EXPERIENCE", "#0284c7", "#f4f1ea"),
		text: "Professional Computer Systems",
		description: "Full Stack Developer Intern",
	},
];

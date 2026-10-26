import type { MagicBentoItem } from "@/components/react-bits/magic-bento";

/*
 * The hero bento: two projects and two roles, all the same size. Projects
 * fill their card with a screenshot; roles show the company's logo and what
 * the work was. The screenshots are placeholders until the real ones are in.
 */

function screenshotPlaceholder(tint: string) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800"><rect width="1280" height="800" fill="#e9ecf1"/><rect width="1280" height="56" fill="#ffffff"/><circle cx="32" cy="28" r="8" fill="#d4d8de"/><circle cx="58" cy="28" r="8" fill="#d4d8de"/><circle cx="84" cy="28" r="8" fill="#d4d8de"/><rect x="0" y="56" width="260" height="744" fill="#f7f8fa"/><rect x="32" y="96" width="140" height="18" rx="9" fill="${tint}"/><rect x="32" y="140" width="190" height="14" rx="7" fill="#d4d8de"/><rect x="32" y="172" width="160" height="14" rx="7" fill="#d4d8de"/><rect x="32" y="204" width="176" height="14" rx="7" fill="#d4d8de"/><rect x="300" y="96" width="940" height="200" rx="16" fill="#ffffff"/><rect x="300" y="320" width="456" height="440" rx="16" fill="#ffffff"/><rect x="784" y="320" width="456" height="440" rx="16" fill="#ffffff"/></svg>`;
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function CompanyLogo({ src, name }: { src?: string; name: string }) {
	const initials = name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.slice(0, 2);
	return (
		<span
			className={`ring-ink/10 grid size-9 place-items-center overflow-hidden rounded-full text-[13px] font-semibold ring-1 ${src ? "bg-white p-1.5" : "bg-ink text-paper"}`}
		>
			{src ? (
				<img src={src} alt="" className="size-full object-contain" />
			) : (
				initials
			)}
		</span>
	);
}

export const bentoItems: MagicBentoItem[] = [
	{
		label: "Project",
		title: "ResolveAI",
		description:
			"A multi-tenant AI support desk with human-reviewed reply drafts.",
		image: screenshotPlaceholder("#11151a"),
		colSpan: 2,
	},
	{
		label: "Project",
		title: "Pro-Goal",
		description:
			"Project management with tasks, versioned notes and Slack sync.",
		image: screenshotPlaceholder("#d41a1b"),
		colSpan: 2,
	},
	{
		icon: (
			<CompanyLogo
				name="Vanarx Tech"
				src="https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/vanarx-logo.svg"
			/>
		),
		label: "Full Stack Engineer · 2025–26",
		title: "Vanarx Tech",
		description:
			"Built Socify’s real-time social inbox and led its usage-based AI billing.",
		colSpan: 2,
	},
	{
		icon: (
			<CompanyLogo
				name="Professional Computer Systems"
				src="https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/pcs-logo.png"
			/>
		),
		label: "Full Stack Developer Intern · 2023",
		title: "Professional Computer Systems",
		description: "Built a school management system in React and Spring Boot.",
		colSpan: 2,
	},
];

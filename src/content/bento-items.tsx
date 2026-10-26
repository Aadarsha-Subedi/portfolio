import proGoal from "@/assets/projects/pro-goal.webp";
import resolveAi from "@/assets/projects/resolve-ai.webp";
import type { MagicBentoItem } from "@/components/react-bits/magic-bento";

/*
 * The hero bento: two projects and two roles, all the same size. Projects
 * fill their card with a screenshot; roles show the company's logo and what
 * the work was.
 */

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
		image: resolveAi,
		colSpan: 2,
	},
	{
		label: "Project",
		title: "Pro-Goal",
		description:
			"Project management with tasks, versioned notes and Slack sync.",
		image: proGoal,
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

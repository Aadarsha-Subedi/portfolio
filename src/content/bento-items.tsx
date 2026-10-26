import proGoal from "@/assets/projects/pro-goal.webp";
import resolveAi from "@/assets/projects/resolve-ai.webp";
import type { MagicBentoItem } from "@/components/react-bits/magic-bento";

/*
 * The hero bento: two projects and two roles, all the same size. Projects
 * show a framed screenshot above their summary; roles show the company's
 * logo, the role and a few points on the work.
 */

function Screenshot({ src, alt }: { src: string; alt: string }) {
	return (
		<img
			src={src}
			alt={alt}
			draggable={false}
			className="ring-ink/10 mx-auto max-h-full max-w-full rounded-lg object-contain shadow-sm ring-1"
		/>
	);
}

function CompanyLogo({ src, name }: { src?: string; name: string }) {
	const initials = name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.slice(0, 2);
	return (
		<span
			className={`ring-ink/10 grid size-9 flex-none place-items-center overflow-hidden rounded-full text-[13px] font-semibold ring-1 ${src ? "bg-white p-1.5" : "bg-ink text-paper"}`}
		>
			{src ? <img src={src} alt="" className="size-full object-contain" /> : initials}
		</span>
	);
}

/* A role card replaces the bento's default layout so it can hold a list. */
function RoleCard({ logo, company, role, points }: { logo?: string; company: string; role: string; points: string[] }) {
	return (
		<>
			<div className="magic-bento__header">
				<CompanyLogo src={logo} name={company} />
				<span className="magic-bento__label">{role}</span>
			</div>
			<h3 className="magic-bento__title">{company}</h3>
			<ul className="text-ink-2 -mt-1 flex list-disc flex-col gap-2 pl-4 text-sm leading-snug marker:text-sky-600">
				{points.map((point) => (
					<li key={point}>{point}</li>
				))}
			</ul>
		</>
	);
}

export const bentoItems: MagicBentoItem[] = [
	{
		label: "Project",
		title: "ResolveAI",
		description: "A multi-tenant AI support desk with human-reviewed reply drafts.",
		visual: <Screenshot src={resolveAi} alt="The ResolveAI dashboard" />,
		colSpan: 2,
	},
	{
		label: "Project",
		title: "Pro-Goal",
		description: "Project management with tasks, versioned notes and Slack sync.",
		visual: <Screenshot src={proGoal} alt="A Pro-Goal task list" />,
		colSpan: 2,
	},
	{
		title: "Vanarx Tech",
		content: (
			<RoleCard
				logo="https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/vanarx-logo.svg"
				company="Vanarx Tech"
				role="Full Stack Engineer · 2025–26"
				points={[
					"Built Socify’s real-time inbox for Instagram, Messenger, WhatsApp and TikTok.",
					"Let customers bring their own WhatsApp numbers through Evolution API.",
					"Led usage-based AI billing and ChargeBee subscriptions.",
					"Cut response times by about 35% with caching and fewer queries.",
				]}
			/>
		),
		colSpan: 2,
	},
	{
		title: "Professional Computer Systems",
		content: (
			<RoleCard
				logo="https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/pcs-logo.png"
				company="Professional Computer Systems"
				role="Full Stack Developer Intern · 2023"
				points={[
					"Built a school management system in React, Tailwind CSS and Spring Boot.",
					"Added sign-in and role-based access for admins and students.",
					"Shipped course, attendance and leave workflows.",
					"Integrated REST APIs and tested them in Postman across agile sprints.",
				]}
			/>
		),
		colSpan: 2,
	},
];

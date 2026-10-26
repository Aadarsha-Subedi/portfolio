import type { MagicBentoItem } from "@/components/react-bits/magic-bento";
import { TechChips } from "@/components/site/tech-chip";
import { projects } from "@/content/resume";

const R2 = "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev";

/*
 * The hero bento: two roles, then two projects. Every card shows a header,
 * a title, a few points on the work and the stack as chips. Roles carry the
 * company's logo in the header.
 */

function CompanyLogo({ src, name, href }: { src?: string; name: string; href?: string }) {
	const initials = name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.slice(0, 2);
	const className = `ring-ink/10 grid size-9 flex-none place-items-center overflow-hidden rounded-full text-[13px] font-semibold ring-1 ${src ? "bg-white p-1.5" : "bg-ink text-paper"}`;
	const mark = src ? <img src={src} alt="" className="size-full object-contain" /> : initials;
	if (!href) return <span className={className}>{mark}</span>;
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label={`${name} website (opens in a new tab)`}
			// Keep the click from also firing the card's own click effect.
			onClick={(event) => event.stopPropagation()}
			className={`${className} transition-shadow hover:ring-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none`}
		>
			{mark}
		</a>
	);
}

/* A card replaces the bento's default layout so it can hold a list and chips. */
function WorkCard({
	logo,
	label,
	title,
	points,
	stack,
}: {
	logo?: { src?: string; name: string; href?: string };
	label: string;
	title: string;
	points: string[];
	stack: string[];
}) {
	return (
		<div data-bento-body className="flex flex-col gap-3">
			<div className="magic-bento__header">
				{logo && <CompanyLogo src={logo.src} name={logo.name} href={logo.href} />}
				<span className="magic-bento__label">{label}</span>
			</div>
			<h3 className="magic-bento__title">{title}</h3>
			<ul className="text-ink-2 -mt-1 flex list-disc flex-col gap-2 pl-4 text-sm leading-snug marker:text-sky-600">
				{points.map((point) => (
					<li key={point}>{point}</li>
				))}
			</ul>
			<div className="pt-1">
				<TechChips items={stack} />
			</div>
		</div>
	);
}

function project(id: string) {
	const found = projects.find((entry) => entry.id === id);
	if (!found) throw new Error(`No project "${id}" in resume.ts`);
	return found;
}

const resolveAi = project("resolve-ai");
const proGoal = project("pro-goal");

export const bentoItems: MagicBentoItem[] = [
	{
		title: "Vanarx Tech",
		content: (
			<WorkCard
				logo={{ src: `${R2}/vanarx-logo.svg`, name: "Vanarx Tech", href: "https://vanarxtech.com/" }}
				label="Full Stack Engineer · 2025–26"
				title="Vanarx Tech"
				points={[
					"Built Socify’s real-time inbox for Instagram, Messenger, WhatsApp and TikTok.",
					"Let customers bring their own WhatsApp numbers through Evolution API.",
					"Led usage-based AI billing and ChargeBee subscriptions.",
					"Cut response times by about 35% with caching and fewer queries.",
				]}
				stack={[
					"Python",
					"Django",
					"Django REST Framework",
					"PostgreSQL",
					"Redis",
					"ReactJS",
					"TypeScript",
					"Tailwind CSS",
					"shadcn/ui",
					"Meta Graph API",
					"Postman",
				]}
			/>
		),
		colSpan: 2,
	},
	{
		title: "Professional Computer Systems",
		content: (
			<WorkCard
				logo={{ src: `${R2}/pcs-logo.png`, name: "Professional Computer Systems", href: "https://pcs.com.np/" }}
				label="Full Stack Developer Intern · 2023"
				title="Professional Computer Systems"
				points={[
					"Built a school management system in ReactJS, Tailwind CSS and Spring Boot.",
					"Added sign-in and role-based access for admins and students.",
					"Shipped course, attendance and leave workflows.",
					"Integrated REST APIs and tested them in Postman across agile sprints.",
				]}
				stack={["ReactJS", "Tailwind CSS", "Java", "Spring Boot", "Postman"]}
			/>
		),
		colSpan: 2,
	},
	{
		title: resolveAi.name,
		content: (
			<WorkCard label="Project" title={resolveAi.name} points={resolveAi.details} stack={resolveAi.stack} />
		),
		colSpan: 2,
	},
	{
		title: proGoal.name,
		content: (
			<WorkCard
				label="Project"
				title={proGoal.name}
				points={proGoal.details}
				stack={[...proGoal.stack.slice(0, -1), "Slack API", ...proGoal.stack.slice(-1)]}
			/>
		),
		colSpan: 2,
	},
];

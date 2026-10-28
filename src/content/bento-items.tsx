import type { MagicBentoItem } from "@/components/react-bits/magic-bento";
import { CompanyLogo } from "@/components/site/company-logo";
import { TechChips } from "@/components/site/tech-chip";
import { experience, projects } from "@/content/resume";

/*
 * The hero bento: two roles, then two projects. Every card shows a header,
 * a title, a few points on the work and the stack as chips. Roles carry the
 * company's logo in the header.
 */

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
		<div data-bento-body className="flex flex-1 flex-col gap-3">
			<div className="magic-bento__header">
				{logo && (
					<CompanyLogo src={logo.src} name={logo.name} href={logo.href} />
				)}
				<span className="magic-bento__label">{label}</span>
			</div>
			<h3 className="magic-bento__title">{title}</h3>
			<ul className="text-ink-2 -mt-1 flex list-disc flex-col gap-2 pl-4 text-sm leading-snug marker:text-sky-600">
				{points.map((point) => (
					<li key={point}>{point}</li>
				))}
			</ul>
			{/* Takes up any height the card has beyond its content, so the chips sit on the card's bottom edge. */}
			<div data-bento-spacer className="-my-1.5 flex-1" />
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

function role(id: string) {
	const found = experience.find((entry) => entry.id === id);
	if (!found) throw new Error(`No role "${id}" in resume.ts`);
	return found;
}

const vanarx = role("vanarx");
const pcs = role("pcs");
const resolveAi = project("resolve-ai");
const proGoal = project("pro-goal");

export const bentoItems: MagicBentoItem[] = [
	{
		title: "Vanarx Tech",
		content: (
			<WorkCard
				logo={{ src: vanarx.logo, name: vanarx.company, href: vanarx.website }}
				label="Full Stack Engineer · 2025–26"
				title="Vanarx Tech"
				points={[
					"Built Socify’s real-time inbox for Instagram, Messenger, WhatsApp and TikTok.",
					"Implemented post management, comment management/moderation and comment automation across Facebook, Instagram and TikTok",
					"Led usage-based AI billing and ChargeBee subscriptions.",
					"Cut response times by about 35% with caching and query optimizations.",
				]}
				stack={vanarx.stack}
			/>
		),
		colSpan: 2,
	},
	{
		title: "Professional Computer Systems",
		content: (
			<WorkCard
				logo={{ src: pcs.logo, name: pcs.company, href: pcs.website }}
				label="Full Stack Developer Intern · 2023"
				title="Professional Computer Systems"
				points={[
					"Built a school management system in ReactJS, Tailwind CSS and Spring Boot.",
					"Added sign-in and role-based access for admins and students.",
					"Shipped course, attendance and leave workflows.",
				]}
				stack={pcs.stack}
			/>
		),
		colSpan: 2,
	},
	{
		title: resolveAi.name,
		content: (
			<WorkCard
				label="Project"
				title={resolveAi.name}
				points={[
					"Multi-tenant support desk with a ticket portal, Gmail replies and role-based access.",
					"Hybrid RAG: pgvector + BM25 via ParadeDB, fused with RRF and reranked with Cohere.",
					"Citation-verified AI drafts that drop any claim not found in the cited passage.",
					"LLM query rewriting and provider-agnostic LLMs (Gemini, OpenAI) on per-workspace keys.",
					"Per-workspace semantic cache, an owner-only AI usage log and injection-safe prompts.",
					"Audit log and dashboard, covered by unit and API tests in Django.",
				]}
				stack={resolveAi.stack}
			/>
		),
		colSpan: 2,
	},
	{
		title: proGoal.name,
		content: (
			<WorkCard
				label="Project"
				title={proGoal.name}
				points={[
					"Project management with tasks, notes and comments in one place.",
					"Slack integration with configurable Slack and email reminders.",
					"Per-project role-based access, activity tracking and note versioning.",
					"Reusable Django/DRF foundation with caching, soft deletes and structured logging.",
					"Deployed on Cloudflare Workers, Pages and Containers.",
				]}
				stack={proGoal.stack}
			/>
		),
		colSpan: 2,
	},
];

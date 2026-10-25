import {
	ArrowRightIcon,
	ArrowUpRightIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	CheckIcon,
	CommandIcon,
	CopyIcon,
	DownloadSimpleIcon,
	EnvelopeSimpleIcon,
	MapPinIcon,
	ListIcon,
	MinusIcon,
	PlusIcon,
	MagnifyingGlassIcon,
	XIcon,
} from "@phosphor-icons/react";
import { MotionConfig } from "motion/react";
import { useMemo, useState, type ReactNode } from "react";

import { CommandIndex, type IndexItem } from "@/components/site/command-index";
import { ContactBlock } from "@/components/site/contact-block";
import { IntroBlock } from "@/components/site/intro-block";
import { Plate } from "@/components/site/plate";
import { RoleFlip } from "@/components/site/role-flip";
import { ProjectEntry } from "@/components/site/project-entry";
import { RoleEntry } from "@/components/site/role-entry";
import { SkillsList } from "@/components/site/skills-list";
import { Timetable } from "@/components/site/timetable";
import { TopBar, sections } from "@/components/site/top-bar";
import { Button } from "@/components/ui/button";
import { Tag, TagList } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { experience, profile, projects } from "@/content/resume";

function Specimen({
	code,
	name,
	note,
	source,
	children,
}: {
	code: string;
	name: string;
	note: string;
	source: string;
	children: ReactNode;
}) {
	return (
		<section id={code} className="border-t border-ink" aria-labelledby={`${code}-name`}>
			<div className="grid grid-cols-12 gap-x-6 gap-y-6 pt-4 pb-16">
				<header className="col-span-12 lg:col-span-3">
					<h2 id={`${code}-name`} className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight">
						<span className="font-condensed text-numeral text-red">{code}</span>
						{name}
					</h2>
					<p className="mt-2 max-w-[36ch] text-[0.95rem] text-ink-2">{note}</p>
					<p className="mt-3 max-w-[36ch] text-sm text-ink-2">
						<span className="font-semibold text-ink">Built from:</span> {source}
					</p>
				</header>
				<div className="col-span-12 lg:col-span-9">{children}</div>
			</div>
		</section>
	);
}

function Swatch({ name, value, className, text = "text-ink" }: { name: string; value: string; className: string; text?: string }) {
	return (
		<div className="flex flex-col">
			<div className={`flex h-28 items-end p-3 ${className} ${text}`}>
				<span className="font-condensed text-3xl">Aa</span>
			</div>
			<p className="mt-2 text-sm font-semibold">{name}</p>
			<p className="text-xs text-ink-2">{value}</p>
		</div>
	);
}

function ToastDemo() {
	const toast = useToast();
	return (
		<Button variant="secondary" onClick={() => toast("Email address copied")}>
			<CopyIcon aria-hidden /> Show toast
		</Button>
	);
}

export function Gallery() {
	const [active, setActive] = useState("experience");
	const [indexOpen, setIndexOpen] = useState(false);
	const [openProject, setOpenProject] = useState<string | null>("finance-tracker");
	const [loading, setLoading] = useState(false);

	const indexItems: IndexItem[] = useMemo(
		() => [
			...projects.map((p) => ({ id: `p-${p.id}`, group: "Projects", label: p.name, meta: p.stack[0], run: () => setOpenProject(p.id) })),
			...experience.map((r) => ({ id: `r-${r.id}`, group: "Experience", label: r.company, meta: r.years, run: () => {} })),
			{ id: "a-resume", group: "Actions", label: "Download resume", meta: "PDF", run: () => {} },
			{ id: "a-email", group: "Actions", label: "Copy email address", meta: profile.email, run: () => {} },
		],
		[],
	);

	const icons = [
		["Arrow right", ArrowRightIcon],
		["External", ArrowUpRightIcon],
		["Download", DownloadSimpleIcon],
		["Mail", EnvelopeSimpleIcon],
		["Copy", CopyIcon],
		["Check", CheckIcon],
		["Search", MagnifyingGlassIcon],
		["Command", CommandIcon],
		["Menu", ListIcon],
		["Close", XIcon],
		["Expand", PlusIcon],
		["Collapse", MinusIcon],
		["Location", MapPinIcon],
		["GitHub", GithubLogoIcon],
		["LinkedIn", LinkedinLogoIcon],
	] as const;

	return (
		<MotionConfig reducedMotion="user">
			<ToastProvider>
				<div className="mx-auto max-w-[1440px] px-4 sm:px-6">
					<header className="grid grid-cols-12 gap-x-6 py-10 sm:py-16">
						<h1 className="col-span-12 font-condensed text-display lg:col-span-9">Component specimens</h1>
						<p className="col-span-12 mt-6 max-w-[52ch] text-lg text-ink-2 lg:col-span-3 lg:mt-0 lg:self-end">
							Swiss grid direction. Each specimen has a code (C1 to C14): reply with the codes you approve or
							reject, and what to change. Everything is interactive.
						</p>
					</header>

					<Specimen
						code="C1"
						name="Tokens"
						note="Cool white paper, near-black ink, one signal red that owns whole blocks. Archivo, a grotesque with a width axis: condensed for display, normal for reading. Tabular numerals everywhere."
						source="Kobra's token discipline (translucent rules instead of shadows), shadcn's CSS-variable theming."
					>
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
							<Swatch name="Paper" value="oklch(0.975 0.003 250)" className="bg-paper shadow-[inset_0_0_0_1px_var(--rule)]" />
							<Swatch name="Paper 2" value="oklch(0.945 0.004 250)" className="bg-paper-2" />
							<Swatch name="Ink" value="oklch(0.19 0.012 260)" className="bg-ink" text="text-paper" />
							<Swatch name="Ink 2" value="oklch(0.43 0.012 260)" className="bg-ink-2" text="text-paper" />
							<Swatch name="Rule" value="ink at 16%" className="bg-rule" />
							<Swatch name="Signal red" value="oklch(0.555 0.215 28)" className="bg-red" text="text-red-ink" />
						</div>
						<div className="mt-10 flex flex-col gap-6 border-t border-rule pt-6">
							<div className="grid grid-cols-12 items-baseline gap-x-6">
								<span className="col-span-12 text-sm text-ink-2 sm:col-span-2">Display · 68% width, 780</span>
								<span className="col-span-12 font-condensed text-display sm:col-span-10">Aadarsha</span>
							</div>
							<div className="grid grid-cols-12 items-baseline gap-x-6">
								<span className="col-span-12 text-sm text-ink-2 sm:col-span-2">Headline</span>
								<span className="col-span-12 font-condensed text-headline sm:col-span-10">Experience</span>
							</div>
							<div className="grid grid-cols-12 items-baseline gap-x-6">
								<span className="col-span-12 text-sm text-ink-2 sm:col-span-2">Numeral</span>
								<span className="col-span-12 font-condensed text-numeral sm:col-span-10">2025–26 · 500,000 · 9.03</span>
							</div>
							<div className="grid grid-cols-12 items-baseline gap-x-6">
								<span className="col-span-12 text-sm text-ink-2 sm:col-span-2">Body · 17px</span>
								<p className="col-span-12 max-w-[62ch] sm:col-span-10">
									Built a real-time inbox for Socify, a customer-messaging and CRM product, connecting Instagram,
									Messenger, WhatsApp and TikTok with full data separation between businesses.
								</p>
							</div>
						</div>
					</Specimen>

					<Specimen
						code="C2"
						name="Icons"
						note="One set, one weight: Phosphor regular at 20px. Brand marks from the same set so they match."
						source="Phosphor Icons (free, MIT), your pick."
					>
						<ul className="grid grid-cols-3 border-t border-l border-rule sm:grid-cols-5">
							{icons.map(([label, Icon]) => (
								<li key={label} className="flex flex-col items-center gap-3 border-r border-b border-rule py-6 text-sm text-ink-2">
									<Icon size={24} className="text-ink" aria-hidden />
									{label}
								</li>
							))}
						</ul>
					</Specimen>

					<Specimen
						code="C3"
						name="Buttons"
						note="Softly rounded keys with a 1px edge, a faint top highlight and a small shadow. Primary is the signal red, secondary a white key. Press sinks 1px and the shadow turns inward. Loading keeps the label and spins an icon."
						source="Vibrant's primary and secondary buttons, in your palette; shadcn's variant API."
					>
						<div className="flex flex-col gap-8">
							<div className="flex flex-wrap items-center gap-3">
								<Button>
									<DownloadSimpleIcon aria-hidden /> Resume (PDF)
								</Button>
								<Button variant="ink">
									<EnvelopeSimpleIcon aria-hidden /> Email me
								</Button>
								<Button variant="secondary">
									View project <ArrowRightIcon aria-hidden />
								</Button>
								<Button variant="ghost">Ghost</Button>
								<Button variant="secondary" size="icon" aria-label="Copy email">
									<CopyIcon aria-hidden />
								</Button>
							</div>
							<div className="flex flex-wrap items-center gap-3">
								<Button size="sm">Small</Button>
								<Button size="md">Medium</Button>
								<Button size="lg">Large</Button>
								<Button
									variant="ink"
									loading={loading}
									onClick={() => {
										setLoading(true);
										window.setTimeout(() => setLoading(false), 1600);
									}}
								>
									{loading ? "Sending" : "Click for loading"}
								</Button>
								<Button disabled>Disabled</Button>
							</div>
							<div className="flex flex-wrap gap-3 bg-red p-5">
								<Button variant="secondary">Resume (PDF)</Button>
								<Button variant="onRed">Email me</Button>
							</div>
						</div>
					</Specimen>

					<Specimen
						code="C4"
						name="Links and tags"
						note="Links carry a 1px rule that retracts on hover as the text turns red; external links add an arrow that steps out. Tags are ruled labels, no fills."
						source="Original, in the Swiss vocabulary."
					>
						<p className="max-w-[60ch] text-lg">
							ResolveAI is live at <TextLink href={projects[0].live} external>resolve-ai.workers.dev</TextLink>, with
							source on <TextLink href={projects[0].source} external>GitHub</TextLink>, or jump to{" "}
							<TextLink href="#C9">the projects specimen</TextLink>.
						</p>
						<div className="mt-6 flex flex-wrap gap-1.5">
							<Tag>Django</Tag>
							<Tag>PostgreSQL</Tag>
							<TagList items={["React", "Tailwind CSS", "Cloudflare"]} />
						</div>
					</Specimen>

					<Specimen
						code="C5"
						name="Navbar"
						note="The poster's top rule. A red bar slides under the active section. Click the links to see it move; on phones it becomes a full-screen red menu that wipes down."
						source="Kobra Navigation Menu (free) for the sliding indicator idea; Base UI Dialog for the mobile menu."
					>
						<div className="shadow-[inset_0_0_0_1px_var(--rule)]">
							<TopBar active={active} onNavigate={setActive} onOpenIndex={() => setIndexOpen(true)} />
							<div className="flex h-24 items-center px-6 text-sm text-ink-2">
								Active: {sections.find((s) => s.id === active)?.label}. Narrow the window for the mobile menu.
							</div>
						</div>
					</Specimen>

					<Specimen
						code="C6"
						name="Site index (Cmd/Ctrl+K)"
						note="An index of every project, role and action, set like a catalogue's index. Type to filter, arrows to move, Enter to go, Esc to close."
						source="Kobra Command Menu (free) for the behaviour; Base UI Dialog; styling is original."
					>
						<Button variant="secondary" onClick={() => setIndexOpen(true)}>
							<MagnifyingGlassIcon aria-hidden /> Open the index
							<kbd className="ml-2 text-xs text-current/70">Ctrl K</kbd>
						</Button>
						<CommandIndex items={indexItems} open={indexOpen} onOpenChange={setIndexOpen} />
					</Specimen>

					<Specimen
						code="C7"
						name="Intro block"
						note="The red block on the first screen: your summary and the two actions a recruiter came for."
						source="Original."
					>
						<div className="max-w-[720px]">
							<IntroBlock />
						</div>
					</Specimen>

					<Specimen
						code="C8"
						name="Role timetable"
						note="Roles set like a departures board: year as a big numeral, company and title beside it. Hover draws a red rule. Sits in the right columns of the first screen."
						source="Original."
					>
						<div className="max-w-[460px]">
							<Timetable roles={experience} />
						</div>
					</Specimen>

					<Specimen
						code="C9"
						name="Project entry"
						note="The signature interaction. A row opens downward into its case study, columns already in place; a red marker slides to the open entry. ResolveAI and Pro-Goal need screenshots from you."
						source="Aceternity Expandable Cards (free) for the open-in-place idea; Motion layout animation."
					>
						<ul className="border-t border-ink">
							{projects.map((p) => (
								<ProjectEntry
									key={p.id}
									project={p}
									open={openProject === p.id}
									onToggle={() => setOpenProject(openProject === p.id ? null : p.id)}
								/>
							))}
						</ul>
					</Specimen>

					<Specimen
						code="C10"
						name="Role entry"
						note="Experience in full: dates on the left rail, the work on the right, the hard numbers from your resume set as a ruled row in red."
						source="Aceternity Timeline (free) for the reading order, without its glowing beam."
					>
						<div>
							{experience.map((r) => (
								<RoleEntry key={r.id} role={r} />
							))}
						</div>
					</Specimen>

					<Specimen
						code="C11"
						name="Skills table"
						note="Skills typeset as a table by group, not a wall of logo badges."
						source="Original."
					>
						<SkillsList />
					</Specimen>

					<Specimen
						code="C12"
						name="Contact and toast"
						note="The close: your address at poster size, a copy button that confirms with a toast, and the other doors."
						source="Kobra Toast (free) for the confirm pattern; original styling."
					>
						<ContactBlock />
						<div className="mt-6">
							<ToastDemo />
						</div>
					</Specimen>

					<Specimen
						code="C13"
						name="Designation switcher"
						note="Your title cycles Full Stack, Frontend, Backend while Engineer holds still. Each word slides up out of a fixed line; it pauses while hovered, and screen readers hear only Full Stack Engineer."
						source="Aceternity Container Text Flip (free) for the idea; Motion, without the blur."
					>
						<RoleFlip className="font-condensed text-headline" />
					</Specimen>

					<Specimen
						code="C14"
						name="First screen, assembled"
						note="How the pieces meet on the first screen: name across the top, timetable at right, red block, and a project screenshot set into the grid."
						source="The direction contract's first-viewport plan."
					>
						<div className="grid grid-cols-12 gap-4 bg-paper p-4 shadow-[inset_0_0_0_1px_var(--rule)] sm:gap-6 sm:p-6">
							<div className="col-span-12 lg:col-span-8">
								<h2 className="font-condensed text-[clamp(3rem,1rem+6vw,7.5rem)] leading-[0.86] tracking-[-0.035em]">
									Aadarsha
									<br />
									Subedi
								</h2>
								<RoleFlip className="mt-4 font-condensed text-[clamp(1.75rem,1rem+2vw,3rem)] leading-none tracking-[-0.02em]" />
							</div>
							<div className="col-span-12 lg:col-span-4 lg:self-end">
								<p className="mb-2 flex items-center gap-1.5 text-sm text-ink-2">
									<MapPinIcon size={16} aria-hidden /> {profile.location}
								</p>
								<Timetable roles={experience} />
							</div>
							<div className="col-span-12 lg:col-span-6">
								<IntroBlock />
							</div>
							<Plate className="col-span-12 lg:col-span-6" alt="ResolveAI" caption="ResolveAI: AI support desk, live on Cloudflare" />
						</div>
					</Specimen>
				</div>
			</ToastProvider>
		</MotionConfig>
	);
}

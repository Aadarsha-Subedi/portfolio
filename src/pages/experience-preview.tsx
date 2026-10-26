import { Accordion } from "@base-ui/react/accordion";
import { Tabs } from "@base-ui/react/tabs";
import { CaretDownIcon } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { CompanyLogo } from "@/components/site/company-logo";
import { Emphasis } from "@/components/site/experience-section";
import { ParticleField } from "@/components/site/particle-field";
import { SiteNav } from "@/components/site/site-nav";
import { TechChips } from "@/components/site/tech-chip";
import { experience, type Role } from "@/content/resume";
import { PreviewOption as Option } from "@/pages/preview-option";

/*
 * A review page for the Experience section: the same two roles shown four
 * ways (timeline, sticky scroll reveal, accordion, tabs) so one can be picked.
 * All four are built here on motion and Base UI, both free.
 */
export function ExperiencePreview() {
	return (
		<>
			<ParticleField />
			<SiteNav />
			<main className="mx-auto max-w-[1392px] px-4 pb-32 sm:px-6">
				<header className="py-16">
					<p className="text-ink-2 text-sm font-medium tracking-wide uppercase">
						Design preview
					</p>
					<h1 className="font-condensed text-ink mt-2 text-5xl leading-none">
						Experience section
					</h1>
					<p className="text-ink-2 mt-4 max-w-[40rem] text-lg">
						Four ways to show the same two roles, each with your real resume
						data. Scroll through, try each one, and pick a letter.
					</p>
				</header>

				<Option
					letter="A"
					name="Timeline"
					note="A line fills as you scroll; the company and years stay pinned beside each role."
				>
					<TimelineOption />
				</Option>
				<Option
					letter="B"
					name="Sticky scroll reveal"
					note="The roles scroll on the left while a pinned card on the right swaps to match the one you are reading."
				>
					<StickyRevealOption />
				</Option>
				<Option
					letter="C"
					name="Accordion"
					note="Each role is a row that expands in place. The latest role starts open."
				>
					<AccordionOption />
				</Option>
				<Option
					letter="D"
					name="Tabs"
					note="One role at a time, switched by a tab per company."
				>
					<TabsOption />
				</Option>
			</main>
		</>
	);
}

/* The parts every option shares: the role line, the points and the stack. */
function RoleDetails({
	role,
	showHeading = true,
}: {
	role: Role;
	showHeading?: boolean;
}) {
	return (
		<div className="flex flex-col gap-4">
			{showHeading && (
				<div>
					<h3 className="text-ink text-lg font-semibold">{role.title}</h3>
					<p className="text-ink-2 text-sm">
						{role.company} · {role.start} – {role.end} · {role.location}
					</p>
				</div>
			)}
			<ul className="text-ink-2 flex list-disc flex-col gap-2 pl-4 text-[15px] leading-relaxed marker:text-sky-600">
				{role.highlights.map((point) => (
					<li key={point}>
						<Emphasis text={point} />
					</li>
				))}
			</ul>
			<TechChips items={role.stack} />
		</div>
	);
}

/* A: Timeline, after Aceternity's: a scroll-driven line with pinned headings. */
function TimelineOption() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 30%", "end 60%"],
	});
	const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<div ref={ref} className="relative">
			<div
				aria-hidden
				className="bg-rule absolute top-0 bottom-0 left-[1.125rem] w-px"
			>
				<motion.div
					className="h-full w-full origin-top bg-gradient-to-b from-sky-400 via-sky-600 to-sky-700"
					style={{ scaleY: fill }}
				/>
			</div>
			<ol className="flex flex-col gap-24">
				{experience.map((role) => (
					<li key={role.id} className="grid gap-6 md:grid-cols-[18rem_1fr]">
						<div className="md:sticky md:top-32 md:self-start">
							<div className="flex items-center gap-4">
								<span className="bg-paper relative z-10 grid size-9 place-items-center rounded-full">
									<CompanyLogo
										src={role.logo}
										name={role.company}
										href={role.website}
									/>
								</span>
								<div>
									<p className="font-condensed text-ink text-3xl leading-none">
										{role.company}
									</p>
									<p className="text-ink-2 mt-1 text-sm">{role.years}</p>
								</div>
							</div>
						</div>
						<div className="pl-14 md:pl-0">
							<RoleDetails role={role} />
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}

/* B: Sticky scroll reveal, after Aceternity's: text scrolls, the card beside it follows. */
function StickyRevealOption() {
	const [active, setActive] = useState(0);
	const blocks = useRef<(HTMLLIElement | null)[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting)
						setActive(Number((entry.target as HTMLElement).dataset.index));
				}
			},
			{ rootMargin: "-45% 0px -45% 0px" },
		);
		blocks.current.forEach((block) => block && observer.observe(block));
		return () => observer.disconnect();
	}, []);

	const role = experience[active];

	return (
		<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
			<ol className="flex flex-col">
				{experience.map((entry, index) => (
					<li
						key={entry.id}
						ref={(node) => {
							blocks.current[index] = node;
						}}
						data-index={index}
						className={`py-16 transition-opacity duration-300 ${index === active ? "opacity-100" : "opacity-35"}`}
					>
						<p className="text-ink-2 text-sm">{entry.years}</p>
						<h3 className="font-condensed text-ink mt-1 text-4xl leading-none">
							{entry.title}
						</h3>
						<p className="text-ink-2 mt-2">{entry.company}</p>
						<ul className="text-ink-2 mt-6 flex list-disc flex-col gap-2 pl-4 text-[15px] leading-relaxed marker:text-sky-600">
							{entry.highlights.map((point) => (
								<li key={point}>
									<Emphasis text={point} />
								</li>
							))}
						</ul>
					</li>
				))}
			</ol>
			<div className="hidden lg:block">
				<div className="sticky top-32 py-16">
					<motion.div
						key={role.id}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className="border-ink/10 flex flex-col gap-5 rounded-2xl border bg-gradient-to-br from-white to-sky-50 p-6 shadow-[0_24px_48px_-30px_oklch(0.19_0.012_260/0.3)]"
					>
						<div className="flex items-center gap-3">
							<CompanyLogo
								src={role.logo}
								name={role.company}
								href={role.website}
								size="lg"
							/>
							<div>
								<p className="text-ink font-semibold">{role.company}</p>
								<p className="text-ink-2 text-sm">
									{role.start} – {role.end}
								</p>
							</div>
						</div>
						<TechChips items={role.stack} />
					</motion.div>
				</div>
			</div>
		</div>
	);
}

/* C: Accordion on Base UI. */
function AccordionOption() {
	return (
		<Accordion.Root
			defaultValue={[experience[0].id]}
			className="border-rule flex flex-col border-y"
		>
			{experience.map((role) => (
				<Accordion.Item
					key={role.id}
					value={role.id}
					className="border-rule border-b last:border-b-0"
				>
					<Accordion.Header>
						<Accordion.Trigger className="group flex w-full items-center gap-4 py-5 text-left">
							<CompanyLogo src={role.logo} name={role.company} />
							<span className="flex-1">
								<span className="text-ink block font-semibold">
									{role.company}
								</span>
								<span className="text-ink-2 block text-sm">{role.title}</span>
							</span>
							<span className="text-ink-2 hidden text-sm sm:block">
								{role.years}
							</span>
							<CaretDownIcon
								aria-hidden
								className="text-ink-2 size-5 transition-transform duration-200 group-data-[panel-open]:rotate-180"
							/>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
						<div className="pb-6 pl-[3.25rem]">
							<RoleDetails role={role} showHeading={false} />
						</div>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
}

/* D: Tabs on Base UI, one tab per company. */
function TabsOption() {
	return (
		<Tabs.Root defaultValue={experience[0].id}>
			<Tabs.List className="border-rule relative flex gap-2 border-b">
				{experience.map((role) => (
					<Tabs.Tab
						key={role.id}
						value={role.id}
						className="text-ink-2 data-[selected]:text-ink flex items-center gap-2.5 px-3 py-3 text-sm font-medium transition-colors"
					>
						<CompanyLogo src={role.logo} name={role.company} />
						<span className="text-left">
							<span className="block">{role.company}</span>
							<span className="text-ink-2 block text-xs font-normal">
								{role.years}
							</span>
						</span>
					</Tabs.Tab>
				))}
				<Tabs.Indicator className="absolute bottom-[-1px] left-[var(--active-tab-left)] h-0.5 w-[var(--active-tab-width)] bg-sky-600 transition-all duration-300" />
			</Tabs.List>
			{experience.map((role) => (
				<Tabs.Panel key={role.id} value={role.id} className="pt-8">
					<RoleDetails role={role} />
				</Tabs.Panel>
			))}
		</Tabs.Root>
	);
}

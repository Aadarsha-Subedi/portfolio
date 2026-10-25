import { MotionConfig } from "motion/react";
import { useCallback, useMemo, useState } from "react";

import { CommandIndex, type IndexItem } from "@/components/site/command-index";
import { ContactBlock } from "@/components/site/contact-block";
import { EducationBlock } from "@/components/site/education-block";
import { Footer } from "@/components/site/footer";
import { IntroBlock } from "@/components/site/intro-block";
import { ParticleField } from "@/components/site/particle-field";
import { Plate } from "@/components/site/plate";
import { ProjectEntry } from "@/components/site/project-entry";
import { RoleEntry } from "@/components/site/role-entry";
import { RoleFlip } from "@/components/site/role-flip";
import { Section } from "@/components/site/section";
import { SkillsList } from "@/components/site/skills-list";
import { Timetable } from "@/components/site/timetable";
import { TopBar, sections } from "@/components/site/top-bar";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { RESUME_URL, experience, profile, projects } from "@/content/resume";
import { useActiveSection } from "@/hooks";

const sectionIds = sections.map((s) => s.id);
const featured = projects.find((p) => p.featured)!;

function scrollToId(id: string) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Site() {
	const toast = useToast();
	const active = useActiveSection(sectionIds);
	const [indexOpen, setIndexOpen] = useState(false);
	const [openProject, setOpenProject] = useState<string | null>(null);

	const openProjectAndScroll = useCallback((id: string) => {
		setOpenProject(id);
		window.setTimeout(() => scrollToId(`project-${id}`), 60);
	}, []);

	const indexItems: IndexItem[] = useMemo(
		() => [
			...projects.map((p) => ({
				id: `project-${p.id}`,
				group: "Projects",
				label: p.name,
				meta: p.featured ? "Featured" : p.stack[0],
				run: () => openProjectAndScroll(p.id),
			})),
			...experience.map((r) => ({
				id: `role-${r.id}`,
				group: "Experience",
				label: `${r.title}, ${r.company}`,
				meta: r.years,
				run: () => scrollToId(`role-${r.id}`),
			})),
			...sections.map((s) => ({ id: `section-${s.id}`, group: "Sections", label: s.label, run: () => scrollToId(s.id) })),
			{ id: "resume", group: "Actions", label: "Open resume (PDF)", meta: "PDF", run: () => window.open(RESUME_URL, "_blank", "noreferrer") },
			{
				id: "copy-email",
				group: "Actions",
				label: "Copy email address",
				meta: profile.email,
				run: () =>
					navigator.clipboard
						.writeText(profile.email)
						.then(() => toast("Email address copied"))
						.catch(() => toast("Couldn’t copy. Select the address instead")),
			},
			{ id: "github", group: "Actions", label: "GitHub profile", meta: "github.com", run: () => window.open(profile.links.github, "_blank", "noreferrer") },
			{ id: "linkedin", group: "Actions", label: "LinkedIn profile", meta: "linkedin.com", run: () => window.open(profile.links.linkedin, "_blank", "noreferrer") },
		],
		[openProjectAndScroll, toast],
	);

	return (
		<>
			<ParticleField />
			<TopBar active={active} onOpenIndex={() => setIndexOpen(true)} />
			<CommandIndex items={indexItems} open={indexOpen} onOpenChange={setIndexOpen} />

			<main id="top" className="mx-auto max-w-[1440px] px-4 sm:px-6">
				{/* First screen: name, designation, timetable, the red block and the flagship project. */}
				<section aria-label="Introduction" className="grid grid-cols-12 gap-x-4 gap-y-8 pt-8 pb-20 sm:gap-x-6 sm:pt-12 md:pb-28">
					<div className="col-span-12 lg:col-span-8">
						<h1 className="font-condensed text-display">
							Aadarsha
							<br />
							Subedi
						</h1>
						<RoleFlip className="mt-5 font-condensed text-[clamp(1.75rem,1rem+2.4vw,3.5rem)] leading-none tracking-[-0.02em]" />
					</div>
					<div className="col-span-12 sm:col-span-8 lg:col-span-4 lg:self-end">
						<p className="mb-2 text-sm text-ink-2">{profile.location}</p>
						<Timetable roles={experience} />
					</div>

					<div className="col-span-12 lg:col-span-6">
						<IntroBlock />
					</div>
					<a
						href={`#project-${featured.id}`}
						onClick={(e) => {
							e.preventDefault();
							openProjectAndScroll(featured.id);
						}}
						className="group col-span-12 block lg:col-span-6"
					>
						<Plate
							src={featured.image}
							alt={featured.name}
							caption={`${featured.name}: ${featured.summary}`}
							ratio="aspect-[16/10]"
							className="[&_figcaption]:transition-colors group-hover:[&_figcaption]:text-red"
						/>
					</a>
				</section>

				<Section id="work" title="Work" aside="Things I designed, built and deployed end to end.">
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
				</Section>

				<Section id="experience" title="Experience">
					{experience.map((r) => (
						<RoleEntry key={r.id} role={r} />
					))}
				</Section>

				<Section id="education" title="Education">
					<EducationBlock />
				</Section>

				<Section id="skills" title="Skills">
					<SkillsList />
				</Section>

				<Section id="contact" title="Contact" aside="Email is the fastest way to reach me.">
					<ContactBlock />
				</Section>
			</main>

			<Footer />
		</>
	);
}

export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<ToastProvider>
				<Site />
			</ToastProvider>
		</MotionConfig>
	);
}

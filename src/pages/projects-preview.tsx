import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";

import { SiteNav } from "@/components/site/site-nav";
import { TechChips } from "@/components/site/tech-chip";
import { ButtonLink } from "@/components/ui/button";
import { type Project, projects } from "@/content/resume";
import { PreviewOption as Option } from "@/pages/preview-option";

const featured = projects.filter((project) => project.featured);

/*
 * A review page for the Projects section: ResolveAI and Pro-Goal shown as
 * four kinds of card so one can be picked. Nothing here is on the main page.
 */
export function ProjectsPreview() {
	return (
		<>
			<SiteNav />
			<main className="mx-auto max-w-[1392px] px-4 pb-32 sm:px-6">
				<header className="py-16">
					<p className="text-ink text-sm font-medium tracking-wide uppercase">Design preview</p>
					<h1 className="font-condensed text-ink mt-2 text-5xl leading-none">Projects section</h1>
					<p className="text-ink mt-4 max-w-[40rem] text-lg">
						Four card designs for ResolveAI and Pro-Goal, each with your real project data. Scroll through and pick a
						letter.
					</p>
				</header>

				<Option letter="A" name="Screenshot cards" note="Two cards side by side, the screenshot framed like a browser window on top.">
					<ScreenshotCards />
				</Option>
				<Option
					letter="B"
					name="Feature rows"
					note="One project per row, a large screenshot beside the full write-up. The sides alternate."
				>
					<FeatureRows />
				</Option>
				<Option
					letter="C"
					name="Index list"
					note="A numbered, text-first list. Hovering a row brings up its screenshot."
				>
					<IndexList />
				</Option>
				<Option letter="D" name="Stacking cards" note="Each card pins as you scroll and the next one slides over it.">
					<StackingCards />
				</Option>
			</main>
		</>
	);
}

/* The project's links, live site first. */
function ProjectLinks({ project }: { project: Project }) {
	return (
		<div className="flex flex-wrap gap-2">
			{project.live && (
				<ButtonLink href={project.live} target="_blank" rel="noreferrer">
					Live site
					<ArrowUpRightIcon aria-hidden />
				</ButtonLink>
			)}
			{project.source && (
				<ButtonLink variant="secondary" href={project.source} target="_blank" rel="noreferrer">
					<GithubLogoIcon aria-hidden />
					Source
				</ButtonLink>
			)}
		</div>
	);
}

/* The screenshot in a light browser frame. */
function BrowserFrame({ project, className = "" }: { project: Project; className?: string }) {
	return (
		<div className={`border-ink/10 overflow-hidden rounded-xl border bg-white ${className}`}>
			<div className="border-ink/10 flex items-center gap-1.5 border-b px-3 py-2">
				<span className="size-2.5 rounded-full bg-[#ff5f57]" />
				<span className="size-2.5 rounded-full bg-[#febc2e]" />
				<span className="size-2.5 rounded-full bg-[#28c840]" />
				<span className="text-ink/70 ml-3 truncate text-xs">{project.live?.replace(/^https:\/\//, "")}</span>
			</div>
			<img
				src={project.image}
				alt={`${project.name} screenshot`}
				className="bg-paper-2 aspect-[16/10] w-full object-cover object-top"
				loading="lazy"
			/>
		</div>
	);
}

function Points({ points }: { points: string[] }) {
	return (
		<ul className="text-ink flex list-disc flex-col gap-2 pl-4 text-[15px] leading-relaxed marker:text-sky-600">
			{points.map((point) => (
				<li key={point}>{point}</li>
			))}
		</ul>
	);
}

/* A: screenshot on top, then the name, summary, stack and links. */
function ScreenshotCards() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{featured.map((project) => (
				<article
					key={project.id}
					className="border-ink/10 flex flex-col gap-5 rounded-2xl border bg-white/70 p-4 transition-colors hover:border-sky-300"
				>
					<BrowserFrame project={project} />
					<div className="flex flex-1 flex-col gap-4 px-1 pb-1">
						<div>
							<h3 className="text-ink text-xl font-semibold">{project.name}</h3>
							<p className="text-ink mt-1">{project.summary}</p>
						</div>
						<TechChips items={project.stack} />
						<div className="mt-auto pt-1">
							<ProjectLinks project={project} />
						</div>
					</div>
				</article>
			))}
		</div>
	);
}

/* B: a wide row per project, the screenshot and the write-up swapping sides each time. */
function FeatureRows() {
	return (
		<div className="flex flex-col gap-20">
			{featured.map((project, index) => (
				<article key={project.id} className="grid items-center gap-8 lg:grid-cols-12">
					<BrowserFrame
						project={project}
						className={`shadow-[0_24px_48px_-30px_oklch(0.19_0.012_260/0.35)] lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}
					/>
					<div className="flex flex-col gap-5 lg:col-span-5">
						<p className="text-sm font-semibold text-sky-700">0{index + 1}</p>
						<h3 className="font-condensed text-ink -mt-3 text-4xl leading-none">{project.name}</h3>
						<p className="text-ink text-lg">{project.summary}</p>
						<Points points={project.details} />
						<TechChips items={project.stack} />
						<ProjectLinks project={project} />
					</div>
				</article>
			))}
		</div>
	);
}

/* C: a numbered list that reads like a table of contents; a row shows its screenshot on hover. */
function IndexList() {
	return (
		<ol className="border-ink/15 border-y">
			{featured.map((project, index) => (
				<li
					key={project.id}
					className="group border-ink/15 relative grid gap-4 border-b py-8 last:border-b-0 md:grid-cols-12 md:gap-6"
				>
					<span className="font-condensed text-ink/40 text-5xl leading-none transition-colors group-hover:text-sky-600 md:col-span-1">
						0{index + 1}
					</span>
					<div className="flex flex-col gap-4 md:col-span-6">
						<h3 className="text-ink text-2xl font-semibold">{project.name}</h3>
						<p className="text-ink">{project.summary}</p>
						<TechChips items={project.stack} />
						<ProjectLinks project={project} />
					</div>
					<div className="pointer-events-none hidden translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:col-span-5 md:block">
						<BrowserFrame project={project} className="shadow-[0_24px_48px_-30px_oklch(0.19_0.012_260/0.35)]" />
					</div>
				</li>
			))}
		</ol>
	);
}

/* D: each card sticks a little lower than the last, so they pile up as the page scrolls. */
function StackingCards() {
	return (
		<div className="flex flex-col gap-8">
			{featured.map((project, index) => (
				<article
					key={project.id}
					style={{ top: `${6 + index * 1.5}rem` }}
					className="border-ink/10 grid gap-6 rounded-3xl border bg-white p-5 shadow-[0_-12px_40px_-24px_oklch(0.19_0.012_260/0.3)] md:sticky md:grid-cols-12 md:p-8"
				>
					<div className="flex flex-col gap-4 md:col-span-5">
						<h3 className="font-condensed text-ink text-4xl leading-none">{project.name}</h3>
						<p className="text-ink">{project.summary}</p>
						<Points points={project.details} />
						<TechChips items={project.stack} />
						<ProjectLinks project={project} />
					</div>
					<BrowserFrame project={project} className="self-start md:col-span-7" />
				</article>
			))}
			{/* Room to scroll past, so the last card has something to stack onto. */}
			<div aria-hidden className="h-[30vh]" />
		</div>
	);
}

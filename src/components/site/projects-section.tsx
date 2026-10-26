import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { useLayoutEffect, useRef, useState } from "react";

import AccordionGallery from "@/components/react-bits/accordion-gallery";
import { TechChips } from "@/components/site/tech-chip";
import { ButtonLink } from "@/components/ui/button";
import { type Project, projects } from "@/content/resume";

const featured = projects.filter((project) => project.featured);

/* The screenshots' width over height, and the share of the row the open one takes. */
const SHOT_RATIO = 1600 / 758;
const EXPAND = 0.75;
const GAP = 10;

/*
 * Sizes the gallery so its open panel has the screenshots' own shape, which
 * shows each one whole instead of a cropped close-up.
 */
function useGalleryHeight(count: number) {
	const ref = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(360);
	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;
		const measure = () =>
			setHeight(
				Math.round(
					((el.clientWidth - GAP * (count - 1)) * EXPAND) / SHOT_RATIO,
				),
			);
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		measure();
		return () => observer.disconnect();
	}, [count]);
	return { ref, height };
}

/*
 * Projects on the same grid as Experience and Skills: one card per featured
 * project, its screenshots in an accordion gallery on top, then the title
 * with its links, a paragraph on the project and the stack.
 */
export function ProjectsSection() {
	return (
		<section
			id="work"
			aria-labelledby="work-title"
			className="mx-auto max-w-[1392px] scroll-mt-24 px-4 py-16 sm:px-6"
		>
			<div className="grid grid-cols-12 gap-x-6 gap-y-6">
				<div className="col-span-12 md:col-span-3">
					<h2
						id="work-title"
						className="font-condensed text-ink text-5xl leading-none"
					>
						Projects
					</h2>
				</div>
				<div className="col-span-12 flex flex-col gap-8 md:col-span-9">
					{featured.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectCard({ project }: { project: Project }) {
	const { ref: galleryRef, height: galleryHeight } = useGalleryHeight(project.gallery?.length ?? 1);
	return (
		<article className="border-ink/10 flex flex-col gap-5 rounded-2xl border bg-white/70 p-4">
			{project.gallery && (
				<div ref={galleryRef}>
					<AccordionGallery
						items={project.gallery.map(({ image, label }) => ({
							image,
							label,
							alt: `${project.name}: ${label}`,
						}))}
						defaultIndex={0}
						expandRatio={EXPAND}
						height={galleryHeight}
						gap={GAP}
						parallax={0}
						radius={12}
						accentColor="#0084d1"
						overlayColor="#14161c"
						className="project-gallery"
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 px-1 pb-1">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<h3 className="text-ink text-2xl font-semibold">{project.name}</h3>
					<div className="flex flex-wrap gap-2">
						{project.live && (
							<ButtonLink href={project.live} target="_blank" rel="noreferrer">
								Live site
								<ArrowUpRightIcon aria-hidden />
							</ButtonLink>
						)}
						{project.source && (
							<ButtonLink
								variant="secondary"
								href={project.source}
								target="_blank"
								rel="noreferrer"
							>
								<GithubLogoIcon aria-hidden />
								Source
							</ButtonLink>
						)}
					</div>
				</div>
				<p className="text-ink max-w-[70ch] text-[15px] leading-relaxed">
					{project.about ?? project.summary}
				</p>
				<TechChips items={project.stack} />
			</div>
		</article>
	);
}

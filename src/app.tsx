import { MotionConfig } from "motion/react";

import { ExperienceSection } from "@/components/site/experience-section";
import { Hero } from "@/components/site/hero";
import { ProjectsSection } from "@/components/site/projects-section";
import { SkillsSection } from "@/components/site/skills-section";
import { SiteNav } from "@/components/site/site-nav";

/*
 * The page is being rebuilt one section at a time: so far the
 * navigation, the hero, experience, projects and skills.
 */
export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<SiteNav />
			<main id="top">
				<Hero />
				<ExperienceSection />
				<ProjectsSection />
				<SkillsSection />
			</main>
		</MotionConfig>
	);
}

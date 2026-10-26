import { MotionConfig } from "motion/react";

import { ExperienceSection } from "@/components/site/experience-section";
import { Hero } from "@/components/site/hero";
import { SkillsSection } from "@/components/site/skills-section";
import { SiteNav } from "@/components/site/site-nav";

/*
 * The page is being rebuilt one section at a time: so far the
 * navigation, the hero, experience and skills.
 */
export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<SiteNav />
			<main id="top">
				<Hero />
				<ExperienceSection />
				<SkillsSection />
			</main>
		</MotionConfig>
	);
}

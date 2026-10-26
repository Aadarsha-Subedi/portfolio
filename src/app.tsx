import { MotionConfig } from "motion/react";

import { ExperienceSection } from "@/components/site/experience-section";
import { Hero } from "@/components/site/hero";
import { ParticleField } from "@/components/site/particle-field";
import { SiteNav } from "@/components/site/site-nav";

/*
 * The page is being rebuilt one section at a time: so far the particle
 * background, the navigation, the hero and experience.
 */
export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<ParticleField />
			<SiteNav />
			<main id="top">
				<Hero />
				<ExperienceSection />
			</main>
		</MotionConfig>
	);
}

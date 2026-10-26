import { MotionConfig } from "motion/react";

import { Hero } from "@/components/site/hero";
import { ParticleField } from "@/components/site/particle-field";
import { SiteNav } from "@/components/site/site-nav";

/*
 * The page is being rebuilt one section at a time: so far the particle
 * background, the navigation and the hero.
 */
export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<ParticleField />
			<SiteNav />
			<main id="top">
				<Hero />
			</main>
		</MotionConfig>
	);
}

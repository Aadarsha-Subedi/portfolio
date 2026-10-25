import { MotionConfig } from "motion/react";

import { ParticleField } from "@/components/site/particle-field";
import { SiteNav } from "@/components/site/site-nav";

/*
 * The page is intentionally empty while each section is redesigned: only the
 * particle background and the navigation remain.
 */
export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<ParticleField />
			<SiteNav />
			<main id="top" className="min-h-dvh" />
		</MotionConfig>
	);
}

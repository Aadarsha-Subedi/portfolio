import { MotionConfig } from "motion/react";

import { ExperienceSection } from "@/components/site/experience-section";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { ParticleField } from "@/components/site/particle-field";
import { ProjectsSection } from "@/components/site/projects-section";
import { SkillsSection } from "@/components/site/skills-section";
import { SiteNav } from "@/components/site/site-nav";

/*
 * The page is being rebuilt one section at a time: so far the
 * navigation, the hero, experience, projects, skills and the footer.
 */
export function App() {
	return (
		<MotionConfig reducedMotion="user">
			<ParticleField />
			<SiteNav />
			<main id="top">
				<Hero />
				<ExperienceSection />
				<ProjectsSection />
				<SkillsSection />
			</main>
			<Footer />
		</MotionConfig>
	);
}

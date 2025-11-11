import { motion } from "motion/react";

import financeTrackerImage from "../../assets/projects/finance-tracker.jpg";
import typeTesterImage from "../../assets/projects/type-tester.jpg";
import resumeBuilderImage from "../../assets/projects/resume-builder.jpg";
import { NavLink } from "react-router-dom";

interface ProjectProps {
	title: string;
	src: string;
	href: string;
	position: string;
	description: string;
}
const ProjectData: ProjectProps[] = [
	{
		title: "Finance Tracker",
		src: financeTrackerImage,
		href: "https://finance-tracker-frontend-gules.vercel.app/",
		position: "top",
		description:
			"A finance tracker application with various analytics and customizable options.",
	},
	{
		title: "Type Tester",
		src: typeTesterImage,
		href: "https://type-tester-eight.vercel.app/",
		position: "top",
		description:
			"A minimalistic type tester application with assisted cues for focus to test your WPM and accuracy when typing.",
	},
	{
		title: "Fresher Resume Builder",
		src: resumeBuilderImage,
		href: "https://fresher-resume-builder.vercel.app/",
		position: "top",
		description:
			"A resume builder for freshers simply through filling forms.",
	},
];

export const Projects = () => {
	return (
		<div className="py-10">
			<p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
				I have a deep passion for building scalable full stack web
				applications!
			</p>
			<div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
				{ProjectData.map(
					(project: ProjectProps, index: number): React.ReactNode => {
						return (
							<motion.div
								initial={{
									opacity: 0,
									filter: "blur(10px)",
									y: 10,
								}}
								animate={{
									opacity: 1,
									filter: "blur(0px)",
									y: 0,
								}}
								transition={{
									duration: 0.3,
									delay: 0.15 * index,
									ease: "easeInOut",
								}}
								className="group mb-4"
								key={project.title}
							>
								<NavLink to={project.href}>
									<img
										src={project.src}
										alt={project.title}
										width={300}
										height={300}
										className="h-72 w-full cursor-pointer rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
										style={{
											objectPosition: project.position,
										}}
									/>
								</NavLink>
								<h2 className="mt-2 font-bold tracking-tight text-neutral-500 dark:text-neutral-400">
									{project.title}
								</h2>
								<p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
									{project.description}
								</p>
							</motion.div>
						);
					},
				)}
			</div>
		</div>
	);
};

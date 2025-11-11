import { AnimatePresence, motion } from "motion/react";

import { Projects } from "../../components/projects/projects";
import { Container } from "../../components/wrappers/container";

import { RolesData, type RolesProps } from "../../utils/roles";
import { useEffect, useState } from "react";

export const Home = () => {
	const [role, setRole] = useState<RolesProps>(RolesData[0]);

	useEffect(() => {
		let interval = setInterval(updateRole, 2000);
		return () => clearInterval(interval);
	}, [role]);

	function updateRole() {
		let index = RolesData.indexOf(role);
		setRole(RolesData[(index + 1) % RolesData.length]);
	}

	return (
		<div className="flex min-h-screen items-start justify-center">
			<Container className="min-h-[200vh] px-4 pt-20 pb-10">
				<div className="flex items-center gap-x-4">
					<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
						<h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
							Aadarsha Subedi
						</h1>
						<div
							style={{
								backgroundImage:
									"radial-gradient(circle at 2px 2px,#e2e8f0 1px,transparent 0)",
								backgroundSize: "12px 12px",
								backgroundRepeat: "repeat",
							}}
							className="shadow-aceternity w-46 rounded-xl p-2 text-center md:p-4"
						>
							<AnimatePresence mode="wait">
								<motion.p
									className="font-bold"
									key={role.role}
									initial={{
										y: -10,
										opacity: 0,
										filter: "blur(10px)",
									}}
									animate={{
										y: 0,
										opacity: 1,
										filter: "blur(0px)",
									}}
									exit={{
										y: 10,
										opacity: 0,
										filter: "blur(10px)",
									}}
									transition={{
										duration: 0.3,
									}}
								>
									{role.role}
								</motion.p>
							</AnimatePresence>
						</div>
					</div>
				</div>
				<p className="text-secondary max-w-lg pt-4 text-justify text-sm md:text-sm">
					I have hands-on experience in React, Node.js, Express,
					MongoDB, and PostgreSQL, I excel at solving complex UI
					challenges and engineering robust backend systems. I am
					eager to contribute my skills to teams focused on building
					meaningful products, and I am especially interested in
					opportunities that let me deepen my expertise in cloud
					deployment and system design. Let's connect if you're
					looking for a developer who combines technical excellence
					with a growth mindset!
				</p>
				<Projects />
			</Container>
		</div>
	);
};

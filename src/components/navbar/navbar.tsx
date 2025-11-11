import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";
import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { Container } from "../wrappers/container";

import avatar from "../../assets/avatar.jpg";
import { ThemeButton } from "../wrappers/theme-button";

interface NavItemProps {
	title: string;
	href: string;
}
const navItems = [
	{ title: "Projects", href: "/projects" },
	{ title: "Contact", href: "/contact" },
	{ title: "Blog", href: "/blogs" },
];

export const Navbar = () => {
	const [hovered, setHovered] = useState<number | null>(null);
	const [scrollShadow, setScrollShadow] = useState<boolean>(false);

	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 100], [0, 10]);
	const width = useTransform(scrollY, [0, 100], ["100%", "50%"]);
	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrollShadow(latest > 20);
	});

	return (
		<Container>
			<motion.nav
				style={{
					boxShadow: scrollShadow
						? "var(--shadow-aceternity)"
						: "none",
					width,
					y,
				}}
				transition={{
					duration: 0.6,
					ease: "linear",
				}}
				className="fixed inset-x-0 top-0 z-10 mx-auto flex max-w-4xl items-center justify-between rounded-4xl bg-white px-3 py-2 dark:bg-black"
			>
				<Link to="/">
					<img
						className="h-10 w-10 rounded-full object-cover object-center"
						src={avatar}
						alt="Avatar"
						width={100}
						height={100}
					/>
				</Link>
				<div className="flex items-center">
					<ThemeButton />
					{navItems.map(
						(
							item: NavItemProps,
							index: number,
						): React.ReactNode => {
							return (
								<NavLink
									to={{
										pathname: item.href,
									}}
									key={index}
									className="text-primary relative px-4 py-2 text-sm"
									onMouseEnter={() => setHovered(index)}
									onMouseLeave={() => setHovered(null)}
								>
									{hovered === index && (
										<motion.span
											layoutId="hovered-span"
											className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
										></motion.span>
									)}
									<span className="text-primary relative z-10 font-medium">
										{item.title}
									</span>
								</NavLink>
							);
						},
					)}
				</div>
			</motion.nav>
		</Container>
	);
};

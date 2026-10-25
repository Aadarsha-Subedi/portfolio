import RotatingText from "@/components/react-bits/rotating-text";
import { cn } from "@/lib/utils";

/*
 * The designation: the discipline rotates inside a red block (React Bits
 * RotatingText) while "Engineer" holds still beside it.
 */
export function RoleFlip({
	disciplines = ["Full Stack", "Frontend", "Backend"],
	title = "Engineer",
	interval = 2000,
	className,
}: {
	disciplines?: string[];
	title?: string;
	interval?: number;
	className?: string;
}) {
	return (
		<p className={cn("flex flex-wrap items-center gap-x-[0.25em] gap-y-2", className)}>
			<RotatingText
				texts={disciplines}
				effect="slide"
				direction="up"
				highlight
				highlightColor="#d41a1b"
				staggerFrom="last"
				staggerDuration={0.025}
				splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
				rotationInterval={interval}
				style={{ borderRadius: 0 }}
			/>
			<span>{title}</span>
		</p>
	);
}

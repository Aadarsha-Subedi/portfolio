import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<"a"> & { external?: boolean };

/* A 1px rule that draws in from the left; external links carry an arrow that steps out. */
export function TextLink({ className, external, children, ...props }: TextLinkProps) {
	return (
		<a
			className={cn(
				"group/link inline-flex items-baseline gap-0.5 font-medium text-ink",
				"bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-left-bottom bg-no-repeat",
				"transition-[background-size,color] duration-(--dur-slow) ease-out-expo",
				"hover:bg-[length:0%_1px] hover:text-red",
				className,
			)}
			{...(external ? { target: "_blank", rel: "noreferrer" } : {})}
			{...props}
		>
			{children}
			{external && (
				<ArrowUpRightIcon
					className="size-[0.95em] self-center transition-transform duration-(--dur-base) ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
					aria-hidden
				/>
			)}
			{external && <span className="sr-only"> (opens in a new tab)</span>}
		</a>
	);
}

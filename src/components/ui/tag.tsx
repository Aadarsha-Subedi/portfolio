import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			className={cn(
				"inline-flex h-7 items-center px-2 text-[0.8rem] font-medium text-ink-2 shadow-[inset_0_0_0_1px_var(--rule)]",
				className,
			)}
			{...props}
		/>
	);
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
	return (
		<ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Stack">
			{items.map((item) => (
				<li key={item}>
					<Tag>{item}</Tag>
				</li>
			))}
		</ul>
	);
}

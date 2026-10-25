import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/*
 * The page's one rhythm: a full-width rule, the title in the first three
 * columns, the content in the remaining nine. Stacks on small screens.
 */
export function Section({
	id,
	title,
	aside,
	children,
	className,
}: {
	id: string;
	title: string;
	aside?: ReactNode;
	children: ReactNode;
	className?: string;
}) {
	return (
		<section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-24 border-t border-ink", className)}>
			<div className="grid grid-cols-12 gap-x-4 gap-y-6 pt-5 pb-20 sm:gap-x-6 md:pb-28">
				<div className="col-span-12 md:col-span-3">
					<h2 id={`${id}-title`} className="font-condensed text-headline">
						{title}
					</h2>
					{aside && <div className="mt-3 max-w-[28ch] text-[0.95rem] text-ink-2">{aside}</div>}
				</div>
				<div className="col-span-12 md:col-span-9">{children}</div>
			</div>
		</section>
	);
}

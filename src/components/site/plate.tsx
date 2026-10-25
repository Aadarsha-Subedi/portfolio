import { cn } from "@/lib/utils";

/*
 * A screenshot set into the grid: hairline frame, caption below on the
 * baseline. Without an image it holds the space with a labeled placeholder.
 */
export function Plate({
	src,
	alt,
	caption,
	className,
	ratio = "aspect-[4/3]",
}: {
	src?: string;
	alt: string;
	caption?: string;
	className?: string;
	ratio?: string;
}) {
	return (
		<figure className={cn("flex flex-col gap-2", className)}>
			<div className={cn("relative overflow-hidden bg-paper-2 shadow-[inset_0_0_0_1px_var(--rule)]", ratio)}>
				{src ? (
					<img src={src} alt={alt} loading="lazy" className="size-full object-cover object-top" />
				) : (
					<div className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-ink-2">
						<span>
							Screenshot of {alt}
							<br />
							to be added
						</span>
					</div>
				)}
			</div>
			{caption && <figcaption className="text-sm text-ink-2">{caption}</figcaption>}
		</figure>
	);
}

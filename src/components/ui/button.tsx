import { IconLoader2 } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/*
 * Square, flat, ruled. Hover is a fill that wipes in from the left along the
 * baseline, the way a Swiss poster block is cut, not a glow or a lift.
 */
const buttonVariants = cva(
	[
		"group/button relative isolate inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden",
		"font-medium whitespace-nowrap select-none",
		"transition-[color,translate] duration-(--dur-base) ease-out-expo",
		"active:translate-y-px disabled:pointer-events-none disabled:opacity-40",
		"before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0",
		"before:transition-transform before:duration-(--dur-slow) before:ease-out-expo",
		"hover:before:scale-x-100 focus-visible:before:scale-x-100",
		"[&_svg]:size-[1.15em] [&_svg]:shrink-0",
	],
	{
		variants: {
			variant: {
				primary: "bg-red text-red-ink before:bg-ink",
				ink: "bg-ink text-paper before:bg-red",
				outline: "text-ink shadow-[inset_0_0_0_1px_var(--ink)] before:bg-ink hover:text-paper focus-visible:text-paper",
				inverse: "bg-red-ink text-red before:bg-ink hover:text-red-ink focus-visible:text-red-ink",
				ghost: "text-ink before:bg-paper-2",
			},
			size: {
				sm: "h-9 px-3.5 text-sm",
				md: "h-11 px-5 text-[0.95rem]",
				lg: "h-14 px-6 text-lg",
				icon: "size-11",
			},
		},
		defaultVariants: { variant: "primary", size: "md" },
	},
);

type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & { loading?: boolean };

export function Button({ className, variant, size, loading, disabled, children, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size }), className)}
			disabled={disabled || loading}
			aria-busy={loading || undefined}
			{...props}
		>
			{loading && <IconLoader2 className="animate-spin" aria-hidden />}
			{children}
		</button>
	);
}

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonVariants>;

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
	return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };

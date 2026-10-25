import { SpinnerGapIcon } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/*
 * After Vibrant's buttons: softly rounded, a 1px edge, a faint top highlight
 * and a small drop shadow, so they read as pressable objects on the flat
 * Swiss page. Primary is a welcoming sky blue; secondary is a white key.
 */
const buttonVariants = cva(
	[
		"relative inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border",
		"font-medium whitespace-nowrap select-none",
		"transition-[background-color,border-color,box-shadow,color,translate] duration-(--dur-fast) ease-out-expo",
		"active:translate-y-px disabled:pointer-events-none disabled:opacity-45",
		"[&_svg]:size-[1.15em] [&_svg]:shrink-0",
	],
	{
		variants: {
			variant: {
				primary: [
					"border-sky-700 bg-sky-600 bg-[linear-gradient(to_bottom,oklch(1_0_0/0.16),oklch(1_0_0/0))] text-white",
					"shadow-[inset_0_1px_0_oklch(1_0_0/0.3),0_1px_2px_oklch(0.5_0.13_237/0.35),0_4px_12px_-4px_oklch(0.5_0.13_237/0.45)]",
					"hover:bg-sky-700 active:shadow-[inset_0_1px_2px_oklch(0.3_0.09_237/0.35)]",
				],
				secondary: [
					"border-rule bg-surface text-ink",
					"shadow-[inset_0_-1px_0_oklch(0.19_0.012_260/0.06),0_1px_2px_oklch(0.19_0.012_260/0.08)]",
					"hover:border-ink/25 hover:bg-paper active:shadow-[inset_0_1px_2px_oklch(0.19_0.012_260/0.12)]",
				],
				ink: [
					"border-ink bg-ink bg-[linear-gradient(to_bottom,oklch(1_0_0/0.1),oklch(1_0_0/0))] text-paper",
					"shadow-[inset_0_1px_0_oklch(1_0_0/0.16),0_1px_2px_oklch(0.19_0.012_260/0.3)]",
					"hover:bg-ink-2/90",
				],
				onRed: [
					"border-red-ink/45 bg-red-ink/10 text-red-ink",
					"shadow-[inset_0_1px_0_oklch(1_0_0/0.18)]",
					"hover:bg-red-ink/20",
				],
				ghost: "border-transparent text-ink hover:bg-paper-2",
			},
			size: {
				sm: "h-7 gap-1.5 px-2.5 text-[0.8125rem]",
				md: "h-8 gap-1.5 px-3 text-sm",
				lg: "h-10 px-4 text-[0.9375rem]",
				icon: "size-8",
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
			{loading && <SpinnerGapIcon className="animate-spin" aria-hidden />}
			{children}
		</button>
	);
}

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonVariants>;

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
	return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };

import { Dialog } from "@base-ui/react/dialog";
import { IconCommand, IconMenu2, IconX } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export const sections = [
	{ id: "work", label: "Work" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

/*
 * The top rule of the poster. A red bar sits under the active section and
 * slides between items as the reader moves, never fades.
 */
export function TopBar({
	active,
	onNavigate,
	onOpenIndex,
}: {
	active?: string;
	onNavigate?: (id: string) => void;
	onOpenIndex?: () => void;
}) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-ink bg-paper">
			<div className="mx-auto flex h-14 max-w-[1440px] items-stretch justify-between px-4 sm:px-6">
				<a href="#top" className="flex items-center gap-2 font-condensed text-xl tracking-tight">
					<span aria-hidden className="size-3 bg-red" />
					Aadarsha Subedi
				</a>

				<nav aria-label="Sections" className="hidden items-stretch md:flex">
					<ul className="flex items-stretch">
						{sections.map((s) => (
							<li key={s.id} className="relative flex">
								<a
									href={`#${s.id}`}
									onClick={() => onNavigate?.(s.id)}
									aria-current={active === s.id ? "location" : undefined}
									className={cn(
										"flex items-center px-3.5 text-[0.95rem] font-medium transition-colors duration-(--dur-fast)",
										active === s.id ? "text-ink" : "text-ink-2 hover:text-ink",
									)}
								>
									{s.label}
								</a>
								{active === s.id && (
									<motion.span
										layoutId="topbar-marker"
										className="absolute inset-x-3.5 -bottom-px h-[3px] bg-red"
										transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
									/>
								)}
							</li>
						))}
					</ul>
					<button
						type="button"
						onClick={onOpenIndex}
						className="ml-3 flex items-center gap-2 self-center px-2.5 py-1.5 text-sm text-ink-2 shadow-[inset_0_0_0_1px_var(--rule)] transition-colors hover:text-ink hover:shadow-[inset_0_0_0_1px_var(--ink)]"
					>
						Index
						<kbd className="flex items-center gap-0.5 font-sans text-xs">
							<IconCommand size={13} stroke={1.75} aria-label="Command" />K
						</kbd>
					</button>
				</nav>

				<Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
					<Dialog.Trigger
						className="flex items-center gap-2 self-center text-[0.95rem] font-medium md:hidden"
						aria-label="Open menu"
					>
						Menu <IconMenu2 size={20} stroke={1.75} aria-hidden />
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Popup
							className={cn(
								"fixed inset-0 z-50 flex flex-col bg-red text-red-ink",
								"transition-[clip-path] duration-(--dur-slow) ease-out-expo [clip-path:inset(0_0_0_0)]",
								"data-[ending-style]:duration-(--dur-base) data-[ending-style]:[clip-path:inset(0_0_100%_0)] data-[starting-style]:[clip-path:inset(0_0_100%_0)]",
							)}
						>
							<div className="flex h-14 items-center justify-between border-b border-red-ink/40 px-4">
								<Dialog.Title className="font-condensed text-xl">Aadarsha Subedi</Dialog.Title>
								<Dialog.Close className="flex items-center gap-2 font-medium" aria-label="Close menu">
									Close <IconX size={20} stroke={1.75} aria-hidden />
								</Dialog.Close>
							</div>
							<nav aria-label="Sections" className="flex-1 px-4 pt-6">
								<ul>
									{sections.map((s) => (
										<li key={s.id} className="border-b border-red-ink/40">
											<a
												href={`#${s.id}`}
												onClick={() => {
													setMenuOpen(false);
													onNavigate?.(s.id);
												}}
												className="block py-3 font-condensed text-5xl"
											>
												{s.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</Dialog.Popup>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
		</header>
	);
}

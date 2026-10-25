import { Dialog } from "@base-ui/react/dialog";
import { ArrowElbowDownLeftIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type IndexItem = {
	id: string;
	group: string;
	label: string;
	meta?: string;
	run: () => void;
};

/*
 * Cmd/Ctrl+K opens an index of every role, project and action, set like the
 * index page of a printed catalogue: group, entry, year or kind on the right.
 */
export function CommandIndex({
	items,
	open,
	onOpenChange,
}: {
	items: IndexItem[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const [query, setQuery] = useState("");
	const [cursor, setCursor] = useState(0);
	const listRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				onOpenChange(!open);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onOpenChange]);

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		return q ? items.filter((i) => `${i.label} ${i.group} ${i.meta ?? ""}`.toLowerCase().includes(q)) : items;
	}, [items, query]);

	function choose(item: IndexItem | undefined) {
		if (!item) return;
		onOpenChange(false);
		item.run();
	}

	function onKeyDown(e: React.KeyboardEvent) {
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			e.preventDefault();
			const next = (cursor + (e.key === "ArrowDown" ? 1 : -1) + results.length) % Math.max(results.length, 1);
			setCursor(next);
			listRef.current?.querySelector(`[data-index="${next}"]`)?.scrollIntoView({ block: "nearest" });
		} else if (e.key === "Enter") {
			e.preventDefault();
			choose(results[cursor]);
		}
	}

	return (
		<Dialog.Root
			open={open}
			onOpenChange={(next) => {
				onOpenChange(next);
				if (!next) {
					setQuery("");
					setCursor(0);
				}
			}}
		>
			<Dialog.Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-ink/40 transition-opacity duration-(--dur-base) data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
				<Dialog.Popup
					className={cn(
						"fixed top-[12vh] left-1/2 z-50 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 bg-paper shadow-[0_24px_60px_-12px_oklch(0.19_0.012_260/0.35)]",
						"transition-[opacity,translate] duration-(--dur-base) ease-out-expo",
						"data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-2 data-[starting-style]:opacity-0",
					)}
				>
					<Dialog.Title className="sr-only">Site index</Dialog.Title>
					<div className="flex h-14 items-center gap-3 border-b border-ink px-4">
						<MagnifyingGlassIcon size={20} className="text-ink-2" aria-hidden />
						<input
							autoFocus
							value={query}
							onChange={(e) => {
								setQuery(e.target.value);
								setCursor(0);
							}}
							onKeyDown={onKeyDown}
							placeholder="Jump to a project, role or action"
							aria-label="Search the index"
							aria-controls="index-results"
							aria-activedescendant={results[cursor] ? `index-${results[cursor].id}` : undefined}
							className="h-full flex-1 bg-transparent text-lg outline-none placeholder:text-ink-2"
						/>
						<kbd className="text-xs text-ink-2 shadow-[inset_0_0_0_1px_var(--rule)] px-1.5 py-0.5">Esc</kbd>
					</div>
					<ul ref={listRef} id="index-results" role="listbox" className="max-h-[52vh] overflow-y-auto py-2">
						{results.length === 0 && (
							<li className="px-4 py-8 text-center text-ink-2">Nothing matches “{query}”. Try a company, project or skill.</li>
						)}
						{results.map((item, i) => {
							const header = i === 0 || results[i - 1].group !== item.group ? item.group : null;
							return (
								<li key={item.id} role="none">
									{header && (
										<div className="px-4 pt-3 pb-1 text-xs font-semibold text-ink-2">{header}</div>
									)}
									<div
										id={`index-${item.id}`}
										role="option"
										aria-selected={i === cursor}
										data-index={i}
										onMouseMove={() => setCursor(i)}
										onClick={() => choose(item)}
										className={cn(
											"relative flex cursor-pointer items-center justify-between gap-4 px-4 py-2.5",
											i === cursor && "bg-paper-2",
										)}
									>
										{i === cursor && <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-red" />}
										<span className="font-medium">{item.label}</span>
										<span className="flex items-center gap-2 text-sm text-ink-2">
											{item.meta}
											{i === cursor && <ArrowElbowDownLeftIcon size={15} aria-hidden />}
										</span>
									</div>
								</li>
							);
						})}
					</ul>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

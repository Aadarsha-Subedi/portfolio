import { CheckIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

type Toast = { id: number; message: string };

const ToastContext = createContext<(message: string) => void>(() => {});

export function useToast() {
	return useContext(ToastContext);
}

/* A single ink slip that slides up from the bottom-left grid line and leaves faster than it came. */
export function ToastProvider({ children }: { children: ReactNode }) {
	const [toast, setToast] = useState<Toast | null>(null);
	const timer = useRef<number>(undefined);

	const show = useCallback((message: string) => {
		window.clearTimeout(timer.current);
		setToast({ id: Date.now(), message });
		timer.current = window.setTimeout(() => setToast(null), 2400);
	}, []);

	return (
		<ToastContext.Provider value={show}>
			{children}
			<div className="pointer-events-none fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6" role="status" aria-live="polite">
				<AnimatePresence>
					{toast && (
						<motion.div
							key={toast.id}
							initial={{ y: "110%", opacity: 0 }}
							animate={{ y: 0, opacity: 1, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } }}
							exit={{ y: "40%", opacity: 0, transition: { duration: 0.16, ease: [0.65, 0, 0.35, 1] } }}
							className="flex h-11 items-center gap-2 bg-ink pr-4 pl-3 text-sm font-medium text-paper"
						>
							<span className="grid size-6 place-items-center bg-red text-red-ink">
								<CheckIcon size={15} weight="bold" aria-hidden />
							</span>
							{toast.message}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</ToastContext.Provider>
	);
}

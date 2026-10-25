import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import "@/styles/index.css";

// /specimens shows the component review page; everything else is the site.
const Gallery = lazy(() => import("@/gallery/gallery").then((m) => ({ default: m.Gallery })));
const isSpecimens = window.location.pathname.replace(/\/$/, "") === "/specimens";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{isSpecimens ? (
			<Suspense>
				<Gallery />
			</Suspense>
		) : (
			<App />
		)}
	</StrictMode>,
);

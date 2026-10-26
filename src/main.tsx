import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import "@/styles/index.css";

// "/" is the site, "/specimens" and "/preview/experience" are review pages, anything else a 404.
const Gallery = lazy(() => import("@/gallery/gallery").then((m) => ({ default: m.Gallery })));
const ExperiencePreview = lazy(() =>
	import("@/pages/experience-preview").then((m) => ({ default: m.ExperiencePreview })),
);
const NotFound = lazy(() => import("@/pages/not-found").then((m) => ({ default: m.NotFound })));
const path = window.location.pathname.replace(/\/+$/, "") || "/";

function Route() {
	if (path === "/" || path === "/index.html") return <App />;
	const page =
		path === "/specimens" ? <Gallery /> : path === "/preview/experience" ? <ExperiencePreview /> : <NotFound />;
	return <Suspense>{page}</Suspense>;
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Route />
	</StrictMode>,
);

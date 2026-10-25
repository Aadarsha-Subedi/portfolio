import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import "@/styles/index.css";

// "/" is the site, "/specimens" the component review page, anything else a 404.
const Gallery = lazy(() => import("@/gallery/gallery").then((m) => ({ default: m.Gallery })));
const NotFound = lazy(() => import("@/pages/not-found").then((m) => ({ default: m.NotFound })));
const path = window.location.pathname.replace(/\/+$/, "") || "/";

function Route() {
	if (path === "/" || path === "/index.html") return <App />;
	return <Suspense>{path === "/specimens" ? <Gallery /> : <NotFound />}</Suspense>;
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Route />
	</StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/routes/app.tsx";

import { ThemeProvider } from "./contexts/theme-context";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>,
);

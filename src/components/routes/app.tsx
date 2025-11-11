import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../layout/layout";
import { Home } from "../../pages/home/home";
import { Blogs } from "../../pages/blogs/blogs";
import { BlogPage } from "../../pages/blogs/blog-page";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="blogs/:slug" element={<BlogPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

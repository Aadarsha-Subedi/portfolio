import { Navigate, useParams } from "react-router-dom";

import { Container } from "../../components/wrappers/container";

import { BlogData, type BlogDataProps } from "../../utils/blog-data";
import { lazy, Suspense } from "react";

export const BlogPage = () => {
	const { slug } = useParams();

	const currentBlog = BlogData.find(
		(blog: BlogDataProps) => blog.slug === slug,
	);
	if (!currentBlog) {
		return <Navigate to="/blogs" />;
	}
	const BlogComponent = lazy(currentBlog.component);

	return (
		<div className="flex min-h-screen items-start justify-center">
			<Container className="prose dark:prose-invert min-h-[200vh] px-4 pt-20 pb-10">
				<Suspense>
					<BlogComponent />
				</Suspense>
			</Container>
		</div>
	);
};

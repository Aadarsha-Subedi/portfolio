import { Container } from "../../components/wrappers/container";

export const Blogs = () => {
	return (
		<div className="flex min-h-screen items-start justify-center">
			<Container className="min-h-screen px-4 pt-20 pb-10">
				<div className="py-20 text-center">
					<h1 className="text-primary mb-4 text-4xl font-bold">
						No Blogs Yet
					</h1>
					<p className="text-secondary mx-auto max-w-xl text-lg">
						I do not have any blogs at the moment. Currently, I am
						focusing on gaining work experience and building
						projects. However, I am learning MDX on the side and
						will create blogs soon!
					</p>
				</div>
				{/* TO BE ADDED WHEN I HAVE MY OWN BLOGS */}
				{/* <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
					All My Blogs
				</h1>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{BlogData.map(
						(
							blog: BlogDataProps,
							index: number,
						): React.ReactNode => {
							return (
								<Link to={`/blogs/${blog.slug}`} key={index}>
									<div key={blog.slug} className="">
										<h2>{blog.title}</h2>
										<p>{blog.description}</p>
									</div>
								</Link>
							);
						},
					)}
				</div> */}
			</Container>
		</div>
	);
};

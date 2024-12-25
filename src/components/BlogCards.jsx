/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
export default function BlogCards({
	blogs,
	pageSize,
	currentPage,
	selectedCategory,
}) {
	const filterBlogs = blogs
		.filter(
			(blogs) => !selectedCategory || blogs.category === selectedCategory
		)
		.slice((currentPage - 1) * pageSize, currentPage * pageSize); // Assuming blogs is an array
	console.log(filterBlogs);
	return (
		<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
			{filterBlogs.map((blog) => (
				<Link
					key={blog.id}
					to={`/blogs/${blog.id}`}
					className="p-5 shadow-lg rounded cursor-pointer"
				>
					<div>
						<img
							src={blog.image}
							alt={blog.title}
							className="w-full"
						/>
					</div>
					<h3 className="mt-4 mb-2 font-bold hover:text-purple-300 cursor-pointer">
						{blog.title}
					</h3>
					<p className="mb-2 text-gray-500 inline-flex gap-2 items-center">
						<FaUser className="text-black " />
						{blog.author}
					</p>
					<p className="text-sm text-gray-500">
						Published:{blog.published_date}
					</p>
				</Link>
			))}
		</div>
	);
}

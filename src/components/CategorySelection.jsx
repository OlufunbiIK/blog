/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function CategorySelection({
	onSelectCategory,
	activeCategory,
}) {
	const categories = [
		"Startups",
		"AI",
		"Security",
		"Apps",
		"Tech",
		"Fintech",
		"Health",
		"Enterprise",
		"Growth",
		"Work",
		"Gadgets",
	];
	return (
		<div className="px-4 mb-8 lg:space-x-4 flex flex-wrap items-center border-b-2 text-gray-900 font-semibold py-4">
			<button
				onClick={() => onSelectCategory(null)}
				className={`lg:ml-12 ${!activeCategory ? "active-button" : ""}`}
			>
				All
			</button>
			{categories.map((category) => (
				<button
					onClick={() => onSelectCategory(category)}
					className={`mr-4 px-4 ${
						activeCategory === category ? "active-button" : ""
					}`}
					key={category}
				>
					{category}
				</button>
			))}
		</div>
	);
}

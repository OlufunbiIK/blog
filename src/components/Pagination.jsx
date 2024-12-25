/* eslint-disable react/prop-types */
export default function Paginations({
	onPageChange,
	currentPage,
	pageSize,
	blogs,
	handlePageChange,
}) {
	const totalPages = Math.ceil(blogs.length / pageSize);
	// console.log(totalPages);
	const renderPaginationLinks = () => {
		return Array.from({ length: totalPages }, (_, i) => i + 1).map(
			(pageNumber) => (
				<li
					key={pageNumber}
					className={
						pageNumber === currentPage ? "activePagination" : ""
					}
				>
					<a href="#" onClick={() => handlePageChange(pageNumber)}>
						{pageNumber}
					</a>
				</li>
			)
		);
	};

	return (
		<ul className="paginations my-8  flex-wrap gap-4">
			<li>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
			</li>
			<div className="flex mt-8 mb-8">{renderPaginationLinks()}</div>
			<li>
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</li>
		</ul>
	);
}

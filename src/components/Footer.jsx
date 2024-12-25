// export default function Footer() {
// 	return (
// 		<div className="bg-gray-900 ">
// 			<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
// 				<div>
// 					<div className="grid grid-cols-2 gap-5 lg:cols-span-4 md:grid-cols-4">
// 						<div className="font-medium tracking-wide text-gray-300">
// 							<p>Category</p>
// 							<ul className="mt-2 space-y-2">
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										News
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										World
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Games
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										References
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 						{/* category2 */}
// 						<div className="font-medium tracking-wide text-gray-300">
// 							<p>Category</p>
// 							<ul className="mt-2 space-y-2">
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Entertainment
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										eCommerce
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Web
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Business
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Portfolio
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 						{/* category 3 */}
// 						<div className="font-medium tracking-wide text-gray-300">
// 							<p>Category</p>
// 							<ul className="mt-2 space-y-2">
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Media
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Education
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Brocure
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Non-Profits
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="/"
// 										className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
// 									>
// 										Project
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
export default function Footer() {
	return (
		<div className="bg-black text-gray-300">
			<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				{/* Footer Content */}
				<div className="grid grid-cols-1 gap-8 row-gap-10 mb-8 lg:grid-cols-6 md:grid-cols-3">
					{/* About Section */}
					<div>
						<h2 className="text-lg font-semibold">About Us</h2>
						<p className="mt-2 text-sm">
							Welcome to our blog, your go-to source for the
							latest tech news, insights, and tutorials. Join us
							to stay updated!
						</p>
					</div>
					{/* Categories Section */}
					<div>
						<h2 className="text-lg font-semibold">Categories</h2>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<a href="/" className="hover:text-pink-500">
									Startups
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									AI
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Security
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Gadgets
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Health
								</a>
							</li>
						</ul>
					</div>
					{/* Categories Section */}
					<div>
						<h2 className="text-lg font-semibold">Categories</h2>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<a href="/" className="hover:text-pink-500">
									Tech
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Enterprise
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Fintech
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Apps
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Growth
								</a>
							</li>
						</ul>
					</div>

					{/* Category Section */}
					<div>
						<h2 className="text-lg font-semibold">Categories</h2>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<a href="/" className="hover:text-pink-500">
									eCommerce
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Project
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Education
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Brocure
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Non-profit
								</a>
							</li>
						</ul>
					</div>
					{/* Business Section */}
					<div>
						<h2 className="text-lg font-semibold">Business</h2>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<a href="/" className="hover:text-pink-500">
									Wiki
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Infopreneur
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Forum
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Persona.
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-pink-500">
									Growth
								</a>
							</li>
						</ul>
					</div>
					{/* Newsletter Section */}
					<div>
						<h2 className="text-lg font-semibold">Newsletter</h2>
						<p className="mt-2 text-sm">
							Subscribe to our newsletter to get the latest
							updates directly to your inbox.
						</p>
						<form className="mt-4">
							<input
								type="email"
								name="email"
								id="email"
								required
								placeholder="Enter your email"
								className="w-full p-2 text-gray-800 rounded flex flex-grow items-center mb-3 transition duration-200 bg-white border border-gray-300 shadow-sm aspect-auto md:mr-2 md:mb-0 focus-border-pink-800 focus:outline-none text-sm"
							/>
							<button
								type="submit"
								className="w-full h-10 px-3 mt-2 py-2 border-2 border-white text-white bg-black rounded hover:bg-pink-600 hover:text-white text-sm inline-flex justify-center align-center tracking-right transition duration-200 shadow-md focus:outline-none"
							>
								Subscribe
							</button>
							<p className="mt-4 text-sm text-gray-50">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aliquid debitis, illo nesciunt
								id.
							</p>
						</form>
					</div>
					{/* Social Links */}
					<div>
						<h2 className="text-lg font-semibold">Follow Us</h2>
						<div className="flex mt-4 space-x-4 text-sm">
							<a
								href="#"
								className="text-gray-500 hover:text-pink-500 transition-all duration-300 "
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-pink-500 transition-all duration-300 "
							>
								<FaInstagram />
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-pink-500 transition-all duration-300 "
							>
								<FaFacebook />{" "}
							</a>
						</div>
					</div>
				</div>
				{/* Footer Bottom */}
				<div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
					<p className="text-sm flex gap-4">
						<p>
							&copy; {new Date().getFullYear()} Design
							<span className="text-pink-500">DK</span>
						</p>
						<p>All rights reserved.</p>
					</p>
					<ul className="flex space-x-4 text-sm">
						<li>
							<a href="/privacy" className="hover:text-pink-500">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="/terms" className="hover:text-pink-500">
								Terms of Service
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-pink-500">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

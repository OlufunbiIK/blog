import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Kickstart your blog today and connect with a vibrant community of
          storytellers and idea-sharers. Your voice deserves to be heard—let us
          inspire the world together! We offer everything you need to get
          started, from helpful tips and tutorials.
        </p>
        <div>
          <Link
            to="/about"
            className="font-medium hover:text-pink-500 inline-flex items-center py-1"
          >
            Learn More
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ContactUs.jsx
import customer from "../../src/assets/6183575_3026174.svg";

export default function ContactUs() {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us Page
        </h2>
      </div>

      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Have questions or feedback? We would love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white shadow-md p-6 rounded-se-[150px]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Send us a Message
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full hover:bg-pink-500 text-white py-3 rounded-md bg-black transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white shadow-lg p-6 rounded-es-[150px]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-4">
                Feel free to reach out via email or give us a call during
                business hours. You can also follow us on social media for
                updates.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium">Email:</p>
                  <p className="text-gray-600">designdk@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Phone:</p>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Address:</p>
                  <p className="text-gray-600">
                    Magajin - gari, Kaduna, Kaduna State.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 transition-all duration-200"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 transition-all duration-200"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 transition-all duration-200"
                >
                  Instagram
                </a>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div className="">
                  <img src={customer} className="w-28 h-28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Services.jsx

export default function Services() {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Services Page
        </h2>
      </div>

      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Explore the wide range of services we offer to enhance your
            experience.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl">
                📖
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Blog Writing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality, engaging content tailored to your interests and
                needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                SEO Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`Boost your blog's visibility with our expert SEO strategies.`}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Design Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, responsive designs to make your blog stand out.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl">
                🛠️
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Technical Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable assistance to resolve technical issues quickly.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Analytics and Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`Track your blog's performance with detailed analytics.`}
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl">
                🌐
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Social Media Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly connect your blog with your social media platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

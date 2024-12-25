// AboutUs.jsx
import team1 from "../../src/assets/356306296_27f3d5b2-1059-4123-848b-9ac484af7ae8.svg";
import team2 from "../../src/assets/375130776_d25e0db1-0dab-4d1e-ab6a-3bc18b853c51.svg";
export default function AboutUs() {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          About Us Page
        </h2>
      </div>

      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Discover the story behind our blog and our passion for sharing
            valuable insights with our readers.
          </p>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our blog! We are a group of passionate individuals
              dedicated to providing our readers with insightful content,
              helpful resources, and thought-provoking articles. Our journey
              started with the desire to create a platform that inspires and
              empowers people across various topics.
            </p>
          </section>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`
              To inform, educate, and inspire our readers through high-quality
              and engaging content. We aim to foster a community of learners and
              thinkers who can benefit from our blog's resources.`}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted source of knowledge and inspiration for our
                audience, leaving a lasting impact on the way they learn and
                grow. We envision a platform that bridges gaps and builds
                connections through content.
              </p>
            </div>
          </div>

          {/* Meet the Team */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member */}
              <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-50 mb-4">
                  <img src={team1} className="w-20 h-20 ml-2" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Jane Doe
                </h3>
                <p className="text-gray-600">Content Strategist</p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-50 mb-4">
                  <img src={team2} className="w-20 h-20 ml-2" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  John Smith
                </h3>
                <p className="text-gray-600">Lead Writer</p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-50 mb-4">
                  <img src={team1} className="w-20 h-20 ml-2" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Emma Lee
                </h3>
                <p className="text-gray-600">Editor</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

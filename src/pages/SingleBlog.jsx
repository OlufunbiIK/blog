import { useLoaderData } from "react-router-dom";
import { FaCalendar, FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import SideBar from "../components/SideBar";
export default function SingleBlog() {
  const data = useLoaderData();
  const {
    title,
    image,
    categories,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  console.log(data);
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>

      {/* blog details */}
      <div className=" flex flex-col md:flex-row mx-4">
        <div className="max-w-7xl mx-auto my-12 gap-4">
          <div className="lg:w-3/4 mx-auto">
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-black cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-700">
            <FaUser className="inline-flex items-center gap-2" />
            {author} |<FaCalendar className="inline-flex items-center gap-2" />{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center gap-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-600 mb-6">{content}</p>
          <div className="text-base text-gray-600">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum recusandae sequi accusamus eum consequuntur labore,
              similique voluptates et laudantium esse, excepturi alias placeat
              obcaecati explicabo assumenda nemo expedita amet officiis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              minus molestiae ullam praesentium consequatur enim porro
              recusandae deserunt quaerat explicabo voluptas, impedit tenetur
              ut. Repellendus adipisci cumque distinctio iste nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              non eligendi earum consectetur obcaecati iure provident, ex maxime
              quis repellat numquam alias veritatis eos vitae ea quaerat?
              Doloremque, voluptatem distinctio!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum recusandae sequi accusamus eum consequuntur labore,
              similique voluptates et laudantium esse, excepturi alias placeat
              obcaecati explicabo assumenda nemo expedita amet officiis.
              <br />
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              minus molestiae ullam praesentium consequatur enim porro
              recusandae deserunt quaerat explicabo voluptas, impedit tenetur
              ut. Repellendus adipisci cumque distinctio iste nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              non eligendi earum consectetur obcaecati iure provident, ex maxime
              quis repellat numquam alias veritatis eos vitae ea quaerat?
              Doloremque, voluptatem distinctio!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              minus molestiae ullam praesentium consequatur enim porro
              recusandae deserunt quaerat explicabo voluptas, impedit tenetur
              ut. Repellendus adipisci cumque distinctio iste nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              non eligendi earum consectetur obcaecati iure provident, ex maxime
              quis repellat numquam alias veritatis eos vitae ea quaerat?
              Doloremque, voluptatem distinctio!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum recusandae sequi accusamus eum consequuntur labore,
              similique voluptates et laudantium esse, excepturi alias placeat
              obcaecati explicabo assumenda nemo expedita amet officiis.
              <br />
            </p>
          </div>
        </div>
        <div className="">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

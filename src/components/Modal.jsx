/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// export default function Modal({ isOpen, onClose }) {
//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
//         isOpen ? "" : "hidden"
//       }`}
//     >
//       <div className="modal-container">
//         <div className="bg-white text-center p-5 h-96 lg:w-[400px] rounded shadow-md">
//           <h2 className="text-xl font-semibold mb-5 mt-6 uppercase text-black">
//             Please Login Here!
//           </h2>

//           {/* email */}
//           <form className="flex flex-col gap-4 px-4">
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="example@gmail.com"
//                 className="w-full rounded-md border border-[#c4c2c2] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6d6b6b] focus:shadow-md"
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter Your Password"
//                 className="w-full rounded-md border border-[#c4c2c2] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6d6b6b] focus:shadow-md"
//               />
//             </div>
//             <div>
//               <button className="px-8 py-3 hover:shadow-md rounded-md bg-black text-white hover:bg-pink-500 text-base font-semibold outline-none">
//                 Login
//               </button>
//             </div>
//           </form>
//           {/* modal close button */}
//           <button
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded inline-flex items-center text-base mt-6"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Modal({ isOpen, onClose, type }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-white text-center p-5 h-auto lg:w-[400px] rounded shadow-md">
          <h2 className="text-xl font-semibold mb-5 mt-6 uppercase text-black">
            {type === "login" ? "Please Login Here!" : "Create an Account"}
          </h2>

          <form className="flex flex-col gap-4 px-4">
            {type === "signup" && (
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-gray-500 focus:bg-gray-50 focus:shadow-md transition-colors duration-200"
                />
              </div>
            )}
            <div>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-gray-500 focus:bg-gray-50 focus:shadow-md transition-colors duration-200"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-gray-500 focus:bg-gray-50 focus:shadow-md transition-colors duration-200"
              />
            </div>
            {type === "signup" && (
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-gray-500 focus:bg-gray-50 focus:shadow-md transition-colors duration-200"
                />
              </div>
            )}
            <div>
              <button className="w-full px-8 py-3 hover:shadow-md rounded-md bg-black text-white hover:bg-pink-500 text-base font-semibold outline-none transition-all duration-200">
                {type === "login" ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>

          <button
            className="bg-white hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded inline-flex items-center text-base mt-6 border-[1px] border-black"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

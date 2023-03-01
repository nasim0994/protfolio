import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillPhone,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdLocationOn, MdEmail, MdFacebook } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-100 m-4 rounded-lg">
      <div className="w-[90%] xl:w-[1200px] mx-auto py-10">
        {/* title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl text-info font-semibold text-gradient">
            Have Any Questions?
          </h2>
          <p>
            Please fil up the form below or email me at{" "}
            <span className="font-semibold">nasimuddin0994@gmail.com</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-info text-2xl font-bold mb-1">Find out me</h2>

            <div className="mt-10 text-info">
              <div className="flex items-center gap-4 mb-4">
                <div className="border border-info rounded-full w-10 h-10 flex items-center justify-center">
                  <AiFillPhone />
                </div>
                <p>+880 1706 260 994</p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="border border-info rounded-full w-10 h-10 flex items-center justify-center">
                  <MdEmail />
                </div>
                <p>nasimuddin0994@gmail.com</p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="border border-info rounded-full w-10 h-10 flex items-center justify-center">
                  <MdLocationOn />
                </div>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-l from-gray-100 via-gray-400 to-gray-100 my-8"></div>

            <div className="mt-6">
              <ul className="flex gap-6">
                <li>
                  <Link
                    to="https://www.facebook.com/nasimuddin0994"
                    target="_blank"
                    className="text-xl border border-info rounded-full w-10 h-10 flex items-center justify-center hover:text-secondary hover:border-secondary duration-200"
                  >
                    <MdFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/mdnasimuddin/"
                    target="_blank"
                    className="text-xl border border-info rounded-full w-10 h-10 flex items-center justify-center hover:text-primary hover:border-primary duration-200"
                  >
                    <AiFillLinkedin />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/nasim0994"
                    target="_blank"
                    className="text-xl border border-info rounded-full w-10 h-10 flex items-center justify-center hover:text-blue-700 hover:border-blue-700 duration-200"
                  >
                    <AiFillGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://wa.link/ipogls"
                    target="_blank"
                    className="text-xl border border-info rounded-full w-10 h-10 flex items-center justify-center hover:text-[#0CC243] hover:border-[#0CC243] duration-200"
                  >
                    <AiOutlineWhatsApp />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <form className="bg-neutral shadow-lg px-6 py-10 rounded-xl text-info/80">
              <span className="text-lg font-bold border-b-2 text-secondary border-secondary">
                Contact Us
              </span>

              <div className="grid lg:grid-cols-2 gap-4 my-4">
                <div>
                  <label htmlFor="">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Adam"
                    className="w-full border px-3 py-2 rounded outline-accent mt-2"
                    required
                  />
                </div>

                <div>
                  <label htmlFor=""> Last Name </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Jhon"
                    className="w-full border px-3 py-2 rounded outline-accent mt-2"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+880 1706260994"
                    className="w-full border px-3 py-2 rounded outline-accent mt-2"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="lastName"
                    placeholder="example@gmail.com"
                    className="w-full border px-3 py-2 rounded outline-accent mt-2"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Write your message..."
                  className="w-full border px-3 py-2 rounded outline-accent mt-2"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-gradient font-bold text-neutral rounded scale-[.98] hover:scale-[1] duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[--primary-bg] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/b97b661d-5b4b-40e0-9158-3836b39f4565"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[--accent-bg] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - jdemlowdev@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[--accent-bg] hover:border-[--accent-bg] px-4 py-3 my-8 mx-auto flex items-center duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

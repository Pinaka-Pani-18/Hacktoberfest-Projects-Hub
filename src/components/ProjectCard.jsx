import React from "react";

const ProjectCard = () => {
  return (
    <div className="card w-80 sm:w-96 h-fit flex flex-col border-1 rounded-lg overflow-hidden px-2 py-4 hover:scale-105 transition duration-300 bg-gradient-to-t from-[#654b0e] via-[#947511] to-[#ebd812] shadow-xl">
      <a href="https://hacktoberfestprojectshub.netlify.app/" target="_blank">
        <div className="header flex flex-row gap-2 items-center px-2 pb-2 w-full border-b-2">
          <div className="relative border rounded-full w-16 h-16 p-1 flex items-center justify-center overflow-hidden">
            <img
              src="/card_logo.png"
              alt="logo"
              className="relative rounded-full w-16 h-16 object-cover p-1"
            />
          </div>
          <p className="relative font-semibold text-xl hover:text-white transition duration-300 hover:underline">
            hack-it-up
          </p>
        </div>
      </a>

      <div className="description w-full text-left px-2 my-1 mt-4 text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        itaque a laudantium enim repudiandae iste.
      </div>

      <div className="tech-stack flex flex-row flex-wrap gap-2 px-2 w-full mt-4 mb-8">
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          hacktoberfest
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          http-client
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          javascript
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          nodejs
        </div>
        <div className="relative bg-sky-600 rounded-2xl px-3 py-1 text-white cursor-pointer">
          promise
        </div>
      </div>

      <div className="card-footer flex flex-row justify-center items-center gap-10 mt-2">
        <div className="border rounded-lg w-5/12 h-20 flex flex-row gap-1 items-center px-2">
          <div className="logo w-1/4 rounded-full">
            <img src="/star2.png" alt="star" className="relative" />
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-xl">10000</p>
            <p>stars</p>
          </div>
        </div>
        <div className="border rounded-lg w-5/12 h-20 flex flex-row gap-1 items-center px-2">
          <div className="logo w-1/4 rounded-full">
            <img src="/radio2.png" alt="issue" className="relative" />
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-xl">560</p>
            <p>issues</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

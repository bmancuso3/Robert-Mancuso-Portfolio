import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About Robert Mancuso
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hello! And thank you for visiting my portfolio.
              </p>
              <p>
              Please reach out to connect!
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am a Full Stack Web Developer with a background as an Infantry Officer in the US Army and the ability to provide a unique perspective to any diverse team. I am experienced with critical thinking, decision making, and comfortable working through adversity.  Above all, I am eager to learn and further develop my skills in this field. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
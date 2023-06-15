import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         
        As a budding developer, I have had the opportunity to learn and work on various web development projects, which has given me a strong foundation in front-end development technologies such as HTML, TailwindCSS, JavaScript,ReactJS and NextJS. I am passionate about creating user-friendly and responsive web applications and am excited to learn from experienced professionals in the field.
        </p>

        <br />

        <p className="text-xl">
        I am currently looking for an Internship and would love to discuss the opportunity and learn more about how I can contribute to your team. Please let me know if you have any questions or if there are any available opportunities for an intern in  web development role at your company
        </p>
      </div>
    </div>
  );
};

export default About;

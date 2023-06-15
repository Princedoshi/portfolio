import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const educationData = [
    {
      id: 1,
      institution: "D.J Sanghavi College of Engineering",
      degree: "Bachelor's in Information Technology",
      duration: "2021 - 2025",
      score: "8.45/10.0",
    },
    {
      id: 2,
      institution: "Sardar Vallabhbhai Patel High School",
      degree: "High School",
      duration: "2019 - 2021",
      score: "84.00%",
    },
  ];

  return (
    <div
      name="education"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((education) => (
            <div
              key={education.id}
              className="bg-white rounded shadow p-6 flex flex-col"
            >
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-gray-600 mr-2"
                />
                <h3 className="text-black font-semibold">
                  {education.institution}
                </h3>
              </div>
              <p className="text-base text-gray-600 mb-2">{education.degree}</p>
              <p className="text-gray-600 text-sm">{education.duration}</p>
              <p className="text-gray-600 text-sm">{education.score}</p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
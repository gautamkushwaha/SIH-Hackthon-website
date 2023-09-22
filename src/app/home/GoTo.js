import React, { useState } from 'react';

const Portfolio = () => {
  const [inputValue, setInputValue] = useState('');

  // Define your project data
  const projects = [
    {
      id: 1,
      image: 'https://vdc.gitam.edu/eclub_ui/asset/portfolio-icons/workshop-32x32.png',
      title: 'Passenger Section',
      description: 'This functions of E-Club plans and delivers a series of workshops and boot camps with the motive to foster skill-based education and awareness on entrepreneurship amongst the campus community.',
      link: '/link-to-another-page', // Link for the first card
    },
    {
      id: 2,
      image: 'path-to-image-2.png',
      title: 'Security section',
      description: 'This function of E-Club handles all the events of E-Club and VDC, as the success of any event depends largely on its planning and executing by timely obtaining all the necessary resources.',
      correctCode: 'gautam1234', // Correct code for the second card
      link: '/link-for-correct-input', // Link for the second card
    },
  ];

  return (
    <div className='bg-[#808080]' id="goto">
      <div className="mx-[100px] py-[100px] mt-[50px] text-white">
        {/* Portfolio Heading */}
        <h2 className="text-5xl font-semibold text-center mb-[50px]">Go To..</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-500 p-20 m-5  border border-gray-900 rounded-lg shadow-md text-center"
            >
              {/* Small icons type image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-12 h-12 mx-auto mb-4 "
              />

              {/* Heading */}
              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>

              {/* Description */}
              {project.id === 1 ? (
                // Direct link for the first card
                <a href={project.link} className="text-[18px] text-gray-300">Go to passenger page</a>
              ) : (
                // Input and conditional link for the second card
                <>
                  <input
                    type="text"
                    placeholder="Enter the code"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="mb-3 bg-black h-8"
                  />
                  {inputValue === project.correctCode ? (
                    <a href={project.link} className="text-[18px] text-gray-300">Go to the security page</a>
                  ) : null}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

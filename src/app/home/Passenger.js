
import React from 'react';

const Passenger = () => {
    const projects = [
        {
          id: 1,
          image: 'https://vdc.gitam.edu/eclub_ui/asset/portfolio-icons/workshop-32x32.png',
          title: 'Workshop & Bootcamp',
          description: 'This functions of E-Club plans and delivers a series of workshops and boot camps with the motive to foster skill-based education and awareness on entrepreneurship amongst the campus community.',
        },
        {
          id: 2,
          image: 'path-to-image-2.png',
          title: 'Event Management',
          description: 'This function of E-Club handles all the events of E-Club and VDC, as the success of any event depends largely on its planning and executing by timely obtaining all the necessary resources.',
        },
        {
            id: 3,
            image: 'path-to-image-1.png',
            title: 'Creative Design',
            description: 'This function of E-Club handles all the designing- both graphic and video stack. Also, they do the photo & video shooting, editing and releasing all the media of those programs or events on the campus by both E-Club & VDC.',
          },
          {
            id: 4,
            image: 'path-to-image-2.png',
            title: 'Chai-Chats',
            description: 'This function of E-Club creates an informal setting(s) to meet like-minded people interested in common topics, such as technology, food, education, sports, etc.',
          },
          {
            id: 5,
            image: 'path-to-image-1.png',
            title: 'Content Writing',
            description: 'This function of E-Club is responsible for everything you read and all the communications you get on the social media or otherwise regarding any events or programs of both the E-Club and VDC.',
          },
          {
            id: 6,
            image: 'path-to-image-2.png',
            title: 'Marketing & Publicity',
            description: 'This function of E-Club aims to achieve the primary goal of any initiative taken by E-Club and VDC by spreading the awareness of those initiatives, tasks and programs.',
          },
        
      ];

      return (
        <div className='bg-black' id="passenger">
        <div className="mx-[100px] py-[100px] text-white">
          {/* Portfolio Heading */}
          <h2 className="text-5xl font-semibold text-center mb-[50px]">Portfolio</h2>
    
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-black p-6 rounded-lg shadow-md text-center"
              >
                {/* Small icons type image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
    
                {/* Heading */}
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
    
                {/* Description */}
                <p className="text-[18px] text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      );
    };
    
    export default Passenger;
  
    
    
    
    
    
    
    
    
    
    
    
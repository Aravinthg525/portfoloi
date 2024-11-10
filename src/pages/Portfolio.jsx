import React from 'react';
import hotal from '../assets/ak-fashion.png';

const projectData = [
  {
    id: 1,
    name: "Mens Fasion Collection",
    image: hotal,
    date: '1/5/2024',
    description: 'View collection,Buy Products,Contact Us',
  },
  {
    id: 2,
    name: "Mens Fasion Collection",
    image: hotal,
    date: '1/5/2024',
    description: 'View collection,Buy Products,Contact Us',
  },
  {
    id: 3,
    name: "Mens Fasion Collection",
    image: hotal,
    date: '1/5/2024',
    description: 'View collection,Buy Products,Contact Us',
  },
  {
    id: 4,
    name: "Mens Fasion Collection",
    image: hotal,
    date: '1/5/2024',
    description: 'View collection,Buy Products,Contact Us',
  },
 
];

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-10 mb-80">
      {projectData.map((item, index) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
          <a href="#">
            <img className="rounded-t-lg" src={item.image} alt={item.name} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

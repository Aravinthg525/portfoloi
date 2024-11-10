import React from 'react';

// Import assets
import DT from "../assets/DT.png";
import HTML from "../assets/HTML.png";
import IOT from "../assets/IOT.png";
import PIOT from "../assets/PIOT.png";
import MS from "../assets/MS.png";
import XL from "../assets/XL.png";
import BD from "../assets/BD.png";
import DS from "../assets/DS.png";
import IIOT from "../assets/IIOT.png";

const Gallery = () => {
  return (
    <>
      <div>
      <div class="m-10">
        {/* Certification Section */}
        <h1 className="text-3xl font-serif text-blue-700 mt-16 mb-8">
          Certificates
        </h1>

        {/* Certification Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[HTML,XL,MS,DT,BD, IOT, PIOT,IIOT,DS].map((imageSrc, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                src={imageSrc}
                alt={`certification-${index + 1}`}
              />
            </div>
          ))}
        </div></div></div>
    

      <style jsx>{`
        /* Custom Hover Shadow for Images */
        .hover\:shadow-2xl:hover {
          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default Gallery;

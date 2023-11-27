import React from 'react';
import background from '../Images/leaf.jpg';


function Artwork () {

    return(
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
         style={{
           backgroundImage: `url(${background})`,
         }}>
      <div className="flex flex-col bg-white shadow-md rounded-md p-4 w-[300px]">
        {/* Image */}
        <img
        className="w-1/2 h-full object-cover"
        src="src\Images\event1.jpg"
        alt="Your Alt Text"
    />
        <div className="bg-gray-300 aspect-w-4 aspect-h-5 mb-4 rounded-md" />

        {/* Like and Comment Icons */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18l-1 1-1-1a4.978 4.978 0 0 0-6-7.745V9.236A5.963 5.963 0 0 0 0 10a6 6 0 0 0 12 0c0-.543-.088-1.078-.236-1.598h3.68A4.978 4.978 0 0 0 15 10a5 5 0 0 0-5 5v3.255A4.978 4.978 0 0 0 10 18zM2 10a4 4 0 0 1 6.36-3.24l1.28-1.28a1 1 0 0 1 1.4 0l1.28 1.28A4 4 0 0 1 18 10a4 4 0 0 1-8 0c0-.27.03-.534.08-.798H4.08A4 4 0 0 1 2 10z" />
            </svg>
            <span>Like</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 8a6 6 0 0 1 11.46-2.3c.93-.46 1.54-1.4 1.54-2.47C15 1.42 13.57 0 12 0s-3 1.42-3 3c0 1.07.61 2.01 1.54 2.47A6 6 0 0 1 2 8zm8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-5 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
            <span>Comment</span>
          </div>
        </div>

        {/* Comments Section (You can add a real comment section here) */}
        <div className="flex flex-col space-y-2">
          {/* Sample Comment */}
          <div className="flex items-center">
            <span className="font-semibold mr-2">$username</span>
            <span>This is a comment!</span>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Artwork;

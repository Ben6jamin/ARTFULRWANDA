import React, { useState } from "react";
import Navbar1 from "../Layout/Navbar1";
import Footer from "../Layout/Footer";
import background from '/Images/leaf.jpg';

function Artwork() {
  // State for the first image
  const [likes1, setLikes1] = useState(0);
  const [isLiked1, setIsLiked1] = useState(false);
  const [comments1, setComments1] = useState([]);
  const [newComment1, setNewComment1] = useState("");
  const [showComments1, setShowComments1] = useState(false);



// first image
const handleLike1 = () => {
  setLikes1(isLiked1 ? likes1 - 1 : likes1 + 1);
  setIsLiked1(!isLiked1);
};

const handleCommentSubmit1 = () => {
  if (newComment1.trim() !== "") {
    setComments1([...comments1, { text: newComment1, id: Date.now() }]);
    setNewComment1("");
    setShowComments1(true);
  }
};

const handleDeleteComment1 = (commentId) => {
  setComments1(comments1.filter((comment) => comment.id !== commentId));
};





 // State for the second image
 const [likes2, setLikes2] = useState(0);
 const [isLiked2, setIsLiked2] = useState(false);
 const [comments2, setComments2] = useState([]);
 const [newComment2, setNewComment2] = useState("");
 const [showComments2, setShowComments2] = useState(false);



// second image

const handleLike2 = () => {
  setLikes2(isLiked2 ? likes2 - 1 : likes2 + 1);
  setIsLiked2(!isLiked2);
};

const handleCommentSubmit2 = () => {
  if (newComment2.trim() !== "") {
    setComments2([...comments2, { text: newComment2, id: Date.now() }]);
    setNewComment2("");
    setShowComments2(true);
  }
};

const handleDeleteComment2 = (commentId) => {
  setComments2(comments2.filter((comment) => comment.id !== commentId));
};



// State for the third image
const [likes3, setLikes3] = useState(0);
const [isLiked3, setIsLiked3] = useState(false);
const [comments3, setComments3] = useState([]);
const [newComment3, setNewComment3] = useState("");
const [showComments3, setShowComments3] = useState(false);

const handleLike3 = () => {
  setLikes3(isLiked3 ? likes3 - 1 : likes3 + 1);
  setIsLiked3(!isLiked3);
};

const handleCommentSubmit3 = () => {
  if (newComment3.trim() !== "") {
    setComments3([...comments3, { text: newComment3, id: Date.now() }]);
    setNewComment3("");
    setShowComments3(true);
  }
};

const handleDeleteComment3 = (commentId) => {
  setComments3(comments3.filter((comment) => comment.id !== commentId));
};
















  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <Navbar1 />
        <main className="flex flex-col items-center justify-center min-h-screen">

          {/* First Image */}
          <div className=" mt-8 rounded-md shadow-md overflow-hidden max-w-xl mx-auto w-full">
            {/* Post Container */}
            <img
              src="/Images/art1.jpg"
              alt="Post"
              className="w-full h-[700px] object-cover"
            />

            {/* Like and Comment Icons */}
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2" onClick={handleLike1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 163 147" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M142.625 66.6998L81.5 136.5L20.375 66.4121C13.0655 56.6913 10.1875 50.1247 10.1875 41.1352C10.1875 24.3701 22.6927 9.282 40.75 9.14062C55.6034 9.02363 72.4433 23.5413 81.5 34.4856C90.3173 23.9264 107.397 9.14062 122.25 9.14062C139.829 9.14062 152.812 24.3701 152.812 41.1352C152.812 50.1247 150.536 57.1789 142.625 66.6998ZM122.25 0C105.273 0 92.4261 9.5355 81.5 19.5C71.0935 8.92613 57.7275 0 40.75 0C16.8399 0 0 19.6754 0 41.1352C0 52.6451 4.92566 60.9326 10.3199 68.7228L73.6505 141.39C80.7563 148.59 82.1011 148.59 89.2068 141.39L152.68 68.7228C159.027 60.9326 163 52.6451 163 41.1352C163 19.6754 146.16 0 122.25 0Z" fill="black"/>
                  </svg>
                  <span className="text-blue-600">{likes1}</span>
                </button>

                <button
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setShowComments1(!showComments1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 487 486" fill="none">
                    <path d="M486.234 485.614H470.049C403.525 485.611 339.231 461.627 288.957 418.061L271.935 403.308C262.494 404.227 252.947 404.69 243.462 404.69C179.202 404.69 118.652 384.023 72.9677 346.497C26.3585 308.212 0.69043 257.029 0.69043 202.38C0.69043 147.731 26.3585 96.549 72.9677 58.2639C118.652 20.7374 179.202 0.0704346 243.462 0.0704346C307.723 0.0704346 368.272 20.7374 413.957 58.2639C460.566 96.549 486.234 147.731 486.234 202.38C486.211 231.43 478.879 260.007 464.914 285.48C452.791 307.665 436.647 327.401 417.305 343.682C431.76 380.437 453.607 413.833 481.493 441.802L486.234 446.541V485.614ZM282.362 369.51L310.157 393.6C348.492 426.821 396.222 447.277 446.716 452.128C418.856 420.986 397.34 384.708 383.376 345.325L378.93 332.718L388.245 325.569C430.561 293.094 453.865 249.346 453.865 202.38C453.865 108.674 359.478 32.44 243.462 32.44C127.447 32.44 33.06 108.674 33.06 202.38C33.06 296.086 127.447 372.321 243.462 372.321C254.079 372.319 264.686 371.673 275.225 370.385L282.362 369.51Z" fill="black"/>
                  </svg>
                  <span className="text-blue-600">{comments1.length}</span>
                </button>
              </div>

              {/* Comments Section */}
              {showComments1 && (
                <div className="mt-4 space-y-2">
                  {comments1.map((comment) => (
                    <div key={comment.id} className="flex items-center justify-between">
                      <p className="text-gray-400">{comment.text}</p>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteComment1(comment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Comment Section */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment1}
                  onChange={(e) => setNewComment1(e.target.value)}
                  className="w-full px-2 py-1 border-none rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  className="text-blue-500"
                  onClick={handleCommentSubmit1}
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* ... Add code for the second and third images similarly */}

        {/* Second Image */}
        <div className="mt-8 rounded-md shadow-md overflow-hidden max-w-xl mx-auto w-full">
            {/* Post Container */}
            <img
              src="/Images/art2.jpg"
              alt="Post"
              className="w-full h-[700px] object-cover"
            />

            {/* Like and Comment Icons */}
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2" onClick={handleLike2}>
                  {/* ... Like icon SVG ... */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 163 147" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M142.625 66.6998L81.5 136.5L20.375 66.4121C13.0655 56.6913 10.1875 50.1247 10.1875 41.1352C10.1875 24.3701 22.6927 9.282 40.75 9.14062C55.6034 9.02363 72.4433 23.5413 81.5 34.4856C90.3173 23.9264 107.397 9.14062 122.25 9.14062C139.829 9.14062 152.812 24.3701 152.812 41.1352C152.812 50.1247 150.536 57.1789 142.625 66.6998ZM122.25 0C105.273 0 92.4261 9.5355 81.5 19.5C71.0935 8.92613 57.7275 0 40.75 0C16.8399 0 0 19.6754 0 41.1352C0 52.6451 4.92566 60.9326 10.3199 68.7228L73.6505 141.39C80.7563 148.59 82.1011 148.59 89.2068 141.39L152.68 68.7228C159.027 60.9326 163 52.6451 163 41.1352C163 19.6754 146.16 0 122.25 0Z" fill="black"/>
</svg>
                  <span className="text-blue-600">{likes2}</span>
                </button>

                <button
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setShowComments2(!showComments2)}
                >
                  {/* ... Comment icon SVG ... */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 487 486" fill="none">
<path d="M486.234 485.614H470.049C403.525 485.611 339.231 461.627 288.957 418.061L271.935 403.308C262.494 404.227 252.947 404.69 243.462 404.69C179.202 404.69 118.652 384.023 72.9677 346.497C26.3585 308.212 0.69043 257.029 0.69043 202.38C0.69043 147.731 26.3585 96.549 72.9677 58.2639C118.652 20.7374 179.202 0.0704346 243.462 0.0704346C307.723 0.0704346 368.272 20.7374 413.957 58.2639C460.566 96.549 486.234 147.731 486.234 202.38C486.211 231.43 478.879 260.007 464.914 285.48C452.791 307.665 436.647 327.401 417.305 343.682C431.76 380.437 453.607 413.833 481.493 441.802L486.234 446.541V485.614ZM282.362 369.51L310.157 393.6C348.492 426.821 396.222 447.277 446.716 452.128C418.856 420.986 397.34 384.708 383.376 345.325L378.93 332.718L388.245 325.569C430.561 293.094 453.865 249.346 453.865 202.38C453.865 108.674 359.478 32.44 243.462 32.44C127.447 32.44 33.06 108.674 33.06 202.38C33.06 296.086 127.447 372.321 243.462 372.321C254.079 372.319 264.686 371.673 275.225 370.385L282.362 369.51Z" fill="black"/>
</svg>

                  <span className="text-blue-600">{comments2.length}</span>
                </button>
              </div>

              {/* Comments Section */}
              {showComments2 && (
                <div className="mt-4 space-y-2">
                  {comments2.map((comment) => (
                    <div key={comment.id} className="flex items-center justify-between">
                      <p className="text-gray-400">{comment.text}</p>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteComment2(comment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Comment Section */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment2}
                  onChange={(e) => setNewComment2(e.target.value)}
                  className="w-full px-2 py-1 border-none rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  className="text-blue-500"
                  onClick={handleCommentSubmit2}
                >
                  Post
                </button>
              </div>
            </div>
          </div>



         {/* Third Image */}
         <div className="mt-8 rounded-md shadow-md overflow-hidden max-w-xl mx-auto w-full">
            {/* Post Container */}
            <img
              src="/Images/art3.jpg"
              alt="Post"
              className="w-full h-[700px] object-cover"
            />

            {/* Like and Comment Icons */}
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2" onClick={handleLike3}>
                  {/* ... Like icon SVG ... */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 163 147" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M142.625 66.6998L81.5 136.5L20.375 66.4121C13.0655 56.6913 10.1875 50.1247 10.1875 41.1352C10.1875 24.3701 22.6927 9.282 40.75 9.14062C55.6034 9.02363 72.4433 23.5413 81.5 34.4856C90.3173 23.9264 107.397 9.14062 122.25 9.14062C139.829 9.14062 152.812 24.3701 152.812 41.1352C152.812 50.1247 150.536 57.1789 142.625 66.6998ZM122.25 0C105.273 0 92.4261 9.5355 81.5 19.5C71.0935 8.92613 57.7275 0 40.75 0C16.8399 0 0 19.6754 0 41.1352C0 52.6451 4.92566 60.9326 10.3199 68.7228L73.6505 141.39C80.7563 148.59 82.1011 148.59 89.2068 141.39L152.68 68.7228C159.027 60.9326 163 52.6451 163 41.1352C163 19.6754 146.16 0 122.25 0Z" fill="black"/>
</svg>
                  <span className="text-blue-600">{likes3}</span>
                </button>

                <button
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setShowComments3(!showComments3)}
                >
                  {/* ... Comment icon SVG ... */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 487 486" fill="none">
<path d="M486.234 485.614H470.049C403.525 485.611 339.231 461.627 288.957 418.061L271.935 403.308C262.494 404.227 252.947 404.69 243.462 404.69C179.202 404.69 118.652 384.023 72.9677 346.497C26.3585 308.212 0.69043 257.029 0.69043 202.38C0.69043 147.731 26.3585 96.549 72.9677 58.2639C118.652 20.7374 179.202 0.0704346 243.462 0.0704346C307.723 0.0704346 368.272 20.7374 413.957 58.2639C460.566 96.549 486.234 147.731 486.234 202.38C486.211 231.43 478.879 260.007 464.914 285.48C452.791 307.665 436.647 327.401 417.305 343.682C431.76 380.437 453.607 413.833 481.493 441.802L486.234 446.541V485.614ZM282.362 369.51L310.157 393.6C348.492 426.821 396.222 447.277 446.716 452.128C418.856 420.986 397.34 384.708 383.376 345.325L378.93 332.718L388.245 325.569C430.561 293.094 453.865 249.346 453.865 202.38C453.865 108.674 359.478 32.44 243.462 32.44C127.447 32.44 33.06 108.674 33.06 202.38C33.06 296.086 127.447 372.321 243.462 372.321C254.079 372.319 264.686 371.673 275.225 370.385L282.362 369.51Z" fill="black"/>
</svg>

                  <span className="text-blue-600">{comments3.length}</span>
                </button>
              </div>

              {/* Comments Section */}
              {showComments3 && (
                <div className="mt-4 space-y-2">
                  {comments3.map((comment) => (
                    <div key={comment.id} className="flex items-center justify-between">
                      <p className="text-gray-400">{comment.text}</p>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteComment3(comment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Comment Section */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment3}
                  onChange={(e) => setNewComment3(e.target.value)}
                  className="w-full px-2 py-1 border-none rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  className="text-blue-500"
                  onClick={handleCommentSubmit3}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
























        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Artwork;

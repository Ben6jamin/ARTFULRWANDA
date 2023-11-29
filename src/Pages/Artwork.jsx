import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Navbar1 from "../Layout/Navbar1";
import background from '../Images/leaf.jpg';

function Artwork() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, id: Date.now() }]);
      setNewComment("");
      setShowComments(true);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <Navbar1 />

        <main className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-md shadow-md overflow-hidden max-w-xl mx-auto w-full">
            {/* Post Container */}
            <img
              src="src\Images\art1.jpg" // Replace with the actual image source
              alt="Post"
              className="w-full h-[700px] object-cover"
            />

            <div className="p-4">
              {/* Like and Comment Icons */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2" onClick={handleLike}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 163 147" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M142.625 66.6998L81.5 136.5L20.375 66.4121C13.0655 56.6913 10.1875 50.1247 10.1875 41.1352C10.1875 24.3701 22.6927 9.282 40.75 9.14062C55.6034 9.02363 72.4433 23.5413 81.5 34.4856C90.3173 23.9264 107.397 9.14062 122.25 9.14062C139.829 9.14062 152.812 24.3701 152.812 41.1352C152.812 50.1247 150.536 57.1789 142.625 66.6998ZM122.25 0C105.273 0 92.4261 9.5355 81.5 19.5C71.0935 8.92613 57.7275 0 40.75 0C16.8399 0 0 19.6754 0 41.1352C0 52.6451 4.92566 60.9326 10.3199 68.7228L73.6505 141.39C80.7563 148.59 82.1011 148.59 89.2068 141.39L152.68 68.7228C159.027 60.9326 163 52.6451 163 41.1352C163 19.6754 146.16 0 122.25 0Z" fill="black"/>
</svg>
                  <span className="text-gray-600">{likes}</span>
                </button>

                <button
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setShowComments(!showComments)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 487 486" fill="none">
<path d="M486.234 485.614H470.049C403.525 485.611 339.231 461.627 288.957 418.061L271.935 403.308C262.494 404.227 252.947 404.69 243.462 404.69C179.202 404.69 118.652 384.023 72.9677 346.497C26.3585 308.212 0.69043 257.029 0.69043 202.38C0.69043 147.731 26.3585 96.549 72.9677 58.2639C118.652 20.7374 179.202 0.0704346 243.462 0.0704346C307.723 0.0704346 368.272 20.7374 413.957 58.2639C460.566 96.549 486.234 147.731 486.234 202.38C486.211 231.43 478.879 260.007 464.914 285.48C452.791 307.665 436.647 327.401 417.305 343.682C431.76 380.437 453.607 413.833 481.493 441.802L486.234 446.541V485.614ZM282.362 369.51L310.157 393.6C348.492 426.821 396.222 447.277 446.716 452.128C418.856 420.986 397.34 384.708 383.376 345.325L378.93 332.718L388.245 325.569C430.561 293.094 453.865 249.346 453.865 202.38C453.865 108.674 359.478 32.44 243.462 32.44C127.447 32.44 33.06 108.674 33.06 202.38C33.06 296.086 127.447 372.321 243.462 372.321C254.079 372.319 264.686 371.673 275.225 370.385L282.362 369.51Z" fill="black"/>
</svg>
                <span className="text-gray-600">{comments.length}</span>
                </button>
              </div>

              {/* Comment Section Popup */}
              {showComments && (
                <div className="mt-4">
                  <div className="border p-2 rounded mt-1">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex justify-between">
                        <div>{comment.text}</div>
                        <button onClick={() => handleDeleteComment(comment.id)} className="text-red-500 ml-2">
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comment Input */}
              {showComments && (
                <div className="mt-4">
                  <textarea
                    className="w-full border p-2 rounded"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleCommentSubmit}
                    disabled={!newComment.trim()}
                  >
                    Post Comment
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Artwork;

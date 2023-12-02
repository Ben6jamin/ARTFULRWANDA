import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import SignIn from '../Forms/SignIn';
import SignUp from '../Forms/SignUp';
import background from '/Images/leaf.jpg';


const Home = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleLoginClick = () => {
    setShowSignIn(true);
  };
const handleCloseSignIn = () => {
    setShowSignIn(false);
  };
const handleSignUpClick = () => {
    setShowSignUp(true);
  };
 const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const [showMoreText1, setShowMoreText1] = useState(false);
  const [showMoreText2, setShowMoreText2] = useState(false);
  const [showMoreText3, setShowMoreText3] = useState(false);

  const toggleMoreText1 = () => {
    setShowMoreText1(!showMoreText1);
  };

  const toggleMoreText2 = () => {
    setShowMoreText2(!showMoreText2);
  };

  const toggleMoreText3 = () => {
    setShowMoreText3(!showMoreText3);
  };



    return (
        <div className="flex flex-col min-h-screen bg-cover bg-center "style={{
backgroundImage: `url(${background})`,
        }}>
          <Navbar />
            <main className="flex-grow sm:p-4 md:p-8 lg:p-12 xl:p-16">


            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/3 max-auto
            text-blue-500 font-Poppins text-2.5rem
            font-semibold leading-normal p-4">
    Welcome to ArtfulRwanda<br />where vibrant stories come to life through captivating art<br />
    Immerse yourself in the rich tapestry of Rwandan culture<br />showcased by talented artists.
</div>

<div className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/3 max-auto text-gray-600
font-Poppins leading-normal p-4">
    <p>Explore, connect, and support creativity that transcends generations.
      Join us in fostering a thriving community where every brushstroke preserves
      the essence of Rwanda's artistic spirit.
       Let the journey
       begin – a celebration of heritage and a marketplace of inspiration.
      </p>
      <button className="btn-login ml-8 mt-8 bg-gray-500 text-white font-medium py-2 px-4 rounded-md sm:py-3 sm:px-6"
      onClick={handleLoginClick}
      >
  Log In
</button>
<button className="btn-signup bg-blue-500   ml-5 text-white font-medium py-2 px-4 rounded-md sm:py-3 sm:px-6"
 onClick={handleSignUpClick}
>
  Sign Up
</button>
</div>





<div   className="text-sm md:text-[1.25rem] text-center font-['Ageo'] font-Poppins font-bold leading-7  text-blue-500">
  Our Vision &amp; Our Goal
</div>


<div  id="artwork-section" className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="rectangle_4 flex-shrink-0 w-full md:w-[18rem] h-auto md:h-[25rem] rounded-[28px]">
        <div className="mt-8 text-black text-center font-['Ageo'] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-7">
        Cultural Tapestry

        </div>
        <div className="mt-2 px-4 sm:px-8">
          <div className="flex-shrink-0 w-full h-auto md:h-[10rem] text-black text-center font-['Ageo'] text-sm md:text-base lg:text-lg leading-7">
          ArtfulRwanda envisions a dynamic online hub, unveiling Rwanda's cultural tapestry.
           A vibrant space where artists thrive, through captivating art,


            {showMoreText1 && (
              <div>
                <p className="text-dark">fostering deep cultural appreciation.</p>

              </div>
            )}
          </div>

          <button
            className="mt-4 sm:mt-8 flex-shrink-0 w-full h-[3rem] rounded-[0.625rem] bg-blue-500 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl"
            onClick={toggleMoreText1}
          >
            {showMoreText1 ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>

      <div className="rectangle_4 flex-shrink-0 w-full md:w-[18rem] h-auto md:h-[25rem] rounded-[28px]">
        <div className="mt-8 text-black text-center font-['Ageo'] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-7">
        Rwandan Creativity
        </div>
        <div className="mt-2 px-4 sm:px-8">
          <div className="flex-shrink-0 w-full h-auto md:h-[10rem] text-black text-center font-['Ageo'] text-sm md:text-base lg:text-lg leading-7">
          ArtfulRwanda aspires to be the global showcase for Rwandan creativity. A virtual haven where artists transcend borders,

            {showMoreText2 && (
              <div>
                <p className="text-dark">where art enthusiasts worldwide discover and celebrate Rwandan talent.</p>
                <p className="text-dark"></p>
              </div>
            )}
          </div>

          <button
            className="mt-4 sm:mt-8 flex-shrink-0 w-full h-[3rem] rounded-[0.625rem] bg-blue-500 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl"
            onClick={toggleMoreText2}
          >
            {showMoreText2 ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>

      <div className="rectangle_4 flex-shrink-0 w-full md:w-[18rem] h-auto md:h-[25rem] rounded-[28px]">
        <div className="mt-8 text-black text-center font-['Ageo'] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-7">
        Economic Growth
        </div>
        <div className="mt-2 px-4 sm:px-8">
          <div className="flex-shrink-0 w-full h-auto md:h-[10rem] text-black text-center font-['Ageo'] text-sm md:text-base lg:text-lg leading-7">
          Our goal is to bridge artistic excellence with economic growth. Empowering Rwandan artists, ArtfulRwanda aims to

            {showMoreText3 && (
              <div>
                <p className="text-dark">marketplace where cultural preservation flourishes.</p>

              </div>
            )}
          </div>

          <button
            className="mt-4 sm:mt-8 flex-shrink-0 w-full h-[3rem] rounded-[0.625rem] bg-blue-500 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl"
            onClick={toggleMoreText3}
          >
            {showMoreText3 ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
      </div>

      <div class="mt-8 testimonials-container text-center font-Ageo">
    <div class="testimonials-text text-sm font-bold leading-7 text-gray-600 md:text-2xl lg:text-3xl">
        TESTIMONIALS
    </div>
    <div class="clients-text text-2xl font-bold leading-7 text-blue-800 md:text-2xl lg:text-2xl">
        What Artists say about us
    </div>
</div>




<div id='event-section' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
  {/* Grid Item 1 */}
  <div className=" flex-shrink-0 w-full md:w-auto md:h-[13.9375rem] flex items-center">
    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
      <img
        src="src\Images\Ben.jpg"
        alt="Author Photo"
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <div className="Sans w-full text-[#0b1b35] font-['DM text-lg font-medium leading-7']">
      ArtfulRwanda amplifies my voice,<br /> connecting me with a global audience.<br /> A platform that empowers artists and <br />celebrates Rwandan culture.
      </div>
      <div className="timothy_nathan opacity-30 text-[#0b1b35] font-['DM text-sm font-bold leading-[1.625rem] uppercase']">
        Benjamin Ishimwe
      </div>
    </div>
  </div>






  {/* Grid Item 2 */}
  <div className=" flex-shrink-0 w-full md:w-auto md:h-[13.9375rem] flex items-center">
    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
      <img
        src="src\Images\test1.jpeg"
        alt="Author Photo"
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <div className="Sans w-full text-[#0b1b35] font-['DM text-lg font-medium leading-7']">
      Exceptional support and exposure! ArtfulRwanda <br />catapults my art into the world, <br />fostering connections and igniting <br /> passion for Rwandan creativity.
      </div>
      <div className="timothy_nathan opacity-30 text-[#0b1b35] font-['DM text-sm font-bold leading-[1.625rem] uppercase']">
        Brian Mugisha
      </div>
    </div>
  </div>






  {/* Grid Item 3 */}

  <div className=" flex-shrink-0 w-full md:w-auto md:h-[13.9375rem] flex items-center">
    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
      <img
        src="src\Images\test2.jpeg"
        alt="Author Photo"
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <div className="Sans w-full text-[#0b1b35] font-['DM text-lg font-medium leading-7']">
      ArtfulRwanda transforms dreams into reality.<br /> It's not just a platform;<br />it's a community that nurtures artists<br /> and elevates Rwandan artistry.
      </div>
      <div className="timothy_nathan opacity-30 text-[#0b1b35] font-['DM text-sm font-bold leading-[1.625rem] uppercase']">
        Erica Niyongira
      </div>
    </div>
  </div>



  {/* Grid Item 4 */}

  <div className=" flex-shrink-0 w-full md:w-auto md:h-[13.9375rem] flex items-center">
    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
      <img
        src="src\Images\test3.jpeg"
        alt="Author Photo"
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <div className="Sans w-full text-[#0b1b35] font-['DM text-lg font-medium leading-7']">
      Grateful for ArtfulRwanda's impact on my journey.<br /> A catalyst for success, connecting <br />me with art enthusiasts worldwide, <br />shaping the narrative of Rwandan art
      </div>
      <div className="timothy_nathan opacity-30 text-[#0b1b35] font-['DM text-sm font-bold leading-[1.625rem] uppercase']">
        yves Ishimwe
      </div>
    </div>
  </div>




</div>




</main>


           <Footer />


           {showSignIn && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <SignIn />
          <button className="absolute top-2 right-2 text-white" onClick={handleCloseSignIn}>
            Close
          </button>

        </div>
      )}
          {showSignUp && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <SignUp />
          <button className="absolute top-2 right-2 text-white" onClick={handleCloseSignUp}>
            Close
          </button>
        </div>
      )}
 </div>

    );

};

export default Home;

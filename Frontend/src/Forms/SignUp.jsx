import React, { useState } from 'react';
import SignIn from './SignIn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {



  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
   const navigate = useNavigate()


  const [showSignIn, setShowSignIn] = useState(false);



  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", {name, email, password})
    .then(res => {console.log(res)
    navigate('/login') })
    .catch(err => {console.log(err)})



  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };



  return (

    <div className="mt-20 flex flex-col min-h-screen  items-center  ">

      <form onSubmit={handleSubmit} className="flex-shrink-0 w-[450px] h-[404px] rounded-xl bg-[#cedafa]/[.56]">


        <div className="  ml-40 mr-50 flex  flex-shrink-0 justify-center items-center gap-2.5 pt-[0.8125rem] pb-[0.8125rem] px-2 w-10 h-10  ">
        <svg width={33} height={51} viewBox="0 0 33 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M24.0448 2.27991C21.1448 3.62991 16.2428 7.11291 13.1518 10.0199C6.2468 16.5129 2.7948 23.3739 2.9438 30.3059L3.0518 35.3059L3.8658 30.4579C4.8438 24.6289 5.8168 23.2529 5.8168 27.6979C5.8168 32.4269 7.4658 30.6139 8.0738 25.2169C8.3938 22.3759 9.4128 19.7649 10.7068 18.4719L12.8168 16.3619V19.2839C12.8168 21.5569 13.0838 21.9389 14.0168 21.0059C15.6968 19.3259 17.1448 19.5089 16.4518 21.3149C15.6088 23.5109 17.5088 27.8059 19.3238 27.8059C21.7278 27.8059 22.2508 25.0219 20.8628 19.6099C19.7678 15.3339 19.8248 14.0749 21.2868 10.2449C22.2398 7.74991 24.5688 4.50691 26.6248 2.81291C31.0308 -0.819093 30.8028 -0.866093 24.0448 2.27991ZM26.8168 26.7229C26.8168 29.3249 26.4358 29.8059 24.3758 29.8059C23.0328 29.8059 21.6568 30.2559 21.3168 30.8059C20.9648 31.3749 21.8228 31.8059 23.3078 31.8059C25.9018 31.8059 25.9128 31.8389 25.2438 37.7489C24.3388 45.7519 25.1758 48.8059 28.2768 48.8059C29.6088 48.8059 30.9458 48.4069 31.2468 47.9189C31.5488 47.4309 31.0128 47.0939 30.0568 47.1689C27.9158 47.3379 27.3888 44.3859 28.2828 37.2289C28.8058 33.0489 29.3728 31.8669 31.1258 31.3009C32.9388 30.7159 33.0258 30.5149 31.6268 30.1379C30.6978 29.8879 29.7978 28.5079 29.6268 27.0709C29.1698 23.2229 26.8168 22.9309 26.8168 26.7229ZM11.0368 28.4659C10.3998 30.5909 10.0998 33.4489 10.3688 34.8179C10.7978 36.9989 10.7408 37.0589 9.9078 35.3059C9.1598 33.7319 8.9428 33.6539 8.8868 34.9389C8.8488 35.8379 7.9168 36.8079 6.8168 37.0959C5.7168 37.3829 4.8168 38.1369 4.8168 38.7709C4.8168 39.4049 5.2668 39.6459 5.8168 39.3059C7.4118 38.3199 6.9828 39.7639 4.7488 42.9019C3.6108 44.4989 1.9458 45.8059 1.0488 45.8059C-0.202203 45.8059 -0.308201 46.0809 0.592799 46.9819C2.0888 48.4779 5.0998 45.9509 6.8468 41.7339C8.7238 37.2019 10.8168 37.9869 10.8168 43.2239C10.8168 48.5039 11.5758 50.8059 13.3168 50.8059C15.0558 50.8059 15.9108 48.2999 14.6138 47.0029C12.9788 45.3679 14.5688 37.0249 16.6188 36.4849C18.1718 36.0759 18.1678 36.0279 16.5668 35.9219C15.2268 35.8329 14.8168 34.9139 14.8168 31.9969C14.8168 29.9019 14.2268 27.3809 13.5058 26.3949C12.3128 24.7639 12.0898 24.9509 11.0368 28.4659ZM19.2698 34.1339C19.0368 34.7779 18.7268 38.3439 18.5808 42.0559C18.3898 46.9309 18.6638 48.8059 19.5668 48.8059C20.3598 48.8059 20.8428 47.2519 20.8868 44.5559C20.9558 40.3969 22.5648 34.6499 22.7768 37.8059C22.8568 38.9989 23.0868 38.9459 23.9018 37.5479C24.4648 36.5809 24.6828 35.3979 24.3868 34.9189C23.4858 33.4609 19.7228 32.8839 19.2698 34.1339Z" fill="black" />
</svg>
</div>

        <div className="mb-4 mt-8 ml-8 flex items-center flex-shrink-0 w-[21.875rem] h-9 rounded-[0.625rem] bg-[#fffefa]">


          <div className="flex  flex-shrink-0 justify-center items-center gap-2.5 pt-[0.8125rem] pb-[0.8125rem] px-2 w-8 h-8 rounded-[0.625rem] bg-[#f3931e]/[.90]">
          <svg width={27} height={33} viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4399 21.5976C20.4902 21.5976 26.4399 22.7433 26.4399 27.1633C26.4399 31.585 20.4512 32.69 13.4399 32.69C6.3913 32.69 0.439941 31.5444 0.439941 27.1243C0.439941 22.7027 6.42869 21.5976 13.4399 21.5976ZM13.4399 0.190002C18.216 0.190002 22.0427 4.01529 22.0427 8.78796C22.0427 13.5606 18.216 17.3876 13.4399 17.3876C8.66553 17.3876 4.83722 13.5606 4.83722 8.78796C4.83722 4.01529 8.66553 0.190002 13.4399 0.190002Z" fill="#2C17AE" fillOpacity="0.87" />
</svg>
</div>
          <input
            type="text"

            name='name'
            placeholder ='username'
            autoComplete='off'
            className="w-full p-1  ml-8 rounded-[10px] focus:outline-none focus:border-blue-500 bg-[#fffefa] "
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>


        <div className="mb-4 ml-8 flex items-center flex-shrink-0 w-[21.875rem] h-9 rounded-[0.625rem] bg-[#fffefa] ">


          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 pt-[0.8125rem] pb-[0.8125rem] px-2 w-8 h-8 rounded-[0.625rem] bg-[#f3931e]/[.90]">
          <svg width={54} height={53} viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M42.75 11.0416H11.25C8.76472 11.0416 6.75 13.019 6.75 15.4583V37.5416C6.75 39.9809 8.76472 41.9583 11.25 41.9583H42.75C45.2353 41.9583 47.25 39.9809 47.25 37.5416V15.4583C47.25 13.019 45.2353 11.0416 42.75 11.0416Z" stroke="#2C17AE" strokeWidth="9.6087" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M6.75 15.4584L27 28.7084L47.25 15.4584" stroke="#2C17AE" strokeWidth="9.6087" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
          <input
            type="email"

            name="email"
            autoComplete='off'
            placeholder='email'
            className="w-full ml-8  p-1 rounded-[10px] focus:outline-none focus:border-blue-500 bg-[#fffefa]"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className=" ml-8 flex items-center flex-shrink-0 w-[21.875rem] h-9 rounded-[0.625rem] bg-[#fffefa]  ">


          <div className="   flex flex-shrink-0 justify-center items-center gap-2.5 pt-[0.8125rem] pb-[0.8125rem] px-2 w-8 h-8 rounded-[0.625rem] bg-[#f3931e]/[.90]">
  <svg width={27} height={33} viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4166 0.440002C18.11 0.440002 21.8864 4.30366 21.8864 9.07361V11.527C24.5206 12.3871 26.4399 14.8818 26.4399 17.8614V25.7605C26.4399 29.4492 23.5167 32.44 19.9127 32.44H6.96869C3.36319 32.44 0.439941 29.4492 0.439941 25.7605V17.8614C0.439941 14.8818 2.3608 12.3871 4.99344 11.527V9.07361C5.00898 4.30366 8.78543 0.440002 13.4166 0.440002ZM13.4322 18.6549C12.6862 18.6549 12.0801 19.2749 12.0801 20.0381V23.5679C12.0801 24.347 12.6862 24.9671 13.4322 24.9671C14.1937 24.9671 14.7998 24.347 14.7998 23.5679V20.0381C14.7998 19.2749 14.1937 18.6549 13.4322 18.6549ZM13.4477 3.22247C10.2929 3.22247 7.72864 5.83005 7.7131 9.04181V11.1819H19.1668V9.07361C19.1668 5.84594 16.6025 3.22247 13.4477 3.22247Z" fill="#2C17AE" fillOpacity="0.87" />
  </svg>
</div>

          <input


            type="password"

            name="password"

            autoComplete='off'
            placeholder='password'
            className="w-full p-1 ml-8 rounded-[10px] focus:outline-none focus:border-blue-500 bg-[#fffefa]"
            required
            onChange={(e) => setPassword(e.target.value)}
            />








        </div>

        <button
          type="submit"
          className="w-[200px] bg-blue-500 text-white ml-25 mt-12 p-2 rounded-[20px] hover:bg-blue-600 mx-auto flex justify-center items-center"
        >
          Sign Up
        </button>

        <p className='text-1xl text-center mt-12'>
          Already Have Account{' '}
          <span className="text-blue-500" onClick={handleSignInClick} style={{ cursor: 'pointer' }}>
            Sign In
          </span>
        </p>

      </form>

      {showSignIn && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <SignIn closeSignIn={closeSignIn} />
        </div>
      )}
      </div>

  );
}

export default SignUp;

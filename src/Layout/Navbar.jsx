import React, { useState } from 'react';


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const data = [
        "Home",
        'Artwork',
        'Event',
        'About Us',
        'Contact',

    ]; // Replace this with your actual data

    const performSearch = () => {
        // Implement your search logic here
        const searchResults = data.filter(item =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Do something with the search results (e.g., update the UI)
        console.log(searchResults);
    };

    const handleSearchChange = (event) => {
        // Update the search query state
        setSearchQuery(event.target.value);

        // Step 2: Call the search function when the query changes
        performSearch();
    };


    return (
        <nav className="flex flex-col md:flex-row items-center justify-between w-full p-5 text-white">
  <div className="text-xl font-bold text-center md:text-left md:mr-8">
    <svg width={45} height={51} viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.1999 2.28862C29.1957 3.64377 22.4273 7.14008 18.1594 10.0582C8.62528 16.576 3.85892 23.4632 4.06466 30.4217L4.21378 35.4408L5.33771 30.5743C6.68809 24.723 8.03156 23.3417 8.03156 27.8037C8.03156 32.5508 10.3084 30.7309 11.1479 25.3132C11.5898 22.4614 12.9967 19.8404 14.7834 18.5425L17.6968 16.4244V19.3576C17.6968 21.6393 18.0655 22.0227 19.3537 21.0862C21.6734 19.3997 23.6727 19.5834 22.7159 21.3963C21.5519 23.6007 24.1753 27.9121 26.6814 27.9121C30.0007 27.9121 30.7229 25.1175 28.8064 19.6848C27.2944 15.3925 27.3732 14.1287 29.3918 10.284C30.7077 7.77951 33.9234 4.52412 36.7623 2.82365C42.8459 -0.822222 42.5311 -0.869402 33.1999 2.28862ZM37.0274 26.825C37.0274 29.4369 36.5013 29.9198 33.657 29.9198C31.8026 29.9198 29.9027 30.3715 29.4332 30.9236C28.9472 31.4948 30.1319 31.9274 32.1823 31.9274C35.764 31.9274 35.7792 31.9605 34.8555 37.8931C33.6059 45.9267 34.7616 48.9924 39.0433 48.9924C40.8824 48.9924 42.7285 48.5918 43.1441 48.102C43.5611 47.6121 42.821 47.2738 41.501 47.3491C38.5448 47.5188 37.8172 44.5555 39.0516 37.3711C39.7737 33.1752 40.5566 31.9886 42.977 31.4205C45.4803 30.8332 45.6005 30.6315 43.6688 30.253C42.3861 30.0021 41.1434 28.6168 40.9073 27.1743C40.2763 23.3116 37.0274 23.0185 37.0274 26.825ZM15.2391 28.5747C14.3596 30.7078 13.9453 33.5767 14.3167 34.9509C14.9091 37.1403 14.8304 37.2005 13.6802 35.4408C12.6474 33.8608 12.3478 33.7825 12.2705 35.0724C12.218 35.9748 10.9311 36.9485 9.41231 37.2376C7.89349 37.5257 6.65081 38.2826 6.65081 38.919C6.65081 39.5554 7.27215 39.7974 8.03156 39.4561C10.2339 38.4663 9.64152 39.9158 6.55692 43.0658C4.98562 44.6689 2.68666 45.9809 1.44813 45.9809C-0.279193 45.9809 -0.425549 46.2569 0.818509 47.1614C2.88412 48.6631 7.04156 46.1265 9.45374 41.8933C12.0454 37.344 14.9353 38.132 14.9353 43.389C14.9353 48.6892 15.9833 51 18.3872 51C20.7883 51 21.9689 48.4844 20.178 47.1825C17.9205 45.5412 20.1159 37.1664 22.9465 36.6243C25.0908 36.2137 25.0852 36.1655 22.8747 36.0591C21.0244 35.9698 20.4583 35.0473 20.4583 32.1191C20.4583 30.0161 19.6437 27.4855 18.6482 26.4957C17.0009 24.8585 16.693 25.0462 15.2391 28.5747ZM26.6068 34.2643C26.2851 34.9108 25.8571 38.4904 25.6555 42.2166C25.3918 47.1102 25.7701 48.9924 27.0169 48.9924C28.1119 48.9924 28.7788 47.4324 28.8395 44.7261C28.9348 40.5512 31.1564 34.7823 31.4491 37.9503C31.5596 39.1479 31.8772 39.0947 33.0025 37.6914C33.7798 36.7207 34.0808 35.5331 33.6721 35.0523C32.4281 33.5887 27.2323 33.0095 26.6068 34.2643Z" fill="black" />
    </svg>
  </div>
  <div className="flex justify-center md:justify-start md:space-x-4">
    <a href="#home" className="hover:text-gray-300 text-[#131313]">Home</a>
    <a href="#about" className="hover:text-gray-300 text-[#131313]">Artwork</a>
    <a href="#contact" className="hover:text-gray-300 text-[#131313] ml-0 md:ml-12">Event</a>
  </div>
  <div className="w-full mt-4 md:mt-0 md:w-auto">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-full p-2 border rounded-[30px]"
    />
  </div>
</nav>

    );
};

export default Navbar;

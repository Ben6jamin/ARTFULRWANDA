import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar1 = () => {
    const [searchQuery, setSearchQuery] = useState('');



    return (
        <nav className="flex flex-col md:flex-row items-center justify-between w-full p-5 text-white">
  <div className="text-xl font-bold text-center md:text-left md:mr-8">
    <svg width={45} height={51} viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.1999 2.28862C29.1957 3.64377 22.4273 7.14008 18.1594 10.0582C8.62528 16.576 3.85892 23.4632 4.06466 30.4217L4.21378 35.4408L5.33771 30.5743C6.68809 24.723 8.03156 23.3417 8.03156 27.8037C8.03156 32.5508 10.3084 30.7309 11.1479 25.3132C11.5898 22.4614 12.9967 19.8404 14.7834 18.5425L17.6968 16.4244V19.3576C17.6968 21.6393 18.0655 22.0227 19.3537 21.0862C21.6734 19.3997 23.6727 19.5834 22.7159 21.3963C21.5519 23.6007 24.1753 27.9121 26.6814 27.9121C30.0007 27.9121 30.7229 25.1175 28.8064 19.6848C27.2944 15.3925 27.3732 14.1287 29.3918 10.284C30.7077 7.77951 33.9234 4.52412 36.7623 2.82365C42.8459 -0.822222 42.5311 -0.869402 33.1999 2.28862ZM37.0274 26.825C37.0274 29.4369 36.5013 29.9198 33.657 29.9198C31.8026 29.9198 29.9027 30.3715 29.4332 30.9236C28.9472 31.4948 30.1319 31.9274 32.1823 31.9274C35.764 31.9274 35.7792 31.9605 34.8555 37.8931C33.6059 45.9267 34.7616 48.9924 39.0433 48.9924C40.8824 48.9924 42.7285 48.5918 43.1441 48.102C43.5611 47.6121 42.821 47.2738 41.501 47.3491C38.5448 47.5188 37.8172 44.5555 39.0516 37.3711C39.7737 33.1752 40.5566 31.9886 42.977 31.4205C45.4803 30.8332 45.6005 30.6315 43.6688 30.253C42.3861 30.0021 41.1434 28.6168 40.9073 27.1743C40.2763 23.3116 37.0274 23.0185 37.0274 26.825ZM15.2391 28.5747C14.3596 30.7078 13.9453 33.5767 14.3167 34.9509C14.9091 37.1403 14.8304 37.2005 13.6802 35.4408C12.6474 33.8608 12.3478 33.7825 12.2705 35.0724C12.218 35.9748 10.9311 36.9485 9.41231 37.2376C7.89349 37.5257 6.65081 38.2826 6.65081 38.919C6.65081 39.5554 7.27215 39.7974 8.03156 39.4561C10.2339 38.4663 9.64152 39.9158 6.55692 43.0658C4.98562 44.6689 2.68666 45.9809 1.44813 45.9809C-0.279193 45.9809 -0.425549 46.2569 0.818509 47.1614C2.88412 48.6631 7.04156 46.1265 9.45374 41.8933C12.0454 37.344 14.9353 38.132 14.9353 43.389C14.9353 48.6892 15.9833 51 18.3872 51C20.7883 51 21.9689 48.4844 20.178 47.1825C17.9205 45.5412 20.1159 37.1664 22.9465 36.6243C25.0908 36.2137 25.0852 36.1655 22.8747 36.0591C21.0244 35.9698 20.4583 35.0473 20.4583 32.1191C20.4583 30.0161 19.6437 27.4855 18.6482 26.4957C17.0009 24.8585 16.693 25.0462 15.2391 28.5747ZM26.6068 34.2643C26.2851 34.9108 25.8571 38.4904 25.6555 42.2166C25.3918 47.1102 25.7701 48.9924 27.0169 48.9924C28.1119 48.9924 28.7788 47.4324 28.8395 44.7261C28.9348 40.5512 31.1564 34.7823 31.4491 37.9503C31.5596 39.1479 31.8772 39.0947 33.0025 37.6914C33.7798 36.7207 34.0808 35.5331 33.6721 35.0523C32.4281 33.5887 27.2323 33.0095 26.6068 34.2643Z" fill="black" />
    </svg>
  </div>

  <Link to={'/profile'} className="w-full mt-4 md:mt-0 md:w-auto">
  <svg width={50} height={50} viewBox="0 0 159 152" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M159 76C159 34.124 123.304 0 79.5 0C35.6955 0 0 34.124 0 76C0 98.04 9.9375 117.876 25.6785 131.784C25.6785 131.86 25.6785 131.86 25.599 131.936C26.394 132.696 27.348 133.304 28.143 133.988C28.62 134.368 29.0175 134.748 29.4945 135.052C30.9255 136.192 32.5155 137.256 34.026 138.32C34.5825 138.7 35.0595 139.004 35.616 139.384C37.1265 140.372 38.7165 141.284 40.386 142.12C40.9425 142.424 41.5785 142.804 42.135 143.108C43.725 143.944 45.3945 144.704 47.1435 145.388C47.7795 145.692 48.4155 145.996 49.0515 146.224C50.8005 146.908 52.5495 147.516 54.2985 148.048C54.9345 148.276 55.5705 148.504 56.2065 148.656C58.1145 149.188 60.0225 149.644 61.9305 150.1C62.487 150.252 63.0435 150.404 63.6795 150.48C65.9055 150.936 68.1315 151.24 70.437 151.468C70.755 151.468 71.073 151.544 71.391 151.62C74.094 151.848 76.797 152 79.5 152C82.203 152 84.906 151.848 87.5295 151.62C87.8475 151.62 88.1655 151.544 88.4835 151.468C90.789 151.24 93.015 150.936 95.241 150.48C95.7975 150.404 96.354 150.176 96.99 150.1C98.898 149.644 100.885 149.264 102.714 148.656C103.35 148.428 103.986 148.2 104.622 148.048C106.371 147.44 108.199 146.908 109.869 146.224C110.505 145.996 111.141 145.692 111.777 145.388C113.446 144.704 115.116 143.944 116.785 143.108C117.422 142.804 117.978 142.424 118.534 142.12C120.124 141.208 121.715 140.372 123.304 139.384C123.861 139.08 124.338 138.7 124.894 138.32C126.484 137.256 127.995 136.192 129.426 135.052C129.903 134.672 130.301 134.292 130.777 133.988C131.652 133.304 132.527 132.62 133.322 131.936C133.322 131.86 133.322 131.86 133.242 131.784C149.062 117.876 159 98.04 159 76ZM118.773 113.772C97.2285 99.94 61.9305 99.94 40.227 113.772C36.729 115.976 33.867 118.56 31.482 121.372C19.398 109.668 11.925 93.632 11.925 76C11.925 40.356 42.2145 11.4 79.5 11.4C116.785 11.4 147.075 40.356 147.075 76C147.075 93.632 139.602 109.668 127.518 121.372C125.213 118.56 122.271 115.976 118.773 113.772Z" fill="black" />
  <path d="M79.5 37.4656C63.0435 37.4656 49.6875 50.2336 49.6875 65.9657C49.6875 81.3937 62.328 93.9337 79.1025 94.3896H79.818H80.3745H80.5335C96.5925 93.8577 109.233 81.3937 109.313 65.9657C109.313 50.2336 95.9565 37.4656 79.5 37.4656Z" fill="black" />
</svg>
  </Link>
</nav>

    );
};

export default Navbar1;
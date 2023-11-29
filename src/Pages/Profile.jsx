import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link} from 'react-router-dom';
import background from '../Images/leaf.jpg';

function Profile() {
  const location = useLocation();
  const {name} = location.state || {};


  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <main className="container mx-auto p-4 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">

            {/* SVG path for your logo */}
            <svg width={70} height={70} viewBox="0 0 92 99" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M67.8754 4.44261C59.6891 7.07321 45.8514 13.8602 37.1259 19.5247C17.6339 32.1769 7.88936 45.5462 8.30997 59.0539L8.61484 68.7968L10.9127 59.35C13.6734 47.9917 16.4201 45.3104 16.4201 53.9719C16.4201 63.1868 21.075 59.654 22.7913 49.1375C23.6946 43.6015 26.5711 38.5137 30.2239 35.9942L36.1802 31.8827V37.5765C36.1802 42.0056 36.9339 42.75 39.5676 40.9319C44.3101 37.6583 48.3976 38.0149 46.4413 41.5341C44.0616 45.8132 49.4251 54.1824 54.5486 54.1824C61.3348 54.1824 62.8112 48.7575 58.893 38.2117C55.802 29.8795 55.9629 27.4263 60.0899 19.9631C62.7801 15.1014 69.3546 8.78212 75.1584 5.48121C87.596 -1.59608 86.9524 -1.68766 67.8754 4.44261ZM75.7004 52.072C75.7004 57.1423 74.6249 58.0796 68.8098 58.0796C65.0187 58.0796 61.1344 58.9564 60.1746 60.0282C59.181 61.1369 61.603 61.9767 65.795 61.9767C73.1175 61.9767 73.1485 62.0411 71.26 73.5572C68.7053 89.1518 71.0681 95.1028 79.8218 95.1028C83.5819 95.1028 87.3561 94.3253 88.2057 93.3744C89.0582 92.4235 87.5452 91.7668 84.8465 91.913C78.8027 92.2423 77.3151 86.49 79.8388 72.544C81.3151 64.3988 82.9157 62.0956 87.8642 60.9927C92.982 59.8528 93.2276 59.4611 89.2784 58.7265C86.656 58.2393 84.1154 55.5503 83.6327 52.7502C82.3426 45.252 75.7004 44.683 75.7004 52.072ZM31.1555 55.4684C29.3573 59.6092 28.5104 65.1783 29.2698 67.8459C30.4808 72.0958 30.3199 72.2127 27.9685 68.7968C25.8569 65.7297 25.2444 65.5777 25.0863 68.0817C24.979 69.8335 22.3481 71.7236 19.243 72.2848C16.1378 72.844 13.5972 74.3133 13.5972 75.5487C13.5972 76.7841 14.8675 77.2537 16.4201 76.5912C20.9226 74.6699 19.7115 77.4837 13.4053 83.5983C10.1928 86.7102 5.49274 89.257 2.96062 89.257C-0.570794 89.257 -0.870012 89.7929 1.6734 91.5486C5.89641 94.4637 14.3961 89.5396 19.3276 81.3224C24.6262 72.4914 30.5344 74.021 30.5344 84.2258C30.5344 94.5143 32.677 99 37.5916 99C42.5006 99 44.9142 94.1168 41.2529 91.5895C36.6375 88.4036 41.1259 72.1465 46.9127 71.0942C51.2967 70.2972 51.2854 70.2037 46.766 69.9972C42.9833 69.8237 41.8259 68.033 41.8259 62.3489C41.8259 58.2666 40.1604 53.3542 38.1251 51.4329C34.7575 48.2548 34.128 48.6191 31.1555 55.4684ZM54.3962 66.5131C53.7385 67.768 52.8634 74.7166 52.4512 81.9498C51.9121 91.4492 52.6855 95.1028 55.2346 95.1028C57.4731 95.1028 58.8366 92.0747 58.9608 86.8213C59.1556 78.7171 63.6976 67.5185 64.296 73.6683C64.5218 75.993 65.1711 75.8897 67.4717 73.1656C69.061 71.2813 69.6764 68.9761 68.8408 68.0427C66.2974 65.2017 55.6749 64.0773 54.3962 66.5131Z" fill="black" />
</svg>


          <button className="mt-20 flex items-center mb-2">

              {/* SVG path for your first icon */}
              <svg width={66} height={74} viewBox="0 0 66 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M53.9086 23.9806C53.2125 23.6833 52.5164 23.4025 51.8203 23.1382C51.9363 22.5271 52.0395 21.916 52.1426 21.3048C53.7281 11.4607 52.684 3.54908 49.1648 0.939402C45.7746 -1.55466 40.2445 1.0385 34.65 7.28192C34.0957 7.89305 33.5543 8.53721 33.0387 9.18137C32.6906 8.75193 32.3297 8.32249 31.9688 7.90957C26.1035 1.23671 20.2254 -1.57118 16.7063 1.05502C13.3289 3.5656 12.3234 11.0148 13.7414 20.3303C13.8832 21.2553 14.0379 22.1637 14.2184 23.0887C13.3934 23.386 12.5812 23.7163 11.8207 24.0632C4.93711 27.1188 0 31.9418 0 36.9299C0 42.0832 5.25938 47.253 12.4137 50.3912C12.9938 50.639 13.5738 50.8867 14.1668 51.1015C13.9734 52.0925 13.8059 53.067 13.6512 54.0745C12.2977 63.2414 13.3547 70.5089 16.732 73.003C20.2125 75.5796 26.0648 72.9369 31.7625 66.5448C32.2137 66.0328 32.6648 65.5043 33.116 64.9427C33.6832 65.6529 34.2762 66.3301 34.8691 66.9908C40.3863 73.069 45.8391 75.5301 49.2035 73.036C52.684 70.4594 53.8184 62.6468 52.3488 53.133C52.2328 52.4063 52.1039 51.663 51.9621 50.9033C52.3746 50.7546 52.7742 50.5894 53.1738 50.4243C60.6117 47.2695 66 42.1658 66 36.9299C66 31.9252 60.9211 27.0693 53.9086 23.9806ZM36.4676 9.95767C41.2629 4.60617 45.7359 2.50851 47.7727 4.01156C49.9512 5.61371 50.7891 12.0884 49.4227 20.5946C49.3324 21.1562 49.2422 21.7012 49.1262 22.2463C46.2645 21.4204 43.3641 20.8258 40.4508 20.4955C38.775 17.4233 36.9445 14.4833 34.9594 11.725C35.4621 11.1139 35.952 10.5358 36.4676 9.95767ZM21.5531 45.5022C22.2105 46.9392 22.8809 48.3762 23.5898 49.7801C21.5789 49.4993 19.5809 49.0864 17.6086 48.5413C18.1758 46.1629 18.8848 43.7018 19.7098 41.1913C20.3027 42.6448 20.9086 44.0817 21.5531 45.5022ZM17.6473 25.6323C19.5035 25.1037 21.4758 24.6743 23.5254 24.344C22.8422 25.7149 22.1719 27.1188 21.5402 28.5393C20.9086 29.9432 20.2898 31.3802 19.7098 32.8337C18.8977 30.3727 18.2145 27.9612 17.6473 25.6323ZM21.1793 37.0125C22.0301 34.7331 22.9582 32.5033 23.9379 30.3066C24.9176 28.1098 25.9746 25.9791 27.0832 23.8815C29.0168 23.6998 30.9891 23.6007 33 23.6007C35.0109 23.6007 36.9961 23.6998 38.9168 23.8815C40.0125 25.9626 41.0566 28.0933 42.0492 30.2735C43.0418 32.4538 43.9699 34.6836 44.8465 36.9464C43.9828 39.2257 43.0547 41.4721 42.0621 43.6853C41.0824 45.8821 40.0383 48.0128 38.9426 50.1269C37.0219 50.3086 35.0238 50.3912 33 50.3912C30.9762 50.3912 29.0168 50.3086 27.1219 50.16C26.0004 48.0623 24.9434 45.9151 23.9508 43.7184C22.9582 41.5216 22.043 39.2918 21.1793 37.0125ZM44.4598 45.4692C45.1172 44.0157 45.7359 42.5457 46.3418 41.0591C47.1668 43.4541 47.8887 45.8821 48.5203 48.3762C46.5223 48.9542 44.4984 49.4002 42.4617 49.6975C43.1578 48.3101 43.8152 46.8896 44.4598 45.4692ZM46.316 32.8337C45.7102 31.3802 45.0914 29.9267 44.4469 28.5062C43.8152 27.1023 43.1578 25.7149 42.4746 24.344C44.55 24.6743 46.5352 25.1203 48.3914 25.6653C47.7984 28.1098 47.1023 30.4883 46.316 32.8337ZM33.0258 14.2521C34.3793 16.135 35.6555 18.1171 36.8414 20.1652C34.2891 20.0165 31.7238 20.0165 29.1715 20.1652C30.4348 18.0345 31.7367 16.0524 33.0258 14.2521ZM18.0727 4.12718C20.2383 2.50851 25.0465 4.82089 30.1125 10.5688C30.4348 10.9322 30.757 11.3286 31.0922 11.725C29.0941 14.4833 27.2508 17.4233 25.5621 20.4955C22.6488 20.8258 19.7613 21.4039 16.8996 22.2133C16.732 21.3709 16.5902 20.512 16.4484 19.6531C15.2367 11.6589 16.0359 5.63022 18.0727 4.12718ZM14.9145 47.6659C14.373 47.4677 13.8445 47.253 13.316 47.0218C10.5703 45.9151 7.45078 44.1643 5.19492 41.8685C3.89297 40.7123 3.01641 38.9284 2.77148 36.9299C2.77148 33.9073 6.84492 30.0423 12.723 27.4161C13.4578 27.0858 14.2055 26.7885 14.9531 26.5077C15.8297 30.0919 16.8867 33.61 18.1113 37.0125C16.8738 40.4645 15.8039 44.0322 14.9145 47.6659ZM29.9449 63.8526C27.818 66.3466 25.3559 68.3287 22.6746 69.683C21.2437 70.5584 19.5938 70.641 18.1242 69.8978C16.0746 68.3782 15.2238 62.5477 16.384 54.7022C16.5258 53.7772 16.6805 52.8523 16.8609 51.9438C19.7484 52.7366 22.6617 53.2817 25.6137 53.5625C27.3152 56.6512 29.1844 59.6077 31.1824 62.3825C30.7699 62.8946 30.3574 63.3901 29.9449 63.8526ZM33.1031 59.8389C31.7883 58.0221 30.4734 56.007 29.1973 53.8433C30.4348 53.9093 31.7109 53.9424 33 53.9424C34.3277 53.9424 35.6297 53.9093 36.9188 53.8268C35.7328 55.9244 34.4566 57.923 33.1031 59.8389ZM49.9512 64.794C49.8352 66.8091 49.0617 68.692 47.8242 69.9638C45.7746 71.4834 41.4047 69.5014 36.6867 64.315C36.1453 63.7204 35.6039 63.0763 35.0496 62.4156C37.0219 59.6242 38.8395 56.6677 40.4895 53.5625C43.4414 53.2487 46.3805 52.6706 49.2809 51.8282C49.4098 52.5054 49.5258 53.1826 49.6289 53.8433C50.2605 57.4109 50.3637 61.1273 49.9512 64.794ZM52.2973 47.0383C51.9363 47.1869 51.5754 47.3356 51.2016 47.4677C50.2992 43.867 49.1906 40.3489 47.9145 36.9299C49.152 33.5604 50.1961 30.0919 51.0727 26.5407C51.743 26.7885 52.3875 27.0527 53.0063 27.317C59.0133 29.9597 63.2285 33.8908 63.2285 36.8969C63.2285 40.1342 58.7297 44.313 52.2973 47.0383ZM33 44.5607C36.2613 44.5607 38.9039 41.1748 38.9039 36.996C38.9039 32.8172 36.2613 29.4312 33 29.4312C29.7387 29.4312 27.0961 32.8172 27.0961 36.996C27.0961 41.1748 29.7387 44.5607 33 44.5607Z" fill="black" />
</svg>

            <span className="ml-2">Artwork</span>
          </button>
          <Link to="/event" className="mt-8 flex items-center mb-2">

              {/* SVG path for your second icon */}
              <svg width={61} height={68} viewBox="0 0 61 68" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30.5 0C22.1125 0 15.25 7.65 15.25 17C15.25 25.84 11.285 33.83 5.0325 39.61C1.90625 42.5 0 46.58 0 51H61C61 46.58 59.17 42.5 55.9675 39.61C49.715 33.83 45.75 25.84 45.75 17C45.75 7.65 38.9637 0 30.5 0ZM22.875 59.5C22.875 64.175 26.3062 68 30.5 68C34.6937 68 38.125 64.175 38.125 59.5H22.875Z" fill="black" />
</svg>

            <span className="ml-2">Event</span>
          </Link>
          <button className="mt-8 flex items-center">

              {/* SVG path for your third icon */}
              <svg width={59} height={57} viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.3115 4.55651C34.293 3.3318 33.7682 0.36478 35.4289 0.33964L47.2386 0.160871C53.1065 0.0720454 57.9527 5.64238 58.058 12.597L58.5241 43.3896C58.6294 50.3442 53.954 56.0586 48.0861 56.1475L36.2764 56.3262C35.6491 56.3357 35.0856 55.688 35.0743 54.9444C35.0558 53.7197 34.531 50.7527 36.1917 50.7276L48.0013 50.5488C51.249 50.4996 53.8585 47.3102 53.8002 43.4611L53.3341 12.6685C53.2758 8.81939 50.571 5.71037 47.3233 5.75953L36.6947 5.92042C35.772 5.93439 34.336 6.17487 34.3115 4.55651ZM0.42375 28.8692C0.412494 28.1257 0.660237 27.4219 1.09515 26.8904L20.8114 2.79214C21.2463 2.26056 21.8321 1.94545 22.4595 1.93595C23.7512 1.9164 24.8407 3.16864 24.8638 4.69953L25.0545 17.2965L41.588 17.0462C42.8797 17.0267 43.9692 18.2789 43.9923 19.8098L44.2466 36.6058C44.2698 38.1367 43.2187 39.4213 41.927 39.4409L25.3935 39.6911L25.5842 52.2881C25.6074 53.819 24.5563 55.1037 23.2646 55.1232C22.6373 55.1327 22.0421 54.8355 21.5913 54.3173L1.15474 30.8269C0.703936 30.3087 0.435006 29.6128 0.42375 28.8692Z" fill="black" />
</svg>

            <span className="ml-2">SignOut</span>
          </button>
        </div>
        <div className="flex flex-col items-center ml-8">

            {/* SVG path for your profile icon */}

            <svg width={100} height={100} viewBox="0 0 159 152" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M159 76C159 34.124 123.304 0 79.5 0C35.6955 0 0 34.124 0 76C0 98.04 9.9375 117.876 25.6785 131.784C25.6785 131.86 25.6785 131.86 25.599 131.936C26.394 132.696 27.348 133.304 28.143 133.988C28.62 134.368 29.0175 134.748 29.4945 135.052C30.9255 136.192 32.5155 137.256 34.026 138.32C34.5825 138.7 35.0595 139.004 35.616 139.384C37.1265 140.372 38.7165 141.284 40.386 142.12C40.9425 142.424 41.5785 142.804 42.135 143.108C43.725 143.944 45.3945 144.704 47.1435 145.388C47.7795 145.692 48.4155 145.996 49.0515 146.224C50.8005 146.908 52.5495 147.516 54.2985 148.048C54.9345 148.276 55.5705 148.504 56.2065 148.656C58.1145 149.188 60.0225 149.644 61.9305 150.1C62.487 150.252 63.0435 150.404 63.6795 150.48C65.9055 150.936 68.1315 151.24 70.437 151.468C70.755 151.468 71.073 151.544 71.391 151.62C74.094 151.848 76.797 152 79.5 152C82.203 152 84.906 151.848 87.5295 151.62C87.8475 151.62 88.1655 151.544 88.4835 151.468C90.789 151.24 93.015 150.936 95.241 150.48C95.7975 150.404 96.354 150.176 96.99 150.1C98.898 149.644 100.885 149.264 102.714 148.656C103.35 148.428 103.986 148.2 104.622 148.048C106.371 147.44 108.199 146.908 109.869 146.224C110.505 145.996 111.141 145.692 111.777 145.388C113.446 144.704 115.116 143.944 116.785 143.108C117.422 142.804 117.978 142.424 118.534 142.12C120.124 141.208 121.715 140.372 123.304 139.384C123.861 139.08 124.338 138.7 124.894 138.32C126.484 137.256 127.995 136.192 129.426 135.052C129.903 134.672 130.301 134.292 130.777 133.988C131.652 133.304 132.527 132.62 133.322 131.936C133.322 131.86 133.322 131.86 133.242 131.784C149.062 117.876 159 98.04 159 76ZM118.773 113.772C97.2285 99.94 61.9305 99.94 40.227 113.772C36.729 115.976 33.867 118.56 31.482 121.372C19.398 109.668 11.925 93.632 11.925 76C11.925 40.356 42.2145 11.4 79.5 11.4C116.785 11.4 147.075 40.356 147.075 76C147.075 93.632 139.602 109.668 127.518 121.372C125.213 118.56 122.271 115.976 118.773 113.772Z" fill="#292D32" />
  <path d="M79.5 37.4656C63.0435 37.4656 49.6875 50.2336 49.6875 65.9657C49.6875 81.3937 62.328 93.9337 79.1025 94.3896H79.818H80.3745H80.5335C96.5925 93.8577 109.233 81.3937 109.313 65.9657C109.313 50.2336 95.9565 37.4656 79.5 37.4656Z" fill="#292D32" />
</svg>

          <div className="mt-2 ml-2">
            <p className="text-xl font-bold">Welcome {name}!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;

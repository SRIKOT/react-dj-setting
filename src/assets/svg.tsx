import React from "react"
import { SvgProps } from "../interfaces"

const IconCloseSvg = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.17164 4.42182C3.89828 4.69519 3.89828 5.1384 4.17164 5.41177L19.255 20.4951C19.5283 20.7685 19.9716 20.7685 20.2449 20.4951C20.5183 20.2217 20.5183 19.7785 20.2449 19.5052L5.1616 4.42182C4.88823 4.14846 4.44501 4.14846 4.17164 4.42182Z"
      fill="#9E9E9E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3281 4.42182C20.6015 4.69519 20.6015 5.1384 20.3281 5.41177L5.24478 20.4951C4.97141 20.7685 4.5282 20.7685 4.25483 20.4951C3.98146 20.2217 3.98146 19.7785 4.25483 19.5052L19.3382 4.42182C19.6115 4.14846 20.0547 4.14846 20.3281 4.42182Z"
      fill="#9E9E9E"
    />
  </svg>
)

const IconDropdown = ({ style, onClick }: SvgProps) => (
  <svg
    width="17"
    height="24"
    viewBox="0 0 17 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      pointerEvents: "none",
      position: "absolute",
      top: "4px",
      right: "12px",
      ...style,
    }}
    onClick={onClick}
  >
    <path
      d="M16.8931 8.57129H15.8887C15.8204 8.57129 15.7561 8.60477 15.7159 8.65968L11.911 13.9043L8.10608 8.65968C8.0659 8.60477 8.00161 8.57129 7.93331 8.57129H6.92885C6.84179 8.57129 6.7909 8.6704 6.84179 8.74138L11.5641 15.2516C11.7355 15.4874 12.0864 15.4874 12.2565 15.2516L16.9788 8.74138C17.0311 8.6704 16.9802 8.57129 16.8931 8.57129Z"
      fill="black"
      fillOpacity="0.25"
    />
  </svg>
)

const IconMicrophoneOutline = ({ style, onClick }: SvgProps) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    onClick={onClick}
  >
    <path
      d="M6.25122 14.5H10.2512"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.2512 7V8C12.2512 10.2 10.4512 12 8.25122 12C6.05122 12 4.25122 10.2 4.25122 8V7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.25122 12V14.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.84391 9.39976L6.84394 9.39972L6.8391 9.39484C6.4629 9.01544 6.25164 8.50289 6.25124 7.9686V4.50002H6.25124L6.25124 4.49807C6.25021 4.2354 6.30119 3.97512 6.40124 3.73224C6.50129 3.48936 6.64843 3.26869 6.83417 3.08295C7.01991 2.89721 7.24058 2.75007 7.48346 2.65002C7.72634 2.54997 7.98662 2.49899 8.24929 2.50002V2.50002H8.25124C9.37697 2.50002 10.2512 3.37429 10.2512 4.50002V7.96877C10.2512 9.09388 9.34809 9.99962 8.25197 10C7.98911 9.99934 7.72906 9.94589 7.48724 9.84284C7.24528 9.73972 7.02651 9.58905 6.84391 9.39976Z" />
  </svg>
)

const IconMicrophoneOffOutline = ({ style, onClick }: SvgProps) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9766 9.76919C12.1156 9.3605 12.1863 8.9317 12.1859 8.50003V7.7132C12.1859 7.60886 12.1444 7.50879 12.0706 7.43501C11.9969 7.36123 11.8968 7.31979 11.7924 7.31979C11.6881 7.31979 11.588 7.36123 11.5143 7.43501C11.4405 7.50879 11.399 7.60886 11.399 7.7132V8.50003C11.399 8.71562 11.3778 8.92492 11.3361 9.12871L11.9766 9.76919ZM9.99218 11.1225C9.51799 11.4373 8.96732 11.6175 8.39881 11.6441C7.8303 11.6707 7.26521 11.5427 6.7637 11.2736C6.26219 11.0045 5.84303 10.6045 5.55084 10.1161C5.25864 9.62766 5.10436 9.06917 5.10439 8.50003V7.7132C5.10439 7.60886 5.06295 7.50879 4.98917 7.43501C4.91539 7.36123 4.81532 7.31979 4.71098 7.31979C4.60664 7.31979 4.50657 7.36123 4.43279 7.43501C4.35901 7.50879 4.31756 7.60886 4.31756 7.7132V8.50003C4.31755 9.47533 4.67981 10.4159 5.33405 11.1392C5.9883 11.8625 6.88789 12.317 7.8583 12.4145V14.0078H5.49781C5.39347 14.0078 5.2934 14.0493 5.21962 14.1231C5.14584 14.1968 5.10439 14.2969 5.10439 14.4013C5.10439 14.5056 5.14584 14.6057 5.21962 14.6794C5.2934 14.7532 5.39347 14.7947 5.49781 14.7947H11.0056C11.11 14.7947 11.21 14.7532 11.2838 14.6794C11.3576 14.6057 11.399 14.5056 11.399 14.4013C11.399 14.2969 11.3576 14.1968 11.2838 14.1231C11.21 14.0493 11.11 14.0078 11.0056 14.0078H8.64513V12.4145C9.33558 12.3462 9.99545 12.0956 10.5571 11.6883L9.99218 11.1225ZM10.6122 8.40561V4.56588C10.6126 4.00609 10.4141 3.46437 10.052 3.03742C9.68998 2.61048 9.18797 2.3261 8.63564 2.23505C8.0833 2.144 7.51658 2.25221 7.03665 2.54037C6.55672 2.82852 6.19482 3.27786 6.01554 3.80816L6.68041 4.47304C6.70282 4.06312 6.88452 3.67819 7.18675 3.40037C7.48899 3.12255 7.88782 2.97383 8.29817 2.98594C8.70851 2.99805 9.09788 3.17004 9.3832 3.46521C9.66851 3.76038 9.82719 4.15536 9.82537 4.56588V7.61799L10.6122 8.40482V8.40561ZM8.83239 9.96353L9.42094 10.5521C9.06182 10.7569 8.65521 10.8637 8.24182 10.862C7.82842 10.8603 7.42272 10.75 7.06533 10.5422C6.70794 10.3344 6.41138 10.0364 6.20533 9.67804C5.99928 9.31965 5.89096 8.91343 5.89122 8.50003V7.02158L6.67805 7.80841V8.50003C6.67791 8.75693 6.74066 9.00996 6.86083 9.23702C6.98099 9.46408 7.15492 9.65827 7.36743 9.80263C7.57993 9.94699 7.82455 10.0371 8.07991 10.0652C8.33527 10.0932 8.59362 10.0583 8.83239 9.96353ZM12.6942 12.7127L3.2522 3.27076L3.80927 2.71368L13.2512 12.1556L12.6942 12.7119V12.7127Z"
    />
  </svg>
)

const IconSpeakerOn = ({ style, onClick }: SvgProps) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    onClick={onClick}
  >
    <path d="M9.99992 2.83537C9.99992 2.11537 9.15059 1.7347 8.61325 2.21203L5.61792 4.87537C5.52649 4.95682 5.40836 5.00189 5.28592 5.00203H2.83325C2.43566 5.00203 2.05433 5.15989 1.77306 5.4409C1.4918 5.72192 1.33361 6.10311 1.33325 6.5007V9.4987C1.33325 9.89653 1.49129 10.2781 1.77259 10.5594C2.0539 10.8407 2.43543 10.9987 2.83325 10.9987H5.28659C5.40903 10.9988 5.52716 11.0439 5.61859 11.1254L8.61259 13.7874C9.14992 14.2654 9.99992 13.884 9.99992 13.1647V2.83537ZM6.28325 5.62203L8.99992 3.20603V12.794L6.28325 10.3787C6.00871 10.1344 5.65406 9.99946 5.28659 9.99937H2.83325C2.70064 9.99937 2.57347 9.94669 2.4797 9.85292C2.38593 9.75915 2.33325 9.63198 2.33325 9.49937V6.5007C2.33325 6.36809 2.38593 6.24092 2.4797 6.14715C2.57347 6.05338 2.70064 6.0007 2.83325 6.0007H5.28659C5.65397 6.00079 6.00861 5.86605 6.28325 5.62203ZM12.6613 3.93337C12.7678 3.85444 12.9013 3.82105 13.0325 3.84056C13.1636 3.86006 13.2816 3.93085 13.3606 4.03737C14.2108 5.18415 14.6688 6.57444 14.6666 8.00203C14.6686 9.4297 14.2104 10.82 13.3599 11.9667C13.3213 12.0206 13.2723 12.0662 13.2158 12.101C13.1593 12.1357 13.0965 12.1589 13.031 12.1692C12.9655 12.1794 12.8986 12.1765 12.8342 12.1607C12.7699 12.1449 12.7093 12.1164 12.656 12.0769C12.6027 12.0374 12.5578 11.9877 12.524 11.9307C12.4901 11.8738 12.4678 11.8106 12.4586 11.7449C12.4493 11.6793 12.4532 11.6124 12.4701 11.5483C12.4869 11.4842 12.5163 11.424 12.5566 11.3714C13.2794 10.3969 13.6687 9.21531 13.6666 8.00203C13.6685 6.78899 13.2793 5.60765 12.5566 4.63337C12.5174 4.58056 12.4891 4.52054 12.4732 4.45676C12.4572 4.39298 12.454 4.32668 12.4637 4.26166C12.4735 4.19664 12.4959 4.13418 12.5298 4.07785C12.5637 4.02151 12.6084 3.97242 12.6613 3.93337ZM11.4286 5.58137C11.4863 5.55006 11.5497 5.53042 11.615 5.5236C11.6803 5.51677 11.7463 5.52288 11.8093 5.54157C11.8723 5.56027 11.9309 5.59119 11.9819 5.63256C12.0329 5.67393 12.0753 5.72495 12.1066 5.7827C12.4639 6.44337 12.6666 7.19937 12.6666 8.00203C12.6677 8.7767 12.4752 9.53936 12.1066 10.2207C12.0753 10.2785 12.033 10.3295 11.982 10.371C11.931 10.4124 11.8724 10.4434 11.8094 10.4621C11.7465 10.4809 11.6804 10.4871 11.6151 10.4803C11.5497 10.4735 11.4864 10.454 11.4286 10.4227C11.3708 10.3914 11.3197 10.3491 11.2783 10.2981C11.2369 10.2471 11.2059 10.1885 11.1872 10.1255C11.1684 10.0626 11.1622 9.99654 11.169 9.9312C11.1758 9.86585 11.1953 9.80248 11.2266 9.7447C11.5066 9.2267 11.6666 8.63337 11.6666 8.00137C11.6673 7.3929 11.5161 6.79389 11.2266 6.2587C11.1636 6.14208 11.1495 6.00523 11.1874 5.87822C11.2253 5.75121 11.312 5.64444 11.4286 5.58137Z" />
  </svg>
)

const IconSpeakerOff = ({ style, onClick }: SvgProps) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    onClick={onClick}
  >
    <path d="M8.61325 2.2121C9.15059 1.73543 9.99992 2.1161 9.99992 2.83543V13.1654C9.99992 13.8848 9.15059 14.2661 8.61325 13.7881L5.61859 11.1261C5.52716 11.0447 5.40903 10.9996 5.28659 10.9994H2.83325C2.43543 10.9994 2.0539 10.8414 1.77259 10.5601C1.49129 10.2788 1.33325 9.89726 1.33325 9.49943V6.50076C1.33325 6.10294 1.49129 5.72141 1.77259 5.4401C2.0539 5.1588 2.43543 5.00076 2.83325 5.00076H5.28659C5.40903 5.00062 5.52716 4.95555 5.61859 4.8741L8.61259 2.2121H8.61325ZM8.99992 3.2061L6.28325 5.6221C6.00861 5.86611 5.65397 6.00085 5.28659 6.00076H2.83325C2.70064 6.00076 2.57347 6.05344 2.4797 6.14721C2.38593 6.24098 2.33325 6.36816 2.33325 6.50076V9.49943C2.33325 9.77543 2.55725 9.99943 2.83325 9.99943H5.28659C5.65406 9.99953 6.00871 10.1345 6.28325 10.3788L8.99992 12.7941V3.2061ZM10.8133 6.1481C10.907 6.05446 11.0341 6.00187 11.1666 6.00187C11.2991 6.00187 11.4262 6.05446 11.5199 6.1481L12.6666 7.29543L13.8133 6.14877C13.859 6.09964 13.9142 6.06024 13.9756 6.03291C14.0369 6.00558 14.1031 5.99089 14.1702 5.9897C14.2374 5.98852 14.3041 6.00087 14.3663 6.02602C14.4286 6.05116 14.4851 6.08859 14.5326 6.13607C14.5801 6.18355 14.6175 6.24011 14.6427 6.30237C14.6678 6.36462 14.6802 6.43131 14.679 6.49845C14.6778 6.56558 14.6631 6.63179 14.6358 6.69312C14.6084 6.75446 14.569 6.80966 14.5199 6.85543L13.3733 8.0021L14.5199 9.14877C14.6082 9.24355 14.6563 9.36891 14.654 9.49845C14.6517 9.62798 14.5993 9.75157 14.5077 9.84318C14.4161 9.93479 14.2925 9.98726 14.1629 9.98955C14.0334 9.99183 13.908 9.94375 13.8133 9.85543L12.6666 8.70877L11.5199 9.85543C11.4741 9.90456 11.4189 9.94396 11.3576 9.97129C11.2963 9.99861 11.2301 10.0133 11.1629 10.0145C11.0958 10.0157 11.0291 10.0033 10.9669 9.97818C10.9046 9.95303 10.848 9.9156 10.8006 9.86812C10.7531 9.82064 10.7157 9.76409 10.6905 9.70183C10.6654 9.63957 10.653 9.57289 10.6542 9.50575C10.6554 9.43861 10.6701 9.37241 10.6974 9.31107C10.7247 9.24974 10.7641 9.19454 10.8133 9.14877L11.9599 8.0021L10.8133 6.85543C10.7196 6.76168 10.667 6.6346 10.667 6.5021C10.667 6.3696 10.7196 6.24252 10.8133 6.14877V6.1481Z" />
  </svg>
)

const IconPlayFilled = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9569 8.04324C13.5559 8.43848 13.5559 9.31734 12.9569 9.71258L5.27267 14.7829C4.60781 15.2216 3.72193 14.7448 3.72193 13.9482L3.72193 3.8076C3.72193 3.01106 4.60781 2.53424 5.27267 2.97293L12.9569 8.04324Z"
      // fill="#6699FF"
    />
  </svg>
)

const IconReset = ({ style, onClick }: SvgProps) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    onClick={onClick}
  >
    <g clipPath="url(#clip0_134_31810)">
      <path
        d="M6.69657 10.4899L8.04857 9.56693C8.15605 9.49355 8.27706 9.44229 8.40454 9.41614C8.53202 9.38998 8.66343 9.38945 8.79112 9.41458C8.91881 9.43971 9.04022 9.48999 9.14829 9.5625C9.25635 9.63501 9.34891 9.7283 9.42057 9.83693C9.56709 10.057 9.62131 10.3257 9.57156 10.5854C9.52181 10.845 9.37206 11.0747 9.15457 11.2249L5.87757 13.4619C5.77009 13.5353 5.64909 13.5866 5.52161 13.6127C5.39413 13.6389 5.26271 13.6394 5.13503 13.6143C5.00734 13.5891 4.88592 13.5389 4.77786 13.4664C4.66979 13.3938 4.57723 13.3006 4.50557 13.1919L2.29557 9.87593C2.14848 9.6559 2.09393 9.38682 2.14371 9.12688C2.19349 8.86694 2.3436 8.63704 2.56157 8.48693C2.66905 8.41355 2.79006 8.36229 2.91754 8.33614C3.04502 8.30998 3.17643 8.30945 3.30412 8.33458C3.43181 8.35971 3.55322 8.40999 3.66129 8.4825C3.76935 8.55501 3.86191 8.6483 3.93357 8.75693L4.77257 10.0159C5.98857 5.88793 9.76857 2.87793 14.2436 2.87793C19.7016 2.87793 24.1256 7.35493 24.1256 12.8779C24.1256 18.4009 19.7016 22.8779 14.2436 22.8779C14.113 22.8771 13.9839 22.8507 13.8636 22.8C13.7433 22.7493 13.6342 22.6754 13.5425 22.5826C13.4507 22.4897 13.3782 22.3797 13.3289 22.2588C13.2797 22.1379 13.2548 22.0085 13.2556 21.8779C13.2556 21.3259 13.6986 20.8779 14.2436 20.8779C18.6096 20.8779 22.1496 17.2959 22.1496 12.8779C22.1496 8.45993 18.6096 4.87793 14.2436 4.87793C10.6996 4.87793 7.70057 7.23793 6.69657 10.4899Z"
        fill="#6699FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_134_31810">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.888672 0.87793)"
        />
      </clipPath>
    </defs>
  </svg>
)

const IconPauseFilled = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5.55542"
      y="4.21143"
      width="2"
      height="9.33333"
      rx="1"
      fill="#F0F1F2"
    />
    <rect
      x="10.2219"
      y="4.21143"
      width="2"
      height="9.33333"
      rx="1"
      fill="#F0F1F2"
    />
  </svg>
)

export {
  IconCloseSvg,
  IconDropdown,
  IconMicrophoneOutline,
  IconMicrophoneOffOutline,
  IconSpeakerOn,
  IconSpeakerOff,
  IconPlayFilled,
  IconPauseFilled,
  IconReset,
}

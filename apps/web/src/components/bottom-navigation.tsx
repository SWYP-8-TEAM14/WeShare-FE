import {
  BottomNavigation as BottomNavigationComponent,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemTitle,
} from "@repo/ui/bottom-navigation";

type NavigationItems = {
  value: "home" | "groups" | "items" | "profile";
  path: string;
  name: "홈" | "내그룹" | "공유물품" | "마이페이지";
  defaultIcon: React.ReactNode;
  selectedIcon: React.ReactNode;
};

const navigationItems: NavigationItems[] = [
  {
    name: "홈",
    value: "home",
    path: "/app",
    defaultIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0309 16.2712C9.67187 16.2712 9.38086 16.5623 9.38086 16.9212C9.38086 17.2802 9.67187 17.5712 10.0309 17.5712H13.9645C14.3235 17.5712 14.6145 17.2802 14.6145 16.9212C14.6145 16.5623 14.3235 16.2712 13.9645 16.2712H10.0309Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5393 3.6887C11.7931 3.43515 12.2044 3.43515 12.4581 3.6887L21.3088 12.5312C21.5628 12.7849 21.563 13.1965 21.3093 13.4504C21.0555 13.7044 20.644 13.7046 20.39 13.4508L20.0238 13.085V18.8512C20.0238 20.3147 18.8374 21.5012 17.3738 21.5012H6.62266C5.1591 21.5012 3.97266 20.3147 3.97266 18.8512V13.086L3.60745 13.4508C3.35349 13.7046 2.94194 13.7044 2.68821 13.4504C2.43449 13.1965 2.43468 12.7849 2.68864 12.5312L11.5393 3.6887ZM11.9987 5.06735L18.7238 11.7862V18.8512C18.7238 19.5967 18.1194 20.2012 17.3738 20.2012H6.62266C5.87707 20.2012 5.27266 19.5967 5.27266 18.8512V11.7872L11.9987 5.06735Z"
          fill="currentColor"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5393 3.68895C11.7931 3.43539 12.2044 3.43539 12.4581 3.68895L21.3088 12.5314C21.5628 12.7851 21.563 13.1967 21.3093 13.4507C21.0555 13.7046 20.644 13.7048 20.39 13.4511L20.0238 13.0852V18.8514C20.0238 20.315 18.8374 21.5014 17.3738 21.5014H6.62266C5.1591 21.5014 3.97266 20.315 3.97266 18.8514V13.0862L3.60745 13.4511C3.35349 13.7048 2.94194 13.7046 2.68821 13.4507C2.43449 13.1967 2.43468 12.7851 2.68864 12.5314L11.5393 3.68895ZM10.0309 16.2715C9.67187 16.2715 9.38086 16.5625 9.38086 16.9215C9.38086 17.2805 9.67187 17.5715 10.0309 17.5715H13.9645C14.3235 17.5715 14.6145 17.2805 14.6145 16.9215C14.6145 16.5625 14.3235 16.2715 13.9645 16.2715H10.0309Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "내그룹",
    value: "groups",
    path: "/app/groups",
    defaultIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.80017 11.2013C10.1592 11.2013 10.4502 10.8054 10.4502 10.3171C10.4502 9.82874 10.1592 9.43286 9.80017 9.43286C9.44119 9.43286 9.15017 9.82874 9.15017 10.3171C9.15017 10.8054 9.44119 11.2013 9.80017 11.2013Z"
          fill="currentColor"
        />
        <path
          d="M14.1986 11.2013C14.5576 11.2013 14.8486 10.8054 14.8486 10.3171C14.8486 9.82874 14.5576 9.43286 14.1986 9.43286C13.8396 9.43286 13.5486 9.82874 13.5486 10.3171C13.5486 10.8054 13.8396 11.2013 14.1986 11.2013Z"
          fill="currentColor"
        />
        <path
          d="M8.37004 12.8237C8.71229 12.7153 9.07756 12.905 9.18589 13.2472C9.52269 14.3113 10.6835 15.1329 12.0002 15.1329C13.3303 15.1329 14.4762 14.3602 14.8124 13.2543C14.9168 12.9108 15.2798 12.717 15.6233 12.8215C15.9668 12.9259 16.1606 13.289 16.0561 13.6324C15.5234 15.3848 13.7921 16.4329 12.0002 16.4329C10.195 16.4329 8.47687 15.3152 7.94649 13.6395C7.83816 13.2973 8.02779 12.932 8.37004 12.8237Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5ZM19.7 12.5C19.7 16.7526 16.2526 20.2 12 20.2C7.74741 20.2 4.3 16.7526 4.3 12.5C4.3 8.24741 7.74741 4.8 12 4.8C16.2526 4.8 19.7 8.24741 19.7 12.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5ZM9.80017 11.2013C10.1592 11.2013 10.4502 10.8054 10.4502 10.3171C10.4502 9.82874 10.1592 9.43286 9.80017 9.43286C9.44119 9.43286 9.15017 9.82874 9.15017 10.3171C9.15017 10.8054 9.44119 11.2013 9.80017 11.2013ZM14.1986 11.2013C14.5576 11.2013 14.8486 10.8054 14.8486 10.3171C14.8486 9.82874 14.5576 9.43286 14.1986 9.43286C13.8396 9.43286 13.5486 9.82874 13.5486 10.3171C13.5486 10.8054 13.8396 11.2013 14.1986 11.2013ZM8.37004 12.8237C8.71229 12.7153 9.07756 12.905 9.18589 13.2472C9.52269 14.3113 10.6835 15.1329 12.0002 15.1329C13.3303 15.1329 14.4762 14.3602 14.8124 13.2543C14.9168 12.9108 15.2798 12.717 15.6233 12.8215C15.9668 12.9259 16.1606 13.289 16.0561 13.6324C15.5234 15.3848 13.7921 16.4329 12.0002 16.4329C10.195 16.4329 8.47687 15.3152 7.94649 13.6395C7.83816 13.2973 8.02779 12.932 8.37004 12.8237Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "공유물품",
    value: "items",
    path: "/app/items",
    defaultIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.65001 12.5C9.29102 12.5 9.00001 12.791 9.00001 13.15C9.00001 13.509 9.29102 13.8 9.65001 13.8H14.35C14.709 13.8 15 13.509 15 13.15C15 12.791 14.709 12.5 14.35 12.5H9.65001Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.34961 5.5001C2.34961 4.58883 3.08834 3.8501 3.99961 3.8501H19.9996C20.9109 3.8501 21.6496 4.58883 21.6496 5.5001V8.5001C21.6496 9.18057 21.2377 9.76483 20.6496 10.0171V19.5001C20.6496 20.4114 19.9109 21.1501 18.9996 21.1501H4.99961C4.08834 21.1501 3.34961 20.4114 3.34961 19.5001V10.0171C2.76153 9.76483 2.34961 9.18057 2.34961 8.5001V5.5001ZM4.64961 10.1501H19.3496V19.5001C19.3496 19.6934 19.1929 19.8501 18.9996 19.8501H4.99961C4.80631 19.8501 4.64961 19.6934 4.64961 19.5001V10.1501ZM3.99961 5.1501C3.80631 5.1501 3.64961 5.3068 3.64961 5.5001V8.5001C3.64961 8.6934 3.80631 8.8501 3.99961 8.8501H19.9996C20.1929 8.8501 20.3496 8.6934 20.3496 8.5001V5.5001C20.3496 5.3068 20.1929 5.1501 19.9996 5.1501H3.99961Z"
          fill="currentColor"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.34961 5.49985C2.34961 4.58858 3.08834 3.84985 3.99961 3.84985H19.9996C20.9109 3.84985 21.6496 4.58858 21.6496 5.49985V8.49985C21.6496 9.18032 21.2377 9.76458 20.6496 10.0169V19.4999C20.6496 20.4111 19.9109 21.1499 18.9996 21.1499H4.99961C4.08834 21.1499 3.34961 20.4111 3.34961 19.4999V10.0169C2.76153 9.76458 2.34961 9.18032 2.34961 8.49985V5.49985ZM9.65 12.5C9.29101 12.5 9 12.791 9 13.15C9 13.509 9.29101 13.8 9.65 13.8H14.35C14.709 13.8 15 13.509 15 13.15C15 12.791 14.709 12.5 14.35 12.5H9.65Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "마이페이지",
    value: "profile",
    path: "/app/profile",
    defaultIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.5C11.11 3.5 10.24 3.76392 9.49994 4.25839C8.75992 4.75285 8.18314 5.45566 7.84255 6.27792C7.50195 7.10019 7.41283 8.00499 7.58647 8.87791C7.7601 9.75082 8.18869 10.5526 8.81802 11.182C9.44736 11.8113 10.2492 12.2399 11.1221 12.4135C11.995 12.5872 12.8998 12.4981 13.7221 12.1575C14.5443 11.8169 15.2471 11.2401 15.7416 10.5001C16.2361 9.76004 16.5 8.89001 16.5 8C16.5 6.80652 16.0259 5.66193 15.182 4.81802C14.3381 3.97411 13.1935 3.5 12 3.5ZM12.0004 4.7749C12.6382 4.7749 13.2618 4.96404 13.7921 5.31841C14.3225 5.67278 14.7358 6.17646 14.9799 6.76575C15.224 7.35504 15.2879 8.00348 15.1634 8.62907C15.039 9.25466 14.7318 9.8293 14.2808 10.2803C13.8298 10.7313 13.2551 11.0385 12.6296 11.1629C12.004 11.2874 11.3555 11.2235 10.7662 10.9794C10.1769 10.7353 9.67327 10.322 9.3189 9.79162C8.96453 9.26127 8.77539 8.63775 8.77539 7.9999C8.77539 7.14458 9.11516 6.32429 9.71997 5.71948C10.3248 5.11468 11.1451 4.7749 12.0004 4.7749Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.75 13.625H8.25C6.85761 13.625 5.52226 14.1695 4.53769 15.1387C3.55312 16.1078 3 17.4223 3 18.793V20.5156C3 20.7767 3.10536 21.0271 3.29289 21.2117C3.48043 21.3963 3.73478 21.5 4 21.5H20C20.1313 21.5 20.2614 21.4745 20.3827 21.4251C20.504 21.3756 20.6142 21.3031 20.7071 21.2117C20.8 21.1203 20.8736 21.0118 20.9239 20.8923C20.9741 20.7729 21 20.6449 21 20.5156V18.793C21 17.4223 20.4469 16.1078 19.4623 15.1387C18.4777 14.1695 17.1424 13.625 15.75 13.625ZM15.8508 14.9225C16.8715 14.9238 17.85 15.3414 18.5718 16.0838C19.2935 16.8261 19.6995 17.8326 19.7008 18.8825V20.2025H4.30078V18.8825C4.30202 17.8326 4.70804 16.8261 5.42978 16.0838C6.15153 15.3414 7.13008 14.9238 8.15078 14.9225H15.8508Z"
          fill="currentColor"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.49994 4.25839C10.24 3.76392 11.11 3.5 12 3.5C13.1935 3.5 14.3381 3.97411 15.182 4.81802C16.0259 5.66193 16.5 6.80652 16.5 8C16.5 8.89002 16.2361 9.76004 15.7416 10.5001C15.2471 11.2401 14.5443 11.8169 13.7221 12.1575C12.8998 12.4981 11.995 12.5872 11.1221 12.4135C10.2492 12.2399 9.44736 11.8113 8.81802 11.182C8.18869 10.5526 7.7601 9.75082 7.58647 8.87791C7.41283 8.00499 7.50195 7.10019 7.84255 6.27792C8.18314 5.45566 8.75992 4.75285 9.49994 4.25839Z"
          fill="currentColor"
        />
        <path
          d="M8.25 13.625H15.75C17.1424 13.625 18.4777 14.1695 19.4623 15.1387C20.4469 16.1078 21 17.4223 21 18.793V20.5156C21 20.6449 20.9741 20.7729 20.9239 20.8923C20.8736 21.0118 20.8 21.1203 20.7071 21.2117C20.6142 21.3031 20.504 21.3756 20.3827 21.4251C20.2614 21.4745 20.1313 21.5 20 21.5H4C3.73478 21.5 3.48043 21.3963 3.29289 21.2117C3.10536 21.0271 3 20.7767 3 20.5156V18.793C3 17.4223 3.55312 16.1078 4.53769 15.1387C5.52226 14.1695 6.85761 13.625 8.25 13.625Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

interface BottomNavigationProps {
  currentTab: NavigationItems["value"] | null | undefined;
}

export default function BottomNavigation({
  currentTab,
}: BottomNavigationProps) {
  return (
    <>
      <BottomNavigationComponent className="fixed bottom-0 left-0 right-0">
        {navigationItems.map((item) => (
          <BottomNavigationItem
            key={item.value}
            selected={currentTab === item.value}
            href={item.path}
          >
            <BottomNavigationItemIcon>
              {currentTab === item.value ? item.selectedIcon : item.defaultIcon}
            </BottomNavigationItemIcon>
            <BottomNavigationItemTitle
              className={currentTab === item.value ? "font-semibold" : ""}
            >
              {item.name}
            </BottomNavigationItemTitle>
          </BottomNavigationItem>
        ))}
      </BottomNavigationComponent>
      <div className="h-[74px] w-full"></div>
    </>
  );
}

import {
  GroupActiveIcon,
  GroupInactiveIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
  MypageActiveIcon,
  MypageInactiveIcon,
  ShareitemActiveIcon,
  ShareitemInactiveIcon,
} from "@repo/icons";
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
    defaultIcon: <HomeInactiveIcon className="size-6.5" />,
    selectedIcon: <HomeActiveIcon className="size-6.5" />,
  },
  {
    name: "내그룹",
    value: "groups",
    path: "/app/groups",
    defaultIcon: <GroupInactiveIcon className="size-6.5" />,
    selectedIcon: <GroupActiveIcon className="size-6.5" />,
  },
  {
    name: "공유물품",
    value: "items",
    path: "/app/items",
    defaultIcon: <ShareitemInactiveIcon className="size-6.5" />,
    selectedIcon: <ShareitemActiveIcon className="size-6.5" />,
  },
  {
    name: "마이페이지",
    value: "profile",
    path: "/app/profile",
    defaultIcon: <MypageInactiveIcon className="size-6.5" />,
    selectedIcon: <MypageActiveIcon className="size-6.5" />,
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
            <BottomNavigationItemIcon
              className={
                currentTab === item.value ? "text-black" : "text-gray-700"
              }
            >
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

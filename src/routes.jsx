import {
  HomeIcon,
  DocumentChartBarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  MegaphoneIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  CurrencyRupeeIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  RectangleGroupIcon
} from "@heroicons/react/24/solid";
import { Home, Societies } from "./pages/dashboard"
import { SignIn, SignUp } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "management",
    role: "admin",
    layout: "dashboard",
    pages: [
      {
        icon: <RectangleGroupIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "societies",
        path: "/societies",
        element: <Societies />,
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "society managers",
        path: "/society-managers",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Members",
        path: "/members",
        element: <Home />,
      },
      {
        icon: <CurrencyRupeeIcon {...icon} />,
        name: "maintainance",
        path: "/maintainance",
        element: <Home />,
      },
      {
        icon: <CurrencyRupeeIcon {...icon} />,
        name: "Manage Roles",
        path: "/manage-roles",
        element: <Home />,
      },
    ]
  },
  {
    title: "management",
    role: "society-manager",
    layout: "dashboard",
    pages: [
      {
        icon: <RectangleGroupIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "society detail",
        path: "/society-detail",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "members",
        path: "/members",
        element: <Home />,
      },
      {
        icon: <CurrencyRupeeIcon {...icon} />,
        name: "maintainance",
        path: "/maintainance",
        element: <Home />,
      },
      {
        icon: <WrenchScrewdriverIcon {...icon} />,
        name: "expense",
        path: "/expense",
        element: <Home />,
      },
      {
        icon: <MegaphoneIcon {...icon} />,
        name: "event & announcements",
        path: "/announcement",
        element: <Home />,
      },
    ]
  },
  {
    title: "society member dashboard",
    role: "society-member",
    layout: "dashboard",
    pages: []
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      }
    ]
  }
];

export default routes;
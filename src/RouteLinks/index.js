import { SideArrow } from "../Shared/Icons";
import { mainPaths } from "../Sconstant";

export const sidebarLink = [
  {
    id: 1,
    title: "Main Menus",
    children: [
      { id: 1, title: "Dashboard", path: mainPaths.APPS, icon: SideArrow },
      { id: 3, title: "Analytics", path: mainPaths.EVENTS, icon: SideArrow },
      { id: 2, title: "Reports", path: mainPaths.REPORT, icon: SideArrow },
    ],
  },
  {
    id: 2,
    title: "Inventory Management",
    children: [
      { id: 1, title: "Warehouse", path: mainPaths.WAREHOUSE, icon: SideArrow },
      { id: 2, title: "Products", path: mainPaths.PRODUCTS, icon: SideArrow },
      { id: 3, title: "Stocks", path: mainPaths.STOCK, icon: SideArrow },
      { id: 4, title: "Vendors", path: mainPaths.VENDORS, icon: SideArrow },
    ],
  },
  {
    id: 3,
    title: "Manufacturing / Production",
    children: [
      {
        id: 1,
        title: "Bill of Materials",
        path: mainPaths.STUDENT,
        icon: SideArrow,
      },
      { id: 2, title: "Work Orders", path: mainPaths.ASSIGN, icon: SideArrow },
      {
        id: 3,
        title: "Production Planning",
        path: mainPaths.SCHOLAR,
        icon: SideArrow,
      },
      {
        id: 4,
        title: "Resource Schedules",
        path: mainPaths.RESULT,
        icon: SideArrow,
      },
      {
        id: 5,
        title: "Quality Control",
        path: mainPaths.CERTIFICATE,
        icon: SideArrow,
      },
    ],
  },
  {
    id: 4,
    title: "Finance & Accounting",
    children: [
      { id: 1, title: "Billing", path: mainPaths.CAREER, icon: SideArrow },
      { id: 2, title: "Taxes", path: mainPaths.STUFF, icon: SideArrow },
      {
        id: 3,
        title: "Account Details",
        path: mainPaths.HUMAN,
        icon: SideArrow,
      },
    ],
  },
  {
    id: 5,
    title: "Human Resources",
    children: [
      {
        id: 1,
        title: "Employees",
        path: mainPaths.TEACHER,
        icon: SideArrow,
      },
      {
        id: 2,
        title: "Attendances",
        path: mainPaths.SCHEDULE,
        icon: SideArrow,
      },
      // { id: 3, title: "Leaves", path: mainPaths.CAREER, icon: SideArrow },
      // { id: 4, title: "Recruitments", path: "/", icon: SideArrow },
      {
        id: 5,
        title: "Salary Info",
        path: mainPaths.STUDYMAT,
        icon: SideArrow,
      },
      {
        id: 7,
        title: "Performance",
        path: mainPaths.ATTENDANCE,
        icon: SideArrow,
      },
    ],
  },
  {
    id: 6,
    title: "System Management",
    children: [
      { id: 1, title: "Settings", path: mainPaths.SETTING, icon: SideArrow },
      { id: 2, title: "My Profile", path: mainPaths.PROFILE, icon: SideArrow },
    ],
  },
];

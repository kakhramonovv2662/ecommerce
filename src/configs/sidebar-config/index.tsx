import { SidebarItemTypes } from "../../types";

const navigationLinks: SidebarItemTypes[] = [
  {
    title: "Dashboard",
    icon: "dashboard",
    path: "/dashboard",
    key: "dashboard",
  },
  {
    title: "Quotes",
    icon: "compliance",
    path: "/quotes",
    key: "quotes",
  },
  {
    title: "Security Center",
    icon: "incident",
    path: "/security-center",
    submenu: true,
    key: "security-center",
    subTitles: [
      {
        subTitle: "Attack Surface",
        subPath: "/attack-surface",
        subKey: "attack-surface",
      },
      {
        subTitle: "Environment Overview",
        subPath: "/environment-overview",
        subKey: "overview",
      },
      {
        subTitle: "Security Questionnaires",
        subPath: "/security-questionnaires",
        subKey: "questionnaires",
      },
      {
        subTitle: "Action Center",
        subPath: "/action-center",
        subKey: "action",
      },
      {
        subTitle: "Vendor Marketplace",
        subPath: "/vendor-marketplace",
        subKey: "marketplace",
      },
    ],
  },
  {
    title: "Threatscape",
    icon: "alerts",
    path: "/threatscape",
    key: "threatscape",
  },
  {
    title: "Request Services",
    icon: "response",
    path: "/request-services",
    key: "request-services",
  },
  {
    title: "Your Policy",
    icon: "documents",
    path: "/policy",
    key: "policy",
  },
  {
    title: "Manage Claims",
    icon: "detection",
    path: "/claims",
    key: "claims",
    submenu: true,
    subTitles: [
      {
        subTitle: "Claims Calculator",
        subPath: "/claims-calculator",
        subKey: "claims-calculator",
      },
    ],
  },
  {
    title: "Report",
    icon: "report",
    path: "/reports",
    key: "reports",
  },
  {
    title: "Settings",
    icon: "setting",
    path: "/setting",
    key: "setting",
  },
];

export default navigationLinks;

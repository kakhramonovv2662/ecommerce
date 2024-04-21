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
    key: "security-center",
    subTitles: [
      {
        subTitle: "Attack Surface",
        subPath: "/attack-surface",
        key: "attack-surface",
      },
      {
        subTitle: "Environment Overview",
        subPath: "/environment-overview",
        key: "overview",
      },
      {
        subTitle: "Security Questionnaires",
        subPath: "/security-questionnaires",
        key: "questionnaires",
      },
      {
        subTitle: "Action Center",
        subPath: "/action-center",
        key: "action",
      },
      {
        subTitle: "Vendor Marketplace",
        subPath: "/vendor-marketplace",
        key: "marketplace",
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
    subTitles: [
      {
        subTitle: "Claims Calculator",
        subPath: "/claims-calculator",
        key: "claims-calculator",
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

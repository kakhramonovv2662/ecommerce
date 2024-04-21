import { ReactNode } from "react";

export type HeaderLayoutTypes = {
  headerTitle?: string | ReactNode;
  position?: "between" | "center" | "start" | "end";
  parentClass?: string;
  isShowTools?: boolean;
};

export type SidebarItemTypes = {
  title: string;
  key: string;
  path: string;
  icon?:
    | "dashboard"
    | "compliance"
    | "incident"
    | "alerts"
    | "response"
    | "documents"
    | "detection"
    | "report"
    | "setting";
  subTitles?: {
    subKey: string;
    subPath: string;
    subTitle: string;
  }[];
  submenu?: boolean;
};

export type PageLayoutTypes = {
  children: ReactNode;
  isHeaderShow?: boolean;
} & HeaderLayoutTypes;

export type BaseStoreTypes = {
  isSidebarShow: boolean;
  isShowSubMenu: string;

  setIsSidebarShowSubMenu: (value: string) => void;
  setIsSidebarShow: (value: boolean) => void;
};

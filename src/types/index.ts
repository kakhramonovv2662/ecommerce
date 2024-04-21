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
    key: string;
    subPath: string;
    subTitle: string;
  }[];
};

export type PageLayoutTypes = {
  children: ReactNode;
  isHeaderShow?: boolean;
} & HeaderLayoutTypes;

export type BaseStoreTypes = {
  isSidebarShow: boolean;

  setIsSidebarShow: (value: boolean) => void;
};

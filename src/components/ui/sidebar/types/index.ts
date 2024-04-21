export type SidebarNavTypes = {
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
    | "setting"
    | "collapse-arrow";
  title: string;
  textStyle?: string;
  submenu?: boolean;
};

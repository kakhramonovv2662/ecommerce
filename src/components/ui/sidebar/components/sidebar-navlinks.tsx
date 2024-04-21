import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../svg-icon";
import { SidebarNavTypes } from "../types";

const checkActiveTab = ({
  isActive,
  path,
}: {
  isActive: boolean;
  path: string;
}) => {
  return isActive ||
    window.location.pathname.match(new RegExp(`^${path}(/.*)?$`))
    ? "before:absolute before:h-full before:left-0 before:border-l-4 text-general_purple stroke-general_purple fill-none before:border-general_purple bg-[#F8F5FF]"
    : "stroke-general_black fill-none";
};

const SideBarNavLinks = ({
  path,
  icon,
  title,
  textStyle,
}: SidebarNavTypes) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `relative group py-3 w-full cursor-pointer transition-all duration-300 flex items-center gap-x-2 px-4 ${checkActiveTab(
          { isActive, path }
        )}`
      }
    >
      {icon ? (
        <SvgIcon
          iconName={icon}
          className="group-stroke-general_black group-fill-general_black"
        />
      ) : (
        <div className="w-6 h-6"></div>
      )}
      <p className={`${textStyle}`}>{title}</p>
    </NavLink>
  );
};

export default SideBarNavLinks;

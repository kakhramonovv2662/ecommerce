import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../svg-icon";
import { SidebarNavTypes } from "../types";
import useBaseStore from "../../../../store/base";

const checkActiveTab = ({
  isActive,
  path,
}: {
  isActive: boolean;
  path?: string;
}) => {
  return isActive ||
    window.location.pathname.match(new RegExp(`^${path}(/.*)?$`))
    ? "before:absolute before:h-full before:left-0 before:border-l-4 text-general_purple stroke-general_purple fill-none before:border-general_purple bg-[#F8F5FF]"
    : "stroke-general_black fill-none hover:before:absolute hover:before:h-full hover:before:left-0 hover:before:border-l-4 hover:text-general_purple hover:stroke-general_purple hover:before:border-general_purple hover:bg-[#F8F5FF]";
};

const SideBarNavLinks = ({
  path,
  icon,
  title,
  textStyle,
  submenu = false,
}: SidebarNavTypes) => {
  const { isSidebarShow, isShowSubMenu, setIsSidebarShowSubMenu } =
    useBaseStore();

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `relative group py-3 w-full cursor-pointer transition-all duration-300 flex items-center justify-between px-4 ${checkActiveTab(
          { isActive, path }
        )}`
      }
      onClick={() => {
        setIsSidebarShowSubMenu(isShowSubMenu === title ? "" : title);
      }}
    >
      <div className="flex items-center gap-x-2">
        {icon ? (
          <SvgIcon
            iconName={icon}
            className="group-stroke-general_black group-fill-general_black"
          />
        ) : (
          <div className="w-6 h-6"></div>
        )}
        {!isSidebarShow && <p className={`${textStyle}`}>{title}</p>}
      </div>
      {submenu ? (
        <div>
          <SvgIcon
            iconName={"collapse-arrow"}
            className={`group-stroke-general_black group-fill-general_black transform ${
              isShowSubMenu === title ? "rotate-90" : "-rotate-90"
            }`}
          />
        </div>
      ) : null}
    </NavLink>
  );
};

export default SideBarNavLinks;

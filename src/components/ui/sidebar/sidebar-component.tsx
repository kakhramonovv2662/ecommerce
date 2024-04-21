/* eslint-disable @typescript-eslint/no-explicit-any */
import navigationLinks from "../../../configs/sidebar-config";
import useBaseStore from "../../../store/base";
import { SvgIcon } from "../svg-icon";
import SideBarNavLinks from "./components/sidebar-navlinks";

const Sidebar = () => {
  const {
    isSidebarShow,
    setIsSidebarShow,
    isShowSubMenu,
    setIsSidebarShowSubMenu,
  } = useBaseStore();

  const collapseClass =
    "stroke-general_black fill-none hover:before:absolute hover:before:h-full hover:before:left-0 hover:before:border-l-4 hover:text-general_purple hover:stroke-general_purple hover:before:border-general_purple hover:bg-[#F8F5FF]";

  return (
    <div className={`min-h-screen flex flex-col justify-between`}>
      <div>
        {/* logo */}
        <div className="w-full h-16"></div>

        {/* sidebar items */}
        <ul className="py-4">
          {navigationLinks.map(
            ({ icon, key, path, title, subTitles, submenu }) => {
              return (
                <li
                  id={key}
                  key={key}
                  className="cursor-pointer text-center last:border-t"
                >
                  <SideBarNavLinks
                    submenu={submenu}
                    path={path}
                    title={title}
                    icon={icon}
                    textStyle={"group-text-general_black"}
                  />

                  {/* subTitle of sidebar */}
                  {submenu && isShowSubMenu === title ? (
                    <ul className="transition translate-y-0">
                      {subTitles?.map(({ subPath, subTitle, subKey }) => (
                        <li
                          key={subKey}
                          className="relative cursor-pointer text-center"
                          onClick={() => setIsSidebarShowSubMenu(title)}
                        >
                          <SideBarNavLinks
                            path={subPath}
                            title={subTitle}
                            textStyle={"font-normal group-text-general_black"}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div
        className="sticky bottom-0 bg-white"
        onClick={() => setIsSidebarShow(!isSidebarShow)}
      >
        <div
          className={`relative group py-3 w-full cursor-pointer transition-all duration-300 flex items-center gap-x-2 px-4 ${collapseClass}`}
        >
          <SvgIcon
            iconName={"collapse-arrow"}
            className="group-stroke-general_black group-fill-general_black"
          />
          {!isSidebarShow && (
            <p className={"group-text-general_black"}>Collapse</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

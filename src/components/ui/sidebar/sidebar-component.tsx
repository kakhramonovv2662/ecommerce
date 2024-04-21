import navigationLinks from "../../../configs/sidebar-config";
import useBaseStore from "../../../store/base";
import SideBarNavLinks from "./components/sidebar-navlinks";

const Sidebar = () => {
  const { isSidebarShow, setIsSidebarShow } = useBaseStore();

  return (
    <div className={`min-h-screen flex flex-col justify-between`}>
      <div>
        {/* logo */}
        <div className="w-full h-16"></div>

        {/* sidebar items */}
        <ul className="py-4">
          {navigationLinks.map(({ icon, key, path, title, subTitles }) => {
            return (
              <li
                onClick={() => setIsSidebarShow(!isSidebarShow)}
                key={key}
                className="cursor-pointer text-center last:border-t"
              >
                <SideBarNavLinks
                  path={path}
                  title={title}
                  icon={icon}
                  textStyle={"group-text-general_black"}
                />

                {/* subTitle of sidebar */}
                {subTitles?.length && (
                  <ul>
                    {subTitles?.map(({ subPath, subTitle }, i) => (
                      <li
                        key={i}
                        className="relative cursor-pointer text-center"
                      >
                        <SideBarNavLinks
                          path={subPath}
                          title={subTitle}
                          textStyle={"font-normal group-text-general_black"}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sticky bottom-0 bg-white">
        <SideBarNavLinks
          path={"collapse"}
          icon="collapse-arrow"
          title={"Collapse"}
          textStyle={"group-text-general_black"}
        />
      </div>
    </div>
  );
};

export default Sidebar;

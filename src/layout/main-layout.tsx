import { Sidebar } from "../components";
import Views from "../modules";
import useBaseStore from "../store/base";

const MainLayout = () => {
  const { isSidebarShow } = useBaseStore();

  return (
    <div className={`${isSidebarShow ? "block" : "md:grid md:grid-cols-[260px_minmax(0px,_1fr)_0px]"}`}>
      <div
        className={`max-h-screen min-h-screen border-r-1 border-[#E3E5EB] overflow-y-auto transition duration-500 ${
          isSidebarShow ? "-translate-x-full fixed left-0" : "translate-x-0 bg-white z-[100] fixed w-full md:static"
        }`}
      >
        <Sidebar />
      </div>
      <div className="max-h-screen min-h-screen overflow-auto bg-[#F6F7F9]">
        <Views />
      </div>
    </div>
  );
};

export default MainLayout;

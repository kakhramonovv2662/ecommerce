import { Sidebar } from "../components";
import Views from "../modules";
import useBaseStore from "../store/base";

const MainLayout = () => {
  const { isSidebarShow } = useBaseStore();

  return (
    <div className="md:grid md:grid-cols-[260px_minmax(0px,_1fr)_0px]">
      <div
        className={`max-h-screen min-h-screen border-r-1 border-[#E3E5EB] overflow-y-auto fixed left-0 transition md:static md:translate-x-0 ${
          isSidebarShow
            ? "translate-x-0 w-full h-full bg-white z-[100]"
            : "-translate-x-full"
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

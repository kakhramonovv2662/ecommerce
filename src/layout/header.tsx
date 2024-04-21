import { Button } from "@nextui-org/react";
import { HeaderLayoutTypes } from "../types";
import { SvgIcon } from "../components/ui/svg-icon";
import useBaseStore from "../store/base";

const HeaderTools = () => {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Button
        className="rounded-full"
        isIconOnly
        variant="light"
        color="default"
        startContent={
          <SvgIcon
            iconName="notification"
            width="32"
            height="32"
            fillColor="#3E414C"
          />
        }
      />

      <div className="rounded-[100px] p-1 bg-[#F6F7F9] flex items-center justify-center gap-2">
        <Button
          className="rounded-full"
          isIconOnly
          color="default"
          startContent={
            <SvgIcon
              iconName="user"
              width="16"
              height="16"
              fillColor="#6B6F80"
            />
          }
        />
        <p>John Smith</p>
        <Button
          className="rounded-full"
          isIconOnly
          color="default"
          variant="light"
          startContent={
            <SvgIcon
              iconName="logout"
              fillColor="#CC0000"
              width="32"
              height="32"
            />
          }
        />
      </div>
    </div>
  );
};

export const HeaderLayout = ({
  headerTitle,
  position = "between",
  parentClass,
  isShowTools = true,
}: HeaderLayoutTypes) => {
  const { isSidebarShow, setIsSidebarShow } = useBaseStore();

  return (
    <header
      className={`flex items-center justify-${position} py-4 px-8 ${parentClass} bg-white sticky top-0 z-50 border-b`}
    >
      <div className="flex items-center gap-3 md:block">
        <Button
          className="flex md:hidden"
          isIconOnly
          startContent={<SvgIcon iconName="menu" />}
          variant="light"
          onClick={() => setIsSidebarShow(!isSidebarShow)}
        />

        {headerTitle ? (
          <h2 className="text-xl font-bold text-general_black">
            {headerTitle}
          </h2>
        ) : null}
      </div>

      {isShowTools && <HeaderTools />}
    </header>
  );
};

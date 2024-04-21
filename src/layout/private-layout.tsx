import { HeaderLayout } from "./header";
import { PageLayoutTypes } from "../types";

const PageLayout = ({ children, ...props }: PageLayoutTypes) => {
  return (
    <div>
      <HeaderLayout {...props} />

      <div className="p-8">{children}</div>
    </div>
  );
};

export default PageLayout;

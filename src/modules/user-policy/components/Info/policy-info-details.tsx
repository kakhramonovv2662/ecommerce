import { policyInfoDetails } from "../../constants";
import TitleOfInfo from "./titleOfInfo";

const PolicyInfoDetails = () => {
  return (
    <div className="flex flex-col gap-6 py-6 px-8 border-b">
      <TitleOfInfo text="Policy Info" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policyInfoDetails?.map(({ subTitle, title }, i) => (
          <div key={i} className="md:first:col-span-2">
            <span className="block font-medium text-base text-[#6B6F80]">
              {subTitle}
            </span>
            <h3 className="text-xl">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyInfoDetails;

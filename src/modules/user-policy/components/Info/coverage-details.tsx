import { SvgIcon } from "../../../../components";
import { coverageSummaryDetails } from "../../constants";
import TitleOfInfo from "./titleOfInfo";

const CoverageDetails = () => {
  return (
    <div className="flex flex-col gap-4 py-6 px-8 border-b">
      <TitleOfInfo text="Coverage Summary" />
      <ul className="flex flex-col gap-4">
        {coverageSummaryDetails?.map(({ icon, text }, i) => (
          <li
            key={i}
            className="flex flex-col items-start md:flex-row md:items-center gap-3"
          >
            <SvgIcon
              iconName={icon}
              width="24"
              height="24"
              className="fill-general_purple"
            />
            <p className="font-medium text-lg">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoverageDetails;

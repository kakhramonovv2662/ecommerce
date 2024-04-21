import { policyRuleDetails } from "../../constants";
import TitleOfInfo from "./titleOfInfo";

const PolicyRuleDetails = () => {
  return (
    <ul>
      {policyRuleDetails?.map(({ text, title }, i) => (
        <li key={i} className="flex flex-col gap-4 py-6 px-8 border-b">
          <TitleOfInfo text={title} />
          <p className="font-normal text-base">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default PolicyRuleDetails;

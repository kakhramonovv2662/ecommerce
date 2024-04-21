import BrokerDetails from "./broker-details";
import CoverageDetails from "./coverage-details";
import PolicyInfoDetails from "./policy-info-details";
import PolicyRuleDetails from "./policy-rule-details";

const FullInfo = () => {
  return (
    <div
      style={{ boxShadow: "0px 2px 8px 0px #6B719426" }}
      className="bg-white"
    >
      <BrokerDetails />
      <PolicyInfoDetails />
      <CoverageDetails />
      <PolicyRuleDetails />
    </div>
  );
};

export default FullInfo;

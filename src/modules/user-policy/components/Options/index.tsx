import PriceOfPurchase from "./price-of-purchase";
import IntroducingPolicy from "./intro-policy";
import ClaimExample from "./claim-example";
import OptionFooter from "./footer";

const Options = () => {
  return (
    <div className="flex flex-col gap-8">
      <PriceOfPurchase />
      <IntroducingPolicy />
      <ClaimExample />
      <OptionFooter />
    </div>
  );
};

export default Options;

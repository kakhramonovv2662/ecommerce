import OptionCard from "./option-card";

const PriceOfPurchase = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Options</h2>
      <p className="text-base font-normal">
        We would love to offer you the following options
      </p>

      <OptionCard
        title="Option 1"
        limit_price="$500,000"
        retention_price="$2,500"
        premium_price="$1,000"
        style={{
          background:
            "linear-gradient(91.44deg, #F3E9FF -5.25%, #FDE5E0 115.92%)",
        }}
        rectangle_color="bg-[#A284E8]"
      />
      <OptionCard
        title="Option 2"
        limit_price="$500,000"
        retention_price="$2,500"
        premium_price="$1,000"
        style={{
          background:
            "linear-gradient(91.44deg, #DEEBFF -5.25%, #F3EAFF 115.92%)",
        }}
        rectangle_color="bg-[#59C5DD]"
      />
    </div>
  );
};

export default PriceOfPurchase;

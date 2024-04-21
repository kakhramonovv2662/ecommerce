import { CSSProperties } from "react";
import { Button } from "@nextui-org/react";

import { SvgIcon } from "../../../../components/ui/svg-icon";

const OptionCard = ({
  title,
  limit_price,
  retention_price,
  premium_price,
  style,
  rectangle_color,
}: {
  title: string;
  limit_price: string;
  retention_price: string;
  premium_price: string;
  style?: CSSProperties;
  rectangle_color?: string;
}) => {
  return (
    <div
      style={style}
      className="flex items-center justify-between gap-6 p-6 flex-wrap min-[1300px]:flex-nowrap"
    >
      <div className="flex items-center gap-6">
        <span
          className={`block w-2 h-20 rounded-[100px] ${rectangle_color}`}
        ></span>
        <h2 className="text-xl uppercase">{title}</h2>
      </div>
      <ul className="flex items-center justify-between gap-10 flex-wrap lg:flex-nowrap">
        <li className="flex flex-col gap-2">
          <span className="block text-base font-medium text-[#6B6F80]">
            Limit
          </span>
          <h3 className="text-xl">{limit_price}</h3>
        </li>
        <li className="flex flex-col gap-2">
          <span className="block text-base font-medium text-[#6B6F80]">
            Retention
          </span>
          <h3 className="text-xl">{retention_price}</h3>
        </li>
        <li className="flex flex-col gap-2">
          <span className="block text-base font-medium text-[#6B6F80]">
            Basic Premium
          </span>
          <h3 className="text-xl">{premium_price}</h3>
        </li>
      </ul>
      <div>
        <Button
          className="block w-full text-base font-semibold rounded-none bg-general_purple"
          color="secondary"
        >
          Purchase
        </Button>
        <Button
          className="flex w-full text-sm font-semibold rounded-none text-general_purple"
          variant="light"
          color="secondary"
          endContent={
            <SvgIcon
              iconName="arrow"
              fillColor="#6739D2"
              width="16"
              height="16"
            />
          }
        >
          View Details
        </Button>
      </div>
    </div>
  );
};
export default OptionCard;

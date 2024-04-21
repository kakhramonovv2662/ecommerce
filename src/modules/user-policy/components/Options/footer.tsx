import { Button } from "@nextui-org/react";
import { ServantImg } from "../../../../assets/img";
import UserDetail from "../user-detail";

const OptionFooter = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-between bg-white p-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img src={ServantImg} alt="broker avatar" width={120} height={120} />
        <UserDetail
          gmail="service@masarrati.com"
          name="Jaber Al Hasan"
          phone_number="+91 9700148476"
          sphere="VP of Clients"
        />
      </div>
      <Button
        className="text-base font-semibold rounded-none bg-general_purple"
        color="secondary"
      >
        Connect Us
      </Button>
    </div>
  );
};
export default OptionFooter;

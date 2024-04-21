import { AvatarLogo, BrokerAvatar } from "../../../../assets/img";
import UserDetail from "../user-detail";
import TitleOfInfo from "./titleOfInfo";

const BrokerDetails = () => {
  return (
    <div className="flex flex-col gap-6 py-6 px-8 border-b">
      <TitleOfInfo text="Your Broker" />
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
        <div className="relative">
          <img src={BrokerAvatar} alt="broker avatar" width={72} height={72} />
          <img
            className="absolute right-0 bottom-0"
            src={AvatarLogo}
            alt="avatar logo"
            width={24}
            height={24}
          />
        </div>
        <UserDetail
          gmail="usman@masarrati.com"
          name="Ahmed Al Abdallah"
          phone_number="+91 9700148476"
          sphere="Acme Broker"
        />
      </div>
    </div>
  );
};
export default BrokerDetails;

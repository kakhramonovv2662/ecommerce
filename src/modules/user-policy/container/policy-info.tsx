import FullInfo from "../components/Info";
import Options from "../components/Options";

const PolicyInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 xl:grid-cols-3 xl:gap-8">
      <FullInfo />
      <div className="col-span-2">
        <Options />
      </div>
    </div>
  );
};

export default PolicyInfo;

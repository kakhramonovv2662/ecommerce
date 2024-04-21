import { ClaimImg } from "../../../../assets/img";

const ClaimExample = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Claims Example</h2>
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet.
        </p>
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
        </p>
      </div>
      <div className="w-full h-full">
        <img
          className="w-full"
          src={ClaimImg}
          alt="claim images"
          width={276}
          height={276}
        />
      </div>
    </div>
  );
};

export default ClaimExample;

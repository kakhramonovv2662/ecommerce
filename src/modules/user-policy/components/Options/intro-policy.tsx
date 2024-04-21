const IntroducingPolicy = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Peer Limit Benchmarking Information</h2>
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet.
        </p>
      </div>
      <div
        style={{ boxShadow: "0px 2px 8px 0px #6B719426" }}
        className="bg-white p-10 h-fit flex flex-col gap-4"
      >
        <p className="font-medium text-xl text-[#6B6F80]">
          Peer Limit Benchmark
        </p>
        <span className="block font-semibold text-3xl md:text-5xl text-general_purple">
          $1,000,000
        </span>
      </div>
    </div>
  );
};

export default IntroducingPolicy;

const UserDetail = ({
  name,
  sphere,
  phone_number,
  gmail,
}: {
  name: string;
  sphere: string;
  phone_number: string;
  gmail: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center md:items-start gap-1">
        <h3 className="text-xl">{name}</h3>
        <span className="block font-normal text-[#545766]">{sphere}</span>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-start">
        <a
          className="block text-base underline text-general_purple hover:opacity-80"
          href="tel:+919700148476"
        >
          {phone_number}
        </a>
        <a
          className="block text-base text-general_purple underline hover:opacity-80"
          href="email"
        >
          {gmail}
        </a>
      </div>
    </div>
  );
};

export default UserDetail;

const Banner = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} leading-none flex flex-col gap-4 bg-default-green text-default-bege w-[720px] laptop:w-[560px] laptop:h-[380px] h-[440px] rounded-3xl`}
    >
      {children}
    </div>
  );
};

export default Banner;

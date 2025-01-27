const Portrait = () => {
  return (
    <div className="relative mx-auto">
      <div className="absolute bg-primary w-32 h-32 -top-2 -left-2 xs:block hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={120}
        height={120}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 xs:block hidden rounded-lg"
      />
      <div className="absolute bg-primary w-36 h-36 -top-4 -left-4 xs:hidden block sm:hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={150}
        height={150}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 xs:hidden block sm:hidden rounded-lg"
      />
      <div className="absolute bg-primary w-48 h-48 -top-4 -left-4 hidden sm:block md:hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={200}
        height={200}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 hidden sm:block md:hidden rounded-lg"
      />
      <div className="absolute bg-primary w-64 h-64 -top-4 -left-4 hidden md:block rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={250}
        height={250}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 hidden md:block rounded-lg"
      />
    </div>
  );
};

export default Portrait;

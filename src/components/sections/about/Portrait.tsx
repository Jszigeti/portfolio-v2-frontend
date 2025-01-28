const Portrait = () => {
  return (
    <div className="relative mx-auto">
      <div className="absolute bg-primary w-[120px] h-[120px] -top-4 -left-4 xs:block hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={120}
        height={120}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 xs:block hidden rounded-lg"
      />
      <div className="absolute bg-primary w-[150px] h-[150px] -top-4 -left-4 xs:hidden block sm:hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={150}
        height={150}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 xs:hidden block sm:hidden rounded-lg"
      />
      <div className="absolute bg-primary w-[200px] h-[200px] -top-4 -left-4 hidden sm:block md:hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={200}
        height={200}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 hidden sm:block md:hidden rounded-lg"
      />
      <div className="absolute bg-primary w-[250px] h-[250px] -top-4 -left-4 hidden md:block rounded-lg"></div>
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

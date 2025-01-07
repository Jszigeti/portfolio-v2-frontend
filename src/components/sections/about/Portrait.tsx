const Portrait = () => {
  return (
    <div className="relative mx-auto">
      <div className="absolute bg-primary w-36 h-36 -top-4 -left-4 sm:hidden rounded-lg"></div>
      <img
        src="/assets/portrait_js.webp"
        alt="Jonas picture"
        width={150}
        height={150}
        className="relative z-10 hover:translate-x-[-5px] hover:translate-y-[-5px] transition-transform duration-300 sm:hidden rounded-lg"
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

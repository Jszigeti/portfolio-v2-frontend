const SectionTitle = ({
  title,
  subtitle,
  secondSubtitle,
  main = false,
}: {
  title: string;
  subtitle: string;
  secondSubtitle?: string;
  main?: boolean;
}) => {
  if (main)
    return (
      <>
        <h2 className="font-bold xs:text-base text-lg sm:text-xl md:text-2xl -mb-3">
          {subtitle}
        </h2>
        <h1 className="xs:text-2xl text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 md:mb-4">
          {title}
        </h1>
        <h2 className="sx:text-lg text-xl sm:text-2xl md:text-3xl font-semibold">
          {secondSubtitle}
        </h2>
      </>
    );
  return (
    <>
      <h3 className="font-bold xs:text-base text-lg sm:text-xl md:text-2xl -mb-3">
        {subtitle}
      </h3>
      <h2 className="xs:text-xl text-2xl sm:text-3xl md:text-4xl font-bold text-primary md:mb-4">
        {title}
      </h2>
    </>
  );
};

export default SectionTitle;

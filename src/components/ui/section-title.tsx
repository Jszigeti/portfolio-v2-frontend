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
        <h2 className="font-bold xs:text-sm text-base md:text-lg -mb-6">
          {subtitle}
        </h2>
        <h1 className="xs:text-2xl text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
          {title}
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold">{secondSubtitle}</h2>
      </>
    );
  return (
    <>
      <h3 className="font-bold xs:text-sm text-base md:text-lg -mb-6">
        {subtitle}
      </h3>
      <h2 className="xs:text-2xl text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
        {title}
      </h2>
    </>
  );
};

export default SectionTitle;

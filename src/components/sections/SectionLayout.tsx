import { PropsWithChildren } from "react";

const SectionLayout = ({
  children,
  sectionId,
}: PropsWithChildren & { sectionId?: string }) => {
  return (
    <section
      className="min-h-dvh snap-start flex items-center justify-center"
      id={sectionId}
    >
      <div className="w-full flex flex-col lg:w-2/3 gap-6 sm:gap-8 px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;

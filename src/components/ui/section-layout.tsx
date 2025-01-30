import { PropsWithChildren } from "react";

const SectionLayout = ({
  children,
  sectionId,
}: PropsWithChildren & { sectionId?: string }) => {
  return (
    <section
      className="min-h-[100dvh] snap-start flex items-center justify-center container mx-auto"
      id={sectionId}
    >
      <div className="w-full h-full flex flex-col lg:w-2/3 gap-4 sm:gap-6 xs:px-2 px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;

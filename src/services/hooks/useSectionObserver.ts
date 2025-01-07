import { useEffect, useState } from "react";

const useSectionObserver = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport par défaut
        rootMargin: "0px",
        threshold: 0.6, // 60% de la section visible
      }
    );

    sections.forEach((section: string) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section: string) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return activeSection;
};

export default useSectionObserver;

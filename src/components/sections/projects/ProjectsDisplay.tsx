/* eslint-disable no-irregular-whitespace */
"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/services/hooks/useOutsideClick";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="h-full">
                <div className="flex justify-between items-start px-4 pt-2">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-primary text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 h-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base pb-8 flex flex-col items-start gap-4 overflow-y-auto h-full md:max-h-60 lg:max-h-80 dark:text-neutral-400 whitespace-pre-line [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-colors duration-300"
          >
            <div className="flex gap-4 flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-14 w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300 text-black mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>

      <NavLink
        to="https://github.com/Jszigeti?tab=repositories"
        target="_blank"
        className="md:mx-auto md:w-1/2"
      >
        <Button
          size="lg"
          className="text-xl hover:scale-105 transition-transform duration-300 w-full z-50"
        >
          Voir plus
        </Button>
      </NavLink>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Exemple de clean architecture",
    title: "React Clean Architecture",
    src: "/assets/react-icon.webp",
    ctaText: "Voir",
    ctaLink: "https://github.com/Jszigeti/react-clean-architecture-example",
    content: `
      Ce projet met en avant l'application des principes de clean architecture dans une application React. 
      Découvrez une structure moderne et bien pensée pour vos projets React. Voici ce qu'il propose :
      - Séparation claire entre les couches : composants, services et cas d'utilisation.
      - Exemples pratiques pour organiser vos fichiers et modules.
      - Une meilleure maintenabilité et évolutivité grâce à une architecture bien définie.
      - Adapté pour les projets nécessitant une scalabilité et un code testable.
      Ce dépôt est une référence pour apprendre et appliquer une architecture propre dans React.`,
  },
  {
    description: "Package NPM",
    title: "Axios Cookie Auth",
    src: "/assets/npm-icon.webp",
    ctaText: "Voir",
    ctaLink: "https://github.com/Jszigeti/axios-cookie-auth",
    content: `
      Axios Cookie Auth est un package NPM conçu pour simplifier l'authentification basée sur les cookies. 
      Ce projet propose :
      - Une abstraction intuitive pour gérer les tokens et les sessions sécurisées avec Axios.
      - Support natif pour les cookies HTTP sécurisés.
      - Une intégration rapide pour accélérer le développement.
      - Des exemples clairs pour faciliter son utilisation.
      Idéal pour les développeurs qui souhaitent ajouter une solution d'authentification robuste à leur application sans effort supplémentaire.`,
  },
  {
    description: "Package NPM",
    title: "Axios Error Handler",
    src: "/assets/npm-icon.webp",
    ctaText: "Voir",
    ctaLink: "https://github.com/Jszigeti/axios-error-handler",
    content: `
      Axios Error Handler est un outil pratique pour centraliser la gestion des erreurs lors des appels API. 
      Voici ce qu'il offre :
      - Gestion simplifiée des erreurs via des hooks ou des services globaux.
      - Une personnalisation facile pour répondre aux besoins spécifiques de votre application.
      - Réduction de la duplication du code lié aux erreurs.
      - Compatibilité avec tous les projets utilisant Axios.
      Avec ce package, vous gagnerez en clarté et en efficacité dans vos projets front-end.`,
  },
  {
    description: "App de voyages collaboratifs",
    title: "Travel2Gether",
    src: "/assets/travel2gether-logo.webp",
    ctaText: "Voir",
    ctaLink: "https://git.alt-tools.tech/gp_groovy_git/travel2gather",
    content: `
      Travel2Gether est une plateforme innovante dédiée aux voyageurs solitaires ou en groupe cherchant à collaborer. 
      Ses fonctionnalités incluent :
      - Création et gestion de groupes pour planifier des voyages en commun.
      - Partage d'itinéraires et collaboration en temps réel.
      - Système de messagerie intégré pour une communication simplifiée.
      - Notifications in-app et par email pour rester informé des changements.
      - Gestion des médias pour partager des photos et des documents liés au voyage.
      Travel2Gether est une solution complète pour rendre vos voyages plus organisés et collaboratifs.`,
  },
];

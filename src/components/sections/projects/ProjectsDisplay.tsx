/* eslint-disable no-irregular-whitespace */
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/services/hooks/useOutsideClick";
import CtaButton from "@/components/ui/cta-button";
import {
  SiNestjs,
  SiReact,
  SiTypescript,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiOpenai,
  SiNatsdotio,
  SiNpm,
  SiAxios,
} from "react-icons/si";

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
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="flex justify-center items-center p-4"
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
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
                    <div className="flex gap-4 mt-2">
                      {active.icons.map((Icon, index) => (
                        <Icon
                          key={index}
                          className="text-neutral-600 text-3xl"
                        />
                      ))}
                    </div>
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
                <div className="relative px-4 h-full overflow-hidden">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base pb-8 flex flex-col items-start mt-4 
    overflow-y-auto max-h-[300px] md:max-h-60 lg:max-h-80 min-h-[100px]
    dark:text-neutral-400 whitespace-pre-line
    scrollbar-hide touch-pan-y"
                    style={{ WebkitOverflowScrolling: "touch" }}
                  >
                    <p className="font-bold mt-2">Technologies utilisées :</p>
                    <p>{active.techs}</p>
                    <p className="font-bold mt-4">Description :</p>
                    <p>{active.content}</p>
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
            <li>
              <div className="flex gap-4 flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-full w-14 rounded-lg object-cover object-top"
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
            </li>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300 text-black mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
      <CtaButton
        linkTo="https://github.com/Jszigeti?tab=repositories"
        content="Voir plus sur GitHub 🚀"
        newTab
      />
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
    description: "App de voyages collaboratifs",
    title: "Travel2Gether",
    src: "/assets/travel2gether-logo.webp",
    ctaText: "Voir",
    ctaLink: "https://git.alt-tools.tech/gp_groovy_git/travel2gather",
    techs: "TypeScript, React, NestJS, MySQL, MongoDB, Docker",
    icons: [SiTypescript, SiReact, SiNestjs, SiMysql, SiMongodb, SiDocker],
    content: `Travel2Gether est une plateforme innovante dédiée aux voyageurs solitaires ou en groupe cherchant à collaborer. 
      Ses fonctionnalités incluent :
      - Création et gestion de groupes pour planifier des voyages en commun.
      - Partage d'itinéraires et collaboration en temps réel.
      - Système de messagerie intégré pour une communication simplifiée.
      - Notifications in-app et par email pour rester informé des changements.
      - Gestion des médias pour partager des photos et des documents liés au voyage.
      Travel2Gether est une solution complète pour rendre vos voyages plus organisés et collaboratifs.`,
  },

  {
    description: "Bot interactif",
    title: "Chatbot Widget",
    src: "/assets/chatbot.webp",
    ctaText: "Voir",
    ctaLink: "https://github.com/Jszig/personal-chatbot-widget",
    techs: "TypeScript, React, OpenAI",
    icons: [SiTypescript, SiReact, SiOpenai],
    content: `Le Personal Chatbot Widget est un outil interactif conçu pour enrichir les portfolios de développeurs. 
      Il simule une conversation en première personne avec le développeur, offrant des informations sur ses compétences, projets, et expériences, tout en redirigeant les utilisateurs vers un formulaire de contact pour des demandes spécifiques.
  
      Fonctionnalités principales :
      - Widget extensible : Une interface qui s'ouvre depuis un onglet en bas de la page.
      - Contenu personnalisé : Le bot répond comme s’il était le développeur.
      - Intégration OpenAI : Alimenté par GPT-3.5-Turbo pour des réponses intelligentes et contextuelles.
      - Configuration modulaire : Les paramètres et contenus du bot sont centralisés pour une personnalisation facile.
      - Limites de session : Contrôle le nombre de messages par session et notifie les utilisateurs.
      - Gestion des erreurs : Messages conviviaux en cas de problème.
  
      Technologies utilisées :
      - React, TypeScript, Vite, Tailwind CSS et Shadcn pour une interface moderne et accessible.
      - OpenAI API pour des interactions riches et dynamiques.
  
      Ce widget est parfait pour créer un portfolio interactif et marquer les esprits des visiteurs.`,
  },
  {
    description: "Microservice NestJS",
    title: "ms-mail",
    src: "/assets/nestjs-logo.webp",
    ctaText: "Voir",
    ctaLink: "https://github.com/Jszigeti/ms-mail",
    techs: "TypeScript, NestJS, Nats",
    icons: [SiTypescript, SiNestjs, SiNatsdotio],
    content: `
      ms-mail est un microservice conçu pour simplifier et automatiser l'envoi d'emails dans vos applications. 
      Ses principales fonctionnalités incluent :
      - L'envoi d'emails personnalisés grâce à des templates dynamiques et adaptables.
      - Le suivi des statuts d'envoi (PENDING, SENT, FAILED) pour un monitoring précis.
      - Une intégration fluide avec des systèmes distribués via NATS.
      - Une compatibilité maximale avec les fournisseurs SMTP grâce à Nodemailer.
      - Un système extensible avec des fonctionnalités à venir comme l'envoi d'emails multiples.
      ms-mail est un outil réutilisable et flexible, parfait pour répondre à vos besoins d'envoi d'emails.`,
  },
  {
    description: "Package NPM",
    title: "Axios Cookie Auth",
    src: "/assets/npm-icon.webp",
    ctaText: "Voir",
    ctaLink: "https://github.com/Jszigeti/axios-cookie-auth",
    techs: "TypeScript, Axios, NPM",
    icons: [SiTypescript, SiAxios, SiNpm],
    content: `
      Axios Cookie Auth est un package NPM conçu pour simplifier l'authentification basée sur les cookies. 
      Ce projet propose :
      - Une abstraction intuitive pour gérer les tokens et les sessions sécurisées avec Axios.
      - Support natif pour les cookies HTTP sécurisés.
      - Une intégration rapide pour accélérer le développement.
      - Des exemples clairs pour faciliter son utilisation.
      Idéal pour les développeurs qui souhaitent ajouter une solution d'authentification robuste à leur application sans effort supplémentaire.`,
  },
  // {
  //   description: "Package NPM",
  //   title: "Axios Error Handler",
  //   src: "/assets/npm-icon.webp",
  //   ctaText: "Voir",
  //   ctaLink: "https://github.com/Jszigeti/axios-error-handler",
  //   content: `
  //     Axios Error Handler est un outil pratique pour centraliser la gestion des erreurs lors des appels API.
  //     Voici ce qu'il offre :
  //     - Gestion simplifiée des erreurs via des hooks ou des services globaux.
  //     - Une personnalisation facile pour répondre aux besoins spécifiques de votre application.
  //     - Réduction de la duplication du code lié aux erreurs.
  //     - Compatibilité avec tous les projets utilisant Axios.
  //     Avec ce package, vous gagnerez en clarté et en efficacité dans vos projets front-end.`,
  // },
];

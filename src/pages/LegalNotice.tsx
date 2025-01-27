import Header from "@/components/header/Header";

const LegalNotice = () => {
  return (
    <>
      <Header className="bg-background" />
      <main className="container mx-auto px-3 py-32 flex flex-col lg:w-2/3 gap-6 sm:gap-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Mentions légales
        </h1>
        <p className="text-lg mt-4">
          Conformément aux dispositions des articles 6-III et 19 de la Loi pour
          la Confiance dans l'Économie Numérique (LCEN), voici les informations
          légales concernant le site{" "}
          <span className="font-semibold">JS Project Solutions</span>.
        </p>

        <h2 className="text-2xl mt-6 font-bold">1. Éditeur du site</h2>
        <p className="text-lg mt-2">
          Dénomination commerciale :{" "}
          <span className="font-semibold">JS Project Solutions</span>
          <br />
          Statut : Micro-entreprise (libérale non réglementée)
          <br />
          Numéro SIREN : 850 799 545
          <br />
          Numéro SIRET : 850 799 545 00023
          <br />
          Code APE : 6201Z - Programmation informatique
          <br />
          Responsable de la publication : Jonas Szigeti
          <br />
          Adresse : 2, rue Jean de la Varende, 14740 Thue-et-Mue, France
          <br />
          Téléphone : +33 6 67 44 48 82
          <br />
          Email : contact@jsproject.fr
        </p>

        <h2 className="text-2xl mt-6 font-bold">2. Hébergeur du site</h2>
        <p className="text-lg mt-2">
          Hébergeur : Auto-hébergement
          <br />
          Infrastructure : Serveur personnel sous Ubuntu 24.04 LTS
          <br />
          Adresse : 2, rue Jean de la Varende, 14740 Thue-et-Mue, France
          <br />
          Contact : +33 6 67 44 48 82
        </p>

        <h2 className="text-2xl mt-6 font-bold">3. Activité principale</h2>
        <p className="text-lg mt-2">
          Développement et maintenance d'applications web modernes (React,
          NestJS, TypeScript). Spécialisé en technologies modernes telles que
          React, NestJS, TypeScript, Docker et Prisma,{" "}
          <span className="font-semibold">JS Project Solutions</span> propose
          les services suivants :
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Création de sites web modernes et performants</li>
          <li>Développement front-end et back-end</li>
          <li>Optimisation SEO et amélioration des performances</li>
          <li>Déploiement en environnement cloud</li>
          <li>Maintenance technique et mise à jour d’outils numériques</li>
        </ul>

        <h2 className="text-2xl mt-6 font-bold">4. Propriété intellectuelle</h2>
        <p className="text-lg mt-2">
          Tous les contenus présents sur ce site (textes, images, logos, vidéos,
          etc.) sont la propriété exclusive de{" "}
          <span className="font-semibold">JS Project Solutions</span>, sauf
          mention contraire. Toute reproduction, représentation, modification,
          publication ou adaptation de tout ou partie des éléments du site est
          strictement interdite, sauf autorisation écrite préalable.
        </p>

        <h2 className="text-2xl mt-6 font-bold">
          5. Protection des données personnelles
        </h2>
        <p className="text-lg mt-2">
          Les informations collectées via le formulaire de contact sont
          utilisées uniquement pour répondre à vos demandes. En soumettant vos
          données, vous acceptez leur traitement conformément aux finalités
          décrites. Conformément au RGPD, vous disposez d'un droit d'accès, de
          modification et de suppression de vos données. Pour toute demande,
          contactez-nous à :{" "}
          <span className="font-semibold">contact@jsproject.fr</span>.
        </p>

        <h2 className="text-2xl mt-6 font-bold">
          6. Limitation de responsabilité
        </h2>
        <p className="text-lg mt-2">
          <span className="font-semibold">JS Project Solutions</span> ne peut
          être tenue responsable des dommages directs ou indirects causés au
          matériel de l'utilisateur lors de l'accès au site{" "}
          <span className="font-semibold">jsproject.fr</span>. L'utilisateur est
          seul responsable de la sécurité de ses équipements.
        </p>

        <h2 className="text-2xl mt-6 font-bold">7. Loi applicable</h2>
        <p className="text-lg mt-2">
          Les présentes mentions légales sont régies par la loi française. En
          cas de litige, et à défaut de résolution amiable, les tribunaux
          compétents seront ceux du ressort de Caen.
        </p>

        <p className="text-lg mt-8">
          Pour toute question relative aux mentions légales, vous pouvez nous
          contacter à l'adresse suivante :{" "}
          <span className="font-semibold">contact@jsproject.fr</span>.
        </p>
      </main>
    </>
  );
};

export default LegalNotice;

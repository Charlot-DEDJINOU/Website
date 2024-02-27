import yats from '../assets/award_yats.jpg'
import ewaste from '../assets/award_ewaste.png'
import maic from '../assets/award_maic.png'
import auf from '../assets/award_auf.png'

export default function Awards() {
  return [
    {
      image: auf,
      title: 'HACKATHON NUMERIQUE 2023 de l’AUF BENIN',
      organization: 'Agence universitaire de la Francophonie (AUF) au Bénin',
      theme:
        'Solutions numériques qui feront la différence pour votre université ou votre environnement',
      date: 'Decembre 2023',
      range: 'Participant',
      description:
        "Plateforme web de simulation d'entretiens en ligne avec des questions générées par ChatGPT."
    },
    {
      image: maic,
      title: 'MIFY Artificial Intelligence Contest (MAIC) sixième edition',
      organization: 'Machine Intelligence For You  (MIFY)',
      theme: 'Proposer une Intelligence Artificielle capable de jouer le jeu de Morabaraba',
      date: 'Novembre - Decembre 2022',
      range: 'Premier Prix',
      description:
        'IA utilisant uniquement la programmation fonctionnelle pour les fonctions de base.'
    },
    {
      image: ewaste,
      title: "Soirée de l'Éducation Numérique et Environnementale (SENE)",
      organization: 'Benin E-Waste ',
      theme:
        'Solution Numérique pour la gestion des Déchets des Equipements Electriques et Electroniques (DEEE)',
      date: 'Janvier - Mars 2023',
      range: 'Deuxième Prix',
      description:
        "Plateforme web de sensibilisation, collecte, vente et réparation d'équipements reconditionnés."
    },
    {
      image: yats,
      title: 'YATS HACKATON 2022',
      organization: 'You Are The Solution (YATS)',
      theme: "Accès à l'Art et la Culture par le digital",
      date: 'Decembre 2022',
      range: 'Troisième Prix',
      description: "Application mobile de jeux mettant en avant l'art et la culture du Bénin."
    }
  ]
}

import stock_master from "../assets/stock_master.png";
import hackaton_sene from '../assets/hackaton_sene.png';
import e_commerce from '../assets/e-commerce.png';
import treasure from '../assets/treasure.png';
import tp_knn from '../assets/tp_knn.png'
import mushroom from '../assets/mushroom.jpg';
import data_science from '../assets/data_science.jpg';
import python from '../assets/python.png';
import api_deee from '../assets/api_deee.jpg';
import zero_plastique from '../assets/zero_plastique.png';
import car_location from '../assets/car_location.webp';
import entretien_ia from '../assets/entretien_ia.jpeg';
import aventure_baobab from '../assets/aventure_baobab.png';
import maic from '../assets/maic.png'
import websocket from '../assets/websocket.jpg'
import excellente_night from '../assets/excellente_night.png'
import hdb from '../assets/hdb.png'
import yats from '../assets/yats.png'
import shared_preference from '../assets/shared_preference.png'
import chatbot from '../assets/chatbot.webp'

export default function Projects() {
  return [
    {
      image: stock_master,
      description:
        'Stock Master est une application mobile de gestion de stocks puissante et intuitive, conçue pour simplifier la gestion des stocks de produits',
      skills: ['Flutter', 'FastApi', 'Dart', 'Python'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Stock-Master'
    },
    {
      image: hackaton_sene,
      description: "J'ai eu à développer ce site lors d'un concours de la SENE qui demandait de proposer une solution numérique pour la gestion des Déchets des Équipements Électriques et Electroniques. Ce site a été en utilisant le framework React JS pour le Front end et Laravel pour développer l'API",
      skills: ['React jS', 'Laravel', 'Api', 'Php'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Hackathon-SENE'
    },
    {
      image: e_commerce,
      description:
        "Ce projet est une application web développée en React JS, offrant une plateforme aux artisans pour vendre leurs tableaux d'art en ligne. L'application se concentre uniquement sur le côté front-end, offrant une interface intuitive pour les utilisateurs finaux.",
      skills: ['React JS', 'Java Script', 'useCart'],
      site: 'https://react-ecommerce-lyart-psi.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/React_Ecommerce'
    },
    {
      image: treasure,
      description:
        'Ce projet de chasse au trésor est une aventure interactive basée sur une application web React. Chaque étape de la quête est représentée par une route définie dans app.js. Résolvez des énigmes pour avancer et découvrez le chemin menant au trésor tant convoité.',
      skills: ['React JS', 'Java Script', 'router'],
      site: 'https://tha-sage.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/Stock-Master'
    },
    {
      image: tp_knn,
      description:
        "Ce TP permet d'explorer la sélection du nombre de voisins dans l'algorithme des k plus proches voisins (kNN). Analysez différentes valeurs pour optimiser la précision de vos modèles de classification ou de régression.",
      skills: ['Data', 'k-nn', 'Python', 'Science'],
      site: '',
      github:
        "https://github.com/Charlot-DEDJINOU/Data-scientist/blob/main/4-Evaluez%20les%20performances%20d'un%20modele%20de%20machine%20learning/TP%20Selectionnez%20le%20nombre%20de%20voisins%20dans%20un%20kNN.ipynb"
    },
    {
      image: mushroom,
      description:
        "Ce TP consiste à entraîner une régression logistique et une SVM linéaire pour déterminer la comestibilité des champignons. Utilisant le jeu de données mushrooms de Kaggle, l'objectif est d'explorer et de comparer les performances de ces deux algorithmes d'apprentissage automatique dans la classification des champignons en comestibles ou non comestibles",
      skills: ['Data', 'SVM', 'linear', 'mushroom'],
      site: '',
      github:
        'https://github.com/Charlot-DEDJINOU/Data-scientist/tree/main/5-Entrainez%20un%20modele%20predictif%20lineaire/TP%20-%20Entrainez%20une%20regression%20logistique%20et%20une%20SVM%20lineaire'
    },
    {
      image: data_science,
      description:
        "Ceci est un dépôt regroupant mes exercices, formations et travaux pratiques dans le domaine de la data science. Explorez une collection variée d'exercices pratiques, de projets de formation et de TP, couvrant divers concepts et techniques de l'analyse de données, de l'apprentissage automatique et de la science des données.",
      skills: ['Data', 'ia', 'machine', 'learning'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Data-scientist'
    },
    {
      image: python,
      description:
        "Ceci est un dépôt contenant mes solutions pour quelques exercices de Kattis, tous codés en Python. Explorez mes solutions pour résoudre divers problèmes d'algorithmique et de programmation.",
      skills: ['kattis', 'python', 'problem', 'solution'],
      site: 'https://open.kattis.com/users/charlot',
      github: 'https://github.com/Charlot-DEDJINOU/Kattis'
    },
    {
      image: api_deee,
      description:
        "Ce projet consiste en une API développée en PHP pour la gestion efficace des Déchets d'Équipements Électriques et Électroniques (DEEE). L'API offre aux utilisateurs la possibilité de collecter, suivre et gérer les DEEE de manière transparente. ",
      skills: ['Api', 'PHP', 'MySql'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/API_DEEE_Manager'
    },
    {
      image: zero_plastique,
      description:
        "Dans le cadre du projet Zéro Déchet Plastique sur le campus d'Abomey Calavi, j'ai créé une fonctionnalité permettant de générer un lien J'y serai personnalisé. Ce lien offre à chaque personne la possibilité d'ajouter sa photo, de télécharger le visuel généré, et de le partager sur les réseaux sociaux",
      skills: ['Vue JS', "J'y serai", 'Visuel', 'Plastique'],
      site: 'https://zero-dechet-plastique-sur-le-campus-abomey-calavi.vercel.app',
      github:
        'https://github.com/Charlot-DEDJINOU/Zero-dechet-plastique-sur-le-Campus-Abomey-Calavi'
    },
    {
      image: car_location,
      description:
        "Ce projet consiste à développer une application de gestion de location de voitures avec PHP, Laravel et MySQL. L'objectif est de permettre aux utilisateurs de rechercher, réserver et gérer des locations de voitures de manière efficace.",
      skills: ['Laravel', 'Php', 'Location', 'MySql'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/CarRentalManagement-Laravel'
    },
    {
      image: entretien_ia,
      description:
        "Ce projet offre une plateforme où les utilisateurs peuvent simuler un entretien en ligne. Ils fournissent l'offre d'emploi et leur CV, puis notre plateforme basée sur l'API de ChatGPT génère une série de questions pertinentes ainsi que des suggestions pour les réponses. L'interaction se déroule par voie textuelle, fournissant une simulation réaliste de l'entretien.",
      skills: ['React JS', 'FastApi', 'Express JS', 'AI'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/EntretrienIA'
    },
    {
      image: aventure_baobab,
      description:
        "Dans le cadre du projet AVENTURE DU SAVOIR SUR BAOBAB , j'ai créé une fonctionnalité permettant de générer un lien J'y serai personnalisé. Ce lien offre à chaque personne la possibilité d'ajouter sa photo, son nom, une citation, de télécharger le visuel généré, et de le partager sur les réseaux sociaux",
      skills: ['Vue JS', "J'y serai", 'Visuel', 'baobab'],
      site: 'https://challenge-aventure-du-savoir-sur-baobab-uac.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/Challenge-Aventure-du-savoir-sur-Baobab-UAC'
    },
    {
      image: excellente_night,
      description:
        "Dans le cadre de la deuxième édition de la Nuit de l'Excellence organisé par la Fondation Mastercard à l'UAC , j'ai créé une fonctionnalité permettant de générer un lien J'y serai personnalisé. Ce lien offre à chaque personne la possibilité d'ajouter sa photo, de télécharger le visuel généré, et de le partager sur les réseaux sociaux",
      skills: ['Vue JS', "J'y serai", 'Visuel', 'UAC'],
      site: 'https://excellence-night.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/ExcellenceNight'
    },
    {
      image: hdb,
      description:
        "C'est un site interactif pour souhaiter joyeux anniversaire à n'importe qui.Il permet aux utilisateurs de personnaliser les visuels,de télécharger les visuels, de répondre à des devinettes pour accéder à des fonctionnalités supplémentaires, et de choisir entre les thèmes clair et foncé. Le mot de passe par défaut pour accéder au site est Nerys.",
      skills: ['Vue JS', 'Express JS', 'NLP', 'hbd'],
      site: 'https://animated-hbd-nlp-js.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/AnimatedHBD_nlpJs'
    },
    {
      image: yats,
      description:
        "Lors de l'événement YATS, j'ai eu l'opportunité de contribuer au développement de l'interface de la page d'accueil d'un jeu mobile mettant en valeur l'art et la culture du Bénin",
      skills: ['React', 'React-Native', 'JS'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/YATS-Hackathon'
    },
    {
      image: shared_preference,
      description:
        "Ce projet Flutter est une démonstration de l'utilisation de la bibliothèque Shared Preferences pour la gestion des préférences utilisateur dans une application mobile. Les Shared Preferences sont un moyen simple et efficace de stocker des données clés-valeurs sur l'appareil de l'utilisateur",
      skills: ['Flutter', 'shared preference'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Shared-Preference-Flutter'
    },
    {
      image: chatbot,
      description:
        "C'est un projet ludique où j'ai développé une messagerie en temps réel entre deux personnes en utilisant les websockets, Vue.js pour le frontend et Express.js pour le backend. Explorez la communication instantanée grâce aux websockets, offrant une expérience de messagerie fluide et réactive entre les utilisateurs.",
      skills: ['Vue JS', 'Express JS', 'WebSocket', 'emoji'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/RealTime-Notifications'
    },
    {
      image: websocket,
      description:
        "Ce projet est une application de communication bidirectionnelle entre un serveur et des clients. Lorsqu'un client envoie un message au serveur, ce dernier enregistre le message dans une base de données et le diffuse ensuite à tous les autres clients connectés sur son port d'écoute",
      skills: ['JS', 'Websocket', 'Serveur', 'Client'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/WebSocket'
    },
    {
      image: maic,
      description:
        "Il s'agit du concours Maic International 2022.Notre défi consistait à développer une intelligence artificielle capable de jouer au jeu de Morabaraba",
      skills: ['Python', 'IA', 'MAIC', 'MIFY'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/MIFY-Maic2022-Contest'
    }
  ]
}

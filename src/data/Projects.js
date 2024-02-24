import stock_master from '../assets/stock_master.png'
import hackaton_sene from '../assets/hackaton_sene.png'
import e_commerce from '../assets/e-commerce.png'
import treasure from '../assets/treasure.png'
import tp_knn from '../assets/tp_knn.png'
import mushroom from '../assets/mushroom.jpg'
import data_science from '../assets/data_science.jpg'
import python from '../assets/python.png'
import api_deee from '../assets/api_deee.jpg'
import zero_plastique from '../assets/zero_plastique.png'
import car_location from '../assets/car_location.png'
import entretien_ia from '../assets/entretien_ia.png'
import smartphone from '../assets/smartphone.png'
import maic from '../assets/maic.png'
import websocket from '../assets/websocket.jpg'
import excellente_night from '../assets/excellente_night.png'
import hdb from '../assets/hdb.png'
import yats from '../assets/yats.png'
import shared_preference from '../assets/shared_preference.jpg'
import chatbot from '../assets/chatbot.png'
import blog_api from '../assets/blog_api.png'

export default function Projects() {
  return [
    {
      title: 'Stock Master',
      image: stock_master,
      description:
        'Stock Master est une application mobile de gestion de stocks puissante et intuitive, conçue pour simplifier la gestion des stocks de produits',
      skills: ['Flutter', 'FastApi', 'Dart', 'Python', 'API Rest'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Stock-Master',
      category: 'All Mobile API'
    },
    {
      title: 'Data Science Hub',
      image: data_science,
      description:
        "Un dépôt regroupant une variété d'exercices pratiques, de projets de formation et de travaux pratiques en data science.",
      skills: ['Data Science', 'AI', 'Machine Learning', 'Python'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Data-scientist',
      category: 'All Data Science'
    },
    {
      title: 'Artistic E-commerce',
      image: e_commerce,
      description:
        'Une application web développée en React JS offrant une plateforme pour les artisans afin de vendre leurs créations artistiques en ligne.',
      skills: ['React JS', 'Java Script', 'useCart', 'React-router'],
      site: 'https://react-ecommerce-lyart-psi.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/React_Ecommerce',
      category: 'All Web'
    },
    {
      title: 'Car Rental Management',
      image: car_location,
      description:
        'Une application de gestion de location de voitures développée avec PHP, Laravel et MySQL pour une recherche, une réservation et une gestion efficaces',
      skills: ['Laravel', 'PHP', 'Location', 'MySql'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/CarRentalManagement-Laravel',
      category: 'All Web'
    },
    {
      title: 'Birthday Celebration Hub',
      image: hdb,
      description:
        "Un site interactif permettant de personnaliser les vœux d'anniversaire avec des visuels, des devinettes pour débloquer des fonctionnalités supplémentaires. Le mot de passe par défaut pour accéder au site est Nerys",
      skills: ['Vue JS', 'Express JS', 'NLP', 'Java Script'],
      site: 'https://animated-hbd-nlp-js.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/AnimatedHBD_nlpJs',
      category: 'All Web'
    },
    {
      title: 'Maic Morabaraba AI',
      image: maic,
      description:
        "Une participation au concours Maic International 2022 avec le développement d'une intelligence artificielle capable de jouer au jeu de Morabaraba.",
      skills: ['Python', 'IA', 'MAIC', 'MIFY'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/MIFY-Maic2022-Contest',
      category: 'All Data Science'
    },
    {
      title: 'Hackathon SENE',
      image: hackaton_sene,
      description:
        'Une solution numérique développée lors du concours de la SENE pour simplifier la gestion des Déchets des Équipements Électriques et Électroniques.',
      skills: ['React jS', 'Laravel', 'API Rest', 'PHP', 'Java Script'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Hackathon-SENE',
      category: 'All Web API'
    },
    {
      title: 'Python Kattis Solutions',
      image: python,
      description:
        "Un dépôt contenant des solutions pour quelques exercices de Kattis, tous codés en Python, pour résoudre divers problèmes d'algorithmique et de programmation.",
      skills: ['kattis', 'Python', 'Problem', 'Solution', 'Algorithme'],
      site: 'https://open.kattis.com/users/charlot',
      github: 'https://github.com/Charlot-DEDJINOU/Kattis',
      category: 'All Programmation'
    },
    {
      title: 'Websocket Communication',
      image: websocket,
      description:
        "Une application de communication bidirectionnelle entre un serveur et des clients, permettant l'échange instantané de messages via des websockets et l'enregistrement de messages dans une base de données.",
      skills: ['Java Script', 'Websocket', 'Serveur', 'Client'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/WebSocket',
      category: 'All Web Websocket'
    },
    {
      title: 'Zero Plastic Initiative',
      image: zero_plastique,
      description:
        "Une fonctionnalité développée pour le projet Zéro Déchet Plastique sur le campus d'Abomey Calavi, permettant de générer un lien personnalisé J'y serai pour partager des engagements et des photos sur les réseaux sociaux.",
      skills: ['Vue JS', "J'y serai", 'Visuel', 'Plastique'],
      site: 'https://zero-dechet-plastique-sur-le-campus-abomey-calavi.vercel.app',
      github:
        'https://github.com/Charlot-DEDJINOU/Zero-dechet-plastique-sur-le-Campus-Abomey-Calavi',
      category: 'All Web'
    },
    {
      title: 'Interview AI Platform',
      image: entretien_ia,
      description:
        'Une plateforme permettant de simuler un entretien en ligne avec des questions générées par une API basée sur ChatGPT, offrant une expérience réaliste et des suggestions pour les réponses.',
      skills: ['React JS', 'FastApi', 'Express JS', 'AI'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/EntretrienIA',
      category: 'All Web Data Science API'
    },
    {
      title: 'Treasure Hunt Adventure',
      image: treasure,
      description:
        'Une aventure interactive basée sur une application web React, où chaque étape de la quête est une énigme à résoudre pour avancer et découvrir le trésor tant convoité.',
      skills: ['React JS', 'Java Script', 'React-router', 'Charade'],
      site: 'https://tha-sage.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/Stock-Master',
      category: 'All Web'
    },
    {
      title: 'TP kNN',
      image: tp_knn,
      description:
        "Un travail pratique permettant d'explorer la sélection du nombre de voisins dans l'algorithme des k plus proches voisins (kNN) pour optimiser la précision des modèles de classification ou de régression.",
      skills: ['Data Science', 'k-nn', 'Python', 'AI'],
      site: '',
      github:
        "https://github.com/Charlot-DEDJINOU/Data-scientist/blob/main/4-Evaluez%20les%20performances%20d'un%20modele%20de%20machine%20learning/TP%20Selectionnez%20le%20nombre%20de%20voisins%20dans%20un%20kNN.ipynb",
      category: 'All Data Science'
    },
    {
      title: 'Excellence Night Celebration',
      image: excellente_night,
      description:
        "Une fonctionnalité développée pour la Nuit de l'Excellence à l'UAC, permettant de générer un lien personnalisé J'y serai pour partager les visuels sur les réseaux sociaux",
      skills: ['Vue JS', "J'y serai", 'Visuel', 'UAC'],
      site: 'https://excellence-night.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/ExcellenceNight',
      category: 'All Web'
    },
    {
      title: 'TP Mushroom Classification',
      image: mushroom,
      description:
        'Un travail pratique où une régression logistique et une SVM linéaire sont entraînées pour déterminer la comestibilité des champignons à partir du jeu de données mushrooms de Kaggle',
      skills: ['Data Science', 'SVM', 'Linear Regression', 'Machine Learning'],
      site: '',
      github:
        'https://github.com/Charlot-DEDJINOU/Data-scientist/tree/main/5-Entrainez%20un%20modele%20predictif%20lineaire/TP%20-%20Entrainez%20une%20regression%20logistique%20et%20une%20SVM%20lineaire',
      category: 'All Data Science'
    },
    {
      title: 'RealTime Chatbot',
      image: chatbot,
      description:
        'Un projet de messagerie instantanée entre deux personnes en utilisant les websockets, Vue.js pour le frontend et Express.js pour le backend, offrant une expérience de messagerie fluide et réactive.',
      skills: ['Vue JS', 'Express JS', 'WebSocket', 'Emoji'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Chatbot',
      category: 'All Web WebSocket'
    },
    {
      title: 'Blog API',
      image: blog_api,
      description:
        "Projet de développement d'une API de blog avec Laravel, centrée sur deux modèles : Commentaires et Articles",
      skills: ['Laravel', 'API', 'PHP', 'MySql'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Blog-api-laravel',
      category: 'All API'
    },
    {
      title: 'Virtual Smartphone Experience',
      image: smartphone,
      description:
        'Un projet présentant un Smartphone virtuel avec plusieurs applications fonctionnelles pour une expérience utilisateur complète, incluant WhatsApp, des jeux, un lecteur multimédia, un planificateur de tâches, etc.',
      skills: ['PHP', 'MySql', 'Java Script', 'Interface'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/SmartPhone',
      category: 'All Web'
    },
    {
      title: 'YATS Mobile Game Interface',
      image: yats,
      description:
        "Une contribution au développement de l'interface de la page d'accueil d'un jeu mobile mettant en valeur l'art et la culture du Bénin lors de l'événement YATS.",
      skills: ['React', 'React Native', 'Java Script'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/YATS-Hackathon',
      category: 'All Mobile'
    },
    {
      title: 'API DEEE Manager',
      image: api_deee,
      description:
        "Une API développée en PHP pour la gestion efficace des Déchets d'Équipements Électriques et Électroniques (DEEE), permettant la collecte, le suivi et la gestion transparente de ces déchets.",
      skills: ['API', 'PHP', 'MySql'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/API_DEEE_Manager',
      category: 'All API'
    },
    {
      title: 'Flutter Shared Preferences Demo',
      image: shared_preference,
      description:
        "Une démonstration de l'utilisation de la bibliothèque Shared Preferences dans Flutter pour la gestion des préférences utilisateur dans une application mobile, offrant un stockage simple et efficace des données clés-valeurs sur l'appareil de l'utilisateur.",
      skills: ['Flutter', 'Shared preference'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Shared-Preference-Flutter',
      category: 'All Mobile'
    }
  ]
}

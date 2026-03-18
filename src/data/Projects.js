import stock_master from '../assets/stock_master-min.png'
import hackaton_sene from '../assets/hackaton_sene-min.png'
import e_commerce from '../assets/e-commerce-min.png'
import treasure from '../assets/treasure-min.png'
import tp_knn from '../assets/tp_knn-min.png'
import mushroom from '../assets/mushroom-min.jpg'
import data_science from '../assets/data_science-min.jpg'
import python from '../assets/python-min.png'
import api_deee from '../assets/api_deee-min.jpg'
import zero_plastique from '../assets/zero_plastique-min.png'
import car_location from '../assets/car_location-min.png'
import entretien_ia from '../assets/entretien_ia-min.png'
import smartphone from '../assets/smartphone-min.png'
import maic from '../assets/maic-min.png'
import excellente_night from '../assets/excellente_night-min.png'
import hdb from '../assets/hdb-min.png'
import yats from '../assets/yats-min.png'
import chatbot from '../assets/chatbot-min.png'
import event_flow from '../assets/event_flow-min.png'
import algolia from '../assets/algolia-min.jpg'
import iot from '../assets/iot-min.jpg'
import best_flag from '../assets/best_flag-min.png'
import payment_link_generator from '../assets/payment_link_generator-min.png'
import smart_vt from '../assets/smart_vt-min.png'
import smart_parking from '../assets/smart_parking.jpg'
import reservation_dashboard from '../assets/reservation_dashboard.png'
import mobile_reservation from '../assets/mobile_reservation.png'
import oremi_timo from '../assets/oremi_timo.png'
import bio_presence from '../assets/bio_presence.png'
import onboarding from '../assets/onboarding.png'
import collaborative_notes from '../assets/collaborative-notes.png'
import bookmark from '../assets/bookmark.png'
import student_performance from '../assets/student-performance.png'
import rbac from '../assets/rbac.png'
import conscience_feminine from '../assets/conscience-feminine.png'

export default function Projects() {
  return [
    // --- Tier 1: Award-winning / Full-stack flagship projects ---
    {
      title: 'smart_parking_aiot_system',
      image: smart_parking,
      description: 'smart_parking_aiot_system_description',
      skills: ['ESP32', 'YOLO', 'Python', 'AIoT', 'Computer Vision', 'FastAPI', 'WebSocket'],
      site: 'https://drive.google.com/file/d/1m3vdnfLA592bk3Y2Bm75WhHgSs4atO-d/view?usp=sharing',
      github: '',
      category:
        'All tous Internet of Things Internet des objets Intelligence Artificielle Artificial Intelligence',
      isVisible: true
    },
    {
      title: 'oremi_timo',
      image: oremi_timo,
      description: 'oremi_timo_description',
      skills: ['React JS', 'FastAPI', 'IA', 'OCR', 'Chatbot', 'Python', 'Tailwind CSS'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Oremi-Timo',
      category: 'All tous Web Intelligence Artificielle Artificial Intelligence',
      isVisible: true
    },
    {
      title: 'smart_vt',
      image: smart_vt,
      description: 'smart_vt_description',
      skills: ['React JS', 'FastAPI', 'Express JS', 'IA', 'Whisper', 'Python', 'Node.js'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Hackathon-IA-Multimodal-Multilingue',
      category: 'All tous Web Intelligence Artificielle Artificial Intelligence',
      isVisible: true
    },
    {
      title: 'smart_parking_mobile_app',
      image: mobile_reservation,
      description: 'smart_parking_mobile_app_description',
      skills: ['React Native', 'FastAPI', 'Python', 'WebSocket', 'Expo', 'Tailwind CSS', 'JWT'],
      site: 'https://drive.google.com/file/d/1m3vdnfLA592bk3Y2Bm75WhHgSs4atO-d/view?usp=sharing',
      github: '',
      category: 'All tous Mobile',
      isVisible: true
    },
    {
      title: 'smart_parking_dashboard',
      image: reservation_dashboard,
      description: 'smart_parking_dashboard_description',
      skills: ['React.js', 'Tailwind CSS', 'FastAPI', 'WebSocket', 'Chart.js', 'Python', 'JWT'],
      site: 'https://drive.google.com/file/d/1m3vdnfLA592bk3Y2Bm75WhHgSs4atO-d/view?usp=sharing',
      github: '',
      category: 'All tous Dashboard Web',
      isVisible: true
    },
    // --- Tier 2: Full-stack / production-deployed projects ---
    {
      title: 'conscience_feminine',
      image: conscience_feminine,
      description: 'conscience_feminine_description',
      skills: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'Admin Dashboard'],
      site: 'https://www.consciencefeminine.org',
      github: '',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'bookmark',
      image: bookmark,
      description: 'bookmark_description',
      skills: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Express', 'MongoDB', 'Chart.js', 'JWT'],
      site: 'https://book-mark-two-kappa.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/BookMark',
      category: 'All tous Web API',
      isVisible: true
    },
    {
      title: 'collaborative_notes',
      image: collaborative_notes,
      description: 'collaborative_notes_description',
      skills: ['React', 'Express', 'Markdown', 'Docker', 'API', 'Node.js', 'TypeScript'],
      site: 'https://collaborative-notes-xyz.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/Collaborative-Notes',
      category: 'All tous Web API',
      isVisible: true
    },
    {
      title: 'fastapi_rbac_advanced',
      image: rbac,
      description: 'fastapi_rbac_advanced_description',
      skills: ['FastAPI', 'SQLAlchemy', 'JWT', 'Alembic', 'Python', 'SQLite', 'Pydantic'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Fastapi-rbac-advanced',
      category: 'All tous Web API',
      isVisible: true
    },
    {
      title: 'bio_presence',
      image: bio_presence,
      description: 'bio_presence_description',
      skills: ['IoT', 'FastAPI', 'ESP32', 'C++', 'Python', 'Fingerprint', 'SQLAlchemy'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/BioPresence-System',
      category: 'All tous Internet of Things Internet des objets',
      isVisible: true
    },
    {
      title: 'stock_master',
      image: stock_master,
      description: 'stock_master_description',
      skills: ['Flutter', 'FastAPI', 'Dart', 'Python', 'API Rest', 'SQLite', 'Provider'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Stock-Master',
      category: 'All tous Mobile API',
      isVisible: true
    },
    {
      title: 'student_performance',
      image: student_performance,
      description: 'student_performance_description',
      skills: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Tailwind', 'Axios', 'Jest'],
      site: 'https://drive.google.com/file/d/1FYz68AZqCvOU38DT57dT3w_mLwaUOdai/view?usp=drive_link',
      github: 'https://github.com/Charlot-DEDJINOU/Student-Performance-Visualization',
      category: 'All tous Mobile',
      isVisible: true
    },
    {
      title: 'hackathon_sene',
      image: hackaton_sene,
      description: 'hackathon_sene_description',
      skills: ['React JS', 'Laravel', 'API Rest', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Hackathon-SENE',
      category: 'All tous Web API',
      isVisible: true
    },
    {
      title: 'interview_ai_platform',
      image: entretien_ia,
      description: 'interview_ai_platform_description',
      skills: ['React JS', 'FastAPI', 'Express JS', 'AI', 'ChatGPT', 'Python', 'Node.js'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/EntretrienIA',
      category: 'All tous Web Intelligence Artificielle Artificial Intelligence API',
      isVisible: true
    },
    {
      title: 'event_flow',
      image: event_flow,
      description: 'event_flow_description',
      skills: ['Vue JS', 'Vuex', 'WebSocket', 'MongoDB', 'Express JS', 'Node.js', 'Socket.io'],
      site: 'https://event-flow-lake.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/EventFlow',
      category: 'All tous Web WebSocket',
      isVisible: true
    },
    // --- Tier 3: Solid personal / learning projects ---
    {
      title: 'best_flag',
      image: best_flag,
      description: 'best_flag_description',
      skills: ['React JS', 'Cryptography', 'Steganography', 'JavaScript', 'CSS', 'Vercel', 'CTF'],
      site: 'https://best-flag.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/Best-Flag',
      category: 'All tous Web Cyber security Cybersécurité',
      isVisible: true
    },
    {
      title: 'maic_morabaraba_ai',
      image: maic,
      description: 'maic_morabaraba_ai_description',
      skills: ['Python', 'IA', 'MAIC', 'MIFY', 'Algorithme', 'Game AI', 'Functional Programming'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/MIFY-Maic2022-Contest',
      category: 'All tous Intelligence Artificielle Artificial Intelligence',
      isVisible: true
    },
    {
      title: 'artistic_ecommerce',
      image: e_commerce,
      description: 'artistic_ecommerce_description',
      skills: ['React JS', 'JavaScript', 'useCart', 'React Router', 'CSS', 'Vercel', 'E-commerce'],
      site: 'https://react-ecommerce-lyart-psi.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/React_Ecommerce',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'car_rental_management',
      image: car_location,
      description: 'car_rental_management_description',
      skills: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Eloquent', 'Bootstrap', 'MVC'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/CarRentalManagement-Laravel',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'realtime_chatbot',
      image: chatbot,
      description: 'realtime_chatbot_description',
      skills: ['Vue JS', 'Express JS', 'WebSocket', 'Node.js', 'Socket.io', 'CSS', 'MongoDB'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Chatbot',
      category: 'All tous Web WebSocket',
      isVisible: true
    },
    {
      title: 'onboarding',
      image: onboarding,
      description: 'onboarding_description',
      skills: ['React Native', 'JavaScript', 'Tailwind', 'Expo', 'NativeWind', 'Animation', 'UI/UX'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Onboarding',
      category: 'All tous Mobile',
      isVisible: true
    },
    {
      title: 'payement_generate_link',
      image: payment_link_generator,
      description: 'payement_generate_link_description',
      skills: ['Laravel', 'MTN MOMO', 'PHP', 'MySQL', 'API', 'Blade', 'Payment Gateway'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Payment-Link-Generator',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'birthday_celebration_hub',
      image: hdb,
      description: 'birthday_celebration_hub_description',
      skills: ['Vue JS', 'Express JS', 'NLP', 'JavaScript', 'Node.js', 'CSS', 'Animation'],
      site: 'https://animated-hbd-nlp-js.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/AnimatedHBD_nlpJs',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'algolia',
      image: algolia,
      description: 'algolia_description',
      skills: ['Laravel', 'Algolia', 'Scout Extended', 'PHP', 'MySQL', 'Search', 'Eloquent'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Algolia-Laravel',
      category: 'All tous Web',
      isVisible: true
    },
    // --- Tier 4: Data Science / Algorithmic projects ---
    {
      title: 'data_science_hub',
      image: data_science,
      description: 'data_science_hub_description',
      skills: ['Data Science', 'AI', 'Machine Learning', 'Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Data-scientist',
      category: 'All tous Data Science',
      isVisible: true
    },
    {
      title: 'python_kattis_solutions',
      image: python,
      description: 'python_kattis_solutions_description',
      skills: ['Python', 'Kattis', 'Algorithms', 'Data Structures', 'Problem Solving', 'Competitive Programming', 'Optimization'],
      site: 'https://open.kattis.com/users/charlot',
      github: 'https://github.com/Charlot-DEDJINOU/Kattis',
      category: 'All tous Programmation Programming',
      isVisible: true
    },
    {
      title: 'iot_hub',
      image: iot,
      description: 'iot_description',
      skills: ['IoT', 'Arduino', 'C++', 'ESP32', 'Sensors', 'Serial Communication', 'Home Automation'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/Internet-of-Things-IoT',
      category: 'All tous Internet of Things Internet des objets',
      isVisible: true
    },
    {
      title: 'tp_knn',
      image: tp_knn,
      description: 'tp_knn_description',
      skills: ['Data Science', 'k-NN', 'Python', 'AI', 'Scikit-learn', 'Classification', 'Jupyter'],
      site: '',
      github:
        "https://github.com/Charlot-DEDJINOU/Data-scientist/blob/main/4-Evaluez%20les%20performances%20d'un%20modele%20de%20machine%20learning/TP%20Selectionnez%20le%20nombre%20de%20voisins%20dans%20un%20kNN.ipynb",
      category: 'All tous Data Science',
      isVisible: true
    },
    {
      title: 'tp_mushroom_classification',
      image: mushroom,
      description: 'tp_mushroom_classification_description',
      skills: ['Data Science', 'Logistic Regression', 'SVM', 'Machine Learning', 'Python', 'Kaggle', 'Scikit-learn'],
      site: '',
      github:
        'https://github.com/Charlot-DEDJINOU/Data-scientist/tree/main/5-Entrainez%20un%20modele%20predictif%20lineaire/TP%20-%20Entrainez%20une%20regression%20logistique%20et%20une%20SVM%20lineaire',
      category: 'All tous Data Science',
      isVisible: true
    },
    // --- Tier 5: Smaller / older projects ---
    {
      title: 'zero_plastic_initiative',
      image: zero_plastique,
      description: 'zero_plastic_initiative_description',
      skills: ['Vue JS', 'JavaScript', 'CSS', 'Vercel', 'Responsive', 'Social Sharing', 'UI Design'],
      site: 'https://zero-dechet-plastique-sur-le-campus-abomey-calavi.vercel.app',
      github:
        'https://github.com/Charlot-DEDJINOU/Zero-dechet-plastique-sur-le-Campus-Abomey-Calavi',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'excellence_night_celebration',
      image: excellente_night,
      description: 'excellence_night_celebration_description',
      skills: ['Vue JS', 'JavaScript', 'CSS', 'Vercel', 'Responsive', 'Social Sharing', 'UI Design'],
      site: 'https://excellence-night.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/ExcellenceNight',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'yats_mobile_game_interface',
      image: yats,
      description: 'yats_mobile_game_interface_description',
      skills: ['React', 'React Native', 'JavaScript', 'Expo', 'CSS', 'Mobile UI', 'Hackathon'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/YATS-Hackathon',
      category: 'All tous Mobile',
      isVisible: true
    },
    {
      title: 'virtual_smartphone_experience',
      image: smartphone,
      description: 'virtual_smartphone_experience_description',
      skills: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'Multimedia'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/SmartPhone',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'treasure_hunt_adventure',
      image: treasure,
      description: 'treasure_hunt_adventure_description',
      skills: ['React JS', 'JavaScript', 'React Router', 'CSS', 'Vercel', 'Game Logic', 'Riddles'],
      site: 'https://tha-sage.vercel.app',
      github: 'https://github.com/Charlot-DEDJINOU/TreasureHuntAdventure',
      category: 'All tous Web',
      isVisible: true
    },
    {
      title: 'api_deee_manager',
      image: api_deee,
      description: 'api_deee_manager_description',
      skills: ['API', 'PHP', 'MySQL', 'REST', 'CRUD', 'JSON', 'Backend'],
      site: '',
      github: 'https://github.com/Charlot-DEDJINOU/API_DEEE_Manager',
      category: 'All tous API',
      isVisible: true
    }
  ]
}

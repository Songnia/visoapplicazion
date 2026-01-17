// Base de données des universités italiennes
// Structure optimisée pour l'affichage et le filtrage
// Généré automatiquement à partir de universities_data.json

const UNIVERSITIES_DATABASE = [
    {
        id_universite: "UNI_MILANO_1",
        nom_fr: "Università degli Studi di Milano (Statale)",
        nom_it: "Università degli Studi di Milano (Statale)",
        type_statut: "Publique",
        classement_national_simule: 300,
        description_courte: "Université prestigieuse située à Milano (Lombardia). Reconnue pour ses programmes en Droit, Médecine.",
        localisation: {
            ville: "Milano",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Droit", "Médecine", "Sciences Humaines"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "64,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "32" },
            { label: "Classement QS", valeur: "Top 300" }
        ],
        liens: {
            site_web_officiel: "https://www.unimi.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MILANO_2",
        nom_fr: "Politecnico di Milano",
        nom_it: "Politecnico di Milano",
        type_statut: "Publique",
        classement_national_simule: 150,
        description_courte: "Université prestigieuse située à Milano (Lombardia). Reconnue pour ses programmes en Ingénierie, Architecture.",
        localisation: {
            ville: "Milano",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie", "Architecture", "Design"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "47,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "45" },
            { label: "Classement QS", valeur: "Top 150" }
        ],
        liens: {
            site_web_officiel: "https://www.polimi.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MILANO_3",
        nom_fr: "Università degli Studi di Milano-Bicocca",
        nom_it: "Università degli Studi di Milano-Bicocca",
        type_statut: "Publique",
        classement_national_simule: 500,
        description_courte: "Université prestigieuse située à Milano (Lombardia). Reconnue pour ses programmes en Sociologie, Économie.",
        localisation: {
            ville: "Milano",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Sociologie", "Économie", "Sciences"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "38,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "12" },
            { label: "Classement QS", valeur: "Top 500" }
        ],
        liens: {
            site_web_officiel: "https://www.unimib.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MILANO_4",
        nom_fr: "Università Cattolica del Sacro Cuore",
        nom_it: "Università Cattolica del Sacro Cuore",
        type_statut: "Privée",
        classement_national_simule: 500,
        description_courte: "Université prestigieuse située à Milano (Lombardia). Reconnue pour ses programmes en Économie, Psychologie.",
        localisation: {
            ville: "Milano",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Économie", "Psychologie", "Relations Internationales"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "40,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "25" },
            { label: "Classement QS", valeur: "Top 500" }
        ],
        liens: {
            site_web_officiel: "https://www.unicatt.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MILANO_5",
        nom_fr: "Università Bocconi",
        nom_it: "Università Bocconi",
        type_statut: "Privée",
        classement_national_simule: 10,
        description_courte: "Université prestigieuse située à Milano (Lombardia). Reconnue pour ses programmes en Finance, Management.",
        localisation: {
            ville: "Milano",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Finance", "Management", "Économie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "14,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "35" },
            { label: "Classement QS", valeur: "Top 10 (Business)" }
        ],
        liens: {
            site_web_officiel: "https://www.unibocconi.eu",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_PAVIA_6",
        nom_fr: "Università degli Studi di Pavia",
        nom_it: "Università degli Studi di Pavia",
        type_statut: "Publique",
        classement_national_simule: 600,
        description_courte: "Université prestigieuse située à Pavia (Lombardia). Reconnue pour ses programmes en Médecine, Ingénierie.",
        localisation: {
            ville: "Pavia",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Médecine", "Ingénierie", "Musicologie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "26,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "15" },
            { label: "Classement QS", valeur: "Top 600" }
        ],
        liens: {
            site_web_officiel: "https://www.unipv.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_BERGAMO_7",
        nom_fr: "Università degli Studi di Bergamo",
        nom_it: "Università degli Studi di Bergamo",
        type_statut: "Publique",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Bergamo (Lombardia). Reconnue pour ses programmes en Langues, Économie.",
        localisation: {
            ville: "Bergamo",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Langues", "Économie", "Ingénierie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "20,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "8" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.unibg.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_BRESCIA_8",
        nom_fr: "Università degli Studi di Brescia",
        nom_it: "Università degli Studi di Brescia",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Brescia (Lombardia). Reconnue pour ses programmes en Ingénierie, Médecine.",
        localisation: {
            ville: "Brescia",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie", "Médecine", "Commerce"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "15,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "6" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://www.unibs.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MILANO_9",
        nom_fr: "IULM Milano",
        nom_it: "IULM Milano",
        type_statut: "Privée",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Milano (Lombardia). Reconnue pour ses programmes en Communication, Langues.",
        localisation: {
            ville: "Milano",
            region: "Lombardia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Communication", "Langues", "Tourisme"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "7,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "5" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.iulm.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_ROMA_10",
        nom_fr: "Sapienza Università di Roma",
        nom_it: "Sapienza Università di Roma",
        type_statut: "Publique",
        classement_national_simule: 200,
        description_courte: "Université prestigieuse située à Roma (Lazio). Reconnue pour ses programmes en Lettres Classiques, Médecine.",
        localisation: {
            ville: "Roma",
            region: "Lazio",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Lettres Classiques", "Médecine", "Physique"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "115,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "55" },
            { label: "Classement QS", valeur: "Top 200" }
        ],
        liens: {
            site_web_officiel: "https://www.uniroma1.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_ROMA_11",
        nom_fr: "Università degli Studi di Roma Tor Vergata",
        nom_it: "Università degli Studi di Roma Tor Vergata",
        type_statut: "Publique",
        classement_national_simule: 500,
        description_courte: "Université prestigieuse située à Roma (Lazio). Reconnue pour ses programmes en Économie, Ingénierie.",
        localisation: {
            ville: "Roma",
            region: "Lazio",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Économie", "Ingénierie", "Médecine"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "35,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "20" },
            { label: "Classement QS", valeur: "Top 500" }
        ],
        liens: {
            site_web_officiel: "https://web.uniroma2.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_ROMA_12",
        nom_fr: "Università degli Studi Roma Tre",
        nom_it: "Università degli Studi Roma Tre",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Roma (Lazio). Reconnue pour ses programmes en Architecture, Droit.",
        localisation: {
            ville: "Roma",
            region: "Lazio",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Architecture", "Droit", "Éducation"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "32,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "10" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://www.uniroma3.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_ROMA_13",
        nom_fr: "Luiss Guido Carli",
        nom_it: "Luiss Guido Carli",
        type_statut: "Privée",
        classement_national_simule: 100,
        description_courte: "Université prestigieuse située à Roma (Lazio). Reconnue pour ses programmes en Sciences Politiques, Droit.",
        localisation: {
            ville: "Roma",
            region: "Lazio",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Sciences Politiques", "Droit", "Management"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "9,500".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "25" },
            { label: "Classement QS", valeur: "Top 100 (Politics)" }
        ],
        liens: {
            site_web_officiel: "https://www.luiss.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_ROMA_(ONLINE)_14",
        nom_fr: "Università Telematica Uninettuno",
        nom_it: "Università Telematica Uninettuno",
        type_statut: "Privée",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Roma (Online) (Lazio). Reconnue pour ses programmes en Ingénierie, Psychologie.",
        localisation: {
            ville: "Roma (Online)",
            region: "Lazio",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie", "Psychologie", "Droit"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "15,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "10" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.uninettunouniversity.net",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_BOLOGNA_15",
        nom_fr: "Università di Bologna (Unibo)",
        nom_it: "Università di Bologna (Unibo)",
        type_statut: "Publique",
        classement_national_simule: 170,
        description_courte: "Université prestigieuse située à Bologna (Emilia-Romagna). Reconnue pour ses programmes en Histoire, Droit.",
        localisation: {
            ville: "Bologna",
            region: "Emilia-Romagna",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Histoire", "Droit", "Agriculture"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "87,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "70" },
            { label: "Classement QS", valeur: "Top 170" }
        ],
        liens: {
            site_web_officiel: "https://www.unibo.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_PARMA_16",
        nom_fr: "Università di Parma",
        nom_it: "Università di Parma",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Parma (Emilia-Romagna). Reconnue pour ses programmes en Sciences de l'Alimentation, Médecine.",
        localisation: {
            ville: "Parma",
            region: "Emilia-Romagna",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Sciences de l'Alimentation", "Médecine", "Ingénierie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "27,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "9" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://www.unipr.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MODENA_17",
        nom_fr: "Università di Modena e Reggio Emilia (UNIMORE)",
        nom_it: "Università di Modena e Reggio Emilia (UNIMORE)",
        type_statut: "Publique",
        classement_national_simule: 700,
        description_courte: "Université prestigieuse située à Modena (Emilia-Romagna). Reconnue pour ses programmes en Ingénierie Automobile, Médecine.",
        localisation: {
            ville: "Modena",
            region: "Emilia-Romagna",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie Automobile", "Médecine", "Physique"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "25,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "8" },
            { label: "Classement QS", valeur: "Top 700" }
        ],
        liens: {
            site_web_officiel: "https://www.unimore.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_TORINO_18",
        nom_fr: "Politecnico di Torino",
        nom_it: "Politecnico di Torino",
        type_statut: "Publique",
        classement_national_simule: 300,
        description_courte: "Université prestigieuse située à Torino (Piemonte). Reconnue pour ses programmes en Automobile, Ingénierie.",
        localisation: {
            ville: "Torino",
            region: "Piemonte",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Automobile", "Ingénierie", "Architecture"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "35,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "30" },
            { label: "Classement QS", valeur: "Top 300" }
        ],
        liens: {
            site_web_officiel: "https://www.polito.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_TORINO_19",
        nom_fr: "Università degli Studi di Torino",
        nom_it: "Università degli Studi di Torino",
        type_statut: "Publique",
        classement_national_simule: 500,
        description_courte: "Université prestigieuse située à Torino (Piemonte). Reconnue pour ses programmes en Management, Médecine.",
        localisation: {
            ville: "Torino",
            region: "Piemonte",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Management", "Médecine", "Chimie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "79,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "18" },
            { label: "Classement QS", valeur: "Top 500" }
        ],
        liens: {
            site_web_officiel: "https://www.unito.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_PADOVA_20",
        nom_fr: "Università degli Studi di Padova",
        nom_it: "Università degli Studi di Padova",
        type_statut: "Publique",
        classement_national_simule: 250,
        description_courte: "Université prestigieuse située à Padova (Veneto). Reconnue pour ses programmes en Physique, Psychologie.",
        localisation: {
            ville: "Padova",
            region: "Veneto",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Physique", "Psychologie", "Ingénierie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "65,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "50" },
            { label: "Classement QS", valeur: "Top 250" }
        ],
        liens: {
            site_web_officiel: "https://www.unipd.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_VENEZIA_21",
        nom_fr: "Università Ca’ Foscari Venezia",
        nom_it: "Università Ca’ Foscari Venezia",
        type_statut: "Publique",
        classement_national_simule: 700,
        description_courte: "Université prestigieuse située à Venezia (Veneto). Reconnue pour ses programmes en Langues, Économie.",
        localisation: {
            ville: "Venezia",
            region: "Veneto",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Langues", "Économie", "Sciences Humaines"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "23,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "20" },
            { label: "Classement QS", valeur: "Top 700" }
        ],
        liens: {
            site_web_officiel: "https://www.unive.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_VENEZIA_22",
        nom_fr: "Università IUAV di Venezia",
        nom_it: "Università IUAV di Venezia",
        type_statut: "Publique",
        classement_national_simule: 100,
        description_courte: "Université prestigieuse située à Venezia (Veneto). Reconnue pour ses programmes en Architecture, Urbanisme.",
        localisation: {
            ville: "Venezia",
            region: "Veneto",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Architecture", "Urbanisme", "Mode"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "5,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "4" },
            { label: "Classement QS", valeur: "Top 100 (Architecture)" }
        ],
        liens: {
            site_web_officiel: "https://www.iuav.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_FIRENZE_23",
        nom_fr: "Università di Firenze",
        nom_it: "Università di Firenze",
        type_statut: "Publique",
        classement_national_simule: 450,
        description_courte: "Université prestigieuse située à Firenze (Toscana). Reconnue pour ses programmes en Histoire de l'Art, Médecine.",
        localisation: {
            ville: "Firenze",
            region: "Toscana",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Histoire de l'Art", "Médecine", "Agriculture"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "53,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "15" },
            { label: "Classement QS", valeur: "Top 450" }
        ],
        liens: {
            site_web_officiel: "https://www.unifi.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_PISA_24",
        nom_fr: "Università di Pisa",
        nom_it: "Università di Pisa",
        type_statut: "Publique",
        classement_national_simule: 400,
        description_courte: "Université prestigieuse située à Pisa (Toscana). Reconnue pour ses programmes en Physique, Informatique.",
        localisation: {
            ville: "Pisa",
            region: "Toscana",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Physique", "Informatique", "Mathématiques"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "50,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "18" },
            { label: "Classement QS", valeur: "Top 400" }
        ],
        liens: {
            site_web_officiel: "https://www.unipi.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_PISA_25",
        nom_fr: "Scuola Superiore Sant’Anna",
        nom_it: "Scuola Superiore Sant’Anna",
        type_statut: "Publique",
        classement_national_simule: 20,
        description_courte: "Université prestigieuse située à Pisa (Toscana). Reconnue pour ses programmes en Robotique, Sciences Politiques.",
        localisation: {
            ville: "Pisa",
            region: "Toscana",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Robotique", "Sciences Politiques", "Économie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "800".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "10" },
            { label: "Classement QS", valeur: "Top 20 (Young Unis)" }
        ],
        liens: {
            site_web_officiel: "https://www.santannapisa.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_SIENA_26",
        nom_fr: "Università di Siena",
        nom_it: "Università di Siena",
        type_statut: "Publique",
        classement_national_simule: 750,
        description_courte: "Université prestigieuse située à Siena (Toscana). Reconnue pour ses programmes en Biotechnologie, Économie.",
        localisation: {
            ville: "Siena",
            region: "Toscana",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Biotechnologie", "Économie", "Droit"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "17,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "14" },
            { label: "Classement QS", valeur: "Top 750" }
        ],
        liens: {
            site_web_officiel: "https://www.unisi.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_GENOVA_27",
        nom_fr: "Università degli Studi di Genova",
        nom_it: "Università degli Studi di Genova",
        type_statut: "Publique",
        classement_national_simule: 600,
        description_courte: "Université prestigieuse située à Genova (Liguria). Reconnue pour ses programmes en Ingénierie, Médecine.",
        localisation: {
            ville: "Genova",
            region: "Liguria",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie", "Médecine", "Études Maritimes"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "32,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "16" },
            { label: "Classement QS", valeur: "Top 600" }
        ],
        liens: {
            site_web_officiel: "https://www.unige.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_TRENTO_28",
        nom_fr: "Università di Trento",
        nom_it: "Università di Trento",
        type_statut: "Publique",
        classement_national_simule: 450,
        description_courte: "Université prestigieuse située à Trento (Trentino-Alto Adige). Reconnue pour ses programmes en Sociologie, Sciences Cognitives.",
        localisation: {
            ville: "Trento",
            region: "Trentino-Alto Adige",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Sociologie", "Sciences Cognitives", "Droit"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "16,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "22" },
            { label: "Classement QS", valeur: "Top 450" }
        ],
        liens: {
            site_web_officiel: "https://www.unitn.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_BOLZANO_29",
        nom_fr: "Libera Università di Bolzano (unibz)",
        nom_it: "Libera Università di Bolzano (unibz)",
        type_statut: "Privée",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Bolzano (Trentino-Alto Adige). Reconnue pour ses programmes en Informatique, Économie.",
        localisation: {
            ville: "Bolzano",
            region: "Trentino-Alto Adige",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Informatique", "Économie", "Design"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "4,500".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "20" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.unibz.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_TRIESTE_30",
        nom_fr: "Università degli Studi di Trieste",
        nom_it: "Università degli Studi di Trieste",
        type_statut: "Publique",
        classement_national_simule: 700,
        description_courte: "Université prestigieuse située à Trieste (Friuli-Venezia Giulia). Reconnue pour ses programmes en Physique, Diplomatie Internationale.",
        localisation: {
            ville: "Trieste",
            region: "Friuli-Venezia Giulia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Physique", "Diplomatie Internationale", "Traduction"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "16,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "12" },
            { label: "Classement QS", valeur: "Top 700" }
        ],
        liens: {
            site_web_officiel: "https://www.units.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_TRIESTE_31",
        nom_fr: "SISSA",
        nom_it: "SISSA",
        type_statut: "Publique",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Trieste (Friuli-Venezia Giulia). Reconnue pour ses programmes en Mathématiques, Physique.",
        localisation: {
            ville: "Trieste",
            region: "Friuli-Venezia Giulia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Mathématiques", "Physique", "Neurosciences"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "300".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "10" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.sissa.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_NAPOLI_32",
        nom_fr: "Università degli Studi di Napoli Federico II",
        nom_it: "Università degli Studi di Napoli Federico II",
        type_statut: "Publique",
        classement_national_simule: 400,
        description_courte: "Université prestigieuse située à Napoli (Campania). Reconnue pour ses programmes en Ingénierie Aérospatiale, Apple Academy.",
        localisation: {
            ville: "Napoli",
            region: "Campania",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie Aérospatiale", "Apple Academy", "Droit"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "78,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "15" },
            { label: "Classement QS", valeur: "Top 400" }
        ],
        liens: {
            site_web_officiel: "https://www.unina.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_NAPOLI_33",
        nom_fr: "Università degli Studi di Napoli L’Orientale",
        nom_it: "Università degli Studi di Napoli L’Orientale",
        type_statut: "Publique",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Napoli (Campania). Reconnue pour ses programmes en Langues, Études Asiatiques.",
        localisation: {
            ville: "Napoli",
            region: "Campania",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Langues", "Études Asiatiques", "Sciences Politiques"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "11,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "5" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.unior.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_SALERNO_34",
        nom_fr: "Università degli Studi di Salerno",
        nom_it: "Università degli Studi di Salerno",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Salerno (Campania). Reconnue pour ses programmes en Pharmacie, Ingénierie.",
        localisation: {
            ville: "Salerno",
            region: "Campania",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Pharmacie", "Ingénierie", "Informatique"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "35,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "8" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://web.unisa.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_BARI_35",
        nom_fr: "Università degli Studi di Bari “Aldo Moro”",
        nom_it: "Università degli Studi di Bari “Aldo Moro”",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Bari (Puglia). Reconnue pour ses programmes en Médecine, Biologie.",
        localisation: {
            ville: "Bari",
            region: "Puglia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Médecine", "Biologie", "Droit"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "43,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "10" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://www.uniba.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_BARI_36",
        nom_fr: "Politecnico di Bari",
        nom_it: "Politecnico di Bari",
        type_statut: "Publique",
        classement_national_simule: 600,
        description_courte: "Université prestigieuse située à Bari (Puglia). Reconnue pour ses programmes en Ingénierie, Architecture.",
        localisation: {
            ville: "Bari",
            region: "Puglia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Ingénierie", "Architecture", "Design"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "10,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "8" },
            { label: "Classement QS", valeur: "Top 600 (Eng)" }
        ],
        liens: {
            site_web_officiel: "https://www.poliba.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_RENDE_37",
        nom_fr: "Università della Calabria (UNICAL)",
        nom_it: "Università della Calabria (UNICAL)",
        type_statut: "Publique",
        classement_national_simule: 1000,
        description_courte: "Université prestigieuse située à Rende (Calabria). Reconnue pour ses programmes en Informatique, Ingénierie.",
        localisation: {
            ville: "Rende",
            region: "Calabria",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Informatique", "Ingénierie", "Pharmacie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "28,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "12" },
            { label: "Classement QS", valeur: "Top 1000" }
        ],
        liens: {
            site_web_officiel: "https://www.unical.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_PALERMO_38",
        nom_fr: "Università degli Studi di Palermo",
        nom_it: "Università degli Studi di Palermo",
        type_statut: "Publique",
        classement_national_simule: 700,
        description_courte: "Université prestigieuse située à Palermo (Sicilia). Reconnue pour ses programmes en Architecture, Études Méditerranéennes.",
        localisation: {
            ville: "Palermo",
            region: "Sicilia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Architecture", "Études Méditerranéennes", "Droit"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "40,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "10" },
            { label: "Classement QS", valeur: "Top 700" }
        ],
        liens: {
            site_web_officiel: "https://www.unipa.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_CATANIA_39",
        nom_fr: "Università degli Studi di Catania",
        nom_it: "Università degli Studi di Catania",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Catania (Sicilia). Reconnue pour ses programmes en Agriculture, Physique.",
        localisation: {
            ville: "Catania",
            region: "Sicilia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Agriculture", "Physique", "Sciences Humaines"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "42,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "8" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://www.unict.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_MESSINA_40",
        nom_fr: "Università degli Studi di Messina",
        nom_it: "Università degli Studi di Messina",
        type_statut: "Publique",
        classement_national_simule: 800,
        description_courte: "Université prestigieuse située à Messina (Sicilia). Reconnue pour ses programmes en Médecine, Droit.",
        localisation: {
            ville: "Messina",
            region: "Sicilia",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Médecine", "Droit", "Biologie Marine"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "23,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "15" },
            { label: "Classement QS", valeur: "Top 800" }
        ],
        liens: {
            site_web_officiel: "https://www.unime.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_CAGLIARI_41",
        nom_fr: "Università degli Studi di Cagliari",
        nom_it: "Università degli Studi di Cagliari",
        type_statut: "Publique",
        classement_national_simule: 1000,
        description_courte: "Université prestigieuse située à Cagliari (Sardegna). Reconnue pour ses programmes en Biologie, Ingénierie.",
        localisation: {
            ville: "Cagliari",
            region: "Sardegna",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Biologie", "Ingénierie", "Archéologie"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "25,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "6" },
            { label: "Classement QS", valeur: "Top 1000" }
        ],
        liens: {
            site_web_officiel: "https://www.unica.it",
            contact_email: "info@example.it"
        }
    },
    {
        id_universite: "UNI_SASSARI_42",
        nom_fr: "Università degli Studi di Sassari",
        nom_it: "Università degli Studi di Sassari",
        type_statut: "Publique",
        classement_national_simule: 999,
        description_courte: "Université prestigieuse située à Sassari (Sardegna). Reconnue pour ses programmes en Vétérinaire, Agriculture.",
        localisation: {
            ville: "Sassari",
            region: "Sardegna",
            adresse_detail: "Adresse non disponible"
        },
        domaines_cles: ["Vétérinaire", "Agriculture", "Architecture"],
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            { label: "Étudiants", valeur: "13,000".replace(',', ' ') + "+" },
            { label: "Programmes (EN)", valeur: "4" },
            { label: "Classement QS", valeur: "N/A" }
        ],
        liens: {
            site_web_officiel: "https://www.uniss.it",
            contact_email: "info@example.it"
        }
    },
];

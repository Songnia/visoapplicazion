import json
import os

# Mapping pour la traduction des domaines
DOMAIN_TRANSLATIONS = {
    "Law": "Droit",
    "Medicine": "Médecine",
    "Humanities": "Sciences Humaines",
    "Engineering": "Ingénierie",
    "Architecture": "Architecture",
    "Design": "Design",
    "Sociology": "Sociologie",
    "Economics": "Économie",
    "Science": "Sciences",
    "Psychology": "Psychologie",
    "International Relations": "Relations Internationales",
    "Finance": "Finance",
    "Management": "Management",
    "Musicology": "Musicologie",
    "Languages": "Langues",
    "Business": "Commerce",
    "Communication": "Communication",
    "Tourism": "Tourisme",
    "Classics": "Lettres Classiques",
    "Physics": "Physique",
    "Education": "Éducation",
    "Political Science": "Sciences Politiques",
    "History": "Histoire",
    "Agriculture": "Agriculture",
    "Food Science": "Sciences de l'Alimentation",
    "Automotive Engineering": "Ingénierie Automobile",
    "Automotive": "Automobile",
    "Chemistry": "Chimie",
    "Asian Studies": "Études Asiatiques",
    "Urban Planning": "Urbanisme",
    "Fashion": "Mode",
    "Art History": "Histoire de l'Art",
    "Computer Science": "Informatique",
    "Mathematics": "Mathématiques",
    "Robotics": "Robotique",
    "Biotechnology": "Biotechnologie",
    "Maritime Studies": "Études Maritimes",
    "Cognitive Science": "Sciences Cognitives",
    "International Diplomacy": "Diplomatie Internationale",
    "Translation": "Traduction",
    "Neuroscience": "Neurosciences",
    "Aerospace Engineering": "Ingénierie Aérospatiale",
    "Apple Academy": "Apple Academy",
    "Pharmacy": "Pharmacie",
    "Biology": "Biologie",
    "Mediterranean Studies": "Études Méditerranéennes",
    "Marine Biology": "Biologie Marine",
    "Archaeology": "Archéologie",
    "Veterinary": "Vétérinaire"
}

def convert_universities():
    # Lire le fichier JSON source
    with open('data/universities_data.json', 'r', encoding='utf-8') as f:
        universities_data = json.load(f)

    js_content = """// Base de données des universités italiennes
// Structure optimisée pour l'affichage et le filtrage
// Généré automatiquement à partir de universities_data.json

const UNIVERSITIES_DATABASE = [
"""

    for i, uni in enumerate(universities_data):
        # Générer un ID unique
        uni_id = f"UNI_{uni['city'].upper().replace(' ', '_')}_{i+1}"
        
        # Traduire le type
        type_statut = "Publique" if "Public" in uni['type'] else "Privée"
        
        # Traduire les domaines
        domaines = [DOMAIN_TRANSLATIONS.get(d, d) for d in uni['specialties']]
        
        # Générer une description courte
        desc = f"Université prestigieuse située à {uni['city']} ({uni['region']}). Reconnue pour ses programmes en {', '.join(domaines[:2])}."
        
        # Formater le classement
        classement = 999
        if "Top" in uni['qs_ranking']:
            try:
                classement = int(''.join(filter(str.isdigit, uni['qs_ranking'])))
            except:
                pass

        js_entry = f"""    {{
        id_universite: "{uni_id}",
        nom_fr: "{uni['name']}",
        nom_it: "{uni['name']}",
        type_statut: "{type_statut}",
        classement_national_simule: {classement},
        description_courte: "{desc}",
        localisation: {{
            ville: "{uni['city']}",
            region: "{uni['region']}",
            adresse_detail: "Adresse non disponible"
        }},
        domaines_cles: {json.dumps(domaines, ensure_ascii=False)},
        niveaux_etudes: ["Licence", "Master", "Doctorat"],
        statistiques_cles: [
            {{ label: "Étudiants", valeur: "{uni['students']:,}".replace(',', ' ') + "+" }},
            {{ label: "Programmes (EN)", valeur: "{uni['programs_english']}" }},
            {{ label: "Classement QS", valeur: "{uni['qs_ranking']}" }}
        ],
        liens: {{
            site_web_officiel: "{uni['website']}",
            contact_email: "info@example.it"
        }}
    }},"""
        js_content += js_entry + "\n"

    js_content += "];\n"

    # Écrire le fichier JS
    with open('data/universities.js', 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Conversion terminée ! {len(universities_data)} universités traitées.")

if __name__ == "__main__":
    convert_universities()

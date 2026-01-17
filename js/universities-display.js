// ============================================
// VISTO - Affichage dynamique des universités
// Gestion des filtres et rendu des cartes
// ============================================

// État global des filtres
let currentFilters = {
    city: '',
    domain: '',
    level: '',
    search: ''
};

// Fonction pour extraire toutes les villes uniques
function getAllCities() {
    const cities = new Set();
    UNIVERSITIES_DATABASE.forEach(uni => {
        cities.add(uni.localisation.ville);
    });
    return Array.from(cities).sort();
}

// Fonction pour extraire tous les domaines uniques
function getAllDomains() {
    const domains = new Set();
    UNIVERSITIES_DATABASE.forEach(uni => {
        uni.domaines_cles.forEach(domain => {
            domains.add(domain);
        });
    });
    return Array.from(domains).sort();
}

// Fonction pour extraire tous les niveaux uniques
function getAllLevels() {
    const levels = new Set();
    UNIVERSITIES_DATABASE.forEach(uni => {
        uni.niveaux_etudes.forEach(level => {
            levels.add(level);
        });
    });
    return Array.from(levels).sort();
}

// Fonction pour peupler les filtres
function populateFilters() {
    // Villes
    const cityFilter = document.getElementById('city-filter');
    if (cityFilter) {
        const cities = getAllCities();
        cityFilter.innerHTML = '<option value="">Toutes les villes</option>';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });
    }

    // Domaines
    const domainFilter = document.getElementById('domain-filter');
    if (domainFilter) {
        const domains = getAllDomains();
        domainFilter.innerHTML = '<option value="">Tous les domaines</option>';
        domains.forEach(domain => {
            const option = document.createElement('option');
            option.value = domain;
            option.textContent = domain;
            domainFilter.appendChild(option);
        });
    }

    // Niveaux
    const levelFilter = document.getElementById('level-filter');
    if (levelFilter) {
        const levels = getAllLevels();
        levelFilter.innerHTML = '<option value="">Tous les niveaux</option>';
        levels.forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.textContent = level;
            levelFilter.appendChild(option);
        });
    }
}

// Fonction pour filtrer les universités
function filterUniversities() {
    let filtered = [...UNIVERSITIES_DATABASE];

    // Filtre par recherche textuelle
    if (currentFilters.search) {
        const searchTerm = currentFilters.search.toLowerCase();
        filtered = filtered.filter(uni => {
            const searchableText = [
                uni.nom_fr,
                uni.nom_it,
                uni.localisation.ville,
                uni.localisation.region,
                ...uni.domaines_cles,
                uni.description_courte
            ].join(' ').toLowerCase();

            return searchableText.includes(searchTerm);
        });
    }

    // Filtre par ville
    if (currentFilters.city) {
        filtered = filtered.filter(uni =>
            uni.localisation.ville === currentFilters.city
        );
    }

    // Filtre par domaine
    if (currentFilters.domain) {
        filtered = filtered.filter(uni =>
            uni.domaines_cles.includes(currentFilters.domain)
        );
    }

    // Filtre par niveau
    if (currentFilters.level) {
        filtered = filtered.filter(uni =>
            uni.niveaux_etudes.includes(currentFilters.level)
        );
    }

    // Trier par classement
    filtered.sort((a, b) => a.classement_national_simule - b.classement_national_simule);

    return filtered;
}

// Fonction pour créer une carte d'université
function createUniversityCard(university, rank) {
    const card = document.createElement('div');
    // On garde la classe de base mais on ajoute des styles inline pour garantir la visibilité
    card.className = 'university-card';

    // Styles de secours critiques
    card.style.display = 'block';
    card.style.visibility = 'visible';
    card.style.opacity = '1';
    card.style.marginBottom = '2rem';
    card.style.backgroundColor = 'var(--color-surface, #ffffff)';
    card.style.borderRadius = 'var(--radius-xl, 12px)';
    card.style.padding = 'var(--spacing-xl, 1.5rem)';
    card.style.boxShadow = 'var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))';

    // Créer les badges de domaines
    const domainBadges = university.domaines_cles.slice(0, 3).map(domain =>
        `<span class="badge badge-primary" style="display:inline-block; margin-right:0.5rem; margin-bottom:0.5rem;">${domain}</span>`
    ).join('');

    // Créer les statistiques
    const stats = university.statistiques_cles.slice(0, 3).map(stat => `
        <div class="stat">
            <span class="stat-label">${stat.label}</span>
            <span class="stat-value">${stat.valeur}</span>
        </div>
    `).join('');

    // Badge de statut
    const statusBadge = university.type_statut === 'Privée'
        ? '<span class="badge badge-secondary">Privée</span>'
        : '<span class="badge badge-success">Publique</span>';

    card.innerHTML = `
        <div class="university-rank">${rank}</div>
        <div class="university-info">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-sm);">
                <h2 class="university-name">${university.nom_it}</h2>
                ${statusBadge}
            </div>
            <div class="university-location">📍 ${university.localisation.ville}, ${university.localisation.region}</div>
            <div class="university-specialties">
                ${domainBadges}
            </div>
            <p class="text-muted">
                ${university.description_courte}
            </p>
            <div class="university-stats">
                ${stats}
            </div>
            <div style="margin-top: var(--spacing-lg);">
                <a href="${university.liens.site_web_officiel}" target="_blank" class="btn btn-primary">
                    Visiter le site →
                </a>
            </div>
        </div>
    `;

    return card;
}

// Fonction pour afficher les universités
function displayUniversities() {
    const container = document.getElementById('universities-container');
    if (!container) {
        console.error('Container universities-container not found!');
        return;
    }

    const filtered = filterUniversities();
    console.log(`Displaying ${filtered.length} universities`);

    // Afficher message si aucun résultat
    if (filtered.length === 0) {
        const activeFilters = [];
        if (currentFilters.search) activeFilters.push(`Recherche: "${currentFilters.search}"`);
        if (currentFilters.city) activeFilters.push(`Ville: ${currentFilters.city}`);
        if (currentFilters.domain) activeFilters.push(`Domaine: ${currentFilters.domain}`);
        if (currentFilters.level) activeFilters.push(`Niveau: ${currentFilters.level}`);

        const filtersList = activeFilters.length > 0
            ? `<div style="margin-top: var(--spacing-lg); padding: var(--spacing-lg); background: var(--color-background); border-radius: var(--radius-lg);">
                <p style="margin-bottom: var(--spacing-sm); font-weight: var(--font-weight-semibold);">Filtres actifs :</p>
                <ul style="margin: 0; padding-left: var(--spacing-xl);">
                    ${activeFilters.map(f => `<li>${f}</li>`).join('')}
                </ul>
               </div>`
            : '';

        container.innerHTML = `
            <div class="text-center py-4xl">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">🔍</div>
                <h3 style="margin-bottom: var(--spacing-md);">Aucune université trouvée</h3>
                <p class="text-muted" style="margin-bottom: var(--spacing-xl);">
                    Aucune université ne correspond à vos critères de recherche.
                </p>
                ${filtersList}
                <button onclick="resetFilters()" class="btn btn-primary mt-xl">
                    🔄 Réinitialiser tous les filtres
                </button>
            </div>
        `;
        return;
    }

    // Afficher le nombre de résultats
    const resultsCount = document.createElement('div');
    resultsCount.className = 'text-center';
    resultsCount.style.marginBottom = 'var(--spacing-xl)';
    resultsCount.innerHTML = `
        <p class="text-muted">
            <strong>${filtered.length}</strong> université${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}
        </p>
    `;

    container.innerHTML = '';
    container.appendChild(resultsCount);

    // Afficher les universités
    console.log('Creating university cards...');
    filtered.forEach((university, index) => {
        const card = createUniversityCard(university, index + 1);
        container.appendChild(card);
        console.log(`Added card for: ${university.nom_it}`);
    });
    console.log('All cards added to container');

    // Scroll vers les résultats après un court délai
    setTimeout(() => {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Fonction pour réinitialiser les filtres
function resetFilters() {
    currentFilters = {
        city: '',
        domain: '',
        level: '',
        search: ''
    };

    document.getElementById('city-filter').value = '';
    document.getElementById('domain-filter').value = '';
    document.getElementById('level-filter').value = '';
    document.getElementById('search-input').value = '';

    displayUniversities();
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    // Peupler les filtres
    populateFilters();

    // Afficher toutes les universités
    displayUniversities();

    // Ajouter les écouteurs d'événements pour les filtres
    const cityFilter = document.getElementById('city-filter');
    const domainFilter = document.getElementById('domain-filter');
    const levelFilter = document.getElementById('level-filter');
    const searchInput = document.getElementById('search-input');

    if (cityFilter) {
        cityFilter.addEventListener('change', function () {
            currentFilters.city = this.value;
            displayUniversities();
        });
    }

    if (domainFilter) {
        domainFilter.addEventListener('change', function () {
            currentFilters.domain = this.value;
            displayUniversities();
        });
    }

    if (levelFilter) {
        levelFilter.addEventListener('change', function () {
            currentFilters.level = this.value;
            displayUniversities();
        });
    }

    if (searchInput) {
        // Recherche en temps réel avec debounce
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentFilters.search = this.value.trim();
                displayUniversities();
            }, 300); // Attendre 300ms après la dernière frappe
        });
    }
});

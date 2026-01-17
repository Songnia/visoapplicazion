/**
 * Blog System - Version Simplifiée
 * Approche directe et testée
 */

// Variables globales
let allPosts = [];
let allCategories = [];
let currentCategory = 'tous';
let currentSearchQuery = '';
let currentPage = 1;
const postsPerPage = 6;

// Chargement initial
document.addEventListener('DOMContentLoaded', async function () {
    console.log('🚀 Blog system initializing...');
    await loadBlogData();
    setupEventListeners();
    renderCategories();
    renderPosts();
});

// Charger les données du blog
async function loadBlogData() {
    try {
        console.log('� Fetching blog-posts.json...');
        const response = await fetch('data/blog-posts.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        allPosts = data.posts;
        allCategories = data.categories;

        console.log('✅ Loaded successfully!');
        console.log('   - Posts:', allPosts.length);
        console.log('   - Categories:', allCategories.length);

    } catch (error) {
        console.error('❌ Error loading blog data:', error);
        showError('Impossible de charger les articles du blog');
    }
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Recherche
    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            currentSearchQuery = e.target.value.toLowerCase();
            currentPage = 1;
            renderPosts();
        });
    }
}

// Rendu des catégories
function renderCategories() {
    const container = document.getElementById('category-filters');
    if (!container) {
        console.warn('⚠️ Category filters container not found');
        return;
    }

    console.log('🏷️ Rendering categories...');

    const categoriesHTML = allCategories.map(cat => `
        <button 
            class="filter-btn ${cat.slug === currentCategory ? 'active' : ''}" 
            onclick="filterByCategory('${cat.slug}')"
        >
            ${cat.name} (${cat.count})
        </button>
    `).join('');

    container.innerHTML = categoriesHTML;
    console.log('✅ Categories rendered');
}

// Filtrer par catégorie
function filterByCategory(categorySlug) {
    console.log('🔍 Filtering by category:', categorySlug);
    currentCategory = categorySlug;
    currentPage = 1;
    renderCategories();
    renderPosts();
}

// Obtenir les posts filtrés
function getFilteredPosts() {
    let filtered = allPosts;

    // Filtre par catégorie
    if (currentCategory !== 'tous') {
        filtered = filtered.filter(post => {
            const categoryMatch = post.category.toLowerCase() === currentCategory.replace('-', ' ');
            return categoryMatch;
        });
    }

    // Filtre par recherche
    if (currentSearchQuery) {
        filtered = filtered.filter(post => {
            return post.title.toLowerCase().includes(currentSearchQuery) ||
                post.excerpt.toLowerCase().includes(currentSearchQuery) ||
                post.category.toLowerCase().includes(currentSearchQuery) ||
                post.tags.some(tag => tag.toLowerCase().includes(currentSearchQuery));
        });
    }

    return filtered;
}

// Rendu des posts
function renderPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) {
        console.error('❌ Blog posts container not found!');
        return;
    }

    console.log('📝 Rendering posts...');

    // Vérifier si les données sont chargées
    if (allPosts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-4xl);">
                <p style="color: var(--color-text-secondary);">Chargement des articles...</p>
            </div>
        `;
        return;
    }

    // Obtenir les posts filtrés
    const filteredPosts = getFilteredPosts();

    console.log('   - Total posts:', allPosts.length);
    console.log('   - Filtered posts:', filteredPosts.length);

    // Vérifier s'il y a des résultats
    if (filteredPosts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-4xl);">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">📭</div>
                <h3>Aucun article trouvé</h3>
                <p class="text-muted">
                    ${currentSearchQuery
                ? `Aucun article ne correspond à "${currentSearchQuery}"`
                : 'Aucun article dans cette catégorie'}
                </p>
                <button class="btn btn-outline mt-lg" onclick="resetFilters()">
                    Réinitialiser les filtres
                </button>
            </div>
        `;
        return;
    }

    // Pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);

    console.log('   - Showing posts:', postsToShow.length);

    // Générer le HTML des posts
    const postsHTML = postsToShow.map(post => createPostCard(post)).join('');
    container.innerHTML = postsHTML;

    // Rendu de la pagination
    renderPagination(filteredPosts.length);

    // Déclencher les animations
    setTimeout(() => {
        const cards = container.querySelectorAll('.fade-in');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100); // Animation en cascade
        });
    }, 50);

    console.log('✅ Posts rendered successfully');
}

// Créer une carte de post
function createPostCard(post) {
    return `
        <div class="blog-card fade-in">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>📅 ${formatDate(post.date)}</span>
                    <span>•</span>
                    <span>🏷️ ${post.category}</span>
                    <span>•</span>
                    <span>⏱️ ${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="text-muted">${post.excerpt}</p>
                <a href="blog-post.html?slug=${post.slug}" class="btn btn-outline mt-md">
                    Lire l'article →
                </a>
            </div>
        </div>
    `;
}

// Rendu de la pagination
function renderPagination(totalPosts) {
    const container = document.getElementById('pagination-container');
    if (!container) return;

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Masquer si une seule page
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let paginationHTML = '<div class="pagination">';

    // Bouton Précédent
    paginationHTML += `
        <button 
            class="pagination-btn" 
            ${currentPage === 1 ? 'disabled' : ''}
            onclick="goToPage(${currentPage - 1})"
        >
            ← Précédent
        </button>
    `;

    // Numéros de page
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button 
                    class="pagination-btn ${i === currentPage ? 'active' : ''}"
                    onclick="goToPage(${i})"
                >
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<span class="pagination-dots">...</span>';
        }
    }

    // Bouton Suivant
    paginationHTML += `
        <button 
            class="pagination-btn" 
            ${currentPage === totalPages ? 'disabled' : ''}
            onclick="goToPage(${currentPage + 1})"
        >
            Suivant →
        </button>
    `;

    paginationHTML += '</div>';
    container.innerHTML = paginationHTML;
}

// Aller à une page
function goToPage(page) {
    currentPage = page;
    renderPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Réinitialiser les filtres
function resetFilters() {
    currentCategory = 'tous';
    currentSearchQuery = '';
    currentPage = 1;

    const searchInput = document.getElementById('blog-search');
    if (searchInput) searchInput.value = '';

    renderCategories();
    renderPosts();
}

// Formater la date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Afficher une erreur
function showError(message) {
    const container = document.getElementById('blog-posts-container');
    if (container) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-4xl);">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">⚠️</div>
                <h3>Erreur de chargement</h3>
                <p class="text-muted">${message}</p>
            </div>
        `;
    }
}

console.log('📦 Blog script loaded');

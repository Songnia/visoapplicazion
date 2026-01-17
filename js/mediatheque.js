// ============================================
// VISTO - Médiathèque (Media Library)
// Google Drive-like document management
// ============================================

// Document structure (in production, this would come from a backend/database)
const DOCUMENT_LIBRARY = {
    folders: [
        {
            id: 'visa',
            name: 'Documents Visa',
            icon: '📋',
            description: 'Formulaires et guides pour la demande de visa étudiant',
            documents: [
                { id: 1, name: 'Formulaire_Demande_Visa_National_D.pdf', size: '245 KB', type: 'pdf', url: 'assets/documents/visa/Formulaire_Demande_Visa_National_D.pdf' },
                { id: 2, name: 'Checklist_Documents_Visa_Etude.pdf', size: '180 KB', type: 'pdf', url: 'assets/documents/visa/Checklist_Documents_Visa_Etude.pdf' },
                { id: 3, name: 'Modele_Lettre_Explicative_Visa.docx', size: '45 KB', type: 'docx', url: 'assets/documents/visa/Modele_Lettre_Explicative_Visa.docx' }
            ]
        },
        {
            id: 'motivation',
            name: 'Lettres de Motivation',
            icon: '✍️',
            description: 'Exemples et modèles de lettres de motivation',
            documents: [
                { id: 4, name: 'Modele_Lettre_Motivation_Master.docx', size: '38 KB', type: 'docx', url: 'assets/documents/motivation/Modele_Lettre_Motivation_Master.docx' },
                { id: 5, name: 'Modele_Lettre_Motivation_Licence.docx', size: '42 KB', type: 'docx', url: 'assets/documents/motivation/Modele_Lettre_Motivation_Licence.docx' },
                { id: 6, name: 'Structure_Type_Lettre_Motivation.pdf', size: '320 KB', type: 'pdf', url: 'assets/documents/motivation/Structure_Type_Lettre_Motivation.pdf' }
            ]
        },
        {
            id: 'garant',
            name: 'Documents Garant',
            icon: '👤',
            description: 'Formulaires et attestations de garant financier',
            documents: [
                { id: 7, name: 'Modele_Engagement_Prise_En_Charge.docx', size: '28 KB', type: 'docx', url: 'assets/documents/garant/Modele_Engagement_Prise_En_Charge.docx' },
                { id: 8, name: 'Liste_Documents_Garant_Financier.pdf', size: '156 KB', type: 'pdf', url: 'assets/documents/garant/Liste_Documents_Garant_Financier.pdf' }
            ]
        },
        {
            id: 'administratif',
            name: 'Documents Administratifs',
            icon: '📄',
            description: 'Formulaires administratifs divers',
            documents: [
                { id: 9, name: 'Guide_Inscription_Universitaly.pdf', size: '1.2 MB', type: 'pdf', url: 'assets/documents/administratif/Guide_Inscription_Universitaly.pdf' },
                { id: 10, name: 'Declaration_De_Valeur_Modele.pdf', size: '189 KB', type: 'pdf', url: 'assets/documents/administratif/Declaration_De_Valeur_Modele.pdf' }
            ]
        },
        {
            id: 'guides',
            name: 'Guides Pratiques',
            icon: '📚',
            description: 'Guides complets pour étudiants',
            documents: [
                { id: 11, name: 'Guide_Complet_Etudier_En_Italie_2025.pdf', size: '2.8 MB', type: 'pdf', url: 'assets/documents/guides/Guide_Complet_Etudier_En_Italie_2025.pdf' },
                { id: 12, name: 'Budget_Previsionnel_Etudiant.xlsx', size: '78 KB', type: 'xlsx', url: 'assets/documents/guides/Budget_Previsionnel_Etudiant.xlsx' },
                { id: 13, name: 'Guide_Installation_Etudiant_Italie.pdf', size: '3.4 kB', type: 'pdf', url: 'assets/documents/guides/Guide_Installation_Etudiant_Italie.pdf' },
                { id: 14, name: 'Mega_Guide_Etudes_Italie_2025.pdf', size: '3.8 KB', type: 'pdf', url: 'assets/documents/guides/Mega_Guide_Etudes_Italie_2025.pdf' }
                
            ]
        }
    ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function getFileIcon(type) {
    const icons = {
        'pdf': '📕',
        'docx': '📘',
        'xlsx': '📊',
        'doc': '📄',
        'zip': '🗜️',
        'jpg': '🖼️',
        'png': '🖼️'
    };
    return icons[type] || '📄';
}

function formatFileSize(size) {
    return size; // Already formatted in mock data
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderFolders() {
    const foldersContainer = document.getElementById('folders-container');
    if (!foldersContainer) return;

    foldersContainer.innerHTML = '';

    DOCUMENT_LIBRARY.folders.forEach(folder => {
        const folderCard = document.createElement('div');
        folderCard.className = 'folder-card card hover-lift fade-in';
        folderCard.innerHTML = `
      <div class="folder-icon">${folder.icon}</div>
      <h3 class="folder-name">${folder.name}</h3>
      <p class="folder-description">${folder.description}</p>
      <div class="folder-meta">
        <span class="badge badge-primary">${folder.documents.length} documents</span>
      </div>
    `;

        folderCard.addEventListener('click', () => {
            openFolder(folder);
        });

        foldersContainer.appendChild(folderCard);
    });

    // Trigger fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.folder-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

function openFolder(folder) {
    const foldersView = document.getElementById('folders-view');
    const documentsView = document.getElementById('documents-view');
    const folderTitle = document.getElementById('folder-title');
    const documentsContainer = document.getElementById('documents-container');

    if (!foldersView || !documentsView) return;

    // Update title
    if (folderTitle) {
        folderTitle.innerHTML = `${folder.icon} ${folder.name}`;
    }

    // Render documents
    if (documentsContainer) {
        documentsContainer.innerHTML = '';

        folder.documents.forEach(doc => {
            const docRow = document.createElement('div');
            docRow.className = 'document-row fade-in';

            // Preview button only for PDFs
            const previewButton = doc.type === 'pdf'
                ? `<a href="${doc.url}" target="_blank" class="btn btn-sm btn-outline" style="margin-right: 5px;">👁️ Aperçu</a>`
                : '';

            docRow.innerHTML = `
        <div class="document-icon">${getFileIcon(doc.type)}</div>
        <div class="document-info">
          <div class="document-name">${doc.name}</div>
          <div class="document-meta">${doc.size}</div>
        </div>
        <div class="document-actions">
          ${previewButton}
          <button class="btn btn-sm btn-outline" onclick="downloadDocument(${doc.id}, '${doc.name}', '${doc.url}')">
            📥 Télécharger
          </button>
        </div>
      `;

            documentsContainer.appendChild(docRow);
        });

        // Trigger fade-in animation
        setTimeout(() => {
            document.querySelectorAll('.document-row').forEach(row => {
                row.classList.add('visible');
            });
        }, 100);
    }

    // Switch views
    foldersView.style.display = 'none';
    documentsView.style.display = 'block';

    // Store current folder
    documentsView.dataset.folderId = folder.id;
}

function closeFolder() {
    const foldersView = document.getElementById('folders-view');
    const documentsView = document.getElementById('documents-view');

    if (!foldersView || !documentsView) return;

    foldersView.style.display = 'block';
    documentsView.style.display = 'none';
}

function downloadDocument(docId, docName, docUrl) {
    // Si une URL est fournie, on ouvre le document
    if (docUrl && docUrl !== '#') {
        const link = document.createElement('a');
        link.href = docUrl;
        link.download = docName; // Suggère le nom du fichier pour le téléchargement
        link.target = '_blank'; // Ouvre dans un nouvel onglet si le navigateur le préfère
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showNotification(`Téléchargement de "${docName}" lancé...`, 'success', 3000);
    } else {
        // Fallback pour les démos sans fichier réel
        showNotification(`Le document "${docName}" sera bientôt disponible.`, 'info', 3000);
    }
}

// Make globally available
window.downloadDocument = downloadDocument;
window.closeFolder = closeFolder;

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function searchDocuments(query) {
    const searchResults = document.getElementById('search-results');
    const foldersView = document.getElementById('folders-view');

    if (!query.trim()) {
        // Show all folders if search is empty
        if (searchResults) searchResults.style.display = 'none';
        if (foldersView) foldersView.style.display = 'block';
        renderFolders();
        return;
    }

    const results = [];
    const queryLower = query.toLowerCase();

    // Search through all documents
    DOCUMENT_LIBRARY.folders.forEach(folder => {
        folder.documents.forEach(doc => {
            if (doc.name.toLowerCase().includes(queryLower)) {
                results.push({
                    document: doc,
                    folder: folder
                });
            }
        });
    });

    // Display results
    if (searchResults) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = `
        <div class="no-results">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>Aucun document trouvé</h3>
          <p>Essayez avec d'autres mots-clés</p>
        </div>
      `;
        } else {
            results.forEach(result => {
                const resultRow = document.createElement('div');
                resultRow.className = 'document-row fade-in';

                // Preview button only for PDFs
                const previewButton = result.document.type === 'pdf'
                    ? `<a href="${result.document.url}" target="_blank" class="btn btn-sm btn-outline" style="margin-right: 5px;">👁️ Aperçu</a>`
                    : '';

                resultRow.innerHTML = `
          <div class="document-icon">${getFileIcon(result.document.type)}</div>
          <div class="document-info">
            <div class="document-name">${result.document.name}</div>
            <div class="document-meta">
              ${result.folder.icon} ${result.folder.name} • ${result.document.size}
            </div>
          </div>
          <div class="document-actions">
            ${previewButton}
            <button class="btn btn-sm btn-outline" onclick="downloadDocument(${result.document.id}, '${result.document.name}', '${result.document.url}')">
              📥 Télécharger
            </button>
          </div>
        `;

                searchResults.appendChild(resultRow);
            });

            // Trigger fade-in animation
            setTimeout(() => {
                document.querySelectorAll('.document-row').forEach(row => {
                    row.classList.add('visible');
                });
            }, 100);
        }

        searchResults.style.display = 'block';
        if (foldersView) foldersView.style.display = 'none';
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Render folders on page load
    renderFolders();

    // Setup search
    const searchInput = document.getElementById('mediatheque-search');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchDocuments(this.value);
            }, 300); // Debounce search
        });
    }

    // Back button
    const backButton = document.getElementById('back-to-folders');
    if (backButton) {
        backButton.addEventListener('click', closeFolder);
    }
});

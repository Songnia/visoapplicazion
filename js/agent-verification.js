// ============================================
// VISTO - Agent Verification System
// Combat fraud in student mobility sector
// ============================================

// Verified agents database (in production, this would be a real database)
const VERIFIED_AGENTS = [
    {
        id: 1,
        name: 'StudyItaly Pro',
        registrationNumber: 'IT-2023-001',
        location: 'Rome, Italie',
        verified: true,
        rating: 4.8,
        studentsHelped: 450,
        specializations: ['Visa', 'Logement', 'Inscription'],
        contact: {
            email: 'contact@studyitalypro.it',
            phone: '+39 06 1234 5678',
            website: 'www.studyitalypro.it'
        },
        verifiedSince: '2023-01-15',
        certifications: ['Certified Education Agent', 'Italian Ministry Approved']
    },
    {
        id: 2,
        name: 'Milano Education Services',
        registrationNumber: 'IT-2022-045',
        location: 'Milan, Italie',
        verified: true,
        rating: 4.9,
        studentsHelped: 680,
        specializations: ['Master', 'MBA', 'Bourses'],
        contact: {
            email: 'info@milanoedu.com',
            phone: '+39 02 9876 5432',
            website: 'www.milanoedu.com'
        },
        verifiedSince: '2022-06-20',
        certifications: ['ICEF Certified', 'AIRC Member']
    },
    {
        id: 3,
        name: 'Bologna Student Hub',
        registrationNumber: 'IT-2023-089',
        location: 'Bologna, Italie',
        verified: true,
        rating: 4.7,
        studentsHelped: 320,
        specializations: ['Licence', 'Logement', 'Intégration'],
        contact: {
            email: 'hello@bolognastudent.it',
            phone: '+39 051 2468 1357',
            website: 'www.bolognastudent.it'
        },
        verifiedSince: '2023-03-10',
        certifications: ['Verified Education Consultant']
    },
    {
        id: 4,
        name: 'Florence Academic Partners',
        registrationNumber: 'IT-2021-012',
        location: 'Florence, Italie',
        verified: true,
        rating: 4.6,
        studentsHelped: 520,
        specializations: ['Arts', 'Design', 'Architecture'],
        contact: {
            email: 'contact@florenceacademic.it',
            phone: '+39 055 7890 1234',
            website: 'www.florenceacademic.it'
        },
        verifiedSince: '2021-09-05',
        certifications: ['Education Italy Certified', 'NAFSA Member']
    }
];

// Reported fraudulent agents (for demonstration)
const REPORTED_AGENTS = [
    {
        name: 'Quick Visa Italy',
        reason: 'Multiple fraud complaints',
        reportCount: 12
    },
    {
        name: 'Easy Study Rome',
        reason: 'Fake documents',
        reportCount: 8
    }
];

// ============================================
// SEARCH FUNCTIONS
// ============================================

function searchAgent(query) {
    const queryLower = query.toLowerCase().trim();

    if (!queryLower) {
        return {
            success: false,
            message: 'Veuillez entrer un nom ou numéro d\'enregistrement'
        };
    }

    // Search in verified agents
    const verifiedMatch = VERIFIED_AGENTS.find(agent =>
        agent.name.toLowerCase().includes(queryLower) ||
        agent.registrationNumber.toLowerCase().includes(queryLower)
    );

    if (verifiedMatch) {
        return {
            success: true,
            verified: true,
            agent: verifiedMatch
        };
    }

    // Check if in reported list
    const reportedMatch = REPORTED_AGENTS.find(agent =>
        agent.name.toLowerCase().includes(queryLower)
    );

    if (reportedMatch) {
        return {
            success: true,
            verified: false,
            reported: true,
            agent: reportedMatch
        };
    }

    // Not found
    return {
        success: true,
        verified: false,
        reported: false,
        message: 'Agent non trouvé dans notre base de données'
    };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function displayVerifiedAgent(agent) {
    return `
    <div class="verification-result verified fade-in">
      <div class="verification-header">
        <div class="verification-icon success">
          <div class="success-checkmark"></div>
        </div>
        <h2>Agent Vérifié ✓</h2>
        <p class="text-muted">Cet agent est certifié et approuvé par VISTO</p>
      </div>
      
      <div class="agent-details">
        <div class="agent-main-info">
          <h3>${agent.name}</h3>
          <div class="agent-meta">
            <span class="badge badge-success">Vérifié</span>
            <span class="badge badge-primary">${agent.location}</span>
          </div>
          <div class="agent-rating">
            <span class="stars">${'⭐'.repeat(Math.floor(agent.rating))}</span>
            <span class="rating-value">${agent.rating}/5</span>
            <span class="text-muted">(${agent.studentsHelped} étudiants aidés)</span>
          </div>
        </div>
        
        <div class="agent-info-grid">
          <div class="info-item">
            <div class="info-label">Numéro d'enregistrement</div>
            <div class="info-value">${agent.registrationNumber}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Vérifié depuis</div>
            <div class="info-value">${new Date(agent.verifiedSince).toLocaleDateString('fr-FR')}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Spécialisations</div>
            <div class="info-value">
              ${agent.specializations.map(s => `<span class="badge badge-primary">${s}</span>`).join(' ')}
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">Certifications</div>
            <div class="info-value">
              ${agent.certifications.map(c => `<div>✓ ${c}</div>`).join('')}
            </div>
          </div>
        </div>
        
        <div class="agent-contact">
          <h4>Coordonnées</h4>
          <div class="contact-grid">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:${agent.contact.email}">${agent.contact.email}</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <a href="tel:${agent.contact.phone}">${agent.contact.phone}</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🌐</span>
              <a href="https://${agent.contact.website}" target="_blank">${agent.contact.website}</a>
            </div>
          </div>
        </div>
        
        <div class="trust-indicators">
          <div class="trust-item">
            <span class="trust-icon">🛡️</span>
            <span>Identité vérifiée</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">📋</span>
            <span>Documents validés</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">⭐</span>
            <span>Avis clients vérifiés</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">✅</span>
            <span>Aucune plainte</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function displayReportedAgent(agent) {
    return `
    <div class="verification-result reported fade-in">
      <div class="verification-header">
        <div class="verification-icon error">
          <span style="font-size: 3rem;">⚠️</span>
        </div>
        <h2 style="color: var(--color-error);">Agent Signalé</h2>
        <p class="text-muted">Cet agent a été signalé pour activités frauduleuses</p>
      </div>
      
      <div class="agent-details">
        <div class="alert alert-danger">
          <h3>⚠️ ATTENTION - Agent Non Fiable</h3>
          <p><strong>Nom:</strong> ${agent.name}</p>
          <p><strong>Raison:</strong> ${agent.reason}</p>
          <p><strong>Nombre de signalements:</strong> ${agent.reportCount}</p>
          <p style="margin-top: 1rem;">
            <strong>Recommandation:</strong> Nous vous déconseillons fortement de travailler avec cet agent.
            Choisissez un agent vérifié dans notre liste.
          </p>
        </div>
        
        <div style="margin-top: 2rem;">
          <button class="btn btn-primary" onclick="showVerifiedAgents()">
            Voir les agents vérifiés
          </button>
        </div>
      </div>
    </div>
  `;
}

function displayNotFound() {
    return `
    <div class="verification-result not-found fade-in">
      <div class="verification-header">
        <div class="verification-icon warning">
          <span style="font-size: 3rem;">❓</span>
        </div>
        <h2>Agent Non Trouvé</h2>
        <p class="text-muted">Cet agent n'est pas dans notre base de données</p>
      </div>
      
      <div class="agent-details">
        <div class="alert alert-warning">
          <h4>⚠️ Prudence Recommandée</h4>
          <p>
            Cet agent n'est pas vérifié par VISTO. Cela ne signifie pas nécessairement qu'il est frauduleux,
            mais nous ne pouvons pas garantir sa fiabilité.
          </p>
          <p style="margin-top: 1rem;">
            <strong>Recommandations:</strong>
          </p>
          <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
            <li>Demandez des références vérifiables</li>
            <li>Vérifiez les avis en ligne</li>
            <li>Ne payez jamais la totalité à l'avance</li>
            <li>Demandez un contrat écrit détaillé</li>
            <li>Méfiez-vous des promesses irréalistes</li>
          </ul>
        </div>
        
        <div style="margin-top: 2rem;">
          <button class="btn btn-primary" onclick="showVerifiedAgents()">
            Voir les agents vérifiés
          </button>
          <button class="btn btn-outline" onclick="reportAgent()" style="margin-left: 1rem;">
            Signaler cet agent
          </button>
        </div>
      </div>
    </div>
  `;
}

function showVerifiedAgents() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
    <div class="modal">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2>Agents Vérifiés</h2>
        <button onclick="this.closest('.modal-overlay').remove()" style="background: none; border: none; font-size: 2rem; cursor: pointer;">&times;</button>
      </div>
      <div class="verified-agents-list">
        ${VERIFIED_AGENTS.map(agent => `
          <div class="agent-card card" style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <h4>${agent.name}</h4>
                <p class="text-muted">${agent.location}</p>
                <div class="agent-rating">
                  <span class="stars">${'⭐'.repeat(Math.floor(agent.rating))}</span>
                  <span>${agent.rating}/5</span>
                </div>
              </div>
              <span class="badge badge-success">Vérifié</span>
            </div>
            <div style="margin-top: 1rem;">
              ${agent.specializations.map(s => `<span class="badge badge-primary">${s}</span>`).join(' ')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
    document.body.appendChild(modal);
}

function reportAgent() {
    showNotification('Merci de nous contacter pour signaler un agent suspect', 'info', 5000);
}

// Make globally available
window.showVerifiedAgents = showVerifiedAgents;
window.reportAgent = reportAgent;

// ============================================
// EVENT HANDLERS
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('agent-search-form');
    const resultsContainer = document.getElementById('verification-results');

    if (!searchForm) return;

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const searchInput = document.getElementById('agent-search');
        const query = searchInput.value.trim();

        if (!query) {
            showNotification('Veuillez entrer un nom ou numéro d\'agent', 'warning', 3000);
            return;
        }

        // Show loading state
        resultsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem;">
        <div class="spinner" style="margin: 0 auto;"></div>
        <p style="margin-top: 1rem;">Vérification en cours...</p>
      </div>
    `;
        resultsContainer.style.display = 'block';

        // Simulate API call delay
        setTimeout(() => {
            const result = searchAgent(query);

            if (result.verified) {
                resultsContainer.innerHTML = displayVerifiedAgent(result.agent);
            } else if (result.reported) {
                resultsContainer.innerHTML = displayReportedAgent(result.agent);
            } else {
                resultsContainer.innerHTML = displayNotFound();
            }

            // Trigger animation
            setTimeout(() => {
                const resultElement = resultsContainer.querySelector('.verification-result');
                if (resultElement) {
                    resultElement.classList.add('visible');
                }
            }, 100);

            // Scroll to results
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1000);
    });
});

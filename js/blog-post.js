document.addEventListener('DOMContentLoaded', async function () {
    console.log('📖 Blog Post script loaded');

    // Récupérer le slug de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        window.location.href = 'blog.html';
        return;
    }

    const container = document.getElementById('post-container');

    try {
        // Charger les données
        const response = await fetch('data/blog-posts.json?v=' + new Date().getTime());
        if (!response.ok) throw new Error('Failed to load blog posts');

        const data = await response.json();
        const post = data.posts.find(p => p.slug === slug);

        if (!post) {
            container.innerHTML = `
                <div class="container py-4xl text-center">
                    <h1>😕 Article non trouvé</h1>
                    <p>Désolé, l'article que vous cherchez n'existe pas ou a été déplacé.</p>
                    <a href="blog.html" class="btn btn-primary mt-xl">Retour au blog</a>
                </div>
            `;
            return;
        }

        // Mettre à jour le titre de la page
        document.title = `${post.title} - Blog VISTO`;

        // Rendu du contenu
        container.innerHTML = `
            <header class="post-header">
                <div class="container">
                    <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">${post.icon || '📝'}</div>
                    <h1 class="fade-in">${post.title}</h1>
                    <div class="post-meta fade-in">
                        <span>📅 ${new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span>•</span>
                        <span>🏷️ ${post.category}</span>
                        <span>•</span>
                        <span>⏱️ ${post.readTime}</span>
                    </div>
                </div>
            </header>

            <div class="container">
                <div class="post-content-container fade-in">
                    <div class="post-body">
                        ${post.content}
                    </div>

                    ${post.pdfUrl ? `
                        <!--n<div class="pdf-download-section hover-lift">
                            <div>
                                <h3 style="margin-bottom: var(--spacing-xs);">📥 Télécharger cet article</h3>
                                <p class="text-muted" style="margin-bottom: 0;">Gardez une copie de ce guide au format PDF pour le consulter hors ligne.</p>
                            </div>
                            <a href="${post.pdfUrl}" target="_blank" class="btn btn-secondary">
                                📄 Télécharger le PDF
                            </a>
                        </div>-->
                    ` : ''}

                    <div style="margin-top: var(--spacing-4xl); padding-top: var(--spacing-xl); border-top: 1px solid var(--color-border);">
                        <a href="blog.html" class="btn btn-outline">← Retour aux articles</a>
                    </div>
                </div>
            </div>
        `;

        // Déclencher les animations
        setTimeout(() => {
            const animatedElements = container.querySelectorAll('.fade-in');
            animatedElements.forEach(el => el.classList.add('visible'));
        }, 100);

    } catch (error) {
        console.error('Error loading post:', error);
        container.innerHTML = `
            <div class="container py-4xl text-center">
                <h3>⚠️ Erreur de chargement</h3>
                <p>Impossible de charger l'article. Veuillez réessayer.</p>
                <a href="blog.html" class="btn btn-outline mt-xl">Retour au blog</a>
            </div>
        `;
    }
});

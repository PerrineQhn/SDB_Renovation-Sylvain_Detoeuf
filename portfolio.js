// ========================================
// PORTFOLIO DATA
// ========================================
const portfolioItems = [
    // Réalisations de J. Plumeridge
    {
        id: 1,
        category: "salle-de-bains",
        title: "Rénovation complète salle de bain",
        client: "J. Plumeridge - Le Villars",
        fromReview: true,
        date: "Novembre 2024",
        description: "Transformation complète d'une salle de bain avec création d'un espace moderne et fonctionnel",
        images: [
            "images/reviews/plumeridge-1.jpg",
            "images/reviews/plumeridge-2.jpg",
            "images/reviews/plumeridge-3.jpg",
            "images/reviews/plumeridge-4.jpg",
            "images/reviews/plumeridge-5.jpg",
            "images/reviews/plumeridge-6.jpg"
        ]
    },
    // Réalisation Dubois
    {
        id: 2,
        category: "plomberie",
        title: "Remplacement bac à douche et faïence",
        client: "Dubois, Ciel",
        fromReview: true,
        date: "Octobre 2024",
        description: "Remplacement complet du bac à douche avec pose de nouvelle faïence",
        images: [
            "images/reviews/dubois-1.jpg"
        ]
    },
    // Projet de transformation complète
    {
        id: 3,
        category: "salle-de-bains",
        title: "Transformation complète salle de bain - Avant/Après",
        client: "Projet de rénovation complète",
        date: "2025",
        description: "Rénovation totale d'une salle de bain avec démolition, création de nouvelles installations et finitions haut de gamme",
        images: [
            "images/reviews/projet1-avant.jpg",
            "images/reviews/projet1-avant1.jpg",
            "images/reviews/projet1-encours.jpg",
            "images/reviews/projet1-encours2.jpg",
            "images/reviews/projet1-apres2.jpg",
            "images/reviews/projet1-apres3.jpg"
        ]
    },
    // Projet finitions
    {
        id: 4,
        category: "salle-de-bains",
        title: "Rénovation salle de bain moderne",
        client: "Finitions premium",
        date: "2025",
        description: "Création d'une salle de bain contemporaine avec carrelage et équipements modernes",
        images: [
            "images/reviews/projet2-apres1.jpg",
            "images/reviews/projet2-apres2.jpg",
            "images/reviews/projet2-apres3.jpg"
        ]
    },
    // Projet 3 - Rénovation salle de bain
    {
        id: 5,
        category: "salle-de-bains",
        title: "Rénovation salle de bain avec douche",
        client: "Rénovation complète",
        date: "2024",
        description: "Installation d'une nouvelle douche avec carrelage moderne et aménagement optimisé",
        images: [
            "images/reviews/projet3-encours3.jpg",
            "images/reviews/projet3-apres1.jpg",
            "images/reviews/projet3-apres2.jpg",
            "images/reviews/projet3-apres3.jpg"
        ]
    },
    // Projet 4 - Salle de bain élégante
    {
        id: 6,
        category: "salle-de-bains",
        title: "Salle de bain élégante et fonctionnelle",
        client: "Installation complète",
        date: "2024",
        description: "Création d'un espace moderne avec douche italienne et finitions soignées",
        images: [
            "images/reviews/projet4-apres1.jpg",
            "images/reviews/projet4-apres2.jpg",
            "images/reviews/projet4-apres3.jpg"
        ]
    },
    // Projet 6 - Rénovation contemporaine
    {
        id: 7,
        category: "salle-de-bains",
        title: "Rénovation salle de bain style contemporain",
        client: "Design moderne",
        date: "2024",
        description: "Aménagement d'une salle de bain au design épuré avec équipements haut de gamme",
        images: [
            "images/reviews/projet6-apres1.jpg",
            "images/reviews/projet6-apres2.jpg",
            "images/reviews/projet6-apres3.jpg"
        ]
    },
    // Projet 7 - Installation douche
    {
        id: 8,
        category: "salle-de-bains",
        title: "Installation douche moderne",
        client: "Modernisation salle de bain",
        date: "2024",
        description: "Installation d'une nouvelle douche avec carrelage mural et aménagement optimisé",
        images: [
            "images/reviews/projet7-apres1.jpg",
            "images/reviews/projet7-apres2.jpg"
        ]
    },
    // Projet 8 - Transformation avant/en cours
    {
        id: 9,
        category: "salle-de-bains",
        title: "Transformation salle de bain - Avant/En cours",
        client: "Rénovation en cours",
        date: "2024",
        description: "Suivi d'un projet de rénovation : de l'état initial aux travaux en cours",
        images: [
            "images/reviews/projet8-avant1.jpg",
            "images/reviews/projet8-encours1.jpg",
            "images/reviews/projet8-encours2.jpg"
        ]
    }
];

// ========================================
// PORTFOLIO DISPLAY
// ========================================

// Retourne l'image principale à afficher : on privilégie les images 'apres' (apres/après), sinon on prend la dernière image si possible
function getBestImage(item) {
    if (!item.images || item.images.length === 0) return '';
    // rechercher une image contenant 'apres' ou 'après' (insensible à la casse)
    const apres = item.images.find(src => /apres|après/i.test(src));
    if (apres) return apres;
    // sinon préférer la dernière image (généralement 'après')
    return item.images[item.images.length - 1];
}

document.addEventListener('DOMContentLoaded', function() {
    displayPortfolio();
    setupProjectDetail();
    setupLightbox();
});

function displayPortfolio() {
    const grid = document.getElementById('portfolioGrid');

    if (portfolioItems.length === 0) {
        grid.innerHTML = `
            <div class="portfolio-placeholder">
                <p>Aucune réalisation pour le moment.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = portfolioItems.map(item => {
        const mainImage = getBestImage(item) || (item.images[0] || '');
        return `
        <div class="portfolio-item" data-category="${item.category}">
            <div class="portfolio-image-container">
                <img src="${mainImage}" alt="${item.title}" class="portfolio-main-image">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-content">
                        <h3>${item.title}</h3>
                        ${item.fromReview ? `<p>${item.client}</p>` : ''}
                        <button class="view-btn" onclick="openProject(${item.id})">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            Voir le projet
                        </button>
                    </div>
                </div>
                ${item.images.length > 1 ? `<div class="image-count">${item.images.length} photos</div>` : ''}
            </div>
                <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <small>${item.date}</small>
            </div>
        </div>
    `}).join('');
}

function getCategoryLabel() {
    return 'Rénovation salle de bains';
}

// ========================================
// PROJECT DETAIL VIEW
// ========================================
function setupProjectDetail() {
    const projectDetail = document.getElementById('projectDetail');
    const closeBtn = document.querySelector('.project-detail-close');

    closeBtn.addEventListener('click', closeProjectDetail);

    projectDetail.addEventListener('click', function(e) {
        if (e.target === projectDetail) {
            closeProjectDetail();
        }
    });

    function closeProjectDetail() {
        projectDetail.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openProject(projectId) {
    const project = portfolioItems.find(item => item.id === projectId);
    if (!project) return;

    const projectDetail = document.getElementById('projectDetail');
    document.getElementById('projectDetailTitle').textContent = project.title;

    const clientElement = document.getElementById('projectDetailClient');
    if (project.fromReview) {
        clientElement.textContent = project.client;
        clientElement.style.display = '';
    } else {
        clientElement.style.display = 'none';
    }

    document.getElementById('projectDetailDescription').textContent = project.description;
    document.getElementById('projectDetailDate').textContent = project.date;

    const gallery = document.getElementById('projectDetailGallery');
    gallery.innerHTML = project.images.map((img, index) => `
        <div class="project-detail-image-container">
            <img src="${img}" alt="${project.title} - Image ${index + 1}" class="project-detail-image" onclick="openLightboxFromDetail(${projectId}, ${index})">
        </div>
    `).join('');

    projectDetail.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openLightboxFromDetail(projectId, imageIndex) {
    const project = portfolioItems.find(item => item.id === projectId);
    if (!project) return;

    currentGallery = project.images;
    currentProjectTitle = project.title;
    currentImageIndex = imageIndex;

    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');

    if (window.updateLightboxImage) {
        window.updateLightboxImage();
    }
}

// ========================================
// LIGHTBOX
// ========================================
let currentImageIndex = 0;
let currentGallery = [];
let currentProjectTitle = '';

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxCounter = document.querySelector('.lightbox-counter');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Fermer la lightbox
    closeBtn.addEventListener('click', closeLightbox);

    // Fermer en cliquant sur le fond
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navigateGallery(-1);
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navigateGallery(1);
    });

    // Navigation au clavier
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateGallery(-1);
            if (e.key === 'ArrowRight') navigateGallery(1);
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function navigateGallery(direction) {
        currentImageIndex += direction;

        // Boucle circulaire
        if (currentImageIndex < 0) {
            currentImageIndex = currentGallery.length - 1;
        } else if (currentImageIndex >= currentGallery.length) {
            currentImageIndex = 0;
        }

        updateLightboxImage();
    }

    function updateLightboxImage() {
        lightboxImg.src = currentGallery[currentImageIndex];
        lightboxCaption.textContent = currentProjectTitle;
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;

        // Masquer les boutons si une seule image
        if (currentGallery.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }

    // Expose updateLightboxImage globalement
    window.updateLightboxImage = updateLightboxImage;
}

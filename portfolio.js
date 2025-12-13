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
        date: "2024",
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
        date: "2024",
        description: "Création d'une salle de bain contemporaine avec carrelage et équipements modernes",
        images: [
            "images/reviews/projet2-apres1.jpg",
            "images/reviews/projet2-apres2.jpg",
            "images/reviews/projet2-apres3.jpg"
        ]
    }
];

// ========================================
// PORTFOLIO DISPLAY
// ========================================

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

    grid.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-item" data-category="${item.category}">
            <div class="portfolio-image-container">
                <img src="${item.images[0]}" alt="${item.title}" class="portfolio-main-image">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-content">
                        <h3>${item.title}</h3>
                        <p>${item.client}</p>
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
                <div class="portfolio-category">${getCategoryLabel(item.category)}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <small>${item.date}</small>
            </div>
        </div>
    `).join('');
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
    document.getElementById('projectDetailClient').textContent = project.client;
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

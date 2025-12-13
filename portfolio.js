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
    // Vous pouvez ajouter plus de réalisations ici
];

// ========================================
// PORTFOLIO DISPLAY
// ========================================
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    displayPortfolio();
    setupFilters();
    setupLightbox();
});

function displayPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    const filteredItems = currentFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === currentFilter);

    if (filteredItems.length === 0) {
        grid.innerHTML = `
            <div class="portfolio-placeholder">
                <p>Aucune réalisation dans cette catégorie pour le moment.</p>
                <p><a href="#" onclick="resetFilter(); return false;">Voir toutes les réalisations</a></p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredItems.map(item => `
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

function getCategoryLabel(category) {
    const labels = {
        'salle-de-bains': 'Salle de bains',
        'plomberie': 'Plomberie',
        'carrelage': 'Carrelage'
    };
    return labels[category] || category;
}

// ========================================
// FILTERS
// ========================================
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update current filter
            currentFilter = this.dataset.filter;

            // Display filtered items
            displayPortfolio();
        });
    });
}

function resetFilter() {
    currentFilter = 'all';
    document.querySelector('[data-filter="all"]').classList.add('active');
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter !== 'all') {
            btn.classList.remove('active');
        }
    });
    displayPortfolio();
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

function openProject(projectId) {
    const project = portfolioItems.find(item => item.id === projectId);
    if (!project) return;

    currentGallery = project.images;
    currentProjectTitle = project.title;
    currentImageIndex = 0;

    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.updateLightboxImage) {
        window.updateLightboxImage();
    }
}

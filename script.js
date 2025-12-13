// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        consent: document.getElementById('consent').checked
    };

    // Validation
    if (!formData.consent) {
        alert('Veuillez accepter d\'être contacté pour recevoir votre devis gratuit.');
        return;
    }

    // Création de l'email mailto
    const subject = encodeURIComponent(`Demande de devis - ${formData.service}`);
    const body = encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone}\n` +
        `Adresse du chantier: ${formData.address}\n` +
        `Type de prestation: ${formData.service}\n\n` +
        `Description du projet:\n${formData.message}\n\n` +
        `Le client accepte d'être contacté pour un devis gratuit.`
    );

        // Préparer le lien mailto
        const mailtoLink = `mailto:sdb.plomberie.express@gmail.com?subject=${subject}&body=${body}`;

        // Demande de confirmation avant d'ouvrir le client mail
        const proceed = confirm(
            "Un nouvel e-mail va s'ouvrir dans votre application mail.\nAprès l'ouverture, veuillez cliquer sur 'Envoyer' dans votre client mail pour finaliser la demande.\n\nVoulez-vous continuer ?"
        );

        if (proceed) {
            // Ouvre le client mail. L'utilisateur doit valider l'envoi dans son application.
            window.location.href = mailtoLink;
            // Réinitialisation du formulaire (ici on reset localement; si l'utilisateur annule l'envoi côté client, le message aura déjà été préparé)
            contactForm.reset();
        } else {
            alert('Envoi annulé. Vous pouvez modifier votre demande ou l\'envoyer plus tard.');
        }
});

// ========================================
// REVIEWS LOADER (À PERSONNALISER)
// ========================================
// Cette section peut être personnalisée pour charger les avis
// Pour l'instant, elle affiche un message pour ajouter manuellement les avis

document.addEventListener('DOMContentLoaded', function() {
    // Charger les réalisations récentes
    loadRecentProjects();

    const reviewsContainer = document.getElementById('reviewsContainer');

    // Avis clients depuis Travaux.com
    const sampleReviews = [
        {
            name: "Dubois",
            location: "Ciel",
            rating: 5,
            date: "15 octobre 2025",
            service: "Petits travaux de plomberie: Remplacement; Salle de bain ou toilettes",
            comment: "Nous avons refait notre bac a douche et faience avec un delai très court (delai tenu) et nous avons trouvé une personne tres professionnel, precise et de precieux conseils. Je recommande vivement. Prix correct et serviable sur des petits travaux annexes rien a redire. Vous pouvez y aller sereinement.",
            images: ["images/reviews/dubois-1.jpg"]
        },
        {
            name: "Carlesso",
            location: "Les Essards-Taignevaux",
            rating: 5,
            date: "28 septembre 2025",
            service: "Installation sanitaires (lavabo, douche, baignoire, bidet)",
            comment: "Mr Detoeuf est au top Je vous le conseille sans problème",
            images: []
        },
        {
            name: "bessard",
            location: "Montrevel-en-Bresse",
            rating: 5,
            date: "23 juillet 2025",
            service: "Chauffe-eau: Remplacement; Électrique",
            comment: "Personne vraiment sympathique qui n'essai pas de vous vendre plus que ce dont vous avez besoin. À l'écoute de ce que vous désirez faire, il sait apporter ses conseils afin de vous diriger dans la bonne voie. La qualité des travaux est présente, nous sommes vraiment content du résultat. Je le recommande sans hésiter.",
            images: []
        },
        {
            name: "Anonyme",
            location: "Lons-le-Saunier",
            rating: 4,
            date: "10 avril 2025",
            service: "Installation WC: Remplacement fenêtre",
            comment: "Bien.",
            images: []
        },
        {
            name: "J Plumeridge",
            location: "Le Villars",
            rating: 5,
            date: "8 novembre 2024",
            service: "Rénovation appartement / maison",
            comment: "Sylvain est un gars formidable, très poli, sympathique et travaille très fort, méticuleusement et proprement. Il a très bien géré le projet et a créé quelque chose à partir de sa vision. Il a livré le projet plus tôt que prévu. Nous adorons notre nouvelle salle de bain !!!",
            images: ["images/reviews/plumeridge-1.jpg", "images/reviews/plumeridge-2.jpg", "images/reviews/plumeridge-3.jpg", "images/reviews/plumeridge-4.jpg", "images/reviews/plumeridge-5.jpg", "images/reviews/plumeridge-6.jpg"]
        },
        {
            name: "Pierre antoine",
            location: "Rully, Saône-et-Loire",
            rating: 5,
            date: "7 août 2024",
            service: "Salle de bains : Rénovation",
            comment: "Parfait 👍",
            images: []
        },
        {
            name: "Adrien RAVIOT",
            location: "Lessard-le-National",
            rating: 5,
            date: "7 août 2024",
            service: "Installation sanitaires: Réparation; Douche",
            comment: "Très bon travail, de bon conseil et à un prix abordable. Je recommande mr DETOEUF.",
            images: []
        },
        {
            name: "Anonyme",
            location: "Courbouzon, Jura",
            rating: 5,
            date: "7 août 2024",
            service: "Plomberie: Déplacer le réseau de canalisations",
            comment: "Travaux réalisés pour un déplacement de toilettes et de canalisations en sous sol. Travail très propre et en discussion avec le client pour s'adapter au mieux au projet. De bon conseil, ne se lance pas dans des travaux si cela n'est pas réalisable. Et nous propose une solution plus réaliste et parfaitement envisageable lorsque nous entreprendront ces travaux.",
            images: []
        },
        {
            name: "Anonyme",
            location: "Pierre-de-Bresse",
            rating: 5,
            date: "21 juillet 2024",
            service: "Plomberie: Installation d'une arrivée d'eau",
            comment: "Les travaux se sont bien passés",
            images: []
        },
        {
            name: "Anonyme",
            location: "Lons-le-Saunier",
            rating: 5,
            date: "16 juillet 2024",
            service: "Installation sanitaires: Remplacement; Douche, Baignoire",
            comment: "Très honnêtes",
            images: []
        },
        {
            name: "Anonyme",
            location: "Confrançon",
            rating: 5,
            date: "5 juillet 2024",
            service: "Installation sanitaires: Remplacement; Baignoire",
            comment: "Parfait",
            images: []
        },
        {
            name: "Anonyme",
            location: "Beaupont",
            rating: 4,
            date: "25 juin 2024",
            service: "Rénovation appartement / maison: 25 m²; Maison individuelle; Rénovation",
            comment: "",
            images: []
        },
        {
            name: "Thibaud",
            location: "Vers-sous-Sellières",
            rating: 4,
            date: "13 mai 2023",
            service: "Salle de bains: Rénovation; 10 m²",
            comment: "Cet artisan, expérimenté, a su trouver pour chaque problème des solutions pour la rénovation complète de notre salle de bain. Délai respecté, travail soigné, relation de confiance. Aucune mauvaise surprise, y compris pour la facture clairement...",
            images: []
        },
        {
            name: "Anonyme",
            location: "Moiron",
            rating: 5,
            date: "8 mai 2023",
            service: "Aménagements pour mobilité réduite: Aménagement salle de bains et toilettes",
            comment: "Artisan de bon conseil, sérieux, délais respecté, minutieux, très bon travail et très sympathique. je recommande cet artisan très professionnel. je vous renouvelle mes remerciements pour le résultat qui n'était pas évident. Encore Merci....",
            images: []
        },
        {
            name: "robert",
            location: "Azé, Saône-et-Loire",
            rating: 5,
            date: "11 décembre 2022",
            service: "Salle de bains: 6 m²",
            comment: "cet artisan est très professionnel, et travaille très proprement. les travaux sont exécutés avec beaucoup de goût. SDB PLOMBERIE EXPRESS a très bien respecté les délais d'exécution. merci. très bien.",
            images: []
        },
        {
            name: "Philippe L",
            location: "",
            rating: 4,
            date: "24 octobre 2018",
            service: "Rénovation de salle de bain (bac a douche + carrelage mural)",
            comment: "Un peu cher mais très professionnel et attentionné",
            images: []
        }
    ];

    if (sampleReviews.length === 0) {
        reviewsContainer.innerHTML = `
            <div class="review-placeholder">
                <p>Les avis clients seront bientôt disponibles.</p>
                <p style="margin-top: 10px;">
                    <a href="https://www.travaux.com/professionnel/detoeuf-sylvain/reviews"
                       target="_blank"
                       rel="noopener"
                       style="color: var(--color-blue); font-weight: 600;">
                        Voir nos avis sur Travaux.com
                    </a>
                </p>
            </div>
        `;
    } else {
        reviewsContainer.innerHTML = sampleReviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-name-location">
                        <h4>${review.name}</h4>
                        ${review.location ? `<p class="review-location">📍 ${review.location}</p>` : ''}
                    </div>
                    <div class="review-rating">
                        ${'⭐'.repeat(review.rating)}
                    </div>
                </div>
                <p class="review-date">${review.date}</p>
                <p class="review-service">${review.service}</p>
                <p class="review-comment">${review.comment}</p>
                ${review.images && review.images.length > 0 ? `
                    <div class="review-images">
                        ${review.images.map(img => `<img src="${img}" alt="Photo du projet" class="review-image">`).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }
});

// ========================================
// ANIMATION ON SCROLL (Optionnel)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de service pour animation
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========================================
// PHONE NUMBER FORMATTING
// ========================================
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = '';

    for (let i = 0; i < value.length && i < 10; i++) {
        if (i > 0 && i % 2 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue;
});

// ========================================
// FORM VALIDATION IMPROVEMENTS
// ========================================
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value && !emailRegex.test(e.target.value)) {
        e.target.style.borderColor = 'var(--color-red)';
    } else {
        e.target.style.borderColor = 'var(--color-gray-medium)';
    }
});

// ========================================
// LIGHTBOX / IMAGE GALLERY
// ========================================
let currentImageIndex = 0;
let currentGallery = [];
let currentReviewName = '';

document.addEventListener('DOMContentLoaded', function() {
    // Attendre que les avis soient chargés
    setTimeout(initializeLightbox, 500);
});

function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxCounter = document.querySelector('.lightbox-counter');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Ajouter les événements de clic sur toutes les images des avis
    const reviewImages = document.querySelectorAll('.review-image');

    reviewImages.forEach((img) => {
        img.addEventListener('click', function() {
            // Récupérer toutes les images de cet avis
            const reviewCard = this.closest('.review-card');
            const reviewImages = reviewCard.querySelectorAll('.review-image');
            const reviewNameElement = reviewCard.querySelector('.review-name-location h4');

            currentGallery = Array.from(reviewImages).map(img => img.src);
            currentReviewName = reviewNameElement ? reviewNameElement.textContent : 'Client';
            currentImageIndex = Array.from(reviewImages).indexOf(this);

            openLightbox();
        });
    });

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

    function openLightbox() {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateLightboxImage();
    }

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
        const img = lightboxImg;
        img.src = currentGallery[currentImageIndex];

        lightboxCaption.textContent = `Réalisation pour ${currentReviewName}`;
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
}

// ========================================
// RECENT PROJECTS LOADER (HOME PAGE)
// ========================================
function loadRecentProjects() {
    const grid = document.getElementById('recentProjectsGrid');

    if (!grid) return; // Si on n'est pas sur la page d'accueil

    // Données des projets (3 projets les plus récents)
    const recentProjects = [
        {
            id: 1,
            title: "Rénovation complète salle de bain",
            client: "J. Plumeridge - Le Villars",
            fromReview: true,
            date: "Novembre 2024",
            description: "Transformation complète d'une salle de bain avec création d'un espace moderne et fonctionnel",
            images: ["images/reviews/plumeridge-1.jpg", "images/reviews/plumeridge-2.jpg", "images/reviews/plumeridge-3.jpg", "images/reviews/plumeridge-4.jpg", "images/reviews/plumeridge-5.jpg", "images/reviews/plumeridge-6.jpg"]
        },
        {
            id: 3,
            title: "Transformation complète salle de bain - Avant/Après",
            client: "Projet de rénovation complète",
            date: "2024",
            description: "Rénovation totale d'une salle de bain avec démolition, création de nouvelles installations et finitions haut de gamme",
            images: ["images/reviews/projet1-avant.jpg", "images/reviews/projet1-avant1.jpg", "images/reviews/projet1-encours.jpg", "images/reviews/projet1-encours2.jpg", "images/reviews/projet1-apres2.jpg", "images/reviews/projet1-apres3.jpg"]
        },
        {
            id: 4,
            title: "Rénovation salle de bain moderne",
            client: "Finitions premium",
            date: "2024",
            description: "Création d'une salle de bain contemporaine avec carrelage et équipements modernes",
            images: ["images/reviews/projet2-apres1.jpg", "images/reviews/projet2-apres2.jpg", "images/reviews/projet2-apres3.jpg"]
        }
    ];

    // helper local : choisir image 'apres' si possible
    function getBestImage(item) {
        if (!item.images || item.images.length === 0) return '';
        const apres = item.images.find(src => /apres|après/i.test(src));
        if (apres) return apres;
        return item.images[item.images.length - 1];
    }

    grid.innerHTML = recentProjects.map(item => {
        const displayDate = item.fromReview ? item.date : '2025';
        const mainImage = getBestImage(item) || (item.images[0] || '');
        return `
        <div class="portfolio-item">
            <div class="portfolio-image-container">
                <img src="${mainImage}" alt="${item.title}" class="portfolio-main-image">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-content">
                        <h3>${item.title}</h3>
                        <p>${item.client}</p>
                        <a href="portfolio.html" class="view-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            Voir le portfolio
                        </a>
                    </div>
                </div>
                ${item.images.length > 1 ? `<div class="image-count">${item.images.length} photos</div>` : ''}
            </div>
                <div class="portfolio-info">
                <div class="portfolio-category">Rénovation salle de bains</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <small>${displayDate}</small>
            </div>
        </div>
    `}).join('');
}

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

    // Ouverture du client email
    window.location.href = `mailto:dsb.plomberie.express@gmail.com?subject=${subject}&body=${body}`;

    // Message de confirmation
    alert('Votre demande va être envoyée par email. Merci de compléter l\'envoi dans votre client email.');

    // Réinitialisation du formulaire
    contactForm.reset();
});

// ========================================
// REVIEWS LOADER (À PERSONNALISER)
// ========================================
// Cette section peut être personnalisée pour charger les avis
// Pour l'instant, elle affiche un message pour ajouter manuellement les avis

document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('reviewsContainer');

    // Avis clients depuis Travaux.com
    const sampleReviews = [
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
            name: "Dubois, Ciel",
            location: "",
            rating: 5,
            date: "15 octobre 2024",
            service: "Petits travaux de plomberie: Remplacement; Salle de bain ou toilettes",
            comment: "Nous avons refait notre bac a douche et faience avec un delai très court (delai tenu) et nous avons trouvé une personne tres professionnel, precise et de precieux conseils. Je recommande vivement. Prix correct et serviable sur des petits travaux annexes rien a redire. Vous pouvez y aller sereinement.",
            images: ["images/reviews/dubois-1.jpg"]
        },
        {
            name: "Carlesso",
            location: "Les Essards-Taignevaux",
            rating: 5,
            date: "28 septembre 2024",
            service: "Installation sanitaires (lavabo, douche, baignoire, bidet)",
            comment: "Mr Detoeuf est au top Je vous le conseille sans problème",
            images: []
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
            name: "Client Travaux.com",
            location: "Courbouzon, Jura",
            rating: 5,
            date: "7 août 2024",
            service: "Plomberie: Déplacer le réseau de canalisations",
            comment: "Travaux réalisés pour un déplacement de toilettes et de canalisations en sous sol. Travail très propre et en discussion avec le client pour s'adapter au mieux au projet. De bon conseil, ne se lance pas dans des travaux si cela n'est pas réalisable. Et nous propose une solution plus réaliste et parfaitement envisageable lorsque nous entreprendront ces travaux.",
            images: []
        },
        {
            name: "bessard",
            location: "Montrevel-en-Bresse",
            rating: 5,
            date: "23 juillet 2024",
            service: "Chauffe-eau: Remplacement; Électrique",
            comment: "Personne vraiment sympathique qui n'essai pas de vous vendre plus que ce dont vous avez besoin. À l'écoute de ce que vous désirez faire, il sait apporter ses conseils afin de vous diriger dans la bonne voie. La qualité des travaux est présente, nous sommes vraiment content du résultat. Je le recommande sans hésiter.",
            images: []
        },
        {
            name: "Client Travaux.com",
            location: "Pierre-de-Bresse",
            rating: 5,
            date: "21 juillet 2024",
            service: "Plomberie: Installation d'une arrivée d'eau",
            comment: "Les travaux se sont bien passés",
            images: []
        },
        {
            name: "Client Travaux.com",
            location: "Lons-le-Saunier",
            rating: 5,
            date: "16 juillet 2024",
            service: "Installation sanitaires: Remplacement; Douche, Baignoire",
            comment: "Très honnêtes",
            images: []
        },
        {
            name: "Client Travaux.com",
            location: "Lons-le-Saunier",
            rating: 4,
            date: "10 avril 2024",
            service: "Installation WC: Remplacement fenêtre",
            comment: "Bien.",
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

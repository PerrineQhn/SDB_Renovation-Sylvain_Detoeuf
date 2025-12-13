# Site Web ETS Detoeuf Sylvain

Site web professionnel pour ETS Detoeuf Sylvain - Spécialiste en salle de bains, plomberie et carrelage.

## 🚀 Lancement du site

1. Ouvrez le fichier `index.html` dans votre navigateur web
2. Aucune installation nécessaire - le site fonctionne directement

## 📸 Photos des avis clients

✅ Les avis clients sont déjà intégrés avec leurs photos dans le dossier `images/reviews/` :
- **J Plumeridge** : 6 photos de rénovation de salle de bain
- **Dubois, Ciel** : 1 photo de bac à douche et faïence

Les images s'affichent automatiquement dans les avis correspondants.

## 📝 Modification des avis

Pour ajouter, modifier ou supprimer des avis, éditez le fichier [script.js](script.js) à partir de la ligne 74.

Structure d'un avis :
```javascript
{
    name: "Nom du client",
    location: "Ville",
    rating: 5,  // Note sur 5
    date: "1 janvier 2024",
    service: "Type de prestation",
    comment: "Commentaire du client...",
    images: []  // Tableau des chemins d'images
}
```

## 🎨 Personnalisation

### Couleurs
Les couleurs de la marque sont définies dans [style.css](style.css) :
- Bleu : `#0051A5`
- Rouge : `#E31E24`
- Noir : `#1E1E1E`

### Contenu
- **index.html** : Contenu et structure du site
- **style.css** : Apparence et design
- **script.js** : Fonctionnalités interactives et avis clients

## 📧 Formulaire de contact

Le formulaire envoie les demandes de devis par email à : `dsb.plomberie.express@gmail.com`

Le système utilise `mailto:` qui ouvre le client email par défaut de l'utilisateur.

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte automatiquement aux :
- Ordinateurs de bureau
- Tablettes
- Smartphones

## 🌐 Mise en ligne

Pour mettre le site en ligne, vous pouvez utiliser :
- **GitHub Pages** (gratuit)
- **Netlify** (gratuit)
- **Vercel** (gratuit)
- Hébergement web classique (OVH, Ionos, etc.)

### Déploiement sur GitHub Pages (gratuit) :

1. Créez un compte sur GitHub.com
2. Créez un nouveau repository
3. Uploadez tous les fichiers du site
4. Allez dans Settings > Pages
5. Sélectionnez la branche `main` comme source
6. Votre site sera accessible à : `votre-nom.github.io/nom-du-repo`

## 📞 Informations de contact

- **Téléphone** : 07 87 25 20 94
- **Email** : dsb.plomberie.express@gmail.com
- **Adresse** : 71290 RANCY
- **SIRET** : 424 141 638 RM 71
- **Zone d'intervention** : Saône-et-Loire (71), Ain (01), Jura (39)

## 🛠️ Structure des fichiers

```
Sylvain Site/
├── index.html          # Page principale
├── style.css           # Feuille de styles
├── script.js           # JavaScript
├── images/             # Dossier des images
│   └── reviews/        # Photos des avis clients
└── README.md          # Ce fichier
```

## ✨ Fonctionnalités

- ✅ Design moderne avec bandes tricolores (bleu, blanc, rouge)
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Section "Pourquoi nous choisir" avec 4 avantages clés
- ✅ 10 avis clients authentiques avec photos
- ✅ Zone d'intervention détaillée (départements 71, 01, 39)
- ✅ Formulaire de contact avec validation
- ✅ Devis gratuits mis en avant
- ✅ Informations partenaire showroom Envie de Salle de bain
- ✅ Présentation complète des 4 expertises
- ✅ Animations au scroll et effets hover
- ✅ Bouton CTA attractif avec effet
- ✅ Liens cliquables (téléphone, email)
- ✅ Images des réalisations agrandissables au clic

## 🔄 Mises à jour futures

Pour ajouter de nouveaux avis, suivez la structure dans [script.js](script.js) et ajoutez-les au tableau `sampleReviews`.

---

Créé avec les couleurs de la marque ETS Detoeuf Sylvain (Bleu #0051A5 et Rouge #E31E24)

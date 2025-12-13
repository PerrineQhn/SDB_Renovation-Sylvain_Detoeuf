# 🎯 Guide d'utilisation - Site ETS Detoeuf Sylvain

## ✅ Récapitulatif des fonctionnalités

Votre site web professionnel est maintenant prêt ! Voici ce qui a été créé :

### 🎨 Design et identité visuelle
- ✅ **Bandes tricolores** (bleu, blanc, rouge) intégrées dans tout le site
- ✅ Couleurs de la marque : Bleu #0051A5 et Rouge #E31E24
- ✅ Design moderne, professionnel et attractif
- ✅ 100% responsive (ordinateur, tablette, smartphone)

### 📋 Sections du site

1. **En-tête (Header)**
   - Logo et slogan
   - Bouton téléphone cliquable
   - Bande tricolore sur le côté

2. **Section Héro**
   - Titre accrocheur
   - Badges de services
   - Bouton CTA "Demander un devis gratuit" avec effet
   - Bandes tricolores en arrière-plan

3. **Pourquoi nous choisir**
   - 4 cartes avec avantages clés
   - Mise en avant des devis gratuits
   - Animations au survol

4. **Nos expertises**
   - 4 services détaillés (Salle de bains, Plomberie, Carrelage, Cuisine)
   - Liste des prestations pour chaque service
   - Effets visuels au survol

5. **Zone d'intervention**
   - Section dédiée aux 3 départements (71, 01, 39)
   - Cartes interactives pour chaque département
   - Fond bleu avec bandes tricolores

6. **Partenaire showroom**
   - Informations sur Envie de Salle de bain
   - Contact Emilie Ducroux

7. **Avis clients**
   - 10 avis authentiques
   - Photos des réalisations (7 images au total)
   - Note moyenne 4.9/5
   - Images agrandissables au clic

8. **Formulaire de contact**
   - Champs personnalisés
   - Validation automatique
   - Envoi par email
   - Notice "Devis gratuits" mise en avant

9. **Pied de page (Footer)**
   - Informations complètes
   - Zone d'intervention
   - Bande tricolore décorative

### 🎁 Points forts du site

✨ **Devis gratuits** mis en avant partout
✨ **10 avis clients** avec photos de réalisations
✨ **Zone d'intervention** clairement définie
✨ **Design unique** avec les bandes tricolores de la marque
✨ **Bouton CTA attractif** qui donne envie de cliquer
✨ **Professional** pour se démarquer de Travaux.com

### 📱 Formulaire de contact

Le formulaire envoie automatiquement un email à `dsb.plomberie.express@gmail.com` avec :
- Nom et prénom du client
- Email et téléphone
- Adresse du chantier
- Type de prestation souhaité
- Description détaillée du projet

### 🖼️ Images des avis

**7 photos** sont déjà intégrées :
- `plumeridge-1.jpg` à `plumeridge-6.jpg` : Rénovation complète d'une salle de bain
- `dubois-1.jpg` : Bac à douche et faïence

Les images s'agrandissent au clic pour une meilleure visualisation.

### 🎯 Objectif atteint

Le site est conçu pour :
- ✅ Remplacer Travaux.com
- ✅ Donner envie aux clients de demander un devis
- ✅ Montrer le professionnalisme et l'expertise
- ✅ Mettre en avant la qualité du travail via les avis et photos
- ✅ Être attractif et moderne

### 🚀 Pour mettre en ligne

**Options gratuites :**

1. **GitHub Pages** (recommandé)
   - Créez un compte sur github.com
   - Créez un repository
   - Uploadez tous les fichiers
   - Activez GitHub Pages dans les paramètres
   - Votre site sera accessible gratuitement

2. **Netlify**
   - Glissez-déposez le dossier sur netlify.com
   - Site en ligne en 2 minutes
   - Gratuit avec sous-domaine netlify.app

3. **Vercel**
   - Import depuis GitHub ou dossier local
   - Déploiement automatique
   - Gratuit

**Options payantes :**
- OVH, Ionos, o2switch (4-10€/mois avec nom de domaine)

### 📝 Comment modifier le contenu

#### Ajouter un avis :
Dans [script.js](script.js), ligne 74, ajoutez dans le tableau :
```javascript
{
    name: "Nom Client",
    location: "Ville",
    rating: 5,
    date: "Date",
    service: "Type de service",
    comment: "Commentaire...",
    images: ["images/reviews/photo.jpg"]
}
```

#### Modifier les couleurs :
Dans [style.css](style.css), lignes 10-12 :
```css
--color-blue: #0051A5;
--color-red: #E31E24;
--color-dark: #1E1E1E;
```

#### Modifier le texte :
Éditez directement [index.html](index.html)

### 📧 Support

Pour toute question ou modification, contactez votre développeur ou consultez :
- [index.html](index.html) - Structure et contenu
- [style.css](style.css) - Apparence et design
- [script.js](script.js) - Fonctionnalités et avis

---

✨ **Le site est prêt à être mis en ligne !**

Bonne chance pour votre activité ! 🚀

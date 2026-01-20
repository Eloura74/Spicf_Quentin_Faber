# Page de Présentation Professionnelle - Quentin Faber

Page de présentation professionnelle pour candidature au poste d'installateur de matériel multimédia.

## 📋 Description

Cette page web présente de manière structurée et visuellement attractive le parcours professionnel, les compétences techniques et les expériences de Quentin Faber, avec des effets visuels modernes inspirés du Portfolio_Informatique.

## ✨ Effets Visuels Intégrés

- **Constellation animée** : Particules interactives qui fuient au passage de la souris
- **Glassmorphism** : Cartes avec effet de verre givré (backdrop-filter)
- **Animations au scroll** : Révélation progressive des sections lors du défilement
- **Gradients animés** : Effets de dégradés qui se déplacent
- **Background ambiant** : Arrière-plan avec dégradés et effet de bruit
- **Navigation fluide** : Scroll animé vers les sections
- **Bouton retour en haut** : Apparition automatique après le scroll

## 🎨 Palette de Couleurs

- **Fond principal** : `#030712` (Obsidian)
- **Fond secondaire** : `#0f172a` (Midnight)
- **Accent principal** : `#38BDF8` (Bleu cyan lumineux)
- **Texte principal** : `#e2e8f0` (Platine doux)
- **Texte secondaire** : `#94a3b8` (Ardoise)

## 📁 Structure du Projet

```
Spicf/
├── index.html      # Structure HTML principale
├── style.css       # Styles CSS avec effets visuels
├── main.js         # JavaScript pour les interactions
└── README.md       # Documentation du projet
```

## 🚀 Utilisation

1. Ouvrir le fichier `index.html` dans un navigateur web moderne
2. La page est entièrement autonome (pas de dépendances externes sauf Google Fonts et Font Awesome via CDN)
3. **Responsive** : s'adapte automatiquement à tous les écrans (mobile, tablette, desktop)

### 📱 Navigation Mobile

- **Menu hamburger** : Bouton avec animation en X
- **Menu latéral** : Slide depuis la droite avec effet glassmorphism
- **Overlay sombre** : Derrière le menu pour améliorer la lisibilité
- **Fermeture intelligente** : 
  - Clic sur un lien
  - Clic sur l'overlay
  - Touche Escape
  - Redimensionnement vers desktop

## 📱 Sections de la Page

1. **Présentation** : Introduction et contexte de candidature
2. **Parcours Professionnel** : Formation et expériences
3. **Compétences Techniques** : Compétences en lien avec le poste
4. **Projets Personnels** : Environnement technique personnel
5. **Savoir-être** : Qualités professionnelles
6. **Conclusion** : Synthèse et signature

## 🎯 Fonctionnalités Techniques

### Effets JavaScript
- Constellation de particules animées avec interactions souris
- Détection du scroll pour révéler les éléments progressivement
- Navigation fluide entre les sections
- Mise en surbrillance automatique du lien actif
- Bouton retour en haut avec apparition conditionnelle
- **Menu hamburger mobile** avec gestion complète
- Optimisation des performances avec throttling

### Effets CSS
- Effet glassmorphism (verre givré) sur les cartes
- Animations de révélation avec transform et opacity
- Gradients animés avec keyframes
- Timeline verticale pour le parcours professionnel
- **Grilles CSS Grid responsive** avec adaptation automatique
- **Media queries** pour tablette, mobile et petit mobile
- Transitions fluides sur les interactions

### Responsive Design
- **Desktop** : Navigation horizontale classique
- **Tablette** : Grilles adaptées en 2 colonnes
- **Mobile** : Menu hamburger latéral avec overlay
- **Adaptation automatique** : Tous les éléments s'ajustent (typographie, espacements, icônes)
- **Touch-friendly** : Zones de clic adaptées au tactile
- **Blocage du scroll** : Lors de l'ouverture du menu mobile

## 🔧 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `style.css` (lignes 1-46) :
```css
:root {
    --bg-deep: #030712;
    --accent-glow: #38BDF8;
    /* etc. */
}
```

### Modifier le contenu
Éditer directement le fichier `index.html` pour modifier le texte, ajouter/supprimer des sections.

### Ajuster les effets
Dans `main.js`, modifier les paramètres de la constellation :
```javascript
const particleCount = 40;          // Nombre de particules
const connectionDistance = 120;     // Distance de connexion
const mouseDistance = 180;          // Distance d'interaction souris
```

### Modifier les breakpoints responsive
Dans `style.css`, ajuster les seuils de responsive si nécessaire :
```css
/* Tablette */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Petit mobile */
@media (max-width: 480px) { ... }
```

## 🌐 Compatibilité & Responsive

### Navigateurs
- ✅ Chrome / Edge (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Breakpoints Responsive
- **Desktop** : > 1024px (navigation horizontale)
- **Tablette** : 768px - 1024px (grilles 2 colonnes)
- **Mobile** : < 768px (menu hamburger, grilles 1 colonne)
- **Petit Mobile** : < 480px (tailles réduites)

## 📝 Notes Techniques

- **Aucune dépendance npm** : projet 100% vanilla JavaScript
- **CDN utilisés** : 
  - Google Fonts (Inter, Outfit)
  - Font Awesome 6.4.0
- **Performances** : Throttling des événements scroll pour optimisation
- **Accessibilité** : Navigation au clavier supportée

## 🎓 Inspiration

Effets visuels inspirés du projet **Portfolio_Informatique** avec :
- Même système de constellation
- Palette de couleurs premium sombre
- Effets glassmorphism
- Animations de révélation

## 📄 Licence

Document personnel - Quentin Faber © 2025

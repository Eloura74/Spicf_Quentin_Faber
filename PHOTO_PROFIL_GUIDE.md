# Guide - Photo de Profil Hero Section

## ✨ Caractéristiques de la Photo de Profil

### 📍 **Position**
- **Placement** : À droite du titre "Quentin Faber" dans le hero
- **Alignement** : Centré verticalement avec le titre
- **Responsive** : S'adapte automatiquement à la taille d'écran

---

## 🎨 **Style Visuel**

### **Forme Organique (Non Parfaitement Ronde)**
```css
border-radius: 48% 52% 53% 47% / 51% 49% 51% 49%
```
- Forme organique qui évolue doucement
- Animation de morphing sur 8 secondes
- Change subtilement entre 4 formes différentes
- Effet naturel et moderne

### **Dimensions**
- **Desktop** : 180px × 180px (max)
- **Tablette** : 140px × 140px
- **Mobile** : 120px × 120px
- **Fluide** : `clamp(120px, 15vw, 180px)` (adaptatif)

---

## 🎭 **Effets Appliqués**

### **Amélioration de l'Image**
```css
filter:
  - brightness(0.85)    → Assombrit légèrement (-15%)
  - contrast(1.15)      → Augmente le contraste (+15%)
  - saturate(1.1)       → Booste la saturation (+10%)
  - drop-shadow         → Ombre portée profonde
```

### **Bordure et Glow**
- **Bordure** : 3px bleu cyan `#38BDF8`
- **Box-shadow triple** :
  1. Glow externe bleu (30px)
  2. Ombre portée noire (40px)
  3. Lumière interne subtile (inset)

### **Arrière-plan Lumineux**
- Gradient radial bleu (`rgba(56, 189, 248, 0.2)`)
- Pulse animé (3 secondes)
- Position : -15px autour de l'image
- Effet de halo ambiant

---

## ✨ **Animations**

### **1. Morphing de la Bordure (8s)**
Animation continue qui change la forme du border-radius :
```
0%   : 48% 52% 53% 47% / 51% 49% 51% 49%
25%  : 52% 48% 47% 53% / 49% 51% 49% 51%
50%  : 49% 51% 50% 50% / 53% 47% 53% 47%
75%  : 51% 49% 52% 48% / 47% 53% 47% 53%
100% : Retour à l'origine
```

### **2. Pulse du Glow (3s)**
- Animation infinie sur l'arrière-plan
- Effet de respiration lumineux
- Opacity variable (0.6)

---

## 🖱️ **Effet Hover**

Au survol de la souris :

### **Transformation**
```css
- scale(1.05)              → Agrandissement 5%
- brightness(1)            → Luminosité normale
- contrast(1.2)            → Contraste augmenté
- saturate(1.15)           → Saturation augmentée
```

### **Bordure et Ombre**
- Bordure plus lumineuse : `rgba(56, 189, 248, 0.8)`
- Glow plus intense : 40px → 50px
- Ombre portée renforcée : 50px

### **Transition**
- Durée : 0.4s
- Easing : `var(--transition-premium)`
- Fluide et naturel

---

## 📱 **Responsive**

### **Desktop (> 1024px)**
```css
- Taille : 180px × 180px
- Gap titre : 3rem
- Disposition : Flex horizontal
- Glow actif
- Animations complètes
```

### **Tablette (768px - 1024px)**
```css
- Taille : 140px × 140px
- Gap titre : 2rem
- Disposition : Flex horizontal
- Toutes animations actives
```

### **Mobile (< 768px)**
```css
- Taille : 120px × 120px
- Gap titre : 1.5rem
- Disposition : Flex vertical (colonne)
- Titre centré
- Photo centrée sous le titre
- Animations simplifiées
```

---

## 🎯 **Structure HTML**

```html
<div class="hero-title-container">
    <h2 class="hero-title">
        Quentin <span class="gradient-text">Faber</span>
    </h2>
    <div class="hero-profile-wrapper">
        <img src="profil.png" alt="Quentin Faber" class="hero-profile-img">
    </div>
</div>
```

---

## 🌈 **Palette de Couleurs**

| Élément | Couleur | Code |
|---------|---------|------|
| **Bordure** | Bleu cyan | `#38BDF8` |
| **Glow externe** | Bleu cyan 30% | `rgba(56, 189, 248, 0.3)` |
| **Glow hover** | Bleu cyan 50% | `rgba(56, 189, 248, 0.5)` |
| **Ombre portée** | Noir 50% | `rgba(0, 0, 0, 0.5)` |
| **Arrière-plan** | Bleu radial 20% | `rgba(56, 189, 248, 0.2)` |
| **Lumière interne** | Blanc 10% | `rgba(255, 255, 255, 0.1)` |

---

## 🔧 **Optimisations**

### **Performance**
- `will-change: transform` implicite
- Animations GPU-accelerated
- Transitions CSS pures (pas de JS)
- Images optimisées recommandées

### **Accessibilité**
- Alt text sur l'image : "Quentin Faber"
- Pas de clignotement rapide
- Contraste suffisant avec le fond

### **Compatibilité**
- ✅ Chrome/Edge (complet)
- ✅ Firefox (complet)
- ✅ Safari (complet, prefixes ajoutés)
- ✅ Mobile iOS/Android (complet)

---

## 📸 **Recommandations Image**

### **Format**
- PNG ou WebP recommandé
- JPG acceptable
- Transparent : Non (fond géré par CSS)

### **Dimensions**
- Minimum : 300px × 300px
- Recommandé : 500px × 500px
- Maximum : 1000px × 1000px

### **Optimisation**
- Compression : 80-90% qualité
- Taille fichier : < 200 KB
- Ratio : 1:1 (carré)

### **Contenu**
- Cadrage : Portrait serré
- Fond : Uni ou légèrement flouté
- Éclairage : Bon contraste
- Expression : Professionnelle

---

## ✅ **Résultat Final**

### **Points Forts**
- ✅ Forme organique unique et moderne
- ✅ Assombrissement subtil pour contraste
- ✅ Amélioration automatique de l'image
- ✅ Animations fluides et naturelles
- ✅ Glow ambiant élégant
- ✅ Hover interactif
- ✅ 100% responsive
- ✅ Performance optimale

### **Effet Visuel**
- Style professionnel et moderne
- Attire l'attention sans surcharger
- S'intègre parfaitement au design
- Cohérence avec le thème tech/numérique
- Respire et vit avec les animations

**La photo de profil est maintenant un élément clé du hero ! 🎨✨**

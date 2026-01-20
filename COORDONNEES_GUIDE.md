# Guide - Fonctionnalités des Coordonnées

## ✨ Nouvelles Fonctionnalités Ajoutées

### 📍 **Coordonnées dans le Header** (Desktop uniquement)

**Position** : En haut à droite, à côté du menu de navigation

**Fonctionnalités** :
- ☎️ **Téléphone** : Icône téléphone + numéro cliquable
- ✉️ **Email** : Icône email + adresse cliquable
- **Tooltip au survol** : Affiche le texte à copier
- **Clic pour copier** : Un simple clic copie dans le presse-papiers
- **Animation hover** : Effet de slide au survol

**Comportement** :
- **Desktop** : Visible en permanence
- **Tablette** : Visible mais taille réduite
- **Mobile** : Masqué (pour éviter la surcharge du header)

---

### 📧 **Coordonnées Complètes en Bas de Page**

**Position** : Après la signature, dans la section conclusion

**Contenu** :
- 📍 **Adresse** : 25 ronde des bolles, 13800 Istres
- ☎️ **Téléphone** : 07 68 83 30 98 (cliquable)
- ✉️ **Email** : faber.quentin@gmail.com (cliquable)

**Fonctionnalités** :
- **Icônes colorées** : Font Awesome avec couleur accent
- **Boutons stylisés** : Effet glassmorphism
- **Clic pour copier** : Copie automatique dans le presse-papiers
- **Notification visuelle** : "✓ Copié : [texte]" s'affiche 3 secondes
- **Animations** : Effets hover avec élévation et glow

---

## 🎨 Design & Style

### **Header (Desktop)**
```
Icône bleue | Texte gris → blanc au hover
Animation de slide vers la gauche au survol
Tooltip noir affichant le contenu au survol
```

### **Footer (Tous écrans)**
```
Layout vertical centré
Adresse avec icônes localisation
Boutons avec bordure + fond glassmorphism
Hover : couleur bleue + élévation + ombre
Active : légère réduction de taille
```

---

## 📱 Responsive

| Écran | Header Contact | Footer Contact |
|-------|----------------|----------------|
| **Desktop** (>1024px) | ✅ Visible (taille normale) | ✅ Visible |
| **Tablette** (768-1024px) | ✅ Visible (taille réduite) | ✅ Visible |
| **Mobile** (<768px) | ❌ Masqué | ✅ Visible (boutons pleine largeur) |

---

## 🔧 Fonctionnement Technique

### **Copie dans le Presse-Papiers**

1. **API Moderne** : Utilise `navigator.clipboard.writeText()` (navigateurs récents)
2. **Fallback** : Utilise `document.execCommand('copy')` pour anciens navigateurs
3. **Sécurité** : Fonctionne uniquement en HTTPS ou localhost

### **Classe `.copyable`**

Tous les éléments avec la classe `copyable` sont automatiquement :
- Cliquables
- Copient le contenu de `data-copy` (ou leur texte si data-copy absent)
- Affichent une notification de confirmation

---

## 🎯 Éléments Cliquables

### **HTML Structure**
```html
<!-- Header -->
<a href="tel:+33768833098" class="copyable" data-copy="07 68 83 30 98">
    07 68 83 30 98
</a>

<!-- Footer -->
<a href="mailto:faber.quentin@gmail.com" class="copyable" data-copy="faber.quentin@gmail.com">
    faber.quentin@gmail.com
</a>
```

### **Comportement au Clic**
1. Empêche le comportement par défaut (appel/email)
2. Copie le texte de `data-copy` dans le presse-papiers
3. Affiche une notification animée pendant 3 secondes
4. Animation de feedback visuel (scale down)

---

## 🌈 Animations

### **Header Contact**
- **Hover** : `translateX(-3px)` + fond glassmorphism
- **Active** : `scale(0.95)`
- **Tooltip** : Fade in/out 0.3s

### **Footer Contact**
- **Hover** : `translateY(-2px)` + bordure accent + box-shadow glow
- **Active** : `translateY(0)` + `scale(0.98)`

### **Notification**
- **Apparition** : Slide up depuis le bas (0.4s)
- **Disparition** : Fade out après 3 secondes

---

## 🎨 Palette de Couleurs

| Élément | Couleur | Variable CSS |
|---------|---------|--------------|
| Icônes | Bleu cyan | `var(--accent-glow)` #38BDF8 |
| Texte normal | Gris | `var(--text-secondary)` #94a3b8 |
| Texte hover | Bleu | `var(--accent-glow)` #38BDF8 |
| Fond boutons | Glassmorphism | `var(--glass-surface)` rgba(255,255,255,0.03) |
| Bordure | Glassmorphism | `var(--glass-border)` rgba(255,255,255,0.08) |

---

## ✅ Compatibilité

- ✅ Chrome/Edge (complet)
- ✅ Firefox (complet)
- ✅ Safari (complet)
- ✅ Mobile iOS/Android (complet)
- ✅ Anciens navigateurs (fallback actif)

---

## 🚀 Utilisation

### **Pour l'utilisateur final** :
1. **Voir les coordonnées** : Header (desktop) ou footer (tous écrans)
2. **Copier rapidement** : Cliquer sur téléphone ou email
3. **Confirmation visuelle** : Notification "✓ Copié"
4. **Appeler/Écrire** : Maintenir Ctrl + Clic (desktop) pour action native

### **Pour le développeur** :
```javascript
// Ajouter un nouvel élément copiable
<a href="#" class="copyable" data-copy="Texte à copier">
    Affichage
</a>

// Pas besoin de JS supplémentaire, 
// initCopyableElements() s'en charge automatiquement
```

---

## 🎁 Bonus

- Tooltips informatifs au survol (desktop)
- Icônes Font Awesome intégrées via CSS `::before`
- Transitions fluides sur toutes les interactions
- Feedback visuel immédiat
- Design cohérent avec le reste du site

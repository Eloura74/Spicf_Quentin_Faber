# Design Final des Coordonnées

## ✨ Nouveau Design Appliqué

### 📐 **Structure HTML**

```html
<div class="coordonees">
    <!-- Adresse physique -->
    <p>25 ronde des bolles</p>
    <p>13800 Istres</p>

    <!-- Grille 2x2 des liens de contact -->
    <div class="coordonees-links">
        <a href="tel:...">07 68 83 30 98</a>
        <a href="mailto:...">faber.quentin@gmail.com</a>
        <a href="linkedin...">LinkedIn</a>
        <a href="github...">GitHub</a>
    </div>
</div>
```

---

## 🎨 **Style Visuel**

### Container Principal (.coordonees)
```css
- Fond : Gradient rgba(15, 23, 42, 0.4) → rgba(30, 41, 59, 0.25)
- Bordure top : 1px rgba(148, 163, 184, 0.1)
- Border-radius : 24px (--radius-xl)
- Padding : 2.5rem 2rem
- Gap : 1.5rem (entre éléments)
- Alignement : centré
```

### Adresse (p)
```css
- Couleur : #cbd5e1 (gris clair)
- Taille : 0.95rem
- Icônes : Font Awesome #94a3b8
  - Adresse : map-marker-alt (\f3c5)
  - Ville : home (\f015)
```

### Grille des Liens (.coordonees-links)
```css
Desktop/Tablette:
  - Grid : repeat(auto-fit, minmax(220px, 1fr))
  - 2 colonnes adaptatives
  - Gap : 1rem
  - Max-width : 600px

Mobile:
  - Grid : 1 colonne
  - Gap : 0.8rem
  - Width : 100%
```

---

## 🔗 **Boutons de Contact**

### Style Normal
```css
- Fond : Gradient rgba(30, 41, 59, 0.4) → rgba(51, 65, 85, 0.25)
- Texte : #e2e8f0
- Police : Inter (--font-body)
- Taille : 0.95rem
- Bordure : 1px rgba(148, 163, 184, 0.15)
- Padding : 1rem 1.3rem
- Border-radius : 12px
- Backdrop-filter : blur(10px)
- Align : flex-start (icône à gauche)
```

### Icônes Spécifiques
```css
Téléphone : \f3cd (phone-volume) - Font Awesome Free
Email     : \f0e0 (envelope)     - Font Awesome Free
LinkedIn  : \f08c (linkedin)     - Font Awesome Brands
GitHub    : \f09b (github)       - Font Awesome Brands

Couleur normale : #94a3b8 (gris moyen)
Taille : 1.1rem
Flex-shrink : 0 (ne rétrécit pas)
```

---

## ✨ **Effets Hover**

### Hover Global
```css
- Texte : #f8fafc (blanc ultra-doux)
- Fond : Gradient rgba(51, 65, 85, 0.7) → rgba(71, 85, 105, 0.5)
- Bordure : rgba(148, 163, 184, 0.4)
- Transform : translateY(-2px)
- Shadow : 0 8px 24px rgba(0, 0, 0, 0.3)
- Icône : #e2e8f0
```

### Hover Spécifique LinkedIn
```css
- Bordure : rgba(10, 102, 194, 0.3) (bleu LinkedIn)
- Shadow : 0 8px 24px rgba(10, 102, 194, 0.15)
- Icône : #0a66c2 (couleur officielle LinkedIn)
```

### Hover Spécifique GitHub
```css
- Bordure : rgba(240, 246, 252, 0.3) (blanc GitHub)
- Shadow : 0 8px 24px rgba(240, 246, 252, 0.1)
- Icône : #f0f6fc
```

### Active (Click)
```css
- Transform : translateY(0) scale(0.98)
- Feedback visuel de l'appui
```

---

## 💡 **Tooltip**

```css
Position : top -2.8rem, centré
Fond : Gradient #0f172a → #1e293b
Texte : "Cliquer pour copier"
Couleur : #e2e8f0
Bordure : 1px rgba(148, 163, 184, 0.2)
Shadow : 0 4px 12px rgba(0, 0, 0, 0.3)
Transition : opacity 0.3s
Display : none sur mobile (pas de hover tactile)
```

---

## 📱 **Responsive**

### Desktop (> 1024px)
```css
- Grille 2 colonnes auto-fit
- Padding complet
- Tooltips actifs
- Max-width 600px
```

### Tablette (768-1024px)
```css
- Grille fixe 2 colonnes
- Max-width 550px
- Padding : 2rem 1.5rem
- Font-size : 0.9rem
- Padding liens : 0.95rem 1.2rem
```

### Mobile (< 768px)
```css
- Grille 1 colonne
- Width 100%
- Gap : 0.8rem
- Padding : 1.8rem 1rem
- Font-size : 0.9rem
- Padding liens : 0.9rem 1.1rem
- Tooltips masqués
- Justify : flex-start
```

---

## 🎯 **Fonctionnalités**

### 1. **Copie au Clic**
- Téléphone → Copie "07 68 83 30 98"
- Email → Copie "faber.quentin@gmail.com"
- LinkedIn → Copie "linkedin.com/in/quentin-faber"
- GitHub → Copie "github.com/Eloura74"

### 2. **Liens Externes**
- Tel : Ouvre l'app téléphone
- Email : Ouvre le client mail
- LinkedIn : Ouvre dans nouvel onglet (target="_blank")
- GitHub : Ouvre dans nouvel onglet (target="_blank")

### 3. **Notification**
- Message : "✓ Copié : [texte]"
- Durée : 2.5 secondes
- Position : Bas centre
- Style : Gradient sombre + vert doux

---

## 🌈 **Palette de Couleurs**

| Élément | Couleur | Usage |
|---------|---------|-------|
| **Texte liens** | #e2e8f0 | Normal |
| **Texte hover** | #f8fafc | Survol |
| **Icônes** | #94a3b8 | Normal |
| **Icônes hover** | #e2e8f0 | Survol |
| **LinkedIn hover** | #0a66c2 | Icône LinkedIn |
| **GitHub hover** | #f0f6fc | Icône GitHub |
| **Adresse** | #cbd5e1 | Texte adresse |
| **Fond container** | rgba(15,23,42) → rgba(30,41,59) | Gradient |
| **Fond liens** | rgba(30,41,59) → rgba(51,65,85) | Gradient |
| **Fond hover** | rgba(51,65,85) → rgba(71,85,105) | Gradient |
| **Bordures** | rgba(148,163,184, 0.15-0.4) | Semi-transparent |

---

## ✅ **Résultat Final**

### Avant
- ❌ Liens bleus flashy (difficiles à lire)
- ❌ LinkedIn et GitHub sans icônes
- ❌ Tout en colonne (manque d'organisation)
- ❌ Style incohérent

### Après
- ✅ **Grille élégante 2x2** (adaptative)
- ✅ **Icônes professionnelles** pour tous les liens
- ✅ **Couleurs douces** et cohérentes
- ✅ **Hover personnalisé** par réseau social
- ✅ **Tooltips informatifs** (desktop)
- ✅ **100% responsive** (mobile, tablette, desktop)
- ✅ **Effets subtils** et professionnels
- ✅ **Fonctionnalité de copie** intacte

---

## 📋 **Points Clés**

1. **Design cohérent** avec le reste du site
2. **Lisibilité parfaite** sur fond sombre
3. **Organisation visuelle** claire (grille)
4. **Identité visuelle** des réseaux sociaux respectée
5. **Accessibilité** : zones de clic suffisantes
6. **Performance** : transitions fluides
7. **Mobile-first** : adapté à tous les écrans

**Le rendu est maintenant professionnel et harmonieux ! 🎨✨**

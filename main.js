// ============================================
// EFFET CONSTELLATION - Particules animées interactives
// ============================================

// Récupération de l'élément canvas pour l'effet constellation
const canvas = document.getElementById('constellation');

if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    // Configuration des particules
    const particleCount = 40;  // Nombre de particules
    const connectionDistance = 120;  // Distance de connexion entre particules
    const mouseDistance = 180;  // Distance d'interaction avec la souris
    
    // Position de la souris
    let mouse = { x: null, y: null };
    
    // Écoute des mouvements de souris
    window.addEventListener('mousemove', e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    // Réinitialisation quand la souris quitte la fenêtre
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Fonction de redimensionnement du canvas
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();

    // Classe Particule - chaque point de la constellation
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;  // Vitesse horizontale
            this.vy = (Math.random() - 0.5) * 0.3;  // Vitesse verticale
            this.size = Math.random() * 2 + 1;  // Taille de la particule
        }

        // Mise à jour de la position de la particule
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Rebond sur les bords
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Interaction avec la souris - fuite des particules
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouseDistance) {
                    // Calcul de la force de répulsion
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.6;
                    const directionY = forceDirectionY * force * 0.6;
                    
                    // Application de la force (fuite)
                    this.vx -= directionX;
                    this.vy -= directionY;
                }
            }
        }

        // Dessin de la particule
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialisation des particules
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    initParticles();

    // Boucle d'animation principale
    function animate() {
        // Effacer le canvas
        ctx.clearRect(0, 0, width, height);
        
        // Mise à jour et dessin de chaque particule
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connexions entre particules proches
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                // Dessiner une ligne si les particules sont assez proches
                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / connectionDistance) * 0.3})`;
                    ctx.lineWidth = 0.3;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Continuer l'animation
        requestAnimationFrame(animate);
    }
    
    // Démarrer l'animation
    animate();
}


// ============================================
// ANIMATIONS DE RÉVÉLATION AU SCROLL
// ============================================

// Fonction pour révéler les éléments lors du scroll
function revealOnScroll() {
    // Sélectionner tous les éléments avec la classe 'reveal'
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        // Position de l'élément par rapport au viewport
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;  // Distance à laquelle l'élément devient visible
        
        // Si l'élément est visible dans le viewport
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Écoute du scroll pour révéler les éléments
window.addEventListener('scroll', revealOnScroll);

// Révéler les éléments visibles au chargement de la page
window.addEventListener('load', revealOnScroll);


// ============================================
// BOUTON RETOUR EN HAUT
// ============================================

const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Afficher/masquer le bouton lors du scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Retour en haut au clic
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Animation fluide
        });
    });
}


// ============================================
// NAVIGATION FLUIDE VERS LES SECTIONS
// ============================================

// Sélectionner tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Récupérer l'ID de la section cible
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculer la position en tenant compte du header fixe
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            // Scroll fluide vers la section
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// ============================================
// MISE EN SURBRILLANCE DU LIEN ACTIF
// ============================================

// Fonction pour mettre en surbrillance le lien de navigation actif
function highlightActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    // Retirer la classe active de tous les liens
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Ajouter la classe active au lien correspondant
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Écoute du scroll pour la mise en surbrillance
window.addEventListener('scroll', highlightActiveSection);


// ============================================
// EFFET DE PARALLAXE LÉGER (optionnel)
// ============================================

// Effet de parallaxe sur les éléments avec la classe 'parallax-element'
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});


// ============================================
// MENU HAMBURGER MOBILE
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');
const navLinksAll = document.querySelectorAll('.nav-link');

if (hamburger && navMenu && menuOverlay) {
    // Fonction pour ouvrir le menu
    function openMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Fonction pour fermer le menu
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Toggle du menu au clic sur le hamburger
    hamburger.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Fermer le menu au clic sur un lien de navigation
    navLinksAll.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    // Fermer le menu au clic sur l'overlay
    menuOverlay.addEventListener('click', () => {
        closeMenu();
    });
    
    // Fermer le menu lors du redimensionnement de la fenêtre (passage mobile -> desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}


// ============================================
// INITIALISATION AU CHARGEMENT
// ============================================

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ Page de présentation professionnelle chargée');
    console.log('✓ Effets visuels activés');
    console.log('✓ Constellation interactive active');
    console.log('✓ Navigation mobile responsive activée');
    
    // Révéler les premiers éléments visibles
    revealOnScroll();
    
    // Mettre en surbrillance la première section active
    highlightActiveSection();
});


// ============================================
// PERFORMANCE - Limitation du taux de rafraîchissement
// ============================================

// Fonction throttle pour limiter l'exécution des événements de scroll
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Application du throttle aux événements de scroll gourmands
const throttledReveal = throttle(revealOnScroll, 100);
const throttledHighlight = throttle(highlightActiveSection, 100);

window.removeEventListener('scroll', revealOnScroll);
window.removeEventListener('scroll', highlightActiveSection);

window.addEventListener('scroll', throttledReveal);
window.addEventListener('scroll', throttledHighlight);

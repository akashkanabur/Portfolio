// ====================================================== Creative About Page JavaScript ======================================================

// Page Loading Animation
document.addEventListener('DOMContentLoaded', function () {
    // Hide loader after 3 seconds
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 3000);

    // Initialize animations
    initializeAnimations();
});

function initializeAnimations() {
    // Hero section entrance animation
    gsap.timeline()
        .from('.hero-title .title-line', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        })
        .from('.hero-title .title-name', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.7')
        .from('.hero-title .title-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.7')
        .from('.hero-description', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.stat-item', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.profile-container', {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.8')
        .from('.scroll-indicator', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3');

    // Scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal scroll gallery functionality
    initializeHorizontalGallery();



    // Skills categories animation
    gsap.from('.skill-category', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.skills-showcase',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Personal section animation
    gsap.from('.personal-text', {
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.personal-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.quote-card', {
        duration: 0.8,
        x: 50,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.personal-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });


}

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Smooth scrolling for scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function () {
        const skillsSection = document.querySelector('.skills-showcase');
        if (skillsSection) {
            skillsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Interactive hover effects
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.category-icon');
        const tags = this.querySelectorAll('.skill-tag');

        if (icon) {
            gsap.to(icon, {
                duration: 0.3,
                scale: 1.1,
                rotation: 5,
                ease: 'power2.out'
            });
        }

        if (tags.length > 0) {
            gsap.to(tags, {
                duration: 0.3,
                y: -5,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }
    });

    category.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.category-icon');
        const tags = this.querySelectorAll('.skill-tag');

        if (icon) {
            gsap.to(icon, {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: 'power2.out'
            });
        }

        if (tags.length > 0) {
            gsap.to(tags, {
                duration: 0.3,
                y: 0,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }
    });
});



// Navigation links animation (keeping original functionality)
function navLinksAnimation() {
    var navLinks = document.querySelectorAll("nav ul li");

    navLinks.forEach((e) => {
        e.addEventListener("mouseenter", function () {
            gsap.to(e, {
                y: -8,
                duration: 0.5,
            });
        });
        e.addEventListener("mouseleave", function () {
            gsap.to(e, {
                y: 0,
                duration: 0.5,
            });
        });
    });
}

// Initialize nav links animation
navLinksAnimation();

// Horizontal scroll gallery functionality
function initializeHorizontalGallery() {
    const gallerySection = document.querySelector('.image-gallery-section');
    const galleryScroll = document.getElementById('galleryScroll');
    const galleryContainer = document.querySelector('.gallery-container');

    if (!gallerySection || !galleryScroll || !galleryContainer) {
        console.log('Gallery elements not found');
        return;
    }

    console.log('Initializing horizontal gallery...');

    // Create ScrollTrigger for horizontal scrolling
    gsap.registerPlugin(ScrollTrigger);

    // Get the total width to scroll
    const getScrollAmount = () => {
        let galleryWidth = galleryScroll.scrollWidth;
        let containerWidth = galleryContainer.offsetWidth;
        console.log('Gallery width:', galleryWidth, 'Container width:', containerWidth);
        return -(galleryWidth - containerWidth);
    };

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.to(galleryScroll, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
    });

    // Create ScrollTrigger
    ScrollTrigger.create({
        trigger: ".gallery-spacer",
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: ".gallery-container",
        animation: horizontalScroll,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
            console.log('Scroll progress:', self.progress);
        }
    });

    // Gallery entrance animation
    gsap.from('.gallery-title', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.image-gallery-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.gallery-subtitle', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
            trigger: '.image-gallery-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Individual image placeholder animations
    gsap.from('.image-placeholder', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.gallery-container',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
} // Close initializeAnimations

// Console log for debugging
console.log('Creative About page loaded successfully!');

// ContactOverlayAnimation removed to allow navigation to contact.html

// Shared particle background
(function () {
    var canvas = document.getElementById('bgParticles');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    var particles = [];
    for (var i = 0; i < 70; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 0.5,
            sx: Math.random() * 0.8 - 0.4,
            sy: Math.random() * 0.8 - 0.4,
            o: Math.random() * 0.5 + 0.2
        });
    }
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(function (p) {
            p.x += p.sx; p.y += p.sy;
            if (p.x < 0 || p.x > canvas.width) p.sx = -p.sx;
            if (p.y < 0 || p.y > canvas.height) p.sy = -p.sy;
            ctx.fillStyle = 'rgba(255,255,255,' + p.o + ')';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(loop);
    }
    loop();
    window.addEventListener('resize', function () { resize(); });
}());
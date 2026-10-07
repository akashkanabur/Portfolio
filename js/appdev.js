// ====================================================== App Development Page JavaScript ======================================================

// Page Loading Animation (Split Loader)
document.addEventListener('DOMContentLoaded', function () {
    const tl = gsap.timeline();

    tl.to('.loader-logo', {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power4.inOut',
        delay: 0.5
    })
        .to('.loader-side.left', {
            duration: 1.2,
            x: '-100%',
            ease: 'expo.inOut'
        }, '-=0.5')
        .to('.loader-side.right', {
            duration: 1.2,
            x: '100%',
            ease: 'expo.inOut'
        }, '-=1.2')
        .to('.split-loader', {
            display: 'none'
        })
        .from('.hero-text h1', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.5')
        .from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.8')
        .from('.hero-description', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.8')
        .from('.hero-buttons', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.8')
        .from('.app-showcase', {
            duration: 1.5,
            scale: 0.8,
            opacity: 0,
            ease: 'power4.out'
        }, '-=1.2');
});

// Smooth scrolling for anchor links
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

// Animate sections on scroll
gsap.registerPlugin(ScrollTrigger);

// Skills section animation
gsap.from('.skill-card', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});



// Process flowchart animation
gsap.utils.toArray('.flow-step').forEach((step, i) => {
    ScrollTrigger.create({
        trigger: step,
        start: 'top 85%',
        onEnter: () => step.classList.add('active'),
        once: true
    });
});

// Animate flow lines
gsap.from('.flow-line', {
    duration: 1,
    scaleY: 0,
    transformOrigin: 'top',
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.process-section',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
    }
});

// Animate flow arrows
gsap.from('.flow-arrow', {
    duration: 0.6,
    scale: 0,
    rotation: 180,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.process-section',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
    }
});

// Flow step hover animations
document.querySelectorAll('.flow-step').forEach((step, index) => {
    step.addEventListener('mouseenter', function () {
        gsap.to(this.querySelector('.flow-icon'), {
            duration: 0.3,
            scale: 1.1,
            rotation: 5,
            ease: 'power2.out'
        });

        gsap.to(this.querySelectorAll('.detail-tag'), {
            duration: 0.3,
            y: -5,
            stagger: 0.1,
            ease: 'power2.out'
        });
    });

    step.addEventListener('mouseleave', function () {
        gsap.to(this.querySelector('.flow-icon'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });

        gsap.to(this.querySelectorAll('.detail-tag'), {
            duration: 0.3,
            y: 0,
            stagger: 0.1,
            ease: 'power2.out'
        });
    });
});

// App showcase hover effects
document.querySelector('.app-showcase').addEventListener('mouseenter', function () {
    gsap.to('.app-image-slider', {
        duration: 0.3,
        animationPlayState: 'paused'
    });
});

document.querySelector('.app-showcase').addEventListener('mouseleave', function () {
    gsap.to('.app-image-slider', {
        duration: 0.3,
        animationPlayState: 'running'
    });
});

// Add subtle floating animation to app showcase
gsap.to('.app-showcase', {
    duration: 4,
    y: -10,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
});

// Navbar background change on scroll - Keep consistent gradient
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'linear-gradient(45deg, #0e3771, #ffffff, #8e8e8e)';
        nav.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.background = 'linear-gradient(45deg, #0e3771, #ffffff, #8e8e8e)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add hover effects to buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
    button.addEventListener('mouseenter', function () {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', function () {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Ensure process section is always visible
document.addEventListener('DOMContentLoaded', function () {
    const processSection = document.querySelector('.process-section');
    const flowSteps = document.querySelectorAll('.flow-step');

    if (processSection) {
        processSection.style.display = 'block';
        processSection.style.visibility = 'visible';
        processSection.style.opacity = '1';
    }

    flowSteps.forEach(step => {
        step.style.display = 'flex';
        step.style.visibility = 'visible';
        step.style.opacity = '1';
    });
});

// Custom cursor functionality
function cursorMovingAnimation() {
    var cursor = document.querySelector(".cursor");
    var heroButtons = document.querySelectorAll(".btn-connect");
    var appCards = document.querySelectorAll(".app-card");
    var skillCards = document.querySelectorAll(".skill-card");
    var flowSteps = document.querySelectorAll(".flow-step");
    var navLinks = document.querySelectorAll("nav ul li a, .contact_btn");

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Track mouse movement
    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor following animation
    function animateCursor() {
        // Smooth interpolation for cursor movement
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);
    }

    // Start the animation loop
    animateCursor();

    // Function to show cursor with smooth animation
    function showCursor() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    }

    // Function to hide cursor with smooth animation
    function hideCursor() {
        gsap.to(cursor, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }

    // Add cursor effects to interactive elements
    const interactiveElements = [
        ...heroButtons,
        ...appCards,
        ...skillCards,
        ...flowSteps,
        ...navLinks
    ];

    interactiveElements.forEach(element => {
        if (element) {
            element.addEventListener("mouseenter", showCursor);
            element.addEventListener("mouseleave", hideCursor);
        }
    });
}

// Initialize cursor animation
cursorMovingAnimation();

// Console log for debugging
console.log('App Development page loaded successfully!');

// ContactOverlayAnimation removed to allow navigation to contact.html
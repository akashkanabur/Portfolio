// Toggle menu
var toggleIcon = document.getElementById('exp-toggle-icon');
var toggleClose = document.getElementById('exp-toggle-close');
var toggleMenu = document.getElementById('exp-toggle-menu');

if (toggleIcon) toggleIcon.addEventListener('click', function () { toggleMenu.style.right = '0%'; });
if (toggleClose) toggleClose.addEventListener('click', function () { toggleMenu.style.right = '-100%'; });

// Nav link hover animation
var navLinks = document.querySelectorAll('nav ul li');
navLinks.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
        gsap.to(el, { y: -8, duration: 0.5 });
    });
    el.addEventListener('mouseleave', function () {
        gsap.to(el, { y: 0, duration: 0.5 });
    });
});

// Particles Background
const canvas = document.getElementById('expParticles');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 70;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.speedY = Math.random() * 0.8 - 0.4;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        }
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Set initial hidden states via JS (not CSS)
gsap.set('.reveal-up', { opacity: 0, y: 50 });
gsap.set('.reveal-left', { opacity: 0, x: -60 });
gsap.set('.reveal-right', { opacity: 0, x: 60 });

// Hero animations — run immediately on load
gsap.to('.exp-hero-label', { y: 0, opacity: 1, duration: 1, delay: 0.2 });
gsap.to('.exp-hero-title', { y: 0, opacity: 1, duration: 1, delay: 0.4 });
gsap.to('.exp-hero-desc', { y: 0, opacity: 1, duration: 1, delay: 0.6 });
gsap.to('.exp-hero-scroll', { y: 0, opacity: 1, duration: 1, delay: 1 });

// Stats counter animation
const stats = document.querySelectorAll('.exp-stat-num');
stats.forEach(function (stat) {
    var target = stat.getAttribute('data-target');
    if (target) {
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            once: true,
            onEnter: function () {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out'
                });
            }
        });
    }
});

// Timeline line fill on scroll
var timelineLine = document.getElementById('timelineLine');
var timelineLineFill = document.getElementById('timelineLineFill');
if (timelineLine && timelineLineFill) {
    ScrollTrigger.create({
        trigger: '.exp-timeline',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 0.5,
        onUpdate: function (self) {
            timelineLineFill.style.height = (self.progress * 100) + '%';
        }
    });
}

// Reveal Up Elements
gsap.utils.toArray('.reveal-up').forEach(function (element) {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            toggleActions: 'play none none none'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Reveal Left / Right
gsap.utils.toArray('.reveal-left').forEach(function (element) {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.reveal-right').forEach(function (element) {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out'
    });
});

// Work cards stagger reveal
var workCards = document.querySelectorAll('.exp-work-card');
if (workCards.length) {
    gsap.from(workCards, {
        scrollTrigger: {
            trigger: '.exp-work-showcase-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });
}

// Inside the Work panels stagger
var insidePanels = document.querySelectorAll('.exp-inside-panel');
if (insidePanels.length) {
    gsap.from(insidePanels, {
        scrollTrigger: {
            trigger: '.exp-inside-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out'
    });
}

// Tech pills stagger
var techPills = document.querySelectorAll('.exp-pill-tech');
if (techPills.length) {
    gsap.from(techPills, {
        scrollTrigger: {
            trigger: '.exp-tech-pills-animated',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'back.out(1.5)'
    });
}

// Bug flow sequential animation
function initBugFlowAnimation() {
    var bugFlows = document.querySelectorAll('.exp-wcv-flow');
    bugFlows.forEach(function (flow) {
        var steps = flow.querySelectorAll('.exp-wcv-flow-step');
        if (!steps.length) return;

        var currentStep = 0;
        steps[0].classList.add('exp-wcv-flow-active');

        setInterval(function () {
            steps[currentStep].classList.remove('exp-wcv-flow-active');
            currentStep = (currentStep + 1) % steps.length;
            steps[currentStep].classList.add('exp-wcv-flow-active');
        }, 1200);
    });
}
initBugFlowAnimation();

// UX before/after toggle animation
function initUxToggle() {
    var uxPanels = document.querySelectorAll('.exp-wcv-ux');
    uxPanels.forEach(function (panel) {
        var before = panel.querySelector('.exp-wcv-ux-before');
        var after = panel.querySelector('.exp-wcv-ux-after');
        if (!before || !after) return;

        setInterval(function () {
            before.style.opacity = before.style.opacity === '0.4' ? '1' : '0.4';
            after.style.opacity = after.style.opacity === '0.4' ? '1' : '0.4';
        }, 2000);
    });
}
initUxToggle();

// ISL telemetry live value updates
function initTelemetryUpdates() {
    var metrics = document.querySelectorAll('.exp-isl-val[data-val]');
    metrics.forEach(function (metric) {
        var base = parseFloat(metric.getAttribute('data-val'));
        setInterval(function () {
            var delta = (Math.random() - 0.5) * 2;
            var val = (base + delta).toFixed(1);
            metric.textContent = val;
        }, 2000);
    });
}
initTelemetryUpdates();

// Takeaway quote reveal
var takeaway = document.querySelector('.exp-takeaway');
if (takeaway) {
    gsap.from(takeaway, {
        scrollTrigger: {
            trigger: takeaway,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
}

// Cert badge entrance
var certBadge = document.querySelector('.exp-cert-badge-placeholder');
if (certBadge) {
    gsap.from(certBadge, {
        scrollTrigger: {
            trigger: certBadge,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.5)'
    });
}

// Timeline node pulse on scroll into view
gsap.utils.toArray('.exp-timeline-node').forEach(function (node) {
    gsap.from(node.querySelector('.exp-node-dot'), {
        scrollTrigger: {
            trigger: node,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        duration: 0.5,
        ease: 'back.out(2)'
    });
});

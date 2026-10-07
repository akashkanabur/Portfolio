

// Run animations when document is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing...');

    // Wait a bit for all elements to be ready
    setTimeout(() => {
        ButtonClickAnimation();
        initializeProjects(); // Initialize the filtering functionality
        console.log('Initialization complete');
    }, 100);
});

// Initialize projects with animation
function initializeProjects() {
    console.log('Initializing projects...');

    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    console.log('Filter buttons found:', filterButtons.length);
    console.log('Project cards found:', projectCards.length);

    // Show all cards initially
    projectCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transition = 'all 0.3s ease';
    });

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const filterValue = this.getAttribute('data-filter');
            console.log('Button clicked, filter:', filterValue);

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            filterProjects(filterValue);
        });
    });
}

// Separate function to handle filtering
function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
            // Show card
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            // Hide card
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });

    console.log('Filtered projects for:', filter);
}

// Page transition animations
function ButtonClickAnimation() {
    // Only target navigation menu links, not logo or contact button
    const navLinks = document.querySelectorAll('nav ul li a:not([target="_blank"])');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Skip if it's the current page
            if (this.classList.contains('active')) {
                e.preventDefault();
                return;
            }

            // Allow normal navigation for all other links
            console.log('Navigating to:', this.getAttribute('href'));
        });
    });

    // Ensure logo and contact button work normally
    const logoLink = document.querySelector('.nav_logo a');
    const contactBtn = document.querySelector('.contact_btn');

    if (logoLink) {
        logoLink.addEventListener('click', function () {
            console.log('Logo clicked, going to index');
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', function () {
            console.log('Contact button clicked');
        });
    }
}

// Navigation links animation function

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
navLinksAnimation();

// ContactOverlayAnimation removed to allow navigation to contact.html
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

function ColorChangeAnimation() {
  var Passion1 = document.querySelector(".herobox .passion_1 a");
  var Passion2 = document.querySelector(".herobox .passion_2 a");
  var Passion1Outline = document.querySelector(".herobox .passion_1_outline a");
  var Passion2Outline = document.querySelector(".herobox .passion_2_outline");

  Passion2.addEventListener("mouseenter", function () {
    Passion1.style.color = "transparent";
    Passion2.style.color = "#191919";
    Passion1Outline.style.display = "none";
    Passion2Outline.style.opacity = "100%";
  });
  Passion2.addEventListener("mouseleave", function () {
    Passion2.style.color = "transparent";
    Passion1.style.color = "#191919";
    Passion1Outline.style.display = "block";
    Passion2Outline.style.opacity = "0%";
  });
}

ColorChangeAnimation();

function heroboxImageMoves() {
  var image = document.querySelector(".herobox_image img");

  window.addEventListener("mousemove", function (dets) {
    image.style.left = 1 - dets.clientX * 0.02 + "px";
    image.style.top = 1 - dets.clientY * 0.02 + "px";
  });
}

heroboxImageMoves();

function cursorMovingAnimation() {
  var cursor = document.querySelector(".cursor");
  var Passion1 = document.querySelector(".herobox .passion_1 a");
  var Passion2 = document.querySelector(".herobox .passion_2 a");
  var intro = document.querySelector(".herobox .intro");

  window.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.pageX + "px";
    cursor.style.top = dets.pageY + "px";
  });

  Passion1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });

  Passion1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });
  });
  Passion2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });

  Passion2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });
  });

  intro.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });

  intro.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });
  });
}

cursorMovingAnimation();

function LoaderAnimation() {
  var navbar = document.querySelector("nav");
  var loaderWrapper = document.querySelector(".loader_wrapper");
  var leftScreen = document.querySelector(".left_screen");
  var rightScreen = document.querySelector(".right_screen");
  var loaderLogo = document.querySelector(".loading_logo");

  window.addEventListener("load", function () {
    var tl = gsap.timeline({
      onComplete: function () {
        loaderWrapper.style.display = "none";

        gsap.to(navbar, {
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: "navbar",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .intro", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .intro",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .passion_1", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .passion_1",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .passion_2", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .passion_2",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .passion_1_outline", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .passion_1_outline",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox_image", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox_image",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox p", {
          x: "18%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox p",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .hero-actions", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
        });

        gsap.from(".hero-social-links a", {
          opacity: 0,
          y: 20,
          scale: 0.5,
          rotation: -10,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(2)",
          delay: 0.9,
          onComplete: function () {
            document.querySelectorAll(".hero-social-links a").forEach(function (link) {
              link.classList.add("social-ready");
            });
          },
        });
      },
    });

    tl.from(
      leftScreen,
      {
        x: "-100%",
        duration: 1,
      },
      "a"
    );
    tl.from(
      rightScreen,
      {
        x: "100%",
        duration: 1,
      },
      "a"
    );
    tl.from(loaderLogo, {
      y: "100%",
      duration: 1,
    });
    tl.to(loaderLogo, {
      y: "100%",
      duration: 1,
      delay: 0.5,
    });
    tl.to(
      leftScreen,
      {
        x: "-100%",
        duration: 1,
      },
      "b"
    );
    tl.to(
      rightScreen,
      {
        x: "100%",
        duration: 1,
      },
      "b"
    );
  });
}

LoaderAnimation();


function ButtonClickAnimation() {
  var projectButton = document.querySelector(".herobox a.view_project_btn");
  var buttonLoader = document.querySelector(".button-loader");

  if (!projectButton || !buttonLoader) return;

  projectButton.addEventListener("click", function (event) {
    event.preventDefault();

    buttonLoader.style.display = "flex";

    gsap.to(".lft-slide", {
      x: "200%",
      duration: 1,
    });
    gsap.to(".rgt-slide", {
      x: "-200%",
      duration: 1,
    });

    setTimeout(() => {
      window.location.href = "project.html";
    }, 1000);
  });
}

ButtonClickAnimation();

function heroSocialLinksAnimation() {
  var socialLinks = document.querySelectorAll(".hero-social-links a");

  socialLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      gsap.to(link, {
        scale: 1.18,
        y: -6,
        rotation: 6,
        duration: 0.35,
        ease: "back.out(2)",
      });
      gsap.to(link.querySelector("i"), {
        rotate: 360,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    link.addEventListener("mouseleave", function () {
      gsap.to(link, {
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(link.querySelector("i"), {
        rotate: 0,
        duration: 0.35,
      });
    });
  });
}

heroSocialLinksAnimation();

let toggleIconWhite = document.querySelector(".toggle-icon")
let toggleIconBlack = document.querySelector(".toggle-icon-black")
let toggleMenu = document.querySelector(".toggle-menu")

toggleIconWhite.addEventListener("click", function () {
  toggleMenu.style.right = "0%"
})

toggleIconBlack.addEventListener("click", function () {
  toggleMenu.style.right = "-100%"
})

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
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

function sectionOneAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card-container",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 0.2,
    },
  });

  tl.to(
    ".card-1",
    {
      y: "15%",
      duration: 0.5,
    },
    "a"
  );

  tl.to(
    ".card-2",
    {
      y: "7%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-3",
    {
      y: "-5%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-4",
    {
      y: "-12%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-5",
    {
      y: "0%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-6",
    {
      y: "10%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-7",
    {
      y: "16%",
      duration: 0.5,
    },
    "a"
  );

  gsap.to(".section-1 .line", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".section-1 h2",
      scrub: 0.3,
      start: "top 70%",
      end: "bottom 45%",
    },
  });

  gsap.to(".section-1 h1", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".section-1 h1",
      scrub: 0.3,
      start: "top 70%",
      end: "bottom 45%",
    },
  });
}

sectionOneAnimation();


function slider() {
  var lftbtn = document.querySelector(".left-button");
  var rgtbtn = document.querySelector(".right-button");
  var slides = document.querySelector(".slides-holder");

  var countbtn = 0;
  rgtbtn.addEventListener("click", function () {
    if (countbtn == 0) {
      gsap.to(slides, {
        x: "-14.5%",
      });
      countbtn = 1;
    } else if (countbtn == 1) {
      gsap.to(slides, {
        x: "-29%",
      });
      countbtn = 2;
    } else if (countbtn == 2) {
      gsap.to(slides, {
        x: "-43%",
      });
      countbtn = 3;
    } else if (countbtn == 3) {
      gsap.to(slides, {
        x: "-58%",
      });
      countbtn = 4;
    } else {
      countbtn = 0;
    }
  });

  lftbtn.addEventListener("click", function () {
    gsap.to(slides, {
      x: "0%",
      duration: 0.5,
    });
  });
}

slider();

function toolkit() {
  var github = document.querySelectorAll(".overlay i.fa-basketball");
  var toolGithub = document.querySelectorAll(".tool-github");

  github.forEach((git) =>
    git.addEventListener("mouseenter", function () {
      toolGithub.forEach((toolgit) => (toolgit.style.opacity = "100%"));
    })
  );

  github.forEach((git) =>
    git.addEventListener("mouseleave", function () {
      toolGithub.forEach((toolgit) => (toolgit.style.opacity = "0%"));
    })
  );
}

toolkit()

function ButtonClickAnimation() {

  var logo = document.querySelector(".nav_logo")
  var buttonLoader = document.querySelector(".button-loader")

  logo.addEventListener("click", function () {

    buttonLoader.style.display = "flex"

    gsap.to(".lft-slide", {
      x: "200%",
      duration: 1
    })
    gsap.to(".rgt-slide", {
      x: "-200%",
      duration: 1
    })

    setTimeout(() => {
      window.location.href = 'index.html'
    }, 3000)

  })
}

ButtonClickAnimation()

function section7() {
  gsap.to(".col-section-7", {
    y: "-30%",
    stagger: .1,
    duration: .5,
    scrollTrigger: {
      trigger: ".col-section-7",
      scrub: .2
    }

  })
}
section7()

function loader() {
  gsap.to(".loader", {
    y: "-100%",
    duration: 1
  })
}
loader()

// ContactOverlayAnimation removed to allow navigation to contact.html


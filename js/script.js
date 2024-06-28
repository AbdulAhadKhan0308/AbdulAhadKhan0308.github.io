// Connect to the WebSocket server
var socket = io.connect("http://localhost:5000");

// DOM element references
var zachImage = document.getElementById("zach-image");
var navOnScroll = document.getElementById("nav-on-scroll");
var mobileNav = document.getElementById("mobile-nav");
var contactMePane = document.getElementById("contact-me-pane");

var clickCount = 0;
var lockImage = false;
var navPopulated = false;

// Initial check and setup
checkScrollPosition();
navOnScroll.classList.add("nav-top-hidden");
navOnScroll.classList.remove("nav-top-visible");

// Scroll event handler to toggle navigation visibility based on scroll position
window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;
  if (scrollY >= 200) {
    if (!navPopulated) {
      console.log("Show Nav");
      navOnScroll.classList.remove("nav-top-hidden");
      navOnScroll.classList.add("nav-top-visible");
      navPopulated = true;
    }
  } else {
    if (navPopulated) {
      console.log("Hide Nav");
      navOnScroll.classList.add("nav-top-hidden");
      navOnScroll.classList.remove("nav-top-visible");
      navPopulated = false;
    }
  }
});

function projectRetired() {
  swal(
    "This project is retired!",
    "Unfortunately, this project is no longer available. Don't worry, it may come back some day. In the meantime, why not check out some of my other projects?",
    "info"
  );
}

function socketTest() {
  console.log("SOCKET TEST");
  console.log(socket);
  socket.emit("remote-action", {
    socketActionType: "socketTestingAction",
    userPlatform: "mobile",
  });
}

function openMobileNav() {
  mobileNav.classList.remove("offscreen-nav-hidden");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav.classList.add("offscreen-nav-hidden");
  document.body.style.overflow = "initial";
}

function checkScrollPosition() {
  var currentURL = window.location.href.split("#")[1];
  if (currentURL == "contact") {
    toggleContactMe("show");
  }
  var scrollY = window.scrollY;
  if (scrollY >= 200) {
    if (!navPopulated) {
      console.log("Populate nav!");
      navOnScroll.classList.remove("nav-top-hidden");
      navOnScroll.classList.add("nav-top-visible");
      navPopulated = true;
    }
  } else {
    if (navPopulated) {
      console.log("Hide Nav");
      navOnScroll.classList.add("nav-top-hidden");
      navOnScroll.classList.remove("nav-top-visible");
      navPopulated = false;
    }
  }
}

function openContact() {
  closeMobileNav();
  toggleContactMe("show");
}

function toggleContactMe(action) {
  if (action == "show") {
    contactMePane.classList.remove("contact-me-inactive");
    contactMePane.classList.add("contact-me-active");
  } else if (action == "hide") {
    contactMePane.classList.add("contact-me-inactive");
    contactMePane.classList.remove("contact-me-active");
  }
}

function zachShades() {
  if (!lockImage) {
    zachImage.src = "img/zach-shades.png";
  }
}

function scrollToSection(section) {
  var elmnt = document.getElementById(section);
  elmnt.scrollIntoView();
  closeMobileNav();
}

function zachNormal() {
  if (!lockImage) {
    zachImage.src = "img/zach.png";
  }
}

function iterateClickCount() {
  clickCount++;
  if (clickCount == 1) {
    zachShades();
  }
  if (clickCount == 420) {
    zachImage.src = "img/zach-shades-stupid-secret.png";
    lockImage = true;
  }
}

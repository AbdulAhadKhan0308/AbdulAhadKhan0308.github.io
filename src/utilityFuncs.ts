// declarations
declare const io: any;
declare const swal: any;

// Connect to the WebSocket server
const socket = io.connect("http://localhost:5000");

// DOM element references
const zachImage = document.getElementById(
  "zach-image"
) as HTMLImageElement | null;
const navOnScroll = document.getElementById("nav-on-scroll");
const mobileNav = document.getElementById("mobile-nav");
const contactMePane = document.getElementById("contact-me-pane");

let clickCount = 0;
let lockImage = false;
let navPopulated = false;

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
  mobileNav?.classList.remove("offscreen-nav-hidden");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav?.classList.add("offscreen-nav-hidden");
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
      navOnScroll?.classList.remove("nav-top-hidden");
      navOnScroll?.classList.add("nav-top-visible");
      navPopulated = true;
    }
  } else {
    if (navPopulated) {
      console.log("Hide Nav");
      navOnScroll?.classList.add("nav-top-hidden");
      navOnScroll?.classList.remove("nav-top-visible");
      navPopulated = false;
    }
  }
}

function openContact() {
  closeMobileNav();
  toggleContactMe("show");
}

function toggleContactMe(action: "show" | "hide") {
  if (action == "show") {
    contactMePane?.classList.remove("contact-me-inactive");
    contactMePane?.classList.add("contact-me-active");
  } else if (action == "hide") {
    contactMePane?.classList.add("contact-me-inactive");
    contactMePane?.classList.remove("contact-me-active");
  }
}

function zachShades() {
  if (!lockImage && zachImage) {
    zachImage.src = "img/zach-shades.png";
  }
}

function scrollToSection(section: string) {
  var elmnt = document.getElementById(section);
  elmnt?.scrollIntoView();
  closeMobileNav();
}

function zachNormal() {
  if (!lockImage && zachImage) {
    zachImage.src = "img/zach.png";
  }
}

function iterateClickCount() {
  clickCount++;
  if (clickCount == 1) {
    zachShades();
  }
  if (clickCount == 420 && zachImage) {
    zachImage.src = "img/zach-shades-stupid-secret.png";
    lockImage = true;
  }
}

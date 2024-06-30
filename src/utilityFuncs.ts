// declarations
// declare const swal: any;

// let clickCount = 0;
let navPopulated = false;

export function toggleNavOnScroll() {
  // const navOnScroll = document.getElementById("nav-on-scroll");
  // const scrollY = window.scrollY;
  // console.log("scrollY", scrollY);
  // if (scrollY >= 200) {
  //   if (!navPopulated) {
  //     console.log("Populate nav!");
  //     navOnScroll?.classList.remove("nav-top-hidden");
  //     navOnScroll?.classList.add("nav-top-visible");
  //     navPopulated = true;
  //   }
  // } else {
  //   if (navPopulated) {
  //     console.log("Hide Nav");
  //     navOnScroll?.classList.add("nav-top-hidden");
  //     navOnScroll?.classList.remove("nav-top-visible");
  //     navPopulated = false;
  //   }
  // }
}

// export function toggleContactMe(action: "show" | "hide") {
//   const contactMePane = document.getElementById("contact-me-pane");
//   if (action == "show") {
//     contactMePane?.classList.remove("contact-me-inactive");
//     contactMePane?.classList.add("contact-me-active");
//   } else if (action == "hide") {
//     contactMePane?.classList.add("contact-me-inactive");
//     contactMePane?.classList.remove("contact-me-active");
//   }
// }

// export function loadPic(arg: boolean) {
//   const abdImage = document.getElementById(
//     "zach-image"
//   ) as HTMLImageElement | null;
//   console.log("abdImage", abdImage);

//   if (abdImage) {
//     console.log("before setting source");
//     !arg ? (abdImage.src = "img/abd.svg") : (abdImage.src = "img/abd-dark.svg");
//   }
// }

// export function scrollToSection(section: string) {
//   console.log("scrollToSection", section);
//   var elmnt = document.getElementById(section);
//   elmnt?.scrollIntoView();
//   // closeMobileNav();
// }

// export const iterateClickCount = () => loadPic(!!(++clickCount % 2));

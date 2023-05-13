import "destyle.css";
import "../scss/style.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const firstViewTextEl = document.querySelectorAll("*[data-animation='text']");
const firstViewBtnEl = document.querySelector("*[data-animation='btn']");
const firstViewScrollEl = document.querySelectorAll(
  "*[data-animation='scroll']"
);
const firstViewInfoEl = document.querySelectorAll("*[data-animation='info']");
gsap.set(firstViewBtnEl, {
  scaleY: 0,
});
const firstViewTimeLine = gsap.timeline();
firstViewTimeLine

  .from(firstViewTextEl, {
    duration: 1,
    x: -100,
    autoAlpha: 0,
    stagger: {
      amount: 1,
    },
  })
  .to(firstViewBtnEl, {
    duration: 0.5,
    scaleY: 1,
    onComplete: () => {
      firstViewBtnEl.style.transition = "0.3s";
    },
  })
  .from(firstViewScrollEl, {
    duration: 1,
    x: -100,
    autoAlpha: 0,
  })
  .from(
    firstViewInfoEl,
    {
      duration: 1,
      x: 100,
      autoAlpha: 0,
    },
    "<"
  );

window.addEventListener("DOMContentLoaded", () => {
  const cancelTransition = (e) => e.preventDefault();
  const linkElements = document.querySelectorAll("a");
  linkElements.forEach((el) => el.addEventListener("click", cancelTransition));

  // ScrollTrigger.create({
  //   trigger: ".story",
  //   start: "top top",
  //   end: "bottom bottom",
  //   pin: true,
  //   markers: true,
  // });

  // const lrFadeIn = document.querySelectorAll("*[data-scroll-event='lr']");
  // lrFadeIn.forEach((el) => {
  //   gsap.from(el, {
  //     x: el.getAttribute("data-x"),
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top bottom",
  //       end: "center center",
  //       markers: true,
  //       scrub: 0.5,
  //       toggleActions: "play none reverse none",
  //     },
  //   });
  // });

  // const tbFadeIn = document.querySelectorAll("*[data-scroll-event='tb']");

  // tbFadeIn.forEach((el) => {
  //   gsap.from(el, {
  //     y: el.getAttribute("data-y"),
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top bottom",
  //       end: "center center",
  //       markers: true,
  //       scrub: 0.5,
  //       toggleActions: "play none reverse none",
  //     },
  //   });
  // });

  // const opFadeIn = document.querySelectorAll("*[data-scroll-event='op']");
  // opFadeIn.forEach((el) => {
  //   gsap.from(el, {
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top center",
  //       end: "center center",
  //       markers: true,
  //       scrub: 0.5,
  //       toggleActions: "play none reverse none",
  //     },
  //   });
  // });

  const lrFadeIn = document.querySelectorAll("*[data-scroll-event='tblr']");
  lrFadeIn.forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      x: el.getAttribute("data-x"),
      y: el.getAttribute("data-y"),
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "center center",
        //markers: true,
        scrub: 0.5,
        toggleActions: "play none reverse none",
      },
    });
  });

  //   const tbFadeIn = document.querySelectorAll("*[data-scroll-event='tb']");
  //   tbFadeIn.forEach((el) => {
  //     gsap.from(el, {
  //       opacity: 0,
  //       y: el.getAttribute("data-y"),
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top center",
  //         end: "center center",
  //         markers: true,
  //         scrub: 0.5,
  //         toggleActions: "play none reverse none",
  //       },
  //     });
  //   });
});

// window.addEventListener("DOMContentLoaded", () => {
//   const typeingEl = document.querySelector(".loading__before__typing");
//   const subjectTitle = "NECOPON GAMES".split("");
//   const subjectKeybord = Array.from(
//     document.querySelectorAll(".subject-keybord")
//   );
//   const sortKeybord = [];

//   const ev = new Event("mouseover");

//   subjectTitle.forEach((val) => {
//     const searchedKeybord = subjectKeybord.find((element) => {
//       if (val === " ") {
//         return element.textContent === "-";
//       }
//       return element.textContent === val;
//     });
//     sortKeybord.push(searchedKeybord);
//   });
//   sortKeybord.forEach((element, index) => {
//     setTimeout(() => {
//       element.classList.add("clicked");
//       typeingEl.innerHTML +=
//         element.textContent === "-"
//           ? " "
//           : `<span>${element.textContent}</span>`;
//       setTimeout(() => {
//         element.classList.remove("clicked");
//       }, 100);
//     }, 300 * (index + 1));
//   });

//   gsap.to(".loading__before__keybord__item", {
//     duration: 1,
//     opacity: 0,
//     delay: subjectTitle.length / 3 + 1,
//     stagger: {
//       amount: 1,
//       from: "random",
//     },
//   });
//   gsap.to(".loading__before__typing", {
//     duration: 2,
//     opacity: 0,
//     delay: subjectTitle.length / 3 + 1,
//     onComplete: () => {
//       console.log("complete");
//       gsap.to(".loading__before", {
//         duration: 1,
//         autoAlpha: 0,
//         onComplete: () => {
//           document.querySelector(
//             "body"
//           ).style.cssText = `overflow: hidden visible;`;
//         },
//       });
//     },
//   });
// });

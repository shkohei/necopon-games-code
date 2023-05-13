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

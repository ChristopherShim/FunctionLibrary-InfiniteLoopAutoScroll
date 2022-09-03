gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel");

const anim = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

const auto = gsap.timeline({ repeat: -1 })
.to(window, {
  scrollTo: ScrollTrigger.maxScroll(window),
  duration: 100,
  progress: 1,
  ease: "none",
});

window.addEventListener("wheel", () => auto.kill());
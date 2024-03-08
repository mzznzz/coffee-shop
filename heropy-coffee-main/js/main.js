/**
 * 검색창 제어
 */
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

/**
 * 페이지 스크롤에 따른 요소 제어
 */
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });
    gsap.to(toTopEl, 0.6, { opacity: 1, x: 0 });
  } else {
    gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });
    gsap.to(toTopEl, 0.6, { opacity: 0, x: 100 });
  }
});

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.6, { scrollTo: 0 });
});

/**
 * 순서대로 나타나는 기능
 */
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, { delay: (index + 1) * 0.7, opacity: 1 });
});

/**
 * 슬라이드 요소 관리
 */
new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper", {
  autoplay: { delay: 5000 },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: { el: ".promotion .swiper-pagination", clickable: true },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next",
  },
});

/**
 * Promotion 슬라이드 토글 기능
 */
const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  promotionEl.classList.toggle("hide");
});

/**
 * 부유하는 요소 관리
 */
[".floating1", ".floating2", ".floating3"].forEach(function (selector, index) {
  gsap.to(selector, 1.5 + index * 0.5, {
    y: 15 + index * 5,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  });
});

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
document.querySelectorAll("section.scroll-spy").forEach(function (spyEl) {
  new ScrollMagic.Scene({ triggerElement: spyEl, triggerHook: 0.8 })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

/**
 * 올해가 몇 년도인지 계산
 */
document.querySelector(".this-year").textContent = new Date().getFullYear();

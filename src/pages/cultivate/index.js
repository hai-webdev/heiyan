// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";

const studentWorkSwiper = new Swiper(".student-works-swiper", {
  // loop:true,
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 5,
  breakpoints: {
    768: {
      slidesPerView: 4,
      slidesPerColumn: 3,
      spaceBetween: 5,
    },
    1080: {
      slidesPerView: 4,
      slidesPerColumn: 3,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 4,
      slidesPerColumn: 3,
      spaceBetween: 10,
    },
  },
  slidesPerColumnFill: "row",
  navigation: {
    nextEl: ".swiper-student-work-button-next",
    prevEl: ".swiper-student-work-button-prev",
  },
});
let popupSwiper = null;

$(".student-works-item").on("click",function(){
  $(".popup-container").fadeIn().css("display", "flex");
  const index = $(this).index();
  popupSwiper = new Swiper(".popup-swiper", {
    navigation: {
      nextEl: ".swiper-popup-button-next",
      prevEl: ".swiper-popup-button-prev",
    },
    initialSlide: index,
  });
})
$(".popup-container .mask").on("click", function(){
  $(".popup-container").fadeOut();
  popupSwiper = null;
})
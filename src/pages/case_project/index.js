// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";
import "./index.less";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";

const projectSwiper = new Swiper(".project-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-project-pagination",
    clickable: true,
  },
});

$(".work-tab-item").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
});

const workSwiper = new Swiper(".work-swiper", {
  loop:true,
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 10,
  slidesPerColumnFill : 'row',
  navigation: {
    nextEl: '.swiper-work-button-next',
    prevEl: '.swiper-work-button-prev',
  },
});

$(".video-btn").on("click", function(){
  const videoSrc = $(this).parent().data("video");
  const imgSrc = $(this).parent().data("img");
  $("#popup-video").attr("src", videoSrc)
  $("#popup-video").attr("poster", imgSrc)
  $(".video-popup-container").fadeIn().css("display","flex")
  $("#popup-video").trigger("play");
})

$(".video-popup-container .mask").on("click", function(){
  $(".video-popup-container").fadeOut();
  $("#popup-video").trigger("pause");
})
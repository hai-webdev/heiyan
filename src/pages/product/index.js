// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";



import Swiper from "swiper";

const productSwiper = new Swiper(".product-swiper", {
  // loop: true,
  // effect:"fade",
  direction:"vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".video-play").on("click", function(){
  $(this).hide();
  console.log($(this).next());
  $(this).next().attr("controls", true).trigger("play");
})
// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

$(window).scroll(() => {
  var scrollT = $(window).scrollTop();
  if(scrollT > 150){
    $(".header-container").addClass("inner");
  }else{
    $(".header-container").removeClass("inner");
  }
})

let aboutOffsetTop = $(".about-container").offset().top;
let headerHeight = $(".header-container").height();

$(window).resize(function () {
  aboutOffsetTop = $(".about-container").offset().top;
  headerHeight = $(".header-container").height();
});

$(".arrow-down-btn").on("click", function () {
  $(window).scrollTop(aboutOffsetTop - headerHeight, 1000);
});

const videoControllers = () => {
  const videoBox = document.querySelector(".start-show");

  const closeVideo = function () {
    const isVideo = document.querySelector(".start-show video");
    if (isVideo) {
      $(video).addClass("hide");
      console.log("视频播放结束");
    }
  };
  const video = document.querySelector(".start-show video");
  if (videoBox && video) {
    video.addEventListener("ended", () => {
      closeVideo();
      sessionStorage.setItem("firstEntry", true);
    });
    video.addEventListener("transitionend", function () {
      if (videoBox) {
        videoBox.remove();
        $("body").addClass("show");
        
      }
    });
  }
};

const firstEntry = sessionStorage.getItem("firstEntry");
const viewWidth = $(window).width();

if (!firstEntry && viewWidth > 768) {
  videoControllers();
} else {
  document.querySelector(".start-show").remove();
  $("body").addClass("show");
}

console.log(firstEntry);

// window.addEventListener("mousewheel", closeVideo);
// window.addEventListener("keydown", closeVideo)

// 头部的js代码
import "./index.less";
import "swiper/css/swiper.css";

$(".header-container.m .menu").on("click", function(){
    $(".header-container.m .nav-container").slideToggle();
})

const bannerHeight = $(".banner-container").outerHeight();
const headerHeight = $(".header-container").outerHeight();
const scrollT = bannerHeight - headerHeight;
$(window).scroll(function(){
    if($(window).scrollTop() > scrollT){
        $(".header-container").addClass("inner");
        console.log(1);
    }else{
        $(".header-container").removeClass("inner");
    }
})
console.log(bannerHeight);
// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

$(".tab-item").on("click", function(){
    $(this).addClass("on").siblings().removeClass("on");
    const index = $(this).index();
    $(".cont-item").hide();
    $(".cont-item").eq(index).show()
})

$(".job-item .left-layout").on("click", function(){
    $(this).parents(".job-item").find(".cont").slideToggle();
    $(this).parents(".title-box").toggleClass("show");
})

const titleFirstText = $("h1.page-title").text().charAt(0);
if(titleFirstText === "《"){
    $("h1.page-title").css("text-indent","-.5em")
}

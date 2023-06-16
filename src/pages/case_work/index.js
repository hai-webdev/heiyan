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

// $(".work-tab-item").on("click", function () {
//   $(this).addClass("on").siblings().removeClass("on");
//   const index = $(this).index();
//   $(".work-cont-item").eq(index).addClass("show").siblings().removeClass("show");;
// });

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


const vm = new Vue({
  el: "#work-app",
  data() {
    return {
      workList: window.workList,
      workCateIndex: 0,
      workSwiper: null,
      popupShow:false,
      popupSwiper: null,
    };
  },
  methods: {
    changeWork(index) {
      this.workCateIndex = index;
      console.log(index, this.works);
    },
    showPopup(index){
      console.log(index);
      this.popupShow = true;
      this.$nextTick(() => {
        this.popupSwiper = this.popupSwiperStart(index);
      })
    },
    swiperStart(){
      return new Swiper(".work-swiper", {
        loop: true,
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 5,
        breakpoints: {
          768: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 5,
          },
          1080: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
        },
        slidesPerColumnFill: "row",
        navigation: {
          nextEl: ".swiper-work-button-next",
          prevEl: ".swiper-work-button-prev",
        },
      });
    },
    popupSwiperStart(index){
      return new Swiper(".popup-swiper", {
        navigation: {
          nextEl: ".swiper-popup-button-next",
          prevEl: ".swiper-popup-button-prev",
        },
        initialSlide: index,
      });
    },
    hidePopup(){
      this.popupShow = false;
      this.popupSwiper = null;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.workSwiper = this.swiperStart();
    });
  },
  computed: {
    works() {
      return this.workList[this.workCateIndex];
    },
  },
  watch: {
    works() {
      this.$nextTick(() => {
        this.workSwiper = this.swiperStart();
      });
    },
  },
});


$(".video-popup-container .mask").on("click", function(){
  $(".video-popup-container").fadeOut();
  $("#popup-video").trigger("pause");
})
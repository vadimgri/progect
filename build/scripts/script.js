$(document).ready(function(){var o=$(".header__nav-mob-js"),t=$(".header-nav-mob__button-js"),n=$(".header__nav-js");o.click(function(){t.toggleClass("open"),n.toggleClass("active"),n.slideToggle(".header__nav-js_activ")}),$(".owl-carousel").owlCarousel({loop:!0,margin:30,responsive:{0:{items:1,dots:!0,nav:!1},580:{items:2,dots:!1,nav:!1},1024:{items:3,dots:!1,nav:!0},2560:{items:3,dots:!1,nav:!1}}}),$(".owl-dots button.owl-dot").click(function(){$(".owl-dots button.owl-dot").first().css("background-color","#a2a2a2")}),$(".popup-with-form").bind().magnificPopup({type:"inline",preloader:!1,focus:"#name",callbacks:{beforeOpen:function(){$(window).width()<700?this.st.focus=!1:this.st.focus="#name"}}}),$(".header-tel__button").bind().magnificPopup({type:"inline",preloader:!1,focus:"#name",callbacks:{beforeOpen:function(){$(window).width()<700?this.st.focus=!1:this.st.focus="#name"}}}),$(".header-tel__button").click(function(){$(".mail").css("display","none")}),$(".popup-with-form").click(function(){$(".mail").css("display","block")})});
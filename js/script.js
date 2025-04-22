// ページトップボタン
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-top-button").addClass("is-show");
  } else {
    jQuery("#js-top-button").removeClass("is-show");
  }
});

// スムーススクロール
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 700;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" === id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-open").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// ドロワーアイコン
jQuery("#js-drawer-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-open").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// works-swiper
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 1.6,
  height: 320,
  loop: true,

  navigation: {
    nextEl: ".works__next",
    prevEl: ".works__prev",
  },

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadow: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },

  on: {
    touchStart: function () {
      jQuery("#swipe-hint").fadeOut(0);
    },
  },
});

// お問い合わせフォーム
// IDが'js-form'のフォーム内の、クラスが'js-form-input'のすべての入力要素を選択
const form = jQuery("#js-form");
const inputElements = jQuery("#js-form .js-form-input");

// 各入力要素に対して'invalid'イベントのリスナーを設定
inputElements.on("invalid", function () {
  jQuery(this).addClass("is-error");
});

// 各入力要素に対して'input'イベントのリスナーを設定
inputElements.on("input", function () {
  // この要素の値が有効（検証に合格する）場合、'is-error'クラスを削除
  if (this.checkValidity()) {
    jQuery(this).removeClass("is-error");
  }
});

// フォームの送信イベント
jQuery("#js-form").on("submit", function (e) {
  if (this.checkValidity()) {
    e.preventDefault();
    alert("やるやん");
  }
});

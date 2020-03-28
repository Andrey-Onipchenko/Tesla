const button = document.querySelector(".button");

button.addEventListener("click", function() {
  swal({
    text:
      "Оставьте, пожалуйста, ваш номер телефона, наш менеджер обязательно с вами свяжется.",
    content: "input",
    buttons: ["Отмена", "Хочу тест драйв"]
  });
});

const footerBtn = document.querySelector(".footer-btn");
footerBtn.addEventListener("click", function() {
  swal({
    text:
      "Оставьте, пожалуйста, ваш номер телефона, наш менеджер обязательно с вами свяжется.",
    content: "input",
    buttons: ["Отмена", "Хочу тест драйв"]
  });
});
$(function() {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
  });
  $(".header-btn").on("click", function() {
    $(".menu").addClass("active");
  });
  $(".close-btn").on("click", function() {
    $(".menu").removeClass("active");
  });
});

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".main-menu").toggleClass("open");
  });

  $(".main-menu-item a").click(function (e) {
    e.preventDefault();

    $("body").fadeOut(2000, function () {
      window.location.href = $(e.target).attr("href");
    });
  });

  $(".button-click").click(function () {
    $(".header-h1").fadeIn(3000, function () {
      $(this).fadeOut(6000);
    });
  });
});

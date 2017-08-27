const amountScrolled = 300;

$(document).ready(function() {
  // $(".header").hide();
  // setTimeout(function() {
  //   $(".header").fadeIn();
  // }, 2500);

  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.sf-back-to-top").fadeIn("slow");
    } else {
      $("a.sf-back-to-top").fadeOut("slow");
    }
  });

  $("a.sf-back-to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      300
    );
    return false;
  });

  // scroll to target
  $(".scroll").click(function() {
    $("body").animate(
      {
        scrollTop: eval($("#" + $(this).attr("target")).offset().top - 65)
      },
      750
    );
  });
});

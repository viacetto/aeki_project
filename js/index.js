window.addEventListener("load", () => {
  const img = new Image();
  img.src = getComputedStyle($(".about_header")[0])
    .backgroundImage.replace(/"/g, "")
    .replace(/url\(|\)$/gi, "");
  img.decode().then(() => {
    document.body.classList.remove("loading");
    $("#loader").css("opacity", 0);
    setTimeout(() => {
      $("#loader").css("display", "none");
    }, 1000);
    document.getElementById("main-content").hidden = false;
  });
});
$(document).ready(function () {
  let y = $(this).scrollTop();
  setTimeout(function () {
    $(".loadingblank").css("display", "none");
    $(".about_header").css("display", "block");
  }, 250);
  setTimeout(function () {
    $(".about_header").css("filter", "brightness(100%)");
  }, 500);
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// hover_style
$(document).ready(function () {
  $(".scroll_down").on("mouseover", function () {
    $(".arr").css("background-color", "#806621");
    $(".arr").css("transition", "1s");
  });
});
$(document).ready(function () {
  $(".scroll_down").on("mouseout", function () {
    $(".arr").css("background-color", "#5a450e");
  });
});
// scroll
$(document).ready(function () {
  $(".scroll_down").on("click", function () {
    $("html").scrollTop(0);
    $("html, body").animate(
      {
        scrollTop: $(".about_about").offset().top,
      },
      1000
    );
  });
});
$(".up").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
// about load
$(".waypointload_first").css("opacity", "0");
$(".waypointload_second").css("opacity", "0");
$(".waypointload_third").css("opacity", "0");
$(".waypointload").css("opacity", "0");
$(".waypointload").waypoint(
  function () {
    $(this.element).css("opacity", "1");
    setTimeout(() => {
      $(this.element).find(".waypointload_first").css("opacity", "1");
    }, 100);
    setTimeout(() => {
      $(this.element).find(".waypointload_second").css("opacity", "1");
    }, 600);
    setTimeout(() => {
      $(this.element).find(".waypointload_third").css("opacity", "1");
    }, 1100);
  },
  { offset: "50%" }
);
//eatndrink load
$(".eatndrinkSlideItem").css("left", "-100%");
$(".eatndrinkSlide").css("opacity", "0");
$(".eatndrinkSlide").waypoint(
  function () {
    $(this.element).find(".eatndrinkSlideItem").css("left", "0");
    setTimeout(() => {
      $(this.element).css("opacity", "1");
    }, 500);
  },
  { offset: "50%" }
);
//eatndrink ending text load
$(".eatndrink_ending_text").children().css("opacity", "0");
$(".eatndrink_ending_wrapper").waypoint(
  function () {
    setTimeout(function () {
      $("#tm-1").css("opacity", "1");
    }, 1000);
    setTimeout(function () {
      $("#tm-2").css("opacity", "1");
    }, 1200);
    setTimeout(function () {
      $("#tm-3").css("opacity", "1");
    }, 1500);
    setTimeout(function () {
      $("#tm-4").css("opacity", "1");
    }, 1900);
    setTimeout(function () {
      $("#tm-5").css("opacity", "1");
    }, 2300);
    setTimeout(function () {
      $(".about_back_to_start").css("color", "#d8ae3b");
    }, 3000);
    setTimeout(function () {
      $(".about_back_to_start").css("color", "#55402d");
      $(".about_back_to_start").mouseenter(function () {
        $(".about_back_to_start").css("color", "#d8ae3b");
      });
      $(".about_back_to_start").mouseleave(function () {
        $(".about_back_to_start").css("color", "#55402d");
      });
    }, 4500);
  },
  { offset: "40%" }
);

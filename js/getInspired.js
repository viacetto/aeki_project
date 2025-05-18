window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  $("#loader").css("opacity", 0);
  setTimeout(() => {
    $("#loader").css("display", "none");
  }, 1000);
  document.getElementById("main-content").hidden = false;
});

//getinspired
$(".white_loading_effect").css("opacity", "0");
$(".white_loading_effect").css("transition", "2s");
$(document).ready(function () {
  let y = $(this).scrollTop();
  setTimeout(function () {
    $(".white_loading_effect").css("display", "block");
  }, 250);
  setTimeout(function () {
    $(".white_loading_effect").css("opacity", "1");
  }, 500);
});
//getinspired load items
$(function () {
  const apiUrl = "https://pixabay.com/api/";
  const apiKey = "13112441-a407fefc7cd861e83f109e6b1";
  const $form = $(".get_inspired_form");
  const $input = $(".get_inspired_form input");
  const $submit = $(".get_inspired_form button");
  const $gallery = $(".get_inspired__gallery");
  function loadImages(searchQuery) {
    $.ajax({
      url: apiUrl,
      method: "get",
      dataType: "json",
      data: {
        key: apiKey,
        q: searchQuery,
        lang: "pl",
        per_page: 50,
      },
    })
      .done(function (res) {
        $gallery.empty();
        for (const el of res.hits) {
          const $newEl = $(`
                    <a data-fancybox="gallery" href="${el.largeImageURL}" class="gallery-element">
                        <img class="gallery-img" src="${el.webformatURL}" alt="${el.tags}">
                    </a>
                `);
          $(".gallery-img").css("width", "50vw");
          $(".gallery-img").parent().css("margin", "auto");
          $(".gallery-img").css("transition", "1s");
          $gallery.append($newEl);
        }
      })
      .always(function () {
        $submit.removeClass("loading");
        $submit.attr("disabled", false);
        // plugin fix
        $(".get_inspired__gallery a:last-child").css("display", "flex");
        $(".get_inspired__gallery a:last-child").css(
          "justify-content",
          "center"
        );
        $(".get_inspired__gallery a:last-child")
          .find("img")
          .css("width", "50vw");
        $(".get_inspired__gallery a:last-child").css("margin", "auto");
      });
  }
  $(".get_inspired__gallery").css("display", "flex");
  $(".get_inspired__gallery").css("flex-direction", "column");
  $(".get_inspired__gallery").css("justify-content", "center");
  $form.on("submit", function (e) {
    $("html").scrollTop(0);
    $("html, body").animate(
      {
        scrollTop: $(".get_inspired__gallery").offset().top,
      },
      1000
    );
    e.preventDefault();
    $submit.addClass("loading");
    $submit.attr("disabled", true); //prop('disabled', true);
    const inputValue = $input.val();
    loadImages(inputValue);
    //
  });
});

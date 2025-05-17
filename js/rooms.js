window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-content").hidden = false;
});
//rooms
$(document).ready(function () {
  $(".rooms_site_wrapper").css("filter", "brightness(0%)");
  setTimeout(function () {
    $(".rooms_site_wrapper").css("filter", "brightness(100%)");
    $(".rooms_site_wrapper").css("transition", "filter 4.5s");
  }, 500);
});
//fullscreen
let site = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
let isFullscreenOff = true;
$(".fullscreen_button").on("click", function () {
  if (isFullscreenOff) {
    isFullscreenOff = false;
    openFullscreen();
  } else if (!isFullscreenOff) {
    isFullscreenOff = true;
    closeFullscreen();
  }
  $(".button_fullscreen").css("opacity", "0");
  setTimeout(function () {
    $(".button_fullscreen").css("display", "none");
  }, 1000);
});
$(".button_fullscreen").on("click", function () {
  isFullscreenOff = false;
  $(".button_fullscreen").css("opacity", "0");
  setTimeout(function () {
    $(".button_fullscreen").css("display", "none");
  }, 1000);
});

let elem = document.querySelector("html");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
//rooms adjusting size
const roomsAdjustSize = () => {
  let actualImage = new Image();
  let elementsWithZIndex0 = $(".some-class").filter(function () {
    return $(this).css("z-index") === "0";
  });
  let roomsBgEl = $(".rooms_background_el").filter((index, el) => {
    return getComputedStyle(el).zIndex === "0";
  });
  actualImage.src = roomsBgEl
    .css("background-image")
    .replace(/"/g, "")
    .replace(/url\(|\)$/gi, "");
  let windowHeight = $(window).height();
  let windowWidth = $(window).width();
  if (
    windowHeight / windowWidth < 0.51 &&
    windowHeight / windowWidth < 0.5625
  ) {
    $(".rooms_inside_box").css("height", "100vh");
    $(".rooms_inside_box").css("width", "178vh");
    $(".rooms_left_bar").css("left", "0");
  } else if (windowHeight / windowWidth < 0.5625) {
    $(".rooms_inside_box").css("height", "100vh");
    $(".rooms_inside_box").css("width", "178vh");
    $(".rooms_left_bar").css("left", "calc(3vw + 2vh + 1vmin)");
  } else {
    $(".rooms_inside_box").css("height", "56vw");
    $(".rooms_inside_box").css("width", "100vw");
    $(".rooms_left_bar").css("left", "calc(3vw + 2vh + 1vmin)");
  }
};
//default room text all div

function createAndAppendRoomSlides(rooms) {
  const $container = $("#slides-container"); // Make sure you have <div id="slides-container"></div> in HTML
  $container.empty(); // clear old slides if needed

  for (const roomName in rooms) {
    const totalSlides = rooms[roomName];

    for (let roomNumber = 1; roomNumber <= totalSlides; roomNumber++) {
      const pictureUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
      const firstSlide = `url(./images/rooms_pics/bedroom/bedroom_1.jpg)`;
      const $div = $("<div>")
        .css(`z-index`, `${pictureUrl === firstSlide ? 0 : -1}`)
        .css("background-image", pictureUrl)
        .css("opacity", `${pictureUrl === firstSlide ? 1 : 0}`)
        .addClass("rooms_background rooms_background_el")
        .attr("data-bg-url", `${roomName}/${roomName}_${roomNumber}`);

      $container.append($div);
    }
  }
}

document.addEventListener("fullscreenchange", function () {
  $(".rooms_inside_box").css("height", "100vh");
  $(".rooms_inside_box").css("width", "178vh");
});
// $(".fullscreen_button").on("click", function () {
//   roomsBgEl.css("filter", "brightness(100%)");
//   $(".rooms_inside_box").css("height", "100%");
//   $(".rooms_inside_box").css("height", "100%");
//   $(".rooms_inside_box").css("width", "100%");
// });
// rooms arrows animation
$(".rooms_slider_arrow_wrapper_left").on("mouseover", function () {
  $(".rooms_js_slider_button_left_first").css(
    "transform",
    "translate(1px, 3px) rotate(28deg)"
  );
  $(".rooms_js_slider_button_left_second").css(
    "transform",
    "translate(1px, -5px) rotate(-28deg)"
  );
  $(".rooms_slider_arrow_wrapper_left").on("mouseout", function () {
    $(".rooms_js_slider_button_left_first").css(
      "transform",
      "translate(0px,2px) rotate(16deg)"
    );
    $(".rooms_js_slider_button_left_second").css(
      "transform",
      "translate(0px,-2px) rotate(-16deg)"
    );
  });
});
$(".rooms_slider_arrow_wrapper_right").on("mouseover", function () {
  $(".rooms_js_slider_button_right_first").css(
    "transform",
    "translate(1px, 3px) rotate(28deg)"
  );
  $(".rooms_js_slider_button_right_second").css(
    "transform",
    "translate(1px, -5px) rotate(-28deg)"
  );
  $(".rooms_slider_arrow_wrapper_right").on("mouseout", function () {
    $(".rooms_js_slider_button_right_first").css(
      "transform",
      "translate(0px,2px) rotate(16deg)"
    );
    $(".rooms_js_slider_button_right_second").css(
      "transform",
      "translate(0px,-2px) rotate(-16deg)"
    );
  });
});
// rooms cross popup

/// rooms default properties
let roomNumber = 1;
let roomName = "bedroom";
/// roombs slider data
let roomsSlidesNumber = {
  bedroom: 3,
  bathroom: 3,
  livingRoom: 2,
  kitchen: 2,
  garden: 2,
};
let menuRoomsColors = {
  bedroom: "#070b1f",
  bathroom: "#0a1b1d",
  livingRoom: "#1d130a",
  kitchen: "#1d0a0a",
  garden: "#0a1d11",
  all: "#070b1f",
};
createAndAppendRoomSlides(roomsSlidesNumber);
$(document).ready(roomsAdjustSize());
$(window).resize(roomsAdjustSize());
class CrossPopUp {
  constructor(
    itemName,
    itemPrice,
    itemTopPosition,
    itemLeftPosition,
    itemIndex
  ) {
    this.name = itemName;
    this.price = itemPrice;
    this.topPosition = itemTopPosition;
    this.leftPosition = itemLeftPosition;
    this.index = itemIndex;
    //popup append
    const $newButton = $(`
            <div class='newButtonWrapper'>
                <button style="top:${this.topPosition}; left:${this.leftPosition}" class="cross_point cross_point_${this.index}">
                <img class="cross_point_image cross_point_image_${this.index}" src="./images/rooms_pics/cross.svg" alt="cross">
                <span class='rooms_crosses_elements_wrapper rooms_crosses_elements_wrapper_${this.index}'>
                  <span class='rooms_crosses_elements rooms_crosses_elements_${this.index}'>
                    <span class='rooms_crosses_lines rooms_crosses_lines_${this.index}'>
                      <span class='cross_line_animation cross_line_animation_${this.index}'></span>
                  </span>
                  <span class='rooms_crosses_info rooms_crosses_info_${this.index}'>
                      <span class='rooms_crosses_info_content_wrapper rooms_crosses_info_content_wrapper_${this.index}'>
                        <span class='cross_popup_item_name cross_popup_item_name_${this.index}'>
                          <span>${this.name}</span>
                        </span>
                        <span class='cross_popup_bottom_text_wrapper cross_popup_bottom_text_wrapper_${this.index}'>
                          <span class='cross_popup_price cross_popup_price_${this.index}'>${this.price}</span>
                          <a class='cross_popup_buy_button cross_popup_buy_button_${this.index}'>buy</a>
                        </span>
                      </span>
                  </span>
                  </span>
                </span>
                </button>
            </div>
                    `);
    $(".rooms_inside_box").append($newButton);
    //adjusting position
    let itemTop = parseInt(this.topPosition);
    let itemLeft = parseInt(this.leftPosition);
    if (itemTop < 34 || itemLeft > 79) {
      $(`.rooms_crosses_info_${this.index}`).removeClass("rooms_crosses_info");
      $(`.rooms_crosses_info_${this.index}`).addClass("rooms_clear_info_class");
      $(`.rooms_crosses_lines_${this.index}`).css({
        transform: "rotate(-240deg)",
        bottom: "-199%",
        left: "-348%",
      });
      $(`.rooms_crosses_info_${this.index}`).css({
        top: "502%",
        right: "322%",
      });
    } else if (itemTop < 32 || itemLeft < 24) {
      $(`.rooms_crosses_info_${this.index}`).removeClass("rooms_crosses_info");
      $(`.rooms_crosses_info_${this.index}`).addClass("rooms_clear_info_class");
      $(`.rooms_crosses_lines_${this.index}`).css({
        transform: "rotate(-60deg)",
        bottom: "298%",
        left: "-50%",
      });
      $(`.rooms_crosses_info_${this.index}`).css({
        bottom: "506%",
        left: "321%",
      });
    } else if (itemTop < 63 || itemLeft > 79) {
      ///
      $(`.rooms_crosses_info_${this.index}`).removeClass("rooms_crosses_info");
      $(`.rooms_crosses_info_${this.index}`).addClass("rooms_clear_info_class");
      $(`.rooms_crosses_lines_${this.index}`).css({
        transform: "rotate(60deg)",
        bottom: "-195%",
        left: "-41%",
      });
      $(`.rooms_crosses_info_${this.index}`).css({
        top: "494%",
        left: "330%",
      });
      ///
    } else if (itemTop > 63 || itemLeft < 24) {
      $(`.rooms_crosses_info_${this.index}`).removeClass("rooms_crosses_info");
      $(`.rooms_crosses_info_${this.index}`).addClass("rooms_clear_info_class");
      $(`.rooms_crosses_lines_${this.index}`).css({
        transform: "rotate(-120deg)",
        bottom: "298%",
        left: "-364%",
      });
      $(`.rooms_crosses_info_${this.index}`).css({
        bottom: "503%",
        right: "318%",
      });
    }
    // popup animation
    let popUpIndex = this.index;
    setTimeout(function () {
      $(`.cross_line_animation_${popUpIndex}`).css("width", "0%");
      $(`.cross_point_${popUpIndex}`).attr("disabled", false);
    }, 500);
    let crossPopUp = true;
    $(`.cross_point_${popUpIndex}`).on("click", function () {
      $(`.cross_point_${popUpIndex}`).attr("disabled", true);
      if (crossPopUp) {
        setTimeout(function () {
          $(`.rooms_crosses_info_${popUpIndex}`).css(
            "background",
            currentColor
          );
        }, 50);
        function crossPopUpShow() {
          $(`.cross_line_animation_${popUpIndex}`).css("width", "100%");
          setTimeout(function () {
            $(`.rooms_crosses_info_${popUpIndex}`).css("width", "500%");
            $(`.rooms_crosses_info_${popUpIndex}`).css("height", "299%");
            setTimeout(function () {
              $(`.rooms_crosses_info_content_wrapper_${popUpIndex}`).css(
                "opacity",
                "1"
              );
              $(`.cross_point_${popUpIndex}`).attr("disabled", false);
            }, 300);
          }, 500);
        }
        crossPopUpShow();
        crossPopUp = false;
      } else {
        function crossPopUpHide() {
          $(`.rooms_crosses_info_content_wrapper_${popUpIndex}`).css(
            "opacity",
            "0"
          );
          $(`.rooms_crosses_info_${popUpIndex}`).css("width", "0%");
          $(`.rooms_crosses_info_${popUpIndex}`).css("height", "0%");
          setTimeout(function () {
            $(`.cross_line_animation_${popUpIndex}`).css("width", "0%");
            $(`.cross_point_${popUpIndex}`).attr("disabled", false);
          }, 500);
        }
        crossPopUpHide();
        crossPopUp = true;
      }
    });
  }
}

//bedroom_1
function appendPopUpsTobedroom_1() {
  let bedroom_1_i_1 = new CrossPopUp(
    "Closet Vaste",
    "399$",
    "50%",
    "18%",
    "i_1"
  );
  let bedroom_1_i_2 = new CrossPopUp("Sofa Noir", "149$", "87%", "66%", "i_2");
  let bedroom_1_i_3 = new CrossPopUp(
    "Cushion Aeque",
    "19$",
    "81%",
    "48%",
    "i_3"
  );
  let bedroom_1_i_4 = new CrossPopUp(
    "Table Vacance",
    "69$",
    "66%",
    "67%",
    "i_4"
  );
  let bedroom_1_i_5 = new CrossPopUp(
    "Bed Decrire",
    "299$",
    "62%",
    "42%",
    "i_5"
  );
}
appendPopUpsTobedroom_1();
//bedroom_2
function appendPopUpsTobedroom_2() {
  let bedroom_2_i_1 = new CrossPopUp(
    "Bed Savoir",
    "159$",
    "61%",
    "34%",
    "1_i_1"
  );
  let bedroom_2_i_2 = new CrossPopUp("Lamp Quel", "89$", "46%", "56%", "1_i_2");
  let bedroom_2_i_3 = new CrossPopUp(
    "Lamp Penurie",
    "79$",
    "53%",
    "15%",
    "1_i_3"
  );
  let bedroom_2_i_4 = new CrossPopUp(
    "Chair Dilemme",
    "119$",
    "76%",
    "79%",
    "1_i_4"
  );
  let bedroom_2_i_5 = new CrossPopUp(
    "Painting Croisiere",
    "239$",
    "31%",
    "23%",
    "1_i_5"
  );
  let bedroom_2_i_6 = new CrossPopUp("Palm Areca", "49$", "49%", "70%", "i_6");
}
//bedroom_3
function appendPopUpsTobedroom_3() {
  let bedroom_3_i_1 = new CrossPopUp(
    "Lamp Matiere",
    "149$",
    "10%",
    "48%",
    "1_i_1"
  );
  let bedroom_3_i_2 = new CrossPopUp(
    "Painting Rappel",
    "89$",
    "40%",
    "70%",
    "1_i_2"
  );
  let bedroom_3_i_3 = new CrossPopUp(
    "Bed Etendre",
    "149$",
    "63%",
    "58%",
    "1_i_3"
  );
  let bedroom_3_i_4 = new CrossPopUp(
    "Table Roue",
    "99$",
    "64%",
    "26%",
    "1_i_4"
  );
  let bedroom_3_i_5 = new CrossPopUp(
    "Table Suffisant",
    "99$",
    "64%",
    "26%",
    "1_i_5"
  );
  let bedroom_3_i_6 = new CrossPopUp(
    "Chair Norme",
    "79$",
    "50%",
    "81%",
    "1_i_6"
  );
}
///bathroom popups///
//bathroom_1
function appendPopUpsTobathroom_1() {
  let bathroom_1_i_1 = new CrossPopUp(
    "Carpet Habiller",
    "30$",
    "93%",
    "49%",
    "1_i_1"
  );
  let bathroom_1_i_2 = new CrossPopUp(
    "Bath Melange",
    "119$",
    "70%",
    "49%",
    "1_i_2"
  );
  let bathroom_1_i_3 = new CrossPopUp(
    "Lamp Pratique",
    "59$",
    "14%",
    "46%",
    "1_i_3"
  );
  let bathroom_1_i_4 = new CrossPopUp(
    "Painting Sortir",
    "49$",
    "36%",
    "55%",
    "1_i_4"
  );
}
//bathroom_2
function appendPopUpsTobathroom_2() {
  let bathroom_2_i_1 = new CrossPopUp(
    "Roller Blind Tiers",
    "39$",
    "39%",
    "18%",
    "1_i_1"
  );
  let bathroom_2_i_2 = new CrossPopUp(
    "Piante Verdi",
    "39$",
    "64%",
    "59%",
    "1_i_2"
  );
  let bathroom_2_i_3 = new CrossPopUp(
    "Lamp Raide",
    "59$",
    "26%",
    "78%",
    "1_i_3"
  );
  let bathroom_2_i_4 = new CrossPopUp(
    "Bath Greve",
    "89$",
    "71%",
    "34%",
    "1_i_4"
  );
}
//bathroom_3
function appendPopUpsTobathroom_3() {
  let bathroom_3_i_1 = new CrossPopUp(
    "Mirror Periode",
    "29$",
    "48%",
    "65%",
    "1_i_1"
  );
  let bathroom_3_i_2 = new CrossPopUp(
    "Alocasia Portora",
    "19$",
    "65%",
    "48%",
    "1_i_2"
  );
  let bathroom_3_i_3 = new CrossPopUp(
    "Towel Declencher",
    "9$",
    "90%",
    "48%",
    "1_i_3"
  );
}
//livingRoom_1
function appendPopUpsTolivingRoom_1() {
  let livingRoom_1_i_1 = new CrossPopUp(
    "Lamp Aucun",
    "49$",
    "46%",
    "76%",
    "1_i_1"
  );
  let livingRoom_1_i_2 = new CrossPopUp(
    "Pillow Fermer",
    "29$",
    "43%",
    "20%",
    "1_i_2"
  );
  let livingRoom_1_i_3 = new CrossPopUp(
    "Tourant Regler",
    "49$",
    "39%",
    "85%",
    "1_i_3"
  );
  let livingRoom_1_i_4 = new CrossPopUp(
    "Sofa Ecu",
    "89$",
    "48%",
    "66%",
    "1_i_4"
  );
  let livingRoom_1_i_5 = new CrossPopUp(
    "Painting Arbitraire",
    "39$",
    "34%",
    "72%",
    "1_i_5"
  );
}
function appendPopUpsTolivingRoom_2() {
  let livingRoom_2_i_1 = new CrossPopUp(
    "Sofa Endormir",
    "119$",
    "65%",
    "28%",
    "i_1"
  );
  let livingRoom_2_i_2 = new CrossPopUp(
    "Visee Meilleur",
    "19$",
    "47%",
    "31%",
    "i_2"
  );
  let livingRoom_2_i_3 = new CrossPopUp(
    "Table Rappeler",
    "49$",
    "80%",
    "20%",
    "i_3"
  );
}
//kitchen popups
//kitchen_1
function appendPopUpsTokitchen_1() {
  let kitchen_1_i_1 = new CrossPopUp(
    "Chair Estimer",
    "59$",
    "63%",
    "30%",
    "i_1"
  );
  let kitchen_1_i_2 = new CrossPopUp(
    "Table Ecouler",
    "89$",
    "56%",
    "60%",
    "i_2"
  );
  let kitchen_1_i_3 = new CrossPopUp(
    "Sofa Detacher",
    "259$",
    "48%",
    "17%",
    "i_3"
  );
  let kitchen_1_i_4 = new CrossPopUp(
    "Cupboard Sante",
    "289$",
    "48%",
    "79%",
    "i_4"
  );
}
//kitchen_2
function appendPopUpsTokitchen_2() {
  let kitchen_2_i_1 = new CrossPopUp("Chair Peau", "79$", "80%", "31%", "i_1");
  let kitchen_2_i_2 = new CrossPopUp("Table Gras", "179$", "73%", "54%", "i_2");
  let kitchen_2_i_3 = new CrossPopUp(
    "Cupboard Gamin",
    "89$",
    "61%",
    "78%",
    "i_3"
  );
  let kitchen_2_i_4 = new CrossPopUp(
    "Lamp Bonheur",
    "139$",
    "17%",
    "36%",
    "i_4"
  );
}
//garden_1
function appendPopUpsTogarden_1() {
  let garden_1_i_1 = new CrossPopUp(
    "Sunbed Ficher",
    "49$",
    "55%",
    "72%",
    "i_1"
  );
  let garden_1_i_2 = new CrossPopUp(
    "Empecher Calcul",
    "49$",
    "34%",
    "69%",
    "i_2"
  );
  let garden_1_i_3 = new CrossPopUp("Lamp Filmer", "39$", "55%", "30%", "i_3");
}
//garden_2
function appendPopUpsTogarden_2() {
  let garden_2_i_1 = new CrossPopUp("Panels Tout", "29$", "72%", "60%", "i_1");
  let garden_2_i_2 = new CrossPopUp(
    "Window Suisse",
    "39$",
    "62%",
    "73%",
    "i_2"
  );
  let garden_2_i_3 = new CrossPopUp(
    "Railing Marier",
    "49$",
    "32%",
    "74%",
    "i_3"
  );
}

//default room text all div
$(".rooms_left_menu_all_div").text(
  `${roomName} ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`
);
$(".rooms_left_menu_all_div").css(`font-size`, `calc(0.5vw + 1vh + 1vmin)`);
let roomsClickedColor = menuRoomsColors.bedroom;
//   let pictureUrl = `url(./images/rooms_pics/bedroom/bedroom_${roomNumber}.jpg)`;
let pictureUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
// $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`).css(`z-index`, `0`);

$(".rooms_left_menu_div").css("background-color", roomsClickedColor);
$(".rooms_background").css("background-color", roomsClickedColor);
$(".rooms_top_nav_button").css("background", roomsClickedColor);
let color = menuRoomsColors[roomName];
/// rooms top nav button animamtion
$(".rooms_top_nav_button, .top_nav_lines").on("mouseover", function () {
  $(".rooms_nav_button_line:nth-child(1)").css("width", "90%");
  $(".rooms_nav_button_line:nth-child(2)").css("width", "60%");
  $(".rooms_nav_button_line:nth-child(3)").css("width", "90%");
  $(".rooms_top_nav_button").css("width", "100%");
  $(".rooms_top_nav_button, .top_nav_lines").on("mouseout", function () {
    $(".rooms_nav_button_line").css("width", "100%");
    $(".rooms_nav_button_line:nth-child(2)").css("transition", "1s");
    $(".rooms_top_nav_button").css("width", "calc(3vw + 2vh + 1vmin)");
  });
});

// rooms change backgroud and color
$(".rooms_left_menu_div button").on("click", function () {
  let prevTargetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
  $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
    .css(`z-index`, `-1`)
    .css("opacity", 0);
  roomName = this.innerHTML;
  roomNumber = 1;
  if (roomName === "living&nbsp;room") {
    roomName = "livingRoom";
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
    window[fnName]();
  } else {
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
    window[fnName]();
  }
  //   if (roomNumber > roomsSlidesNumber[roomName]) {
  //     roomNumber = roomNumber - 1;
  //   }
  let targetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
  $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
    .css(`z-index`, `0`)
    .css("opacity", 1);
  //   $(".rooms_background").css(
  //     `background-image`,
  //     `url(./images/rooms_pics/${roomName}/${roomName}_1.jpg`
  //   );
});

//slider right arrow
$(".rooms_slider_arrow_wrapper_right").on("click", function () {
  setTimeout(function () {
    $(".rooms_crosses_info").css("background-color", currentColor);
  }, 50);
  $(`.newButtonWrapper`).remove();
  let prevTargetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
  let prevEl = $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
    .css(`z-index`, `-1`)
    .css("opacity", 0);
  if (roomNumber >= roomsSlidesNumber[roomName]) {
    roomNumber = 1;
  } else {
    roomNumber = roomNumber + 1;
  }
  //   console.log(roomNumber);
  //   if (roomNumber > 2) {
  //     roomNumber = 0;
  //   }
  //   console.log(roomNumber);
  //   roomNumber = roomNumber + 1;
  //   console.log(roomNumber);
  if (roomName === "livingRoom") {
    let targetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
    let $elem = $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
      .css(`z-index`, `0`)
      .css("opacity", 1);
    $(".rooms_left_menu_all_div").text(
      `living room ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`
    );
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
    window[fnName]();
  } else {
    let targetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
    let $elem = $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
      .css(`z-index`, `0`)
      .css("opacity", 1);
    $(".rooms_left_menu_all_div").text(
      `${roomName} ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`
    );
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
    window[fnName]();
  }
});
//slider left arrow

$(".rooms_slider_arrow_wrapper_left").on("click", function () {
  setTimeout(function () {
    $(".rooms_crosses_info").css("background-color", currentColor);
  }, 50);
  $(`.newButtonWrapper`).remove();
  let prevTargetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;

  let prevEl = $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
    .css(`z-index`, `-1`)
    .css("opacity", 0);
  if (roomNumber > roomsSlidesNumber[roomName]) {
    roomNumber = 1;
  }
  if (roomNumber === 1) {
    roomNumber = 4;
  }
  roomNumber = roomNumber - 1;
  if (roomNumber > roomsSlidesNumber[roomName]) {
    roomNumber = roomNumber - 1;
  }
  if (roomName === "livingRoom") {
    $(".rooms_left_menu_all_div").text(
      `living room ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`
    );
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
    window[fnName]();
    let targetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
    let $elem = $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
      .css(`z-index`, `0`)
      .css("opacity", 1);
  } else {
    $(".rooms_left_menu_all_div").text(
      `${roomName} ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`
    );
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
    window[fnName]();
    let targetUrl = `url(./images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg)`;
    let $elem = $(`[data-bg-url="${roomName}/${roomName}_${roomNumber}"]`)
      .css(`z-index`, `0`)
      .css("opacity", 1);
  }
});
let currentColor = "#070b1f";
// rooms left menu changing colors
function roomsMenuChangeBackgroundClick() {
  $(".rooms_left_menu_div button").on("click", function () {
    $(`.newButtonWrapper`).remove();
    let roomName = this.innerHTML;
    if (roomName === "living&nbsp;room") {
      roomName = "livingRoom";
      $(".rooms_left_menu_all_div").text("living room 1/2");
      let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
      window[fnName]();
    } else {
      $(".rooms_left_menu_all_div").text(
        `${roomName} ` + `1/${roomsSlidesNumber[roomName]}`
      );
      let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`;
      window[fnName]();
    }
    let colorCode = menuRoomsColors[roomName];
    $(".rooms_left_menu_div").css("background", colorCode);
    $(".rooms_background").css("background-color", colorCode);
    $(".rooms_site_wrapper").css("background-color", colorCode);
    $(".rooms_crosses_info").css("opacity", "0.95");
    setTimeout(function () {
      $(".rooms_crosses_info").css("background-color", colorCode);
    }, 50);
    roomsClickedColor = colorCode;
    currentColor = colorCode;
  });
}
roomsMenuChangeBackgroundClick();
//
function roomsMenuChangeColorsClick() {
  $(".rooms_left_menu_div button").on("click", function () {
    let roomName = this.innerHTML;
    if (roomName === "living&nbsp;room") {
      roomName = "livingRoom";
    }
    let colorCode = menuRoomsColors[roomName];
    //
    function giveColorCode() {
      color = colorCode;
    }
    //
    $(".rooms_left_menu_div").css("background", colorCode);
    $(".rooms_top_nav_button").css("background", colorCode);
    roomsClickedColor = colorCode;
  });
}
roomsMenuChangeColorsClick();
function roomsMenuChangeColorsMouseover() {
  $(".rooms_left_menu_div button").on("mouseover", function () {
    let roomName = this.innerHTML;
    if (roomName === "living&nbsp;room") {
      roomName = "livingRoom";
    }
    let colorCode = menuRoomsColors[roomName];
    $(".rooms_left_menu_div").css("background", colorCode);
    $(".rooms_background").css("background-color", colorCode);
    $(".rooms_top_nav_button").css("background", colorCode);
    $(`.rooms_left_menu_div button`).on("mouseout", function () {
      $(".rooms_left_menu_div").css("background-color", roomsClickedColor);
      $(".rooms_background").css("background-color", roomsClickedColor);
      $(".rooms_top_nav_button").css("background", roomsClickedColor);
    });
  });
}
//
roomsMenuChangeColorsMouseover();

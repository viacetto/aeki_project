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

// shop
let menuColors = {
  bedroom: "#070b1f",
  bathroom: "#0a1b1d",
  livingRoom: "#1d130a",
  kitchen: "#1d0a0a",
  garden: "#0a1d11",
  all: "#070b1f",
};
let clickedColor = "#070b1f";
function menuChangeColorsClick() {
  $(".shop_left_menu_div button").on("click", function () {
    let roomName = this.innerHTML;
    if (roomName === "living&nbsp;room") {
      roomName = "livingRoom";
    }
    let colorCode = menuColors[roomName];
    $(".shop_left_menu_div").css("background", colorCode);
    clickedColor = colorCode;
  });
}
menuChangeColorsClick();
function menuChangeColorsMouseover() {
  $(".shop_left_menu_div button").on("mouseover", function () {
    let roomName = this.innerHTML;
    if (roomName === "living&nbsp;room") {
      roomName = "livingRoom";
    }
    let colorCode = menuColors[roomName];
    $(".shop_left_menu_div").css("background", colorCode);
    $(`.shop_left_menu_div button`).on("mouseout", function () {
      $(".shop_left_menu_div").css("background-color", clickedColor);
    });
  });
}
menuChangeColorsMouseover();

let filterRoomChoice = "";
let filterColorChoice = "";
let filterPriceChoice = "";
let filterStyleChoice = "";
let filterDateChoice = "";
let filterType = "";

$(
  `.shop_left_menu_bedroom,.shop_left_menu_bathroom,.shop_left_menu_living_room,.shop_left_menu_kitchen,.shop_left_menu_garden`
).on("click", function () {
  let clickedRoomChoice = $(this);
  filterRoomChoice = clickedRoomChoice.attr("data-filterRoom");

  $(".shop_items_wrapper").text("");
  isFilterOn = true;
  showItems();
  let nothingFound = $(".shop_items_wrapper").text();
  if (nothingFound === "") {
    let $noSuchItems = $(`
            <div class='no_such_items'>no such items</div>
            `);
    $(".shop_items_wrapper").append($noSuchItems);
  }
});

$(`.shop_left_menu_all`).on("click", function () {
  filterRoomChoice = "";

  $(".shop_items_wrapper").text("");
  isFilterOn = true;
  showItems();
});

$(
  `.shop_filter_button_date,.shop_filter_button_style,.shop_filter_button_price,.shop_filter_button_color`
).on("click", function () {
  let clickedFilter = $(this);
  clickedFilter.next().css("display", "block");
  clickedFilter.css("display", "none");
  clickedFilter
    .next()
    .children()
    .children()
    .on("click", function () {
      let clickedFilterChoice = $(this);
      clickedFilter.next().css("display", "none");
      clickedFilter.css("display", "flex");
      let filterValue = clickedFilterChoice.attr("data-filterChoice");
      filterType = clickedFilterChoice.attr("data-filterType");
      clickedFilter.text(filterValue);
      if (filterType === "color") {
        filterColorChoice = "";
        filterColorChoice = filterValue;
      } else if (filterType === "price") {
        filterPriceChoice = "";
        filterPriceChoice = filterValue;
      } else if (filterType === "style") {
        filterStyleChoice = "";
        filterStyleChoice = filterValue;
      } else if (filterType === "date") {
        filterDateChoice = "";
        filterDateChoice = filterValue;
      }
    });
});

$(`.shop_search_button`).on("click", function () {
  isFilterOn = true;
  ///clear search button appear
  let $clearButton = $(`
    <img class='shop_search_button_clear_svg' src="./images/shop_pics/filter_clear.svg" alt='saerch_clear'>
    `);
  $(".shop_search_button_wrapper").append($clearButton);
  $(".shop_search_button_wrapper").css("position", "relative");
  $(".shop_search_button_clear_svg").css("position", "absolute");
  $(".shop_search_button_clear_svg").css("top", "42%");
  $(".shop_search_button_clear_svg").css("right", "-15%");
  ///remove clear search button
  $(`.shop_search_button_clear_svg`).on("click", function () {
    $("img").remove(".shop_search_button_clear_svg");
    $(`.shop_input`).val("");
    $(".shop_items_wrapper").text("");
    isFilterOn = true;
    showItems();
    // isSearchOn = false;
  });

  itemsNotFound = true;
  $(".shop_items_wrapper").text("");
  isFilterOn = true;
  showItems();
  // if(itemsNotFound){
  //     let $noSuchItems = $(`
  //     <div class='no_such_items'>no such items</div>
  //     `);
  //     $('.shop_items_wrapper').append($noSuchItems)
  // }
  let nothingFound = $(".shop_items_wrapper").text();
  if (nothingFound === "") {
    let $noSuchItems = $(`
            <div class='no_such_items'>no such items</div>
            `);
    $(".shop_items_wrapper").append($noSuchItems);
  }
});

let searchedPhrase = "";
let displayNoSuchItems = true;
let itemsNotFound = false;
let isFilterOn = false;
class ShopItem {
  constructor(
    itemName,
    itemPrice,
    itemColor,
    itemStyle,
    itemDate,
    itemRoom,
    itemIndex,
    itemPicture
  ) {
    this.name = itemName;
    this.price = itemPrice;
    this.color = itemColor;
    this.style = itemStyle;
    this.date = itemDate;
    this.room = itemRoom;
    this.index = itemIndex;
    this.picture = itemPicture;
    let nameOfItem = this.name.toLowerCase();
    let roomOfItem = this.room;
    let colorOfItem = this.color;
    let priceOfItem = this.price;
    let styleOfItem = this.style;
    let dateOfItem = this.date;

    if (isFilterOn) {
      searchedPhrase = "";
      searchedPhrase = $(`.shop_input`).val().toLowerCase();

      if (searchedPhrase === "") {
        nameOfItem = "";
      }
      if (filterRoomChoice === "") {
        roomOfItem = "";
      }
      if (filterColorChoice === "") {
        colorOfItem = "";
      }
      if (filterPriceChoice === "") {
        priceOfItem = "";
      }
      if (filterStyleChoice === "") {
        styleOfItem = "";
      }
      if (filterDateChoice === "") {
        dateOfItem = "";
      }

      let result = nameOfItem.indexOf(searchedPhrase) > -1;

      if (result) {
        if (
          filterRoomChoice === roomOfItem &&
          filterColorChoice === colorOfItem &&
          filterStyleChoice === styleOfItem &&
          filterDateChoice === dateOfItem
        ) {
          if (filterPriceChoice === "<99$") {
            if (parseInt(priceOfItem) <= 99) {
              itemsNotFound = false;
              this.appendFiltredItems();
              displayNoSuchItems = false;
            } else if (displayNoSuchItems) {
              itemsNotFound = true;
            }
          } else if (filterPriceChoice === "100$-149$") {
            if (parseInt(priceOfItem) >= 100 && parseInt(priceOfItem) <= 149) {
              itemsNotFound = false;
              this.appendFiltredItems();
              displayNoSuchItems = false;
            } else if (displayNoSuchItems) {
              itemsNotFound = true;
            }
          } else if (filterPriceChoice === "150$-199$") {
            if (parseInt(priceOfItem) >= 150 && parseInt(priceOfItem) <= 199) {
              itemsNotFound = false;
              this.appendFiltredItems();
              displayNoSuchItems = false;
            } else if (displayNoSuchItems) {
              itemsNotFound = true;
            }
          } else if (filterPriceChoice === ">200$") {
            if (parseInt(priceOfItem) >= 200) {
              itemsNotFound = false;
              this.appendFiltredItems();
              displayNoSuchItems = false;
            } else if (displayNoSuchItems) {
              itemsNotFound = true;
            }
          } else if (filterPriceChoice === "") {
            itemsNotFound = false;
            this.appendFiltredItems();
            displayNoSuchItems = false;
          }
        }
      } else if (itemsNotFound) {
        itemsNotFound = true;
      }
    } else if (!isFilterOn) {
      this.appendFiltredItems();
    }
  }
  appendFiltredItems() {
    let $newItem = $(`
        <div class="shop_item shop_item_${this.index}">
        <div style="background:${this.picture};background-position: center;background-repeat: no-repeat;background-size: cover;" class="shop_item_picture shop_item_${this.index}_picture"></div>
        <div class="shop_item_info_wrapper shop_item_${this.index}_info_wrapper">
          <div class="shop_item_infos_box shop_item_${this.index}_infos_box">
            <div class="shop_item_name shop_item_${this.index}_name">${this.name}</div>
            <div class="shop_item_infos shop_item_${this.index}_infos">
              <div class="shop_item_price shop_item_${this.index}_price">${this.price}</div>
              <div class="shop_item_color shop_item_${this.index}_color">${this.color}</div>
              <div class="shop_item_style shop_item_${this.index}_style">${this.style}</div>
              <div class="shop_item_date shop_item_${this.index}_date">${this.date}</div>
              <div class="shop_item_room shop_item_${this.index}_room">${this.room}</div>
          </div>
          </div>
          <div class="shop_item_buy_button shop_item_${this.index}_buy_button">see more</div>
        </div>
      </div>
                `);
    $(".shop_items_wrapper").append($newItem);
  }
}
function showItems() {
  let shopItem_i_1 = new ShopItem(
    "Closet Vaste",
    "399$",
    "white",
    "contemporary",
    "2019",
    "bedroom",
    "i_1 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_2 = new ShopItem(
    "Sofa Noir",
    "149$",
    "black",
    "mzodern",
    "2017",
    "bedroom",
    "i_2 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_3 = new ShopItem(
    "Cushion Aeque",
    "19$",
    "gold",
    "retro",
    "2018",
    "bedroom",
    "i_3 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_4 = new ShopItem(
    "Table Vacance",
    "69$",
    "grey",
    "minimalistic",
    "2016",
    "bedroom",
    "i_4 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_5 = new ShopItem(
    "Bed Decrire",
    "299$",
    "black",
    "minimalistic",
    "2017",
    "bedroom",
    "i_5 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_6 = new ShopItem(
    "Bed Savoir",
    "159$",
    "grey",
    "contemporary",
    "2018",
    "bedroom",
    "i_6 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_7 = new ShopItem(
    "Lamp Quel",
    "89$",
    "gold",
    "retro",
    "2017",
    "bedroom",
    "i_7 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_8 = new ShopItem(
    "Lamp Penurie",
    "79$",
    "black",
    "modern",
    "2016",
    "bedroom",
    "i_8 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_9 = new ShopItem(
    "Chair Dilemme",
    "119$",
    "white",
    "minimalistic",
    "2019",
    "bedroom",
    "i_9 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_10 = new ShopItem(
    "Painting Croisiere",
    "239$",
    "black",
    "retro",
    "2017",
    "bedroom",
    "i_10 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_11 = new ShopItem(
    "Palm Areca",
    "49$",
    "white",
    "retro",
    "2019",
    "bedroom",
    "i_11 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_12 = new ShopItem(
    "Lamp Matiere",
    "149$",
    "gold",
    "contemporary",
    "2016",
    "bedroom",
    "i_12 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_13 = new ShopItem(
    "Painting Rappel",
    "89$",
    "grey",
    "modern",
    "2018",
    "bedroom",
    "i_13 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_14 = new ShopItem(
    "Bed Etendre",
    "149$",
    "grey",
    "minimalistic",
    "2017",
    "bedroom",
    "i_14 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_15 = new ShopItem(
    "Table Roue",
    "99$",
    "black",
    "minimalistic",
    "2018",
    "bedroom",
    "i_15 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_16 = new ShopItem(
    "Table Suisant",
    "99$",
    "white",
    "modern",
    "2019",
    "bedroom",
    "i_16 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_17 = new ShopItem(
    "Chair Norme",
    "79$",
    "gold",
    "contemporary",
    "2016",
    "bedroom",
    "i_17 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_18 = new ShopItem(
    "Carpet Habiller",
    "30$",
    "gold",
    "retro",
    "2018",
    "bathroom",
    "i_18 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_19 = new ShopItem(
    "Bath Melange",
    "119$",
    "black",
    "retro",
    "2019",
    "bathroom",
    "i_19 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_20 = new ShopItem(
    "Lamp Pratique",
    "59$",
    "grey",
    "retro",
    "2016",
    "bathroom",
    "i_20 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_21 = new ShopItem(
    "Painting Sortir",
    "49$",
    "white",
    "modern",
    "2016",
    "bathroom",
    "i_21 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_22 = new ShopItem(
    "Roller Blind Tiers",
    "39$",
    "black",
    "contemporary",
    "2019",
    "bathroom",
    "i_22 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_23 = new ShopItem(
    "Piante Verdi",
    "39$",
    "white",
    "minimalistic",
    "2017",
    "bathroom",
    "i_23 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_24 = new ShopItem(
    "Lamp Raide",
    "59$",
    "black",
    "modern",
    "2016",
    "bathroom",
    "i_24 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_25 = new ShopItem(
    "Bath Greve",
    "89$",
    "gold",
    "retro",
    "2019",
    "bathroom",
    "i_25 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_26 = new ShopItem(
    "Mirror Periode",
    "29$",
    "gold",
    "modern",
    "2016",
    "bathroom",
    "i_26 ",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_27 = new ShopItem(
    "Alocasia Portora",
    "19$",
    "white",
    "contemporary",
    "2016",
    "bathroom",
    "i_27",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_28 = new ShopItem(
    "Towel Declencher",
    "9$",
    "grey",
    "modern",
    "2017",
    "bathroom",
    "i_28",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_29 = new ShopItem(
    "Lamp Aucun",
    "49$",
    "grey",
    "minimalistic",
    "2018",
    "living room",
    "i_29",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_30 = new ShopItem(
    "Pillow Fermer",
    "29$",
    "black",
    "minimalistic",
    "2019",
    "living room",
    "i_30",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_31 = new ShopItem(
    "Tourant Regler",
    "49$",
    "black",
    "retro",
    "2016",
    "living room",
    "i_31",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_32 = new ShopItem(
    "Sofa Ecu",
    "89$",
    "white",
    "contemporary",
    "2018",
    "living room",
    "i_32",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_33 = new ShopItem(
    "Painting Arbitraire",
    "39$",
    "grey",
    "modern",
    "2017",
    "living room",
    "i_33",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_34 = new ShopItem(
    "Sofa Endormir",
    "119$",
    "grey",
    "retro",
    "2016",
    "living room",
    "i_34",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_35 = new ShopItem(
    "Visee Meilleur",
    "19$",
    "gold",
    "minimalistic",
    "2016",
    "living room",
    "i_35",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_36 = new ShopItem(
    "Table Rappeler",
    "49$",
    "black",
    "contemporary",
    "2019",
    "living room",
    "i_36",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_37 = new ShopItem(
    "Chair Estimer",
    "59$",
    "gold",
    "contemporary",
    "2019",
    "kitchen",
    "i_37",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_38 = new ShopItem(
    "Table Ecouler",
    "89$",
    "gold",
    "retro",
    "2017",
    "kitchen",
    "i_38",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_39 = new ShopItem(
    "Sofa Detacher",
    "259$",
    "white",
    "retro",
    "2016",
    "kitchen",
    "i_39",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_40 = new ShopItem(
    "Cupboard Sante",
    "289$",
    "black",
    "minimalistic",
    "2016",
    "kitchen",
    "i_40",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_41 = new ShopItem(
    "Chair Peau",
    "79$",
    "white",
    "minimalistic",
    "2017",
    "kitchen",
    "i_41",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_42 = new ShopItem(
    "Table Gras",
    "179$",
    "gold",
    "modern",
    "2016",
    "kitchen",
    "i_42",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_43 = new ShopItem(
    "Cupboard Gamin",
    "89$",
    "white",
    "contemporary",
    "2019",
    "kitchen",
    "i_43",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_44 = new ShopItem(
    "Lamp Bonheur",
    "139$",
    "white",
    "modern",
    "2017",
    "kitchen",
    "i_44",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_45 = new ShopItem(
    "Sunbed Ficher",
    "49$",
    "gold",
    "retro",
    "2019",
    "garden",
    "i_45",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_46 = new ShopItem(
    "Empecher Calcul",
    "49$",
    "gold",
    "contemporary",
    "2018",
    "garden",
    "i_46",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_47 = new ShopItem(
    "Lamp Filmer",
    "39$",
    "black",
    "modern",
    "2016",
    "garden",
    "i_47",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_48 = new ShopItem(
    "Panels Tout",
    "29$",
    "black",
    "retro",
    "2016",
    "garden",
    "i_48",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_49 = new ShopItem(
    "Window Suisse",
    "39$",
    "white",
    "minimalistic",
    "2019",
    "garden",
    "i_49",
    "url(./images/shop_pics/sample_picture.svg)"
  );
  let shopItem_i_50 = new ShopItem(
    "Railing Marier",
    "49$",
    "grey",
    "minimalistic",
    "2017",
    "garden",
    "i_50",
    "url(./images/shop_pics/sample_picture.svg)"
  );
}
showItems();

$(`.shop_filter_button`).on("click", function () {
  if (
    filterColorChoice === "" &&
    filterPriceChoice === "" &&
    filterStyleChoice === "" &&
    filterDateChoice === ""
  ) {
    return 0;
  } else {
    let $clearButton = $(`
            <img class='shop_filter_button_clear_svg' src="./images/shop_pics/filter_clear.svg" alt='saerch_clear'>
            `);
    $(".shop_filter_button_wrapper").append($clearButton);
    $(".shop_filter_button_wrapper").css("position", "relative");
    $(".shop_filter_button_clear_svg").css("position", "absolute");
    $(".shop_filter_button_clear_svg").css("top", "55%");
    $(".shop_filter_button_clear_svg").css("right", "-14%");

    $(".shop_filter_button_clear_svg").on("click", function () {
      $("img").remove(".shop_filter_button_clear_svg");

      isFilterOn = true;
      $(".shop_items_wrapper").text("");

      $(
        `.shop_filter_button_date,.shop_filter_button_style,.shop_filter_button_price,.shop_filter_button_color`
      ).css("display", "flex");
      $(
        `.shop_filter_button_date_choice,.shop_filter_button_style_choice,.shop_filter_button_price_choice,.shop_filter_button_color_choice`
      ).css("display", "none");
      filterColorChoice = "color";
      filterPriceChoice = "price";
      filterStyleChoice = "style";
      filterDateChoice = "date";
      $(".shop_filter_button_color").text(filterColorChoice);
      $(".shop_filter_button_price").text(filterPriceChoice);
      $(".shop_filter_button_style").text(filterStyleChoice);
      $(".shop_filter_button_date").text(filterDateChoice);
      filterColorChoice = "";
      filterPriceChoice = "";
      filterStyleChoice = "";
      filterDateChoice = "";
      showItems();
    });
  }
  itemsNotFound = true;
  $(".shop_items_wrapper").text("");
  isFilterOn = true;
  showItems();
  let nothingFound = $(".shop_items_wrapper").text();
  if (nothingFound === "") {
    let $noSuchItems = $(`
            <div class='no_such_items'>no such items</div>
            `);
    $(".shop_items_wrapper").append($noSuchItems);
  }
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

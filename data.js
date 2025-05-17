//rooms
//fullscreen
// $('.button_fullscreen').on('click', function () {

//     $('.button_fullscreen').css('opacity', '0');
//     setTimeout(function () {
//         $('.button_fullscreen').css('display', 'none');
//     }, 1000);
// })

let elem = document.querySelector('html')
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) { /* Firefox */
//         elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE/Edge */
//         elem.msRequestFullscreen();
//     }
// }


//rooms adjusting size


$(document).ready(function () {
    let actualImage = new Image();
    actualImage.src = $('.rooms_background').css('background-image').replace(/"/g, "").replace(/url\(|\)$/ig, "");
    let imageHeight = actualImage.height
    let imageWidth = actualImage.width
    let windowHeight = $(window).height()
    let windowWidth = $(window).width()


    if ((windowHeight / windowWidth) < 0.51 && (windowHeight / windowWidth) < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', '0');
    } else if (windowHeight / windowWidth < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    } else {
        $('.rooms_inside_box').css('height', '57vw');
        $('.rooms_inside_box').css('width', '100vw');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    }
});

$(window).resize(function () {
    let actualImage = new Image();
    actualImage.src = $('.rooms_background').css('background-image').replace(/"/g, "").replace(/url\(|\)$/ig, "");
    let imageHeight = actualImage.height
    let imageWidth = actualImage.width
    let windowHeight = $(window).height()
    let windowWidth = $(window).width()

    if ((windowHeight / windowWidth) < 0.51 && (windowHeight / windowWidth) < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', '0');
    } else if (windowHeight / windowWidth < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    } else {
        $('.rooms_inside_box').css('height', '57vw');
        $('.rooms_inside_box').css('width', '100vw');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    }

});
// document.addEventListener("fullscreenchange", function () {
//     $('.rooms_inside_box').css('height', '100vh');
//     $('.rooms_inside_box').css('width', '178vh');
//     // $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
// })
// $('.button_fullscreen').on('click', function () {
//     $('.rooms_background').css('filter', 'brightness(100%)');
//     $('.rooms_inside_box').css('height', '100%');
//     $('.rooms_inside_box').css('height', '100%');
//     $('.rooms_inside_box').css('width', '100%');

// })

// rooms arrows animation
$('.rooms_slider_arrow_wrapper_left').on('mouseover', function () {
    $('.rooms_js_slider_button_left_first').css('transform', 'translate(1px, 3px) rotate(28deg)');
    $('.rooms_js_slider_button_left_second').css('transform', 'translate(1px, -5px) rotate(-28deg)');
    $('.rooms_slider_arrow_wrapper_left').on('mouseout', function () {
        $('.rooms_js_slider_button_left_first').css('transform', 'translate(0px,2px) rotate(16deg)');
        $('.rooms_js_slider_button_left_second').css('transform', 'translate(0px,-2px) rotate(-16deg)');
    })
})

$('.rooms_slider_arrow_wrapper_right').on('mouseover', function () {
    $('.rooms_js_slider_button_right_first').css('transform', 'translate(1px, 3px) rotate(28deg)');
    $('.rooms_js_slider_button_right_second').css('transform', 'translate(1px, -5px) rotate(-28deg)');
    $('.rooms_slider_arrow_wrapper_right').on('mouseout', function () {
        $('.rooms_js_slider_button_right_first').css('transform', 'translate(0px,2px) rotate(16deg)');
        $('.rooms_js_slider_button_right_second').css('transform', 'translate(0px,-2px) rotate(-16deg)');
    })
})



// rooms cross popup

/// rooms default properties
let roomNumber = 1;
let roomName = 'bedroom';
/// roombs slider data
let roomsSlidesNumber = {
    bedroom: 3,
    bathroom: 3,
    livingRoom: 2,
    kitchen: 2,
    garden: 2
};

let menuRoomsColors = {
    bedroom: "#070b1f",
    bathroom: "#0a1b1d",
    livingRoom: "#1d130a",
    kitchen: "#1d0a0a",
    garden: "#0a1d11",
    all: "#070b1f"
};


class CrossPopUp {
    constructor(itemName, itemPrice, itemTopPosition, itemLeftPosition, itemIndex) {
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


  // transform: rotate(-120deg);
  // bottom: 293%;
  // left: -348%;
                    // console.log(parseInt(itemTop))
                    // console.log(parseInt(itemLeft))
        // if (this.topPosition < '34%' || this.topPosition > 79%)
        // top < 34%;
        // left > 79%;
        // top right
        // $(`.rooms_crosses_lines_${this.index}`)
        // .css({
        //     'transform' : 'rotate(-60deg)',
        //     'bottom' : '298%',
        //     'left': '-50%'
        //  });
        // $(`.rooms_crosses_info_${this.index}`)
        // .css({
        //     'bottom' : '506%',
        //     'left' : '321%'
        //  });


        // $('body').text('')
        // $(`.rooms_crosses_info_${this.index}`).css('background-color', currentColor);
        $('.rooms_inside_box').append($newButton);
        //adjusting position
        // let itemTop = parseInt(this.topPosition);
        // let itemLeft = parseInt(this.leftPosition);

        // if (itemTop < 34 && itemLeft > 79) {
        // $(`.rooms_crosses_lines_${this.index}`)
        // .css({
        // 'transform' : 'rotate(-60deg)',
        // 'bottom' : '298%',
        // 'left': '-50%'
        // });
        // $(`.rooms_crosses_info_${this.index}`)
        // .css({
        // 'bottom' : '506%',
        // 'left' : '321%'
        // });
        // } else if (itemTop > 32 && itemLeft < 24) {
        // $(`.rooms_crosses_lines_${this.index}`)
        // .css({
        // 'transform' : 'rotate(-120deg)',
        // 'bottom' : '293%',
        // 'left': '-348%'
        // });
        // $(`.rooms_crosses_info_${this.index}`)
        // .css({
        // 'bottom' : '503%',
        // 'right' : '318%'
        // });
        // } else if (itemTop > 63 && itemLeft > 79) {
        // $(`.rooms_crosses_lines_${this.index}`)
        // .css({
        // 'transform' : 'rotate(60deg)',
        // 'bottom' : '-195%',
        // 'left': '-41%'
        // });
        // $(`.rooms_crosses_info_${this.index}`)
        // .css({
        // 'top' : '494%',
        // 'left' : '330%'
        // });
        // } else if (itemTop > 63 && itemLeft < 24) {
        // $(`.rooms_crosses_lines_${this.index}`)
        // .css({
        // 'transform' : 'rotate(-240deg)',
        // 'bottom' : '-199%',
        // 'left': '-348%'
        // });
        // $(`.rooms_crosses_info_${this.index}`)
        // .css({
        // 'top' : '502%',
        // 'right' : '322%'
        // });
// }

        // popup animation
        let popUpIndex = this.index;
        setTimeout(function () {
            $(`.cross_line_animation_${popUpIndex}`).css('width', '0%');
            $(`.cross_point_${popUpIndex}`).attr("disabled", false);
        }, 500);
        let crossPopUp = true;
        $(`.cross_point_${popUpIndex}`).on('click', function () {
            $(`.cross_point_${popUpIndex}`).attr("disabled", true);
            if (crossPopUp) {
                function crossPopUpShow() {
                    $(`.cross_line_animation_${popUpIndex}`).css('width', '100%');
                    setTimeout(function () {
                        $(`.rooms_crosses_info_${popUpIndex}`).css('width', '500%');
                        $(`.rooms_crosses_info_${popUpIndex}`).css('height', '299%');
                        setTimeout(function () {
                            $(`.rooms_crosses_info_content_wrapper_${popUpIndex}`).css('opacity', '1');
                            $(`.cross_point_${popUpIndex}`).attr("disabled", false);
                        }, 300);
                    }, 500);
                }
                crossPopUpShow()
                crossPopUp = false;
            } else {
                function crossPopUpHide() {
                    $(`.rooms_crosses_info_content_wrapper_${popUpIndex}`).css('opacity', '0');
                    $(`.rooms_crosses_info_${popUpIndex}`).css('width', '0%');
                    $(`.rooms_crosses_info_${popUpIndex}`).css('height', '0%');
                    setTimeout(function () {
                        $(`.cross_line_animation_${popUpIndex}`).css('width', '0%');
                        $(`.cross_point_${popUpIndex}`).attr("disabled", false);
                    }, 500);
                }
                crossPopUpHide()
                crossPopUp = true
            }
        });


        // easterEgg
        ///easter egg buy button
        $(`.cross_popup_buy_button_${this.index}`).on('click', function () {
            console.log('test')
            const $newEl = $(`
        <div style="display:flex;">
        <iframe style="width:100vw;height:100vh;"src="https://www.youtube.com/embed/UnXIPDp9xIM?start=18&autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
        </div>
    `);
            $('body').text('')
            $('body').append($newEl);
        })

    }
}



//bedroom_1
function appendPopUpsTobedroom_1() {
    let bedroom_1_i_1 = new CrossPopUp('Closet Vaste', '399$', '50%', '18%', 'i_1')
    let bedroom_1_i_2 = new CrossPopUp('Sofa Noir', '149$', '87%', '66%', 'i_2')
    let bedroom_1_i_3 = new CrossPopUp('Cushion Aeque', '19$', '81%', '48%', 'i_3')
    let bedroom_1_i_4 = new CrossPopUp('stół', '69$', '66%', '67%', 'i_4')
    let bedroom_1_i_5 = new CrossPopUp('poduszka żółta', '19$', '66%', '67%', 'i_5')
    let bedroom_1_i_6 = new CrossPopUp('łóżko', '299$', '62%', '42%', 'i_6')
}
appendPopUpsTobedroom_1()
//bedroom_2
function appendPopUpsTobedroom_2() {
    let bedroom_2_i_1 = new CrossPopUp('bed', '159$', '61%', '34%', '1_i_1')
    let bedroom_2_i_2 = new CrossPopUp('lamp coco', '89$', '46%', '56%', '1_i_2')
    let bedroom_2_i_3 = new CrossPopUp('left lamp', '79$', '53%', '15%', '1_i_3')
    let bedroom_2_i_4 = new CrossPopUp('chair idk', '119$', '76%', '79%', '1_i_4')
    let bedroom_2_i_5 = new CrossPopUp('painting blue', '239$', '31%', '23%', '1_i_5')
    let bedroom_2_i_6 = new CrossPopUp('Palm Areca', '49$', '49%', '70%', 'i_6')
}
//bedroom_3
function appendPopUpsTobedroom_3() {
    let bedroom_3_i_1 = new CrossPopUp('lamp', '149$', '10%', '48%', '1_i_1')
    let bedroom_3_i_2 = new CrossPopUp('painting', '89$', '40%', '70%', '1_i_2')
    let bedroom_3_i_3 = new CrossPopUp('bed', '149$', '63%', '58%', '1_i_3')
    let bedroom_3_i_4 = new CrossPopUp('table', '99$', '64%', '26%', '1_i_4')
    let bedroom_3_i_5 = new CrossPopUp('table', '99$', '64%', '26%', '1_i_5')
    let bedroom_3_i_6 = new CrossPopUp('chair', '79$', '50%', '81%', '1_i_6')
}
///bathroom popups///
//bathroom_1
function appendPopUpsTobathroom_1() {
    let bathroom_1_i_1 = new CrossPopUp('carpet', '30$', '93%', '49%', '1_i_1')
    let bathroom_1_i_2 = new CrossPopUp('bath', '119$', '70%', '49%', '1_i_2')
    let bathroom_1_i_3 = new CrossPopUp('lamp', '59$', '14%', '46%', '1_i_3')
    let bathroom_1_i_4 = new CrossPopUp('painting', '49$', '36%', '55%', '1_i_4')
}
//bathroom_2
function appendPopUpsTobathroom_2() {
    let bathroom_2_i_1 = new CrossPopUp('roleta', '39$', '39%', '18%', '1_i_1')
    let bathroom_2_i_2 = new CrossPopUp('plant,', '39$', '64%', '59%', '1_i_2')
    let bathroom_2_i_3 = new CrossPopUp('lamp,', '59$', '26%', '78%', '1_i_3')
    let bathroom_2_i_4 = new CrossPopUp('bath', '89$', '71%', '34%', '1_i_4')
}
//bathroom_3
function appendPopUpsTobathroom_3() {
    let bathroom_3_i_1 = new CrossPopUp('mirror', '29$', '48%', '65%', '1_i_1')
    let bathroom_3_i_2 = new CrossPopUp('plant', '19$', '65%', '48%', '1_i_2')
    let bathroom_3_i_3 = new CrossPopUp('towel', '9$', '90%', '48%', '1_i_3')
}
//livingRoom_1
function appendPopUpsTolivingRoom_1() {
    let livingRoom_1_i_1 = new CrossPopUp('lamp', '49$', '46%', '76%', '1_i_1')
    let livingRoom_1_i_2 = new CrossPopUp('pillow', '29$', '43%', '20%', '1_i_2')
    let livingRoom_1_i_3 = new CrossPopUp('plant', '49$', '39%', '85%', '1_i_3')
    let livingRoom_1_i_4 = new CrossPopUp('sofa right', '89$', '48%', '66%', '1_i_4')
    let livingRoom_1_i_5 = new CrossPopUp('painting', '39$', '34%', '72%', '1_i_5')
}
function appendPopUpsTolivingRoom_2() {
    let livingRoom_2_i_1 = new CrossPopUp('sofa', '119$', '65%', '28%', 'i_1')
    let livingRoom_2_i_2 = new CrossPopUp('plant', '19$', '47%', '31%', 'i_2')
    let livingRoom_2_i_3 = new CrossPopUp('table', '49$', '80%', '20%', 'i_3')
}
//kitchen popups
//kitchen_1
function appendPopUpsTokitchen_1() {
    let kitchen_1_i_1 = new CrossPopUp('chair', '59$', '63%', '30%', 'i_1')
    let kitchen_1_i_2 = new CrossPopUp('table', '89$', '56%', '60%', 'i_2')
    let kitchen_1_i_3 = new CrossPopUp('sofa', '259$', '48%', '17%', 'i_3')
    let kitchen_1_i_4 = new CrossPopUp('closet', '289$', '48%', '79%', 'i_4')
}
//kitchen_2
function appendPopUpsTokitchen_2() {
    let kitchen_2_i_1 = new CrossPopUp('chair', '79$', '80%,', '31%', 'i_1')
    let kitchen_2_i_2 = new CrossPopUp('table', '179$', '73%', '54%', 'i_2')
    let kitchen_2_i_3 = new CrossPopUp('szafka', '89$', '61%', '78%', 'i_3')
    let kitchen_2_i_4 = new CrossPopUp('lamp', '139$', '17%', '36%', 'i_4')
}
//garden_1
function appendPopUpsTogarden_1() {
    let garden_1_i_1 = new CrossPopUp('chair', '49$', '55%', '72%', 'i_1')
    let garden_1_i_2 = new CrossPopUp('tree', '49$', '34%', '69%', 'i_2')
    let garden_1_i_3 = new CrossPopUp('lamp', '39$', '55%', '30%', 'i_3')
}
//garden_2
function appendPopUpsTogarden_2() {
    let garden_2_i_1 = new CrossPopUp('panele', '29$', '72%', '60%', 'i_1')
    let garden_2_i_2 = new CrossPopUp('window', '39$', '62%', '73%', 'i_2')
    let garden_2_i_3 = new CrossPopUp('barierki', '49$', '32%', '74%', 'i_3')
}

//default room text all div
$('.rooms_left_menu_all_div').text(`${roomName} ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`)
$('.rooms_left_menu_all_div').css(`font-size`, `calc(0.5vw + 1vh + 1vmin)`);
let roomsClickedColor = menuRoomsColors.bedroom
let pictureUrl = `url(../images/rooms_pics/bedroom/bedroom_${roomNumber}.jpg)`;
$('.rooms_background').css(`background-image`, `url(../images/rooms_pics/${roomName}/${roomName}_1.jpg`);
$('.rooms_left_menu_div').css('background-color', roomsClickedColor)
$('.rooms_background').css('background-color', roomsClickedColor);
$('.rooms_top_nav_button').css('background', roomsClickedColor);
let color = menuRoomsColors[roomName]
/// rooms top nav button animamtion
$('.rooms_top_nav_button, .top_nav_lines').on('mouseover', function () {
    $('.rooms_nav_button_line:nth-child(1)').css('width', '90%');
    $('.rooms_nav_button_line:nth-child(2)').css('width', '60%');
    $('.rooms_nav_button_line:nth-child(3)').css('width', '90%');
    $('.rooms_top_nav_button').css('width', '100%');
    $('.rooms_top_nav_button, .top_nav_lines').on('mouseout', function () {
        $('.rooms_nav_button_line').css('width', '100%');
        $('.rooms_nav_button_line:nth-child(2)').css('transition', '1s');
        $('.rooms_top_nav_button').css('width', 'calc(3vw + 2vh + 1vmin)');
    })
})
// rooms change backgroud and color
$('.rooms_left_menu_div button').on('click', function () {
    roomName = this.innerHTML;
    if (roomName === 'living&nbsp;room') {
        roomName = 'livingRoom';
    }
    if (roomNumber > roomsSlidesNumber[roomName]) {
        roomNumber = roomNumber - 1;
    }
    $('.rooms_background').css(`background-image`, `url(../images/rooms_pics/${roomName}/${roomName}_1.jpg`);
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`
    window[fnName]();
});

//slider right arrow
$('.rooms_slider_arrow_wrapper_right').on('click', function () {
    setTimeout(function () {
        $('.rooms_crosses_info').css('background-color', currentColor);
    }, 50);
    $(`.newButtonWrapper`).remove();
    if (roomNumber > 2) {
        roomNumber = 0;
    }
    roomNumber = roomNumber + 1;
    if (roomNumber > roomsSlidesNumber[roomName]) {
        roomNumber = 1;
    }
    if (roomName === 'livingRoom') {
        $('.rooms_left_menu_all_div').text(`living room ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`)
    } else {
        $('.rooms_left_menu_all_div').text(`${roomName} ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`)
    }
    $('.rooms_background').css(`background-image`, `url(../images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg`);
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`
    console.log(fnName)
    window[fnName]();
})
//slider left arrow

$('.rooms_slider_arrow_wrapper_left').on('click', function () {
    setTimeout(function () {
        $('.rooms_crosses_info').css('background-color', currentColor);
    }, 50);
    $(`.newButtonWrapper`).remove();
    if (roomNumber === 1) {
        roomNumber = 4;
    }
    roomNumber = roomNumber - 1;
    if (roomNumber > roomsSlidesNumber[roomName]) {
        roomNumber = roomNumber - 1;
    }
    if (roomName === 'livingRoom') {
        $('.rooms_left_menu_all_div').text(`living room ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`)
    } else {
        $('.rooms_left_menu_all_div').text(`${roomName} ` + `${roomNumber}/${roomsSlidesNumber[roomName]}`)
    }
    $('.rooms_background').css(`background-image`, `url(../images/rooms_pics/${roomName}/${roomName}_${roomNumber}.jpg`)
    let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`
    window[fnName]();
})
let currentColor = '';
// rooms left menu changing colors
function roomsMenuChangeBackgroundClick() {
    $('.rooms_left_menu_div button').on('click', function () {
        $(`.newButtonWrapper`).remove();
        let roomName = this.innerHTML;
        if (roomName === 'living&nbsp;room') {
            roomName = 'livingRoom';
            $('.rooms_left_menu_all_div').text('living room 1/2')
        } else {
            $('.rooms_left_menu_all_div').text(`${roomName} ` + `1/${roomsSlidesNumber[roomName]}`)
        }
        let colorCode = menuRoomsColors[roomName];
        $('.rooms_left_menu_div').css('background', colorCode);
        $('.rooms_background').css('background-color', colorCode);
        $('.rooms_site_wrapper').css('background-color', colorCode);
        $('.rooms_crosses_info').css('opacity', '0.95');
        setTimeout(function () {
            $('.rooms_crosses_info').css('background-color', colorCode);
        }, 50);
        roomsClickedColor = colorCode
        currentColor = colorCode
        let fnName = `appendPopUpsTo` + `${roomName}` + `_` + `${roomNumber}`
        window[fnName]();
    });
}
roomsMenuChangeBackgroundClick()
// 
function roomsMenuChangeColorsClick() {
    $('.rooms_left_menu_div button').on('click', function () {
        let roomName = this.innerHTML;
        if (roomName === 'living&nbsp;room') {
            roomName = 'livingRoom';
        }
        let colorCode = menuRoomsColors[roomName];
        // 
        function giveColorCode() {
            color = colorCode;
        }
        // 
        $('.rooms_left_menu_div').css('background', colorCode);
        $('.rooms_top_nav_button').css('background', colorCode);
        roomsClickedColor = colorCode
    });
}
roomsMenuChangeColorsClick();
function roomsMenuChangeColorsMouseover() {
    $('.rooms_left_menu_div button').on('mouseover', function () {
        let roomName = this.innerHTML;
        if (roomName === 'living&nbsp;room') {
            roomName = 'livingRoom';
        }
        let colorCode = menuRoomsColors[roomName];
        $('.rooms_left_menu_div').css('background', colorCode);
        $('.rooms_background').css('background-color', colorCode);
        $('.rooms_top_nav_button').css('background', colorCode);
        $(`.rooms_left_menu_div button`).on('mouseout', function () {
            $('.rooms_left_menu_div').css('background-color', roomsClickedColor)
            $('.rooms_background').css('background-color', roomsClickedColor);
            $('.rooms_top_nav_button').css('background', roomsClickedColor);
        });
    });
}
// 
roomsMenuChangeColorsMouseover()


// shop
let menuColors = {
    bedroom: "#070b1f",
    bathroom: "#0a1b1d",
    livingRoom: "#1d130a",
    kitchen: "#1d0a0a",
    garden: "#0a1d11",
    all: "#070b1f"
};
let clickedColor = '#070b1f'
function menuChangeColorsClick() {
    $('.shop_left_menu_div button').on('click', function () {
        let roomName = this.innerHTML;
        if (roomName === 'living&nbsp;room') {
            roomName = 'livingRoom';
        }
        let colorCode = menuColors[roomName];
        $('.shop_left_menu_div').css('background', colorCode);
        clickedColor = colorCode
    });
}
menuChangeColorsClick();
function menuChangeColorsMouseover() {
    $('.shop_left_menu_div button').on('mouseover', function () {
        let roomName = this.innerHTML;
        if (roomName === 'living&nbsp;room') {
            roomName = 'livingRoom';
        }
        let colorCode = menuColors[roomName];
        $('.shop_left_menu_div').css('background', colorCode);
        $(`.shop_left_menu_div button`).on('mouseout', function () {
            $('.shop_left_menu_div').css('background-color', clickedColor)
        });
    });
}
menuChangeColorsMouseover()

.cross_point{
    border: 0px;
    border-radius: 50px;
    background: transparent;
    position: absolute;
    // margin-top: 2%;
    // height: calc(1vw + 0.5vh + 1vmin);
    // width: calc(1vw + 0.5vh + 1vmin);
      height: calc(1vw + 0.6vh + 1vmin);
    width: calc(1vw + 0.5vh + 1vmin);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cross_point:focus{
    border: 0;
    outline: 0;
  }
  .cross_point_image{
    width: 100%;
    position: relative;
  }
  .cross_point_image:hover{
    height: calc(1vw + 0.5vh + 1vmin);
    width: calc(1vw + 0.5vh + 1vmin);
  }
  .rooms_crosses_elements_wrapper{
    // background: red;
    border-radius: 50px;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rooms_crosses_elements{
    position: relative;
    // background: yellow;
    border-radius: 50px;
    height: 100%;
    width: 100%;
  }
  .cross_line_animation{
    background: rgba(#786120, 0.8);
    height: 100%;
    width: 100%;
    // height: 0%;
    // width: 0%;
    display: inline-block;
    position: absolute;
    bottom:0%;
    left: 0%;
    transition: 0.5s;
  }
  .rooms_crosses_lines{
    transform: rotate(-60deg);
    position: absolute;
    background: transparent;
    border-radius: 50px;
    height: 1.2px;
    width: 517%;
    bottom: 298%;
    left: -50%;
    transition: 0s;
    display: flex;
    justify-items: center;
    align-self: center;
  }
  .rooms_crosses_info{
    position: absolute;
    background: rgba(#070B1F, 0.95);
    border-radius: 0px;
    height: 299%;
    width: 500%;
    display: flex;
  
    height: 0%;
    width: 0%;
    bottom: 513%;
    left: 334%;
    transition: 0.5s;
  }
  
  // .rooms_crosses_lines{
  //   // if
  //   // top < 34%;
  //   // left > 79%;
  //   //top right
  //   transform: rotate(-60deg);
  //   bottom: 298%;
  //   left: -50%;
  //   // if
  //   // top > 32%;
  //   // left < 24%;
  //   //top left
  //   // transform: rotate(-120deg);
  //   // bottom: 293%;
  //   // left: -348%;
  //   // if
  //   // top > 63%;
  //   // left > 79%;
  //   // bottom right
  //   // transform: rotate(60deg);
  //   // bottom: -195%;
  //   // left: -41%;
  //   // if
  //   // top > 63%;
  //   // left < 24%;
  //   //bottom left
  //   // transform: rotate(-240deg);
  //   // bottom: -199%;
  //   // left: -348%;
  
  
  //   position: absolute;
  //   background: transparent;
  //   border-radius: 50px;
  //   height: 1.2px;
  //   width: 500%;
  //   transition: 0s;
  //   display: flex;
  //   justify-items: center;
  //   align-self: center;
  // }
  // .rooms_crosses_info{
  //   // top right
  //   bottom: 506%;
  //   left: 321%;
  //   // top left
  //   // bottom: 503%;
  //   // right: 318%;
  //   // bottom right
  //   // top: 494%;
  //   // left: 330%;
  //   // bottom left
  //   // top: 502%;
  //   // right: 322%;
  
    position: absolute;
    background: rgba(#070B1F, 0.95);
    border-radius: 0px;
=
    height: 0%;
    width: 0%;
    display: flex;
    transition: 0.5s;
  }
  .rooms_crosses_info_content_wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // padding: 5% 0 10% 0;
    font-family: "Old Standard TT", serif;
    font-size: calc(0.4vw + 0.3vh + 1vmin);
    color: #806621;
    border: transparent;
    background: transparent;
    transition: 0.5s;
    opacity: 0;
    // border-bottom: 1px solid transparent;
  }
  .cross_popup_item_name{
    // font-size: 80%;
  
    // margin: 0%;
  
  }
  .cross_popup_item_name span{
    // font-size: 80%;
    border-bottom: 1px solid #806621;
    display: inline-block;
    // margin: 0%;
  
  }
  .cross_popup_bottom_text_wrapper{
    display: flex;
    justify-content: space-evenly;
  }
  .cross_popup_bottom_text_wrapper > * {
    padding: 3%;
  }
  .cross_popup_price{
    // display: flex;
    // align-self: center;
    width: 40%;
  }
  .cross_popup_buy_button{
    border: 1px solid #806621;
    transition: 1s;
    width: 45%;
    z-index:1;
  }
  .cross_popup_buy_button a{
    
    
    
  }
  .cross_popup_buy_button:hover{
    background: #806621;
    color: #070b1f;
  }
const btnFilter = document.querySelectorAll(".btn-filter button");
const cardFilter = document.querySelectorAll(".results-table");

const filterCard = e => {
    document.querySelector(".active-sports").classList.remove("active-sports");
    e.target.classList.add("active-sports");

    cardFilter.forEach(card => {
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    });
}

btnFilter.forEach(button => button.addEventListener("click", filterCard));

function calendar() {
    let date = new Date();

    let checkDayByDate = null

    function genDay() {
        switch (checkDayByDate) {
            case 0:
                currentDay = "Chủ Nhật";
                break;
            case 1:
                currentDay = "Thứ Hai";
                break;
            case 2:
                currentDay = "Thứ Ba";
                break;
            case 3:
                currentDay = "Thứ Tư";
                break;
            case 4:
                currentDay = "Thứ Năm";
                break;
            case 5:
                currentDay = "Thứ Sáu";
                break;
            case 6:
                currentDay = "Thứ Bảy";
        }
        return currentDay;
    }

    const showCalendar = document.querySelector(".slide-blog");
    let lit = "";

    let previous = new Date(date.getTime());
    for (let i = 6; i > 0; i--) {
        previous.setDate(date.getDate() - i);

        lit +=
            `<div class="calendar" >
                <span class="date">${genDay(checkDayByDate = previous.getDay())}</span>
                <span class="day">${previous.getDate()}</span>
              </div>`
    }
    // Loop to add the dates of the current month
    lit += `<div class="calendar active">
                            <span class="date">${genDay(checkDayByDate = date.getDay())}</span>
                            <span class="day">${date.getDate()}</span>
                        </div>`;

    for (let i = 1; i <= 7; i++) {
        previous.setDate(date.getDate() + i);
        lit +=
            `<div class="calendar" >
                <span class="date">${genDay(checkDayByDate = previous.getDay())}</span>
                <span class="day">${previous.getDate()}</span>
              </div>`
    }
    showCalendar.innerHTML = lit;
}

calendar();
$('.slide-blog').not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    speed: 500,
    dots: false,
    loop: false,
    autoplay: false,
    focusOnSelect: true,
    initialSlide: 6,
    centerMode: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='/image/Group6272.svg' alt=\"\"  style=\"width: 20px; height: auto\"></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='/image/Group6273.svg' alt=\"\"  style=\"width: 20px; height: auto\"></button>",
    // responsive: [
    //     // {
    //     //     breakpoint: 1460,
    //     //     settings: {
    //     //         slidesToShow: 4,
    //     //     }
    //     // },
    //     {
    //         breakpoint: 1230,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     {
    //         breakpoint: 1000,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     },
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 500,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: false,
    //             dots: true,
    //         }
    //     }
    // ]
});

const btnFilterCurrent = document.querySelectorAll(".calendar");

const filterCardCalendar = e => {

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    document.querySelector(".active")
}
btnFilterCurrent.forEach(div => div.addEventListener("click", filterCardCalendar));
//button share and copy
const fbButton = document.getElementById('fb-share-button');
const url = window.location.href;

fbButton.addEventListener('click', function () {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});
const $url = $(location).attr('href');
const copyText = document.getElementById("copy-link");
copyText.addEventListener('click', function () {
    navigator.clipboard.writeText($url);
    alert("Đã copy đường link ")
});

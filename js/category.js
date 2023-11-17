// show bảng và môn thi đấu
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

//button share and copy
const fbButton = document.getElementById('fb-share-button');
const url = window.location.href;
if(fbButton) {

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
}

//lịch trên trang thi đấu
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

    let previous = new Date();
    let checkLoop = '';
    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    );
    for (let i = 6; i > 0; i--) {

        let checkDate = date.getDate() - i;

        if (checkDate < 1 && checkLoop !== 1) {
            checkLoop = 1;
            prevLastDay.setDate(prevLastDay.getDate() - 4);
            for (let x = 0; x <= 3; x++) {

                prevLastDay.setDate(prevLastDay.getDate() + 1);
                lit +=
                    `<div class="calendar" >
                        <span class="date">${genDay(checkDayByDate = prevLastDay.getDay())}</span>
                        <span class="day">${prevLastDay.getDate()}</span>
                     </div>`
            }

            continue;
        }

        if (checkDate < 1) {
            continue;
        }

        previous.setDate(checkDate);
        lit +=
            `<div class="calendar" >
                <span class="date">${genDay(checkDayByDate = previous.getDay())}</span>
                <span class="day">${previous.getDate()}</span>
              </div>`
    }
    // Loop to add the dates of the current month
    lit += `<div class="calendar active">
                            <span class="date">${genDay(checkDayByDate = date.getDay())}</span>
                            <span class="day" data-name=${date} >${date.getDate()}</span>
                        </div>`;

    const daysOfThisMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let checkLoop2 = '';

    for (let i = 1; i <= 7; i++) {
        let checkDate = date.getDate() + i;
        previous.setDate(checkDate);
        lit +=
            `<div class="calendar" >
                <span class="date">${genDay(checkDayByDate = previous.getDay())}</span>
                <span class="day"  data-name=${previous}>${previous.getDate()}</span>
              </div>`

        if (checkDate > daysOfThisMonth && checkLoop2 !== 1) {
            checkLoop2 = 1;
            let dayOfNextMonth = new Date(
                date.getFullYear(),
                date.getMonth() + 2,
                0
            );

            for (let x = 1; x <= 4; x++) {
                dayOfNextMonth.setDate(x);

                lit +=
                    `<div class="calendar" >
                        <span class="date">${genDay(checkDayByDate = dayOfNextMonth.getDay())}</span>
                        <span class="day">${dayOfNextMonth.getDate()}</span>
                     </div>`
            }

            break;
        }
    }
    showCalendar.innerHTML = lit;
}

calendar();
$('.slide-blog').not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 7,
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
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});

const btnFilterCurrent = document.querySelectorAll(".calendar");

const filterCardCalendar = e => {

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    document.querySelector(".active")
}
btnFilterCurrent.forEach(div => div.addEventListener("click", filterCardCalendar));


// danh sách giải đấu
const btnBlog = document.getElementsByClassName('show-select');

for (let i = 0; i < btnBlog.length; ++i) {
    btnBlog[i].addEventListener('click', function () {
        // Using an if statement to check the class
        if (this.classList.contains('open')) {
            // The box that we clicked has a class of bad so let's remove it and add the good class
            this.classList.remove('open');
        } else {
            // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
            this.classList.add('open');
        }
    });
}
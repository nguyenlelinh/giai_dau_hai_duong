// carousel cho slide-blog
$('.slide-blog').not('.slick-initialized').slick({
    infinite: false,
    loop: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 3,
    dots: false,
    autoplay: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='/image/Group19.svg' alt=\"\"  style=\"width: 20px; height: auto\"></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='/image/Group20.svg' alt=\"\"  style=\"width: 20px; height: auto\"></button>",
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});


const btnBlog = document.getElementsByClassName('show-select');

for (var i = 0; i < btnBlog.length; ++i) {
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
const btnFilter_index = document.querySelectorAll(".select-carousel button");
console.log(btnFilter_index)

// const cardFilter = document.querySelectorAll(".results-table");

const filterCard = e => {
    document.querySelector(".select-carousel .active").classList.remove("active");
    e.target.classList.add("active");
}

btnFilter_index.forEach(button => button.addEventListener("click", filterCard));


// scroll trang chủ
$(document).ready(function () {
    $(window).scroll(function () {
        console.log(this.scrollY)
        if (this.scrollY > 1400) {
            $('.scroll-to-top').addClass("active")
        } else {
            $('.scroll-to-top').removeClass("active")
        }
    });

    $("#scroll-to-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100)
    })
});

//tùy chọn search
$(function() {
    const start = moment().subtract(29, 'days');
    const end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
        $("#reportrange span").html()
    }

    $('#reportrange').daterangepicker({
        "locale": {
            "monthNames": [
                "Tháng 1 năm",
                "Tháng 2 năm",
                "Tháng 3 năm",
                "Tháng 4 năm",
                "Tháng 5 năm",
                "Tháng 6 năm",
                "Tháng 7 năm",
                "Tháng 8 năm",
                "Tháng 9 năm",
                "Tháng 10 năm",
                "Tháng 11 năm",
                "Tháng 12 năm"
            ],
            "daysOfWeek": [
                "CN",
                "Th 2",
                "Th 3",
                "Th 4",
                "Th 5",
                "Th 6",
                "Th 7"
            ],
            "format": "DD/MM/YYYY",
            "customRangeLabel": "Tùy chọn",
            "applyLabel": "Áp dụng",
            "cancelLabel": "Xóa",
        },
        startDate: start,
        endDate: end,
        cancelLabel: 'Xóa',
        ranges: {
            'Hôm nay': [moment(), moment()],
            '30 ngày qua': [moment().subtract(29, 'days'), moment()],
            '30 ngày tới':[moment(), moment().subtract(29, 'days')],
        }
    }, cb);
    $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
        $("#reportrange span").html('')  ;
    });

    cb(start, end);
    window.onload= $("#reportrange span").html('Thời gian')  ;

});
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
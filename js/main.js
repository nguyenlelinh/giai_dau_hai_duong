
// carousel cho slide-blog
$('.slide-blog').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    autoplay: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'>  <img src='image/Group19.svg' alt=\"\"  style=\"width: 20px; height: auto\"></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='image/Group20.svg' alt=\"\"  style=\"width: 20px; height: auto\"></button>",
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

// const cardFilter = document.querySelectorAll(".results-table");

const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // cardFilter.forEach(card => {
    //     card.classList.add("hide");
    //
    //     if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
    //         card.classList.remove("hide")
    //     }
    // });
}

btnFilter_index.forEach(button => button.addEventListener("click", filterCard));

// search bar
const ctaSearch = document.getElementById("cta-search");
const formSearch = document.getElementById("wrap-form");

ctaSearch.addEventListener("click", () => {
    ctaSearch.classList.toggle("active");
    formSearch.classList.toggle("active");
});
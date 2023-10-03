// nhúng menu header
const nav_header = document.querySelector('.navbar_header')
if (nav_header) {
    fetch('./header.html')
        .then(res => res.text())
        .then(data => {
            nav_header.innerHTML = data
        })
}
// nhúng footer
const nav_footer = document.querySelector('.navbar_footer')
fetch('./footer.html')
    .then(res => res.text())
    .then(data => {
        nav_footer.innerHTML = data
    })
//Active menu
const menuChild = document.getElementsByClassName("menu-child");
const boxMenu = document.getElementById("box-menu");
const boxLogo = document.getElementById("box-logo");
const formSearch = document.getElementById("wrap-form");
const body = document.getElementById("body");

for (let i = 0; i < menuChild.length; ++i) {
    menuChild[i].addEventListener('click', function () {
        boxMenu.classList.toggle("active");
        boxLogo.classList.toggle("active");
        body.classList.toggle("hide");
        formSearch.classList.remove("active")
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    });
}

// search bar
const ctaSearch = document.getElementById("cta-search");
const search_form = document.querySelector('.event-main');

ctaSearch.addEventListener("click", () => {
    ctaSearch.classList.toggle("active");
    formSearch.classList.toggle("active");
    search_form.classList.toggle("open");
});

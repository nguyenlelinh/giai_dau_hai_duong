// nhúng menu header
const nav_header = document.querySelector('.navbar_header')
fetch('img/header.html')
    .then(res => res.text())
    .then(data => {
        nav_header.innerHTML = data
    })
// nhúng footer
const nav_footer = document.querySelector('.navbar_footer')
fetch('img/footer.html')
    .then(res => res.text())
    .then(data => {
        nav_footer.innerHTML = data
    })

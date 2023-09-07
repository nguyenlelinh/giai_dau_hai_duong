const btnFilter = document.querySelectorAll(".btn-filter button");
const cardFilter = document.querySelectorAll(".results-table");

const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

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

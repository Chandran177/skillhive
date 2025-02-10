
document.addEventListener("DOMContentLoaded", function () {
    function loadHTML(selector, url) {
        fetch(url).then(res => res.text()).then(data => {
            document.querySelector(selector).innerHTML = data
        }).catch(err => console.error("error in data", err))
    }

    loadHTML("header", "./header.html");
    loadHTML("footer", "./footer.html");

    //  toggler = document.getElementById('bars');

});



function navtoggle() {
    let navList = document.querySelector('.navlist');
    navList.classList.toggle('hidden');
}
function clearnav() {

    let navList = document.querySelector('.navlist');

    navList.classList.remove('hidden');

}


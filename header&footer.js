
document.addEventListener("DOMContentLoaded", function () {
    try {
        let path = window.location.href;
        function loadHTML(selector, url) {
            fetch(url).then(res => res.text()).then(data => {
                document.querySelector(selector).innerHTML = data
                let imageElemet = document.getElementById('logo');
                let footerLogo=document.getElementById('footerLogo')
                if (path.includes('about.html') || path.includes('course')) {
                    imageElemet.src = "../../imageAndSvg/footerimg/logo.png"
                    footerLogo.src="../../imageAndSvg/footerimg/logo-white.png"
                }
            }).catch(err => console.error("error in data", err))
        }
        loadHTML("header", "/header.html");
        loadHTML("footer", "/footer.html");

    } catch (e) {
        console.log(e);
    }
});




function navtoggle() {
    let navList = document.querySelector('.navlist');
    navList.classList.toggle('hidden');
}
function clearnav() {

    let navList = document.querySelector('.navlist');

    navList.classList.remove('hidden');

}


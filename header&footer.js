document.addEventListener("DOMContentLoaded", function(){
    function loadHTML(selector, url){
        fetch(url).then(res=> res.text()).then(data=>{
            document.querySelector(selector).innerHTML = data
        }).catch(err=>console.error("error in data", err))
    }

    loadHTML("header","/skillhive/header.html")
    loadHTML("footer","/skillhive/footer.html")
})
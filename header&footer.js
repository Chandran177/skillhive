document.addEventListener("DOMContentLoaded", function(){
    function loadHTML(selector, url){
        fetch(url).then(res=> res.text()).then(data=>{
            document.querySelector(selector).innerHTML = data
        }).catch(err=>console.error("error in data", err))
    }

    loadHTML("header","/header.html")
    loadHTML("footer","/footer.html")
})
function search(){
    let searchValue = document.getElementById("searchInput").value.trim();
    if(searchValue != ""){
        let section = document.getElementById('courses');
        section.scrollIntoView({ behavior: "smooth" });
    }
}
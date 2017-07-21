let openMenu = document.getElementById("open");

openMenu.addEventListener("click", function(event){
    event.stopPropagation();

    if(this.children[0].classList.contains("hideMenu")){
        this.children[0].classList.remove("hideMenu");
        this.children[0].classList.add("showMenu");
    }
    else{
        this.children[0].classList.add("hideMenu");
        this.children[0].classList.remove("showMenu");
    }
});
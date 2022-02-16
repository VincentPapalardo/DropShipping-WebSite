function highlight(target) {
    let tab = document.querySelectorAll(".test")
    for(let i = 0; i < tab.length; i++){
        if(tab[i] !== target){
            tab[i].style.border = "none";
        }
    }

    target.style.border = "2px solid white";
}
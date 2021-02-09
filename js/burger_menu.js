let openAndCloseBurgerMenu = function() {
    let alreadyOpened = menuClassList.contains(showingClass);
    if(!alreadyOpened) {
        menuClassList.add(showingClass);
    } else {
        menuClassList.remove(showingClass);
    }
};

let modifyDownloadResumeBTN = function(mediaQuery, htmlToChange) {
    if(mediaQuery.matches) {
        htmlToChange.innerHTML = "Download my<br>Resume/CV";
    }
};

let burger_menu = document.getElementById("burger_menu");
let burger_menu_btn = document.getElementById("burger_menu_btn");
let close_menu_btn = document.getElementById("burger_menu_btn__close_btn");

let showingClass = "burger_menu--showing";
let menuClassList = burger_menu.classList;

let download_resume_btn = document.getElementById("download_resume_btn");
let btnMediaQuery = window.matchMedia("(max-width: 400px)");
modifyDownloadResumeBTN(btnMediaQuery, download_resume_btn);
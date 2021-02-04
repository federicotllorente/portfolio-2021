let mainTitleSpan = document.getElementById("mainTitle__span");
let changingSpanClass1 = "changingSpan";
let changingSpanClass2 = "changingSpan2";

let changeSpanText = function() {
    if(mainTitleSpan.classList.contains(changingSpanClass1)) {
        mainTitleSpan.classList.remove(changingSpanClass1);
    }
    if(mainTitleSpan.classList.contains(changingSpanClass2)) {
        mainTitleSpan.classList.remove(changingSpanClass2);
    }
    let random = Math.floor(Math.random() * 2);
    console.log(random);
    if(random == 0) {
        mainTitleSpan.classList.add(changingSpanClass1);
        mainTitleSpan.innerHTML = "<span class='noOrange'>a </span>Developer";
        mainTitleSpan.classList.add(changingSpanClass2);
    } else {
        mainTitleSpan.classList.add(changingSpanClass1);
        mainTitleSpan.innerHTML = "<span class='noOrange'>a </span>Designer";
        mainTitleSpan.classList.add(changingSpanClass2);
    }
}

let changeSpanTextAgain = function(text) {
    if(mainTitleSpan.classList.contains(changingSpanClass1)) {
        mainTitleSpan.classList.remove(changingSpanClass1);
    }
    if(mainTitleSpan.classList.contains(changingSpanClass2)) {
        mainTitleSpan.classList.remove(changingSpanClass2);
    }
    mainTitleSpan.classList.add(changingSpanClass1);
    mainTitleSpan.innerHTML = text;
    mainTitleSpan.classList.add(changingSpanClass2);
}

// Change all of this
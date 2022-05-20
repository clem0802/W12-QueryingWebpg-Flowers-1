let allImages = ["assets/flower1.jpeg","assets/flower2.jpeg","assets/flower3.jpeg","assets/flower4.jpeg"];
let indexNumber = 1;

function changeImage(){
    let image = document.querySelector("img"); // <img> tag
    image.setAttribute("src",allImages[indexNumber]);

    if(indexNumber === allImages.length-1){
        indexNumber = 0;
    } else{
        indexNumber++;
    }
}

function addBackgroundColor(){
    let container = document.querySelector(".image-container");
    container.classList.toggle("blue-bg");

    let buttonText = document.querySelector(".bg-btn");
    if(buttonText.innerHTML === "Remove bg"){
        buttonText.innerHTML = "Add bg";
    } else{
        buttonText.innerHTML = "Remove bg";
    }
}

function toggleStyle(){
    let allButtons = document.getElementsByTagName("button");
    // allButtons[0].classList.toggle("all-buttons");
    // allButtons[1].classList.toggle("all-buttons");
    // allButtons[2].classList.toggle("all-buttons");

    for (var i=0; i<allButtons.length; i++){
        allButtons[i].classList.toggle("all-buttons");
    }

    let image = document.querySelector("img"); // <img> tag
    image.classList.toggle("img-improved");

    let styleButtonFinal = document.querySelector(".style-btn");

    if(styleButtonFinal.innerHTML === "Change to Improved Style"){
        styleButtonFinal.innerHTML = "Normal Design";
    } else{
        styleButtonFinal.innerHTML = "Change to Improved Style";
    }
}
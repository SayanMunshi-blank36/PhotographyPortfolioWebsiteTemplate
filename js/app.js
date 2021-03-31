const loading = document.querySelector(".loading");

function myLoader(){
    loading.style.display = "none";
}

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
const navul = document.querySelector(".nav-ul");

hamburger.addEventListener("click",() =>{
    navbar.classList.toggle("open");
    navul.classList.toggle("fade");
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i=0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active";
    }
}


const leftArrow = document.querySelector(".fa-caret-left");
const rightArrow = document.querySelector(".fa-caret-right");
const displayImg = document.querySelectorAll(".slide");
let count = 0;

function noDisplay(){
 for(let i=0; i<displayImg.length; i++){
     displayImg[i].style.display = "none";
 }   
}

function startDisplay(){
    noDisplay();
    displayImg[0].style.display = "block";
}

function slideLeft(){
    noDisplay();
    displayImg[count - 1].style.display = "block";
    count--;
}

function slideRight(){
    noDisplay();
    displayImg[count + 1].style.display = "block";
    count++;
}

leftArrow.addEventListener("click", function(){
    if(count === 0){
        count = displayImg.length;
    }

    slideLeft();
});

rightArrow.addEventListener("click", function(){
    if(count === displayImg.length-1){
        count = -1;
    }

    slideRight();
});


startDisplay();

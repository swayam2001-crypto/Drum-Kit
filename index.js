// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("i got clicked!");
// }

// document.querySelector("button").addEventListener("click", function handleClick(){
//         alert("i got clicked!");
//         // for one button
//     });


// var noofbuttons=document.querySelectorAll(".drum").length;    
// for(var i=0;i<noofbuttons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
//         alert("i got clicked!");
//     });
// }    

// var noofbuttons=document.querySelectorAll(".drum").length;    
// for(var i=0;i<noofbuttons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
//         var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();
//     });
// }    

// Detecting button press
var noofbuttons=document.querySelectorAll(".drum").length;    
for(var i=0;i<noofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerhtml=this.innerHTML;
        makeSound(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
    });
}  

// Detecting keyboard press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;   
        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:console.log(buttonInnerhtml);
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    

}
)
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key){
    switch(key){
        case "w" : 
        var tom1= new Audio("sounds/tom1.mp3.mp3");
        tom1.play();
        break;
        case "a" : 
        var tom2= new Audio("sounds/tom2.mp3.mp3");
        tom2.play();
        break;
        case "s" : 
        var tom3= new Audio("sounds/tom3.mp3.mp3");
        tom3.play();
        break;
        case "d" : 
        var tom4= new Audio("sounds/tom1.mp3.mp3");
        tom4.play();
        break;
        case "j" : 
        var snare= new Audio("sounds/snare.mp3.mp3");
        snare.play();
        break;
        case "k" : 
        var crash= new Audio("sounds/crash.mp3.mp3");
        crash.play();
        break;
        case "l" : 
        var kick= new Audio("sounds/kick.mp3.mp3");
        kick.play();
        break;
        default: console.log(buttonInnerHtml);
        

    }
}

function buttonAnimation(currentkey){
  let activebutton=  document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100
)


}
var n=7;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
 })
}


document.addEventListener("keydown",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
                     var tom1= new Audio("sounds/tom-1.mp3")
                     tom1.play();
            break;

        case "a":
                     var kick=new Audio("sounds/kick-bass.mp3")
                     kick.play();
            break;

        case "s":
                     var snare=new Audio("sounds/snare.mp3")
                     snare.play();
            break;

        case "d":
                     var tom3=new Audio("sounds/tom-3.mp3")
                     tom3.play();

            break;

        case "j":
                     var tom4=new Audio("sounds/tom-4.mp3")
                     tom4.play();
            break;
        
        case "k":
             
                     var crash=new Audio("sounds/crash.mp3")
                     crash.play();
            break;

        case "l":
                     var tom2=new Audio("sounds/tom-2.mp3")
                     tom2.play();
            break;
    
        default:console.log(n)
            break;
    }

}

function buttonAnimation(currentKey){
    var ck = document.querySelector("."+currentKey)
    ck.classList.add("pressed")
    setTimeout(function(){
        ck.classList.remove("pressed")
    },250)
}


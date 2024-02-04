
//if a button press was detected
var noofbuttons=document.querySelectorAll(".drum").length;
for(let i=0;i<noofbuttons;i++)  //using let instead of var helps avoid aschroncrounous nature of event listener
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        this.style.color="pink";
        var ch=this.innerHTML;
        task(ch);   
        animation(ch); 
    })
    
}

//detecting keyboard press
document.addEventListener("keydown",function(event){
    var ch=event.key;  
    console.log(event);
    task(ch); 
    animation(ch);
})


function task(ch){
        switch(ch)
        {
            case 'w':
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
            break;
            case 'a':
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
            case 's':
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case 'd':
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case 'j':
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case 'k':
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case 'l':
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        }
}
function animation(ch){
    var active=document.querySelector("."+ch);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },1000);



}


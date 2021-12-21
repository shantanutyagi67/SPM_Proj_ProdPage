const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const tl = new TimelineLite({paused:true , reversed:true})

tl.to('.cover',1,{
    width:'60%',
    ease: Power2.easeOut
})

.to('nav',1,{
    height:'100%',
    ease: Power2.easeOut
},'-=.5')

.fromTo('.nav-open',1,{
    opacity:0,
    x:50
},{
    opacity:1,
    x:0,
    onComplete: function(){
        navOpen.style.pointerEvents = 'auto'
    }
},'-=.4')

navButton.addEventListener('click',(e)=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl);
})

function toggleTween (tween){
    tween.reversed() ? tween.play() : tween.reverse()
}
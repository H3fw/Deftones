let songs = document.querySelectorAll('.slider .card');
let active = 3;

function slideCards() {
    songs[active].style.zIndex = 1;
    songs[active].style.transform = `none`;
    songs[active].style.filter = `none`;
    songs[active].style.opacity = 1;

    let stt = 0
    for(var i = active + 1; i < songs.length; i++) {
        stt++;
        songs[i].style.zIndex = -stt;
        songs[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt})`;
        songs[i].style.filter = `blur(1px)`;
        songs[i].style.opacity = stt > 2 ? 0 : 1    ;
    }
    stt = 0
    for(var i = (active - 1); i >= 0; i--) {
        stt++;
        songs[i].style.zIndex = -stt;
        songs[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt})`;
        songs[i].style.filter = `blur(2px)`;
        songs[i].style.opacity = stt > 2 ? 0 : 1;
    }
}   
slideCards();

let next = document.getElementById('next');
let prev = document.getElementById('previous');

next.onclick = function(){
    active = active + 1 < songs.length ?  (active + 1) : 0;
    slideCards();
 }
 prev.onclick = function(){
     active = active - 1 >= 0 ? (active - 1) : songs.length;
     slideCards();
 }


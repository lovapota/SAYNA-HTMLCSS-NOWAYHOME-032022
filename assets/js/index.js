
//Animation Spiderman noir et rouge
const spider = document.querySelector('.spider');
const spiderNb = document.querySelector('.spiderNB')
let my = [0,]

window.addEventListener('scroll', () => {
        my.push(window.scrollY)
        if (my[0] < 2000) {
                spider.innerHTML = `<img src="assets/Assets/home2.png" alt="">`;
                spider.style.opacity = '70%';
                spiderNb.innerHTML = ``;
        } else {
                spider.innerHTML = ``;
                spiderNb.innerHTML = `<img src="assets/img/img5.png" alt="">`;
                spiderNb.style.opacity = '70%';
        }
        my.shift()
});



//Input 
const input = document.getElementsByClassName('form-spiderman');
const btn1 = document.getElementById('search');
let place = []
btn1.addEventListener('click', () => {
        for (let i = 0; i < input.length; i++) {
                if (input[i].value != '') {
                        place.push(0)
                }
        }
        if (place.length == 5) {
                alert('ATAO BOX MILAY B')
        }
})


//Audio
const audio = document.getElementById('audio');
const duration = audio.duration;
const bar = document.getElementById('progress')
bar.setAttribute('max',audio.duration);
const play = document.getElementById('play');
const pause = document.getElementById('pause');
var maxprogress = audio.duration; // total à atteindre
var actualprogress = 0;  // valeur courante
var itv = 0;  // id pour setinterval
function playAudio(){
        audio.play();
        play.style.display = 'none';
        pause.style.display = 'block';
  if(actualprogress >= maxprogress){
    clearInterval(itv);  	
    return;
  }
  bar.setAttribute('value',actualprogress)	
  actualprogress += 1;	
  if(actualprogress == maxprogress) {
        clearInterval(itv)
  };   
}
function pauseAudio() {
        clearInterval(itv);
        play.style.display = 'block';
        pause.style.display = 'none';
        audio.pause();
}

// let x = document.getElementById("myAudio"); 

// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 
// ========================================
// const myAudio = document.getElementById('music')
//   const start = document.querySelector('.start')
//   const end = document.querySelector('.end')
//   const progressBar = document.querySelector('.progress-bar')
//   const now = document.querySelector('.now')

//   function conversion (value) {
//     let minute = Math.floor(value / 60)
//     minute = minute.toString().length === 1 ? ('0' + minute) : minute
//     let second = Math.round(value % 60)
//     second = second.toString().length === 1 ? ('0' + second) : second
//     return `${minute}:${second}`
//   }

//   myAudio.onloadedmetadata = function () {
//     end.innerHTML = conversion(myAudio.duration)
//     start.innerHTML = conversion(myAudio.currentTime)
//   }

//   progressBar.addEventListener('click', function (event) {
//     let coordStart = this.getBoundingClientRect().left
//     let coordEnd = event.pageX
//     let p = (coordEnd - coordStart) / this.offsetWidth
//     now.style.width = p.toFixed(3) * 100 + '%'

//     myAudio.currentTime = p * myAudio.duration
//     myAudio.play()
//   })

//   setInterval(() => {
//     start.innerHTML = conversion(myAudio.currentTime)
//     now.style.width = myAudio.currentTime / myAudio.duration.toFixed(3) * 100 + '%'
//   }, 1000)


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
const bar = document.getElementById('progress');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
let actualprogress = 0;  // valeur courante
function AddProgress(){
        actualprogress ++;
        bar.setAttribute('value', `${actualprogress}`);      
}
const itv = setInterval('AddProgress()', 1000);;
play.addEventListener('click', () => {
        bar.setAttribute('max',`${audio.duration}`);
        console.log(`${audio.duration}`);
        audio.play();
        play.style.display = 'none';
        pause.style.display = 'block';
});
pause.addEventListener('click', () =>{
        clearInterval(itv);
        play.style.display = 'block';
        pause.style.display = 'none';
        audio.pause(); 
        console.log(actualprogress);
        bar.setAttribute('value', `${actualprogress}`); 
        return actualprogress;
         
})

// let a = 0;
// function lova(){
//         a ++;
//         console.log(a);
//         if(a === 10){
//                 clearInterval(b);
//                 console.log(a);
//                 return a
//         }
//         function test() {
                
//         }
// };
// const b = setInterval('lova()', 1000);
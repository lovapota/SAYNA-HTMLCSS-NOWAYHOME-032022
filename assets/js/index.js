const btn1 = document.getElementsByClassName('button1')
const btn2 = document.getElementsByClassName('button2')
const arrayBtn1 = Array.from(btn1)
const arrayBtn2 = Array.from(btn2)



arrayBtn1.forEach(i => {
    i.addEventListener('mouseenter', () => {
        i.style.backgroundColor = 'transparent'
        i.style.color = 'white' 
        i.style.border = '0.2em solid white'
        i.style.boxShadow = '0 5px 15px 1px white'
})
i.addEventListener('mouseleave', () => {
    i.style.backgroundColor = ''
    i.style.color = '' 
    i.style.border = ''
    i.style.boxShadow = ''
})
});


arrayBtn2.forEach(i => {
    i.addEventListener('mouseenter', () => {
        i.style.backgroundColor = 'white'
        i.style.color = '#b11313' 
        i.style.border = ''
        i.style.boxShadow = '0 5px 15px 1px white'
})
i.addEventListener('mouseleave', () => {
    i.style.backgroundColor = ''
    i.style.color = '' 
    i.style.border = ''
    i.style.boxShadow = ''
})
});

//Spiderman
const cont = document.getElementsByClassName('conteneur');
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll < 1600){
        cont[1].innerHTML = `<div class="home2"> <img src="assets/assets/home2.png" alt="">
</div>`;
cont[2].innerHTML = ``;
    }
    else if ( scroll < 1800){
        cont[2].innerHTML = `<div class="home3">
<img src="assets/img/img5.png" alt="">
</div>`;
cont[1].innerHTML = ``;
    }
})


const input = document.getElementsByClassName('form-spiderman')
const arrayInput = Array.from(input)
const button3 = document.getElementsByClassName('form-button')
button3[0].addEventListener('click', () => {
        if (arrayInput[4].value !== '') {
            alert('Devener Spiderman')
    }
})



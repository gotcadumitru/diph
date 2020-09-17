const burger = document.querySelector('#BurgerArea span');
const AreaBurger = document.querySelector('#BurgerArea');
const nav = document.querySelector('.nav');
const worksItem = document.querySelectorAll('.works__item');
const worksText = document.querySelectorAll('.works__text');
const works = document.querySelector('.works');
let mouseOnWorks = false;
let mouseOnWorksText = false;

AreaBurger.addEventListener('click',function(){
    burger.classList.toggle('burger__active');
    nav.classList.toggle('responsive_nav');
});

let intervalID;
let timeoutID;

worksItem.forEach(element => {
    element.onmouseover = function(){
    this.classList.toggle('item--hover');
    };    
    element.onmouseout = function(){
    this.classList.toggle('item--hover');
    
    };
});

works.onmouseover = () =>{
    clearInterval(intervalID);
    clearTimeout(timeoutID);
}
works.onmouseout = () =>{
    addOpacityToWorksItems();
}

function addOpacityToWorksItems(){
    let i=0;
        intervalID = setInterval(()=>{
            toggleClassItemHover(i);
            i++;
            if(i===8){
                i=0;
            }
        },3250);
}
addOpacityToWorksItems();

async function toggleClassItemHover(i){
    worksItem[i].classList.toggle('item--hover');
    setTimeout(()=>{
        worksItem[i].classList.toggle('item--hover');
    }, 3000);
}
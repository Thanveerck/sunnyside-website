const burger = document.querySelector('.burger');
const closebtn = document.querySelector('.close');
const navTab = document.querySelector('nav');


burger.addEventListener('click',()=>{
    navTab.classList.add('nav-active');
})

closebtn.addEventListener('click',()=>{
    navTab.classList.remove('nav-active');
})
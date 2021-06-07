const headerContent = document.querySelector('header .container');
const burger = document.querySelector('.burger');
burger.addEventListener('click',()=>{
    headerContent.classList.toggle('active');
})

//Variables
const input = document.querySelector('#counter');
const li = document.querySelectorAll('.count');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu-ul');
const navlinks = document.querySelectorAll('.menu-ul li')

//Navbar toggle
burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle')
    navlinks.forEach(function(link){
        link.style.opacity = 1;
    })
})

//Ingridients counter
input.addEventListener('change', function(){
    li.forEach(function(item){
        const total = input.value * item.getAttribute('value');
        item.firstElementChild.innerHTML = total;
    })
});


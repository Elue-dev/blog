const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');
const mainmenu = document.querySelector('.mainmenu');


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}

function close(){
    mainmenu.style.top = '-100%';
}



window.addEventListener('scroll', function(){
    const header = document.querySelector('.navigation');
    header.classList.toggle("sticky", window.scrollY > 0);
});
const openmenu = document.querySelector('.open');
const closemenu = document.querySelector('.close');
const mainmenu = document.querySelector('.main');


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}

function close(){
    mainmenu.style.top = '-100%';
}
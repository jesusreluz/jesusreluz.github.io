const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', this.window.scrollY > 100);
});

const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

menu.addEventListener('click', function() {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
});

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const btn_say = document.querySelector('#btn-say-hello');
const sayhello = document.querySelector('#sayhello');
const close_say = document.querySelector('#close-say');

btn_say.addEventListener('click', function() {
    let content = `
        <pre>
            <span>Hello World!</span>
        </pre>
    `;
    sayhello.innerHTML = content;
    close_say.style.display = 'flex'
});

close_say.addEventListener('click', function() {
    sayhello.innerHTML = '';
    close_say.style.display = 'none'
});
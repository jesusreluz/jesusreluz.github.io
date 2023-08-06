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
const box_say = document.querySelector('.box-say');

btn_say.addEventListener('click', function() {
    let content = `
        <pre>
            <div class="logo-say">
                <i class="bx bxs-circle" style="color: rgb(255, 95, 86); font-size: 14px;"></i>
                <i class="bx bxs-circle" style="color: rgb(255, 189, 46); font-size: 14px;"></i>
                <i class="bx bxs-circle" style="color: rgb(39, 201, 63); font-size: 14px;"></i>
            </div>
            <span>Hello World!</span>
        </pre>
    `;
    sayhello.innerHTML = content;
    close_say.style.display = 'flex';
    box_say.style.cssText = `animation: slide-up .5s ease;`;
});

close_say.addEventListener('click', function() {
    close_say.style.display = 'none';
    box_say.style.cssText = `animation: slide-out .5s ease;`;
    setTimeout(() => {
        sayhello.innerHTML = ''
    }, 400);
});

const typing = document.querySelector(".typing");

const typingLoad = () => {
    setTimeout(() => {
        typing.textContent = "Programmer."
        typing.style.cssText = "width: 11ch; animation: typing 5s steps(11) infinite, blink .5s infinite step-end alternate;"     
    }, 0);
    setTimeout(() => {
        typing.textContent = "Gamer."
        typing.style.cssText = "width: 6ch; animation: typing 5s steps(6) infinite, blink .5s infinite step-end alternate;"
    }, 3300);
    setTimeout(() => {
        typing.textContent = "Developer."
        typing.style.cssText = "width: 10ch; animation: typing 5s steps(10) infinite, blink .5s infinite step-end alternate;"
    }, 8300);
    setTimeout(() => {
        typing.textContent = "Developer."
        typing.style.cssText = "width: 10ch; animation: typing 5s steps(10), blink .5s infinite step-end alternate;"
    }, 10000);

};

typingLoad();
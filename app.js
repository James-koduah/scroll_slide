function cool_scroll_translate(element, offset = 0, instant=false){
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > element.offsetTop - window.innerHeight + offset){
            element.style.transform = 'translate(0px, 0px)'
            element.style.opacity = 1
        }
    })
    if (instant){
        element.style.transform = 'translate(0px, 0px)'
        element.style.opacity = 1
    }
    if (window.scrollY > element.offsetTop - window.innerHeight + offset){
        element.style.transform = 'translate(0px, 0px)'
        element.style.opacity = 1
    }
}


let onscroll_l = document.getElementsByClassName('onscroll_l')
let onscroll_r = document.getElementsByClassName('onscroll_r')
let onscroll_t = document.getElementsByClassName('onscroll_t')
let onscroll_d = document.getElementsByClassName('onscroll_d')
let combinedArray = [
    ...Array.from(onscroll_l),
    ...Array.from(onscroll_r),
    ...Array.from(onscroll_t),
    ...Array.from(onscroll_d)
  ];

for (let item of combinedArray){
    cool_scroll_translate(item, 150)
}

function addScrollStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`
        .onscroll_l { transform: translate(-50px, 0); transition: .7s; opacity: 0; }
        .onscroll_r { transform: translate(50px, 0); transition: .7s; opacity: 0; }
        .onscroll_t { transform: translate(0px, -60px); transition: .7s; opacity: 0; }
        .onscroll_d { transform: translate(0px, 60px); transition: .7s; opacity: 0; }
    `));
    document.head.appendChild(style);
}
addScrollStyles();

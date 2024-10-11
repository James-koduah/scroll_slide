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
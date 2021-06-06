const nav = document.querySelector(".navbar");
const text_span = document.querySelector("span");
const menu = document.querySelectorAll(".navbar .menu li a");
const scr = document.querySelector(".scroll-up");

const btn = document.querySelector(".burger");

window.addEventListener("scroll", () => {

    if (window.scrollY >= 20) {
        menu.forEach((menuItem) => {
            menuItem.classList.add("active")
        })
        text_span.classList.add("active");
        nav.classList.add("sticky");
    }
    else {
        menu.forEach((menuItem) => {
            menuItem.classList.remove("active")
        })
        text_span.classList.remove("active");
        nav.classList.remove("sticky");
    }
    if (window.scrollY > 500) {
        scr.classList.add("show");
    }
    else {
        scr.classList.remove("show");
    }
})

btn.addEventListener("click", () => {
    document.querySelector(".navbar .menu").classList.toggle("move");
})

// Scroll up button
scr.addEventListener("click", function () {
    window.scrollTo(0, 0);
})


// Typing w banerze
const spnText=document.querySelector(".typing");
const spnCursor=document.querySelector(".cursor");
const txt = ["Junior Front-End Developer", "Web Master", "Freelancer"];

let activeLetter=-10;
let activeText=0;

const addLetter = () =>{
    if (activeLetter>=0) {
        spnText.textContent+=txt[activeText][activeLetter];
    }
  
    activeLetter++;
    if (activeLetter===txt[activeText].length) {
        
        activeText++;
    
        if (activeText===txt.length) {
            activeText=0;
        }
    return setTimeout(()=>{
        activeLetter=-10;
        spnText.textContent="";
        addLetter()
    },2000)
      
    }
    setTimeout(addLetter,100);
}

addLetter()


const cursorAnimation = () => {
    spnCursor.classList.toggle("mig");
}
setInterval(cursorAnimation,400)
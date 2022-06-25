
let nav = document.querySelector("nav");
let navbar = document.getElementById("navbar");
let main = document.querySelector("main");


navbar.style.height= "100vh";
navbar.className = "bg-dark d-flex flex-column justify-content-center align-items-center ";

for(let tombol of navbar.children) {
    tombol.className = "btn btn-link  btn-primary text-white text-decoration-none w-100 ";
    if(window.innerWidth < 768) {
        tombol.className += " my-3 "
    } else {
        tombol.style.fontSize = "1.5em"
        tombol.className += " my-5 ";
    }
}

if(window.innerWidth < 768) {
    nav.style.width = "30%";
    nav.className += " position-fixed";
    nav.style.zIndex = 999;
    let buttonClose = document.createElement("button");
    buttonClose.className = "btn btn-close position-absolute top-0 end-0 bg-white";
    buttonClose.onclick = () => {
        nav.classList.toggle("d-none")
    }
    navbar.insertBefore(buttonClose, navbar.children[0]);
    main.style.width = "100%"
    
    
} else {
    nav.style.width = "20%";
    main.style.width = "80%";

    
}


let judulHalaman = document.getElementById("judulHalaman");

judulHalaman.className = "border-bottom pt-3";
judulHalaman.children[0].className = "display-6 text-center text-dark w-100";

if(window.innerWidth < 768) {
    judulHalaman.children[1].className = "btn btn-link text-dark text-decoration-none fs-1 position-absolute top-0";
    judulHalaman.children[1].onclick = () => {
        nav.classList.toggle("d-none")
    }
    
}
else {
    document.querySelector("main").className = "d-flex flex-column";
    judulHalaman.children[1].remove();
}







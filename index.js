

let menuBakso = document.getElementById("menuBakso");
menuBakso.className = "border-bottom p-3 d-flex flex-wrap my-2";

let menuMieAyam = document.getElementById("menuMieAyam");
menuMieAyam.className = "border-bottom p-3 d-flex flex-wrap my-2";

let arr = [menuBakso, menuMieAyam];

function addCard(parent, srcImg, namaM, hargaM) {
    let cardMakan = document.createElement("div");
    cardMakan.className = "cardMakan d-flex flex-column justify-content-between bg-secondary border rounded-bottom m-2 text-white";
    parent.appendChild(cardMakan);
    
    let img = document.createElement("img");
    img.className = "img-fluid"
    img.src= `img/${srcImg}`
    cardMakan.appendChild(img);
    
    let namaMakanan = document.createElement("p");
    namaMakanan.className = "px-1 lead text-dark";
    namaMakanan.innerHTML = namaM;
    cardMakan.appendChild(namaMakanan);
    
    let footerMakanan = document.createElement("div");
    footerMakanan.className = "d-flex justify-content-end";
    cardMakan.appendChild(footerMakanan);
    
    let harga = document.createElement("p");
    harga.innerHTML = `Rp${Intl.NumberFormat().format(hargaM)}`;
    footerMakanan.appendChild(harga);
    
    let tombolPesan = document.createElement("button");
    tombolPesan.className = "btn btn-sm btn-danger ms-2 ";
    tombolPesan.innerHTML = "pesan";
    footerMakanan.appendChild(tombolPesan);
    
}

const ajax = new XMLHttpRequest();

ajax.open("GET", "data.json");
ajax.onload = () => {
    const dataList = JSON.parse(ajax.responseText);
    
    dataList.map((data, index) => {
        data.map(value => {
            addCard(arr[index], value.gambar, value.nama, value.harga);
        })
    })
}

ajax.send();


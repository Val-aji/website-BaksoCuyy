let parentCard = document.getElementById("parentCard");



function addCardList(imgSrc,namaL, hargaL) {
    let cardList = document.createElement("div");
    cardList.className = "cardList d-flex border-bottom my-2 position-relative";
    parentCard.appendChild(cardList);
    
    let img = document.createElement("img");
    img.src = imgSrc.toString();
    
        
    img.style.height = "150px";
    
    cardList.appendChild(img);
    
    let informasi = document.createElement("div");
    informasi.className = "informasi d-flex flex-column m-2 ";
    
    if( window.innerWidth < 768 ) {
        img.style.width = "40%" 
        
    } else {
        img.style.width = "30%";
        informasi.className += "mx-5"
         
    }
    
    cardList.appendChild(informasi);
    
    let namaList = document.createElement("p");
    namaList.className = "lead";
    namaList.innerHTML = namaL;
    informasi.appendChild(namaList);
    
    let hargaList = document.createElement("p");
    hargaList.className = "mx-2 text-danger";
    hargaList.innerHTML = hargaL;
    informasi.appendChild(hargaList);
    
    let jumlah = document.createElement("div");
    jumlah.className = "d-flex";
    informasi.appendChild(jumlah);
    
    let kurang = document.createElement("button")
    kurang.className = "btn btn-primary";
    kurang.innerHTML = "-";
    jumlah.appendChild(kurang);
    
    let jumlahL = document.createElement("p");
    jumlahL.classList = "m-2";
    jumlahL.innerHTML = "1";
    jumlah.appendChild(jumlahL);
    
    
    let tambah = document.createElement("button")
    tambah.className = "btn btn-primary";
    tambah.innerHTML = "+";
    jumlah.appendChild(tambah);
    
    let keterangan = document.createElement("input")
    keterangan.type = "text";
    keterangan.className = "form-control my-2 border-primary";
    keterangan.placeholder = "Keterangan...";
    keterangan.style.height = "50px";
    informasi.appendChild(keterangan);
    
    
    let radio = document.createElement("input");
    radio.type ="radio";
    radio.className = "position-absolute top-0 end-0";
    cardList.appendChild(radio);

}

addCardList("img/baksoAnak.jpg", "Bakso Anak", "Rp15.000");
addCardList("img/baksoMbah.jpg", "Bakso Mbah/Kenyang", "Rp24.000");



// footer
let footer = document.getElementById("footer");
footer.className = "position-fixed start-0 end-0 bottom-0 d-flex justify-content-between p-2 bg-secondary";
if(window.innerWidth > 768 ) { 
    footer.style.width = "80%";
    footer.style.marginLeft = "20%";
} else {
    footer.style.width = "100%";
}

let divHarga = document.createElement("div");
divHarga.className = "d-flex flex-column";
footer.appendChild(divHarga);

let harga = document.createElement("span");
harga.className = "text-warning lead";
harga.innerHTML = "Rp50.000";
divHarga.appendChild(harga);

let pajak = document.createElement("span");
pajak.className = "text-white";
pajak.innerHTML = "Sudah termasuk pajak";
pajak.style.fontSize = ".8em";
divHarga.appendChild(pajak);


let tombolPesan = document.createElement("button");
tombolPesan.className = "btn btn-primary btn-sm";
tombolPesan.innerHTML = "Pesan sekarang";
footer.appendChild(tombolPesan);
console.info(footer);

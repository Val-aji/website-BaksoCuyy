let parentCard = document.getElementById("parentCard");



function addCardList(imgSrc,namaL, hargaL) {
    let cardList = document.createElement("div");
    cardList.className = "cardList d-flex border-bottom my-2 position-relative";
    parentCard.appendChild(cardList);
    
    let img = document.createElement("img");
    img.src = imgSrc.toString();
    if( window.innerWidth < 768 ) {
        img.style.width = "40%" 
        } else {
            img.style.width = "30%";
        }
        
    img.style.height = "150px";
    
    cardList.appendChild(img);
    
    let informasi = document.createElement("div");
    informasi.className = "informasi d-flex flex-column m-2";
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


 
function proses(imgSrc, namaL, keteranganL) {
    let cardList = document.createElement("div");
    cardList.className = "px-2 border border-2 my-2";
    document.getElementById("containerList").appendChild(cardList);
    
    let secon = document.createElement("div");
    secon.classList = "d-flex p-2"
    cardList.appendChild(secon);
    
    let img = document.createElement("img");
    img.src = imgSrc.toString();
    img.style.height = "150px";
    secon.appendChild(img);
    
    let informasi = document.createElement("div");
    informasi.classList = "informasi mx-2 w-50 d-flex flex-column";
    secon.appendChild(informasi);
    
    let nama = document.createElement("p");
    nama.classList = "lead";
    nama.innerHTML = namaL;
    informasi.appendChild(nama);
    
    let keterangan = document.createElement("p");
    keterangan.classList = "mx-2 text-muted";
    nama.innerHTML = keteranganL;
    informasi.appendChild(keterangan);
    
        
}
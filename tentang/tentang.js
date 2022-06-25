function addTentang(judulTentang) {
    let containerTentang = document.createElement("div");
    containerTentang.className = "border-bottom py-2"
    document.getElementById("tentangCuyy").appendChild(containerTentang);
    
    let judul = document.createElement("h2");
    judul.innerHTML = judulTentang;
    containerTentang.appendChild(judul);
    
    let paragraf = document.createElement("p");
    paragraf.className = "p-3";
    paragraf.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    containerTentang.appendChild(paragraf);
    
    
}

let listTentang = ["Sejarah", "Visi dan Misi", "Tujuan"];
listTentang.map(value => {
    addTentang(value);
})
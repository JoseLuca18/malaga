let boton = document.querySelector(".menu-principal")

boton.addEventListener("click",()=>{
    window.location.href = "index.html";
})

/*function producto(img,modelo,precio){
    let img = `<img src="${img}"`;
    let modelo = `<h2><b>${modelo}</b></h2>`;
    let precio = `<p>${precio}</p>`;

}*/

let productos = [{

    img: "conjunto.webp",
    modelo: "modelo 1",
    precio: "$1500"},{

        img: "fondo3.webp",
    modelo: "modelo 1",
    precio : "$1500"},{
        
        img : "conjunto.webp",
    modelo: "modelo 1",
    precio: "$1500"
    },{
        img: "fondo3.webp",
    modelo: "modelo 1",
    precio: "$1500"
    },{
        img: "conjunto.webp",
    modelo: "modelo 1",
    precio: "$1500"
    }
    
]
 
const container = document.querySelector(".container")
for (producto in productos){

    datos = productos[producto];
    let img = datos["img"];
    let modelo = datos["modelo"];
    let precio = datos["precio"];

    let agregar = `
    <div class="producto"><img src="${img}">
    <div class="h2-precio"><h2 class="h2">${modelo}</h2>
    <p class="precio">Precio: ${precio}</p>
    </div></div>
    `
    container.innerHTML += agregar;
}
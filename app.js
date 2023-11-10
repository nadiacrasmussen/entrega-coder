const productos = [
    { nombre: "Kubik onix", precio: 5640, Uso: "Exterior/Interior", imagen: "../img/productos/kubik-onix.png" },
    { nombre: "Adoquin circular", precio: 5640, Uso: "Exterior/Interior", imagen: "../img/productos/adoquin-circular.png" },
    { nombre: "Ladrillo visto", precio: 5640, Uso: "Exterior/Interior", imagen: "../img/productos/ladrillo-visto.png" },
    { nombre: "Umha onix", precio: 5640, Uso: "Exterior/Interior", imagen: "../img/productos/umha-onix.png" },
    { nombre: "Kebracho", precio: 5640, Uso: "Exterior/Interior", imagen: "../img/productos/kebracho.png" },
];
let productosFilter = productos;

let carrito = [];
function mostrarProductos() {
    let productosDom = document.getElementById("productos");

    productosDom.innerHTML =""
    for (let index = 0; index < productosFilter.length; index++) {
        const producto = productosFilter[index];
        productosDom.innerHTML += `
        <div class="card" style="width: 24rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">
                <ul>
                    <li>Cantidad: 8 Bultos por M2</li>
                    <li>Uso: ${producto.Uso}</li>
                    <li>Precio $ ${producto.precio}</li>
                </ul>
                </p>
                <a href="#" onclick="enviarProducto(event,'${producto.nombre}')" class="btn btn-primary solicitud">Solicitá tu presupuesto</a>
            </div>
        </div>
    `;
    }
}

const formulario = document.getElementById("formBuscar");
formulario.addEventListener("submit", buscar);
function buscar() {
   
    const busqueda = document.getElementById("buscar").value;

    productosFilter=productos.filter((producto )=>{
        return producto.nombre.toLocaleLowerCase() == busqueda.toLocaleLowerCase()
    })
    mostrarProductos();
} 
function enviarProducto(e, nombreProducto) {
    e.preventDefault();
    let encontrado;
    for (const item of productos) {
        if (item.nombre === nombreProducto) {
            carrito.push(item);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Ese producto no se encuentra en nuestro stock.");
    }

    let carritoDom = document.getElementById("carritoDom");

    if (carrito) {
        carritoDom.innerHTML = carrito.map((producto) => producto.nombre + " " + "$" + producto.precio);
    }

    console.log(nombreProducto);
}

function completarVenta(e) {
    e.preventDefault();
    console.log(carrito);

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    console.log(total);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarDolares() {
    const dolaresDiv = document.getElementById("dolares");

    fetch("https://dolarapi.com/v1/dolares")
        .then((respuesta) => {
            console.log("el servidor respondio");

            const promesa = respuesta.json();
            promesa
                .then((dolares) => {
                    console.log(dolares);

                    for (let index = 0; index < dolares.length; index++) {
                        const dolar = dolares[index];
                        dolaresDiv.innerHTML += `
                        <div class="dolares">
                        <ul>
                        <li class="usd">${dolar.moneda} ${dolar.nombre} Compra: ${dolar.compra} Venta: ${dolar.venta} <li>
                        <ul>
                        </div>
                         `;
                    }
                })
                .catch(() => {});
        })
        .catch((error) => {});
}
mostrarDolares();
mostrarProductos();


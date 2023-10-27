const productos = [
    { nombre: "Adoquin recto", precio: 2499 },
    { nombre: "Adoquin circular", precio: 2499 },
    { nombre: "Ekos travertino", precio: 3149 },
    { nombre: "Ekos zafiro", precio: 3149 },
    { nombre: "Kebracho", precio: 3149 },
];

let carrito = [];

function mostrarProductos() {
    let productosDom = document.getElementById("productos");
    todoslosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    productosDom.innerHTML = `productos: ${todoslosProductos.join("-")}`;
}

const formulario = document.getElementById("formProductos");
formulario.addEventListener("submit", enviarProducto);

function enviarProducto(e) {
    let nombreProducto = document.getElementById("productoInput").value;
    e.preventDefault();
    let encontrado;
    for (const item of productos) {
        if (item.nombre === nombreProducto) {
            carrito.push(item);
            encontrado = true
            break;
        }
    }

    if (!encontrado) {
        alert("Ese producto no se encuentra en nuestro stock.");
    }

    let carritoDom = document.getElementById("carritoDom");

    if(carrito){
        carritoDom.innerHTML = carrito.map((producto) => producto.nombre + " " + "$" + producto.precio);
    }


    console.log(nombreProducto);
}


function completarVenta(e){
    e.preventDefault();
    console.log(carrito)

    const total = carrito.reduce((acc, el) => acc + el.precio , 0);

    console.log(total)
    localStorage.setItem("carrito",carrito)
}

mostrarProductos();
/* 
const productos = [
    { nombre: "Adoquin recto", precio: 2499 },
    { nombre: "Adoquin circular", precio: 2499 },
    { nombre: "Ekos travertino", precio: 3149 },
    { nombre: "Ekos zafiro", precio: 3149 },
    { nombre: "Kebracho", precio: 3149 },
];

let carrito = [];
let seleccion = prompt("Hola! bienvenido a Kamak revestimientos, ¿Desea comprar nuestros productos? si o no");

while (seleccion !== "si" && seleccion !== "no") {
    seleccion = prompt("Por favor ingresa si o no");
}

if (seleccion === "si") {
    alert("Te mostramos a continuacion nuestra linea de productos");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert(todoslosProductos.join("-"));
} else if (seleccion === "no") {
    alert("Gracias, esperamos que vuelvas pronto!");
}

while (seleccion !== "no") {
    let producto = prompt("Agregue los producto");
    let precio = 0;
    let encontrado = false;

    for (const item of productos) {
        if (item.nombre === producto) {
            precio = item.precio;
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"));
        carrito.push({ producto, unidades, precio });
        console.log(carrito);
    } else {
        alert("Ese producto no se encuentra en nuestro stock.");
        alert("Lista de productos disponibles: " + productos.map(producto => producto.nombre).join(", "));
    }

    seleccion = prompt("¿Desea agregar más productos al carrito? si o no");
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
const metodoPago = prompt("Seleccione un metodo de pago, recuerde que abonando en efectivo o con transferencia obtiene un 15% de descuento en el total de su compra.");

const montoDescuento = 0.15;
if (metodoPago === "Efectivo" || metodoPago === "Transferencia") {
    const montoDescuentoAplicado = total * montoDescuento;
    const montoDescuentoAplicadoRedondeado = Math.floor(montoDescuentoAplicado);
    const totalFinal = total - montoDescuentoAplicadoRedondeado;

    alert(`El total de la compra con el 15% de descuento es: ${totalFinal}`);
} else {
    alert("No se aplica descuento. El total de la compra es: " + total);
}

 */

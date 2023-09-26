[];
const productos = [
    { nombre: "Adoquin recto", precio: 2500 },
    { nombre: "Adoquin circular", precio: 2500 },
    { nombre: "Ekos travertino", precio: 3150 },
    { nombre: "Ekos zafiro", precio: 3150 },
    { nombre: "Kebracho", precio: 3150 },
];
let carrito = [];

let seleccion = prompt("Hola! bienvenido a Kamak revestimientos, ¿Desea comprar nuestros productos? si o no");

while (seleccion != "si" && seleccion != "no") {
    promt("Por favor ingresa si o no");
}
if (seleccion == "si") {
    alert("Te mostramos a continuacion nuestra linea de productos");
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join("-"))
} else  if(seleccion == "no") {
    alert("Gracias, esperamos que vuelvas pronto!");
}
while (seleccion != "no") {
    let producto = prompt("agregar producto");
    let precio = 0;
    if (producto == "Adoquin recto" || producto == "Adoquin circular" || producto == "Ekos travertino" || producto == "Ekos zafiro" || producto == "Kebracho") {
        switch (producto) {
            case "Adoquin recto":
                precio = 2500;
                break;
            case "Adoquin circular":
                precio = 2500;
                break;
            case "Ekos travertino":
                precio = 3150;
                break;
            case "Ekos zafiro":
                precio = 3150;
                break;
            case "Kebracho":
                precio = 3150;
                break;
                default:
                    break;

        }
        let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"));
        carrito.push({ producto, unidades, precio });
        console.log(carrito);
    } else {
        alert("Ese producto no se encuentra en nuestro stock.");
    }
    seleccion = prompt("¿Desea agregar mas productos a su compra? Responda si o no");
    while (seleccion === "no") {
        alert("Gracias por su compra!");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        });
        break;
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total de la compra es: ${total}`);

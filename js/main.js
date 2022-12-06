const productos = [
    { nombre: "lemon pie", precio: 1050},
    { nombre: "cheescake", precio: 1290},
    { nombre: "tiramisu", precio: 1350},
    { nombre: "brownies", precio: 1200},
    { nombre: "red velvet", precio: 3000},
    { nombre: "carrot cake", precio: 2500},
    { nombre: "torta rogel", precio: 1550},
    { nombre: "marquisse de chocolate", precio: 2500},
    { nombre: "alfajores artesanales", precio: 1000},
    { nombre: "macarons", precio: 1500},
    { nombre: "chocotorta", precio: 1100},
    { nombre: "torta de durazno y crema", precio: 1450},
    
]
let carrito = []
let usuario = "pastelero1234";

function iniciarSesion() {
    let inicio = false;

    for (let i = 5; i >= 0; i--) {
        let user = prompt("Inicia sesión. Ingresa tu usuario");

        if (user === "pastelero1234") {
            alert("Acceso Correcto. Bienvenido a nuestro sitio web.")
            inicio = true;
            break;
        } else {
            alert("Acceso Incorrecto. Te quedan " + i + " intentos")
        }
    }
    return inicio;
}

//console.log(iniciarSesion());

let acceso = iniciarSesion();
let respuesta = prompt("¿Le gustaría realizar alguna compra en nuestra tienda online de pastelería?")

while(respuesta != "si" && respuesta !="no"){
    alert("Por favor ingrese una respuesta válida. Si desea seguir adelante ingrese si. En caso contrario ingrese no")
    respuesta = prompt("¿Le gustaría realizar alguna compra en nuestra tienda online de pastelería?")

}
if(respuesta === "si"){
    alert("Excelente! Observe con atención la lista de productos que se presentarán a continuación")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio);
    alert(todoslosProductos.join(" / "));
} else if (respuesta == "no"){
    alert("Que lastima! Si cambia de opinión es más que bienvenido a nuestro sitio!")
}
while(respuesta !="no"){
    let producto = prompt("Agregue los productos que más le gusten al carrito")
    let precio = 0

    if(producto == "lemon pie" || producto == "cheescake" || producto == "tiramisu" || producto == "brownies" || producto == "red velvet" || producto == "carrot cake" || producto == "torta rogel" || producto == "marquisse de chocolate" || producto == "alfajores artesanales" || producto == "macarons" || producto == "chocotorta" || producto == "torta de durazno y crema"){
        switch (producto) {
            case "lemon pie":
            precio= 1050   
                break;
            case "cheescake":
            precio= 1290    
                break;
            case "tiramisu":
            precio= 1350   
                break;
            case "brownies":
            precio= 1200    
                break;
            case "red velvet":
            precio= 3000
                break;
            case "carrot cake":
            precio= 2500    
                break;   
            case "torta rogel":
            precio= 1550    
                break;
            case "marquisse de chocolate":
            precio= 2500    
                break;
            case "alfajores artesanales":
            precio= 1000    
                break;
            case "macarons":
            precio= 1500    
                break;
            case "chocotorta":
            precio= 1100   
                break;
            case "torta de durazno y crema":
                precio= 1450    
                break;
            default:
                break;
    }
    let cantidad = parseInt(prompt("¿Cuántas unidades quiere agregar?"))
    carrito.push({producto, cantidad, precio})
    console.log(carrito)
} else {
    alert("Producto no disponible")
}

respuesta=prompt("¿Le gustaría realizar alguna otra compra más en nuestra tienda online de pastelería?")

    while(respuesta == "no"){
        alert("Gracias por su compra, vuelva pronto!")
        carrito.forEach((carritoCompra) => {
            console.log(`producto: ${carritoCompra.producto}, cantidades: ${carritoCompra.cantidad}, precio total: ${carritoCompra.cantidad * carritoCompra.precio} `)
        })
        break;
        }
    }
    

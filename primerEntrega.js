let precioDelProducto
let cantCuotas
let opcion
let ivaDelProducto

const productos = [
    {
        id: 1,
        nombre: "Remera",
        precio: 3500,
        iva: 1.21
    },
    {   
        id: 2,
        nombre: "Pantalon",
        precio: 6000,
        iva: 1.41
    },
    {   
        id: 3,
        nombre: "Buzo",
        precio: 6800,
        iva: 1.61
    },
]

while(true){
    // opcion = parseInt(prompt("Ingresa el producto que desea comprar " + productos.forEach(producto => `${producto.id} ${producto.nombre}`)));
    opcion = parseInt(prompt("Ingresa el producto que desea comprar: \n1: Remera \n2: Pantalón \n3: Buzo"));
    if(opcion <= productos.length && opcion > 0 && opcion != ""){
        let productosFiltrados = productos.filter(producto => producto.id == opcion)
        let productoSeleccionado = productosFiltrados[0]
        precioDelProducto = productoSeleccionado.precio
        ivaDelProducto = productoSeleccionado.iva
        break;
    }else{
        alert("Ingresá una opción correcta");
        continue
    }
}

while(true){
    cantCuotas = prompt("Ingrese las cuotas en las que desea pagar su producto")    
    if(isNaN(cantCuotas) || cantCuotas == null || cantCuotas== 0 || cantCuotas == "" || cantCuotas > 12){
        alert("Ingrese una cantidad de cuotas válida")
        continue
    }else{
        break;
    }
}

//función que calcula las cuotas
function calcularCuotas (precio, cantCuotas){
    return precio / cantCuotas;
}

//se llama a la función y se guarda en una variable
let valorCuota = calcularCuotas(precioDelProducto, cantCuotas)

//declaramos funcion flecha para sumarle el iva a las cuotas
const cuotaConIva = valorCuota => valorCuota * ivaDelProducto

//escribe el precio de la cuota + iva
document.write("<p>El total a pagar son " + cantCuotas + " cuotas de " + cuotaConIva(valorCuota) + "</p>")

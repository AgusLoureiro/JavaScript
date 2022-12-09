const productos = [
  {
    id: 1,
    nombre: "Remera",
    precio: 3500,
    iva: 1.21,
  },
  {
    id: 2,
    nombre: "Pantalon",
    precio: 6000,
    iva: 1.41,
  },
  {
    id: 3,
    nombre: "Buzo",
    precio: 6800,
    iva: 1.61,
  },
];

// opcion = parseInt(prompt("Ingresa el producto que desea comprar " + productos.forEach(producto => `${producto.id} ${producto.nombre}`)));

const btnCalcular = document.getElementById("btnCalcular");
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", calcularCuotas)

const btnComprar = document.getElementById("btnComprar");
btnComprar.addEventListener("click", comprarProducto)

const productoSeleccionado = document.getElementById("inputPrenda")
const cantidadCuotas = document.getElementById("inputCuotas")
const tituloCompras = document.getElementById("mostrarCompras")
const textoCompras = document.getElementById("productoCompra")
const textoCuotas = document.getElementById("cuotasCompra")

//declaramos funcion flecha para sumarle el iva a las cuotas
const precioConIva = (precioProducto, ivaProducto) => precioProducto * ivaProducto;

//función que calcula las cuotas
function calcularCuotas(event) {
  event.preventDefault()
  let productosFiltrados = productos.filter(
    (producto) => producto.nombre == productoSeleccionado.value
  );
  let productoFiltrado = productosFiltrados[0];
  let precio = productoFiltrado.precio
  let iva = productoFiltrado.iva
  let precioFinal = precioConIva(precio,iva)
  let total = precioFinal / parseInt(cantidadCuotas.value)
  let seleccionado = document.getElementById("productoSeleccionado")
  seleccionado.innerHTML = `Seleccionaste el producto ${productoFiltrado.nombre}`
  let resultado = document.getElementById("resultado")
  resultado.innerHTML = `Vas a pagar ${cantidadCuotas.value} cuotas de ${total}`
  mostrarBoton()
}

//función que guarda la compra
function comprarProducto () {
  let misComprasLocal = localStorage.getItem("Compras")
  let misCompras = JSON.parse(misComprasLocal)
  
  if(misCompras == null){
    misCompras = []
  }
  
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

  let compra = {
    fecha: formattedToday,
    producto: productoSeleccionado.value, 
    cuotas: cantidadCuotas.value
  }
  misCompras.push(compra)
  localStorage.setItem("Compras", JSON.stringify(misCompras))
}

(function verMisCompras (){
  let misCompras = localStorage.getItem("Compras")
  let compras = JSON.parse(misCompras)
  if(misCompras != null){
    mostrarCompras()
    compras.forEach(element => {
      document.write(`<p>${element.fecha}</p>`)
      document.write(`<p>Compraste el producto: ${element.producto}</p>`)
      document.write(`<p>En: ${element.cuotas} cuotas</p>`)
    });
  }
})();

function mostrarBoton () {
  btnComprar.style.display = 'inline';
}

function mostrarCompras () {
  tituloCompras.style.display = 'inline';
}

function obtenerCotizacion () {
  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then( (resp) => resp.json() )
  .then( (data) => {
      let textoCotizacion = document.getElementById("mostrarCotizacion")
      textoCotizacion.innerHTML = `La cotización del dolar blue es ${data[1].casa.venta}`
      console.log(data[1].casa.venta)
  })
}

obtenerCotizacion ()
let precio
let cantCuotas
let opcion

while(true){
    opcion = parseInt(prompt("Ingresa el producto que desea comprar \n1 Remera \n2 Pantalon \n3 Buzo"));
    if(opcion <= 3 && opcion > 0 && opcion != ""){
        switch (opcion) {
            case 1:
                precio=3500
            break;
            case 2:
                precio=6000
            break;
            case 3:
                precio=6800
            break;
            default:
                precio=0
            break;
        }
        break;
    }else{
        alert("Ingresá una opción correcta");
        continue
    }
}

while(true){
    cantCuotas = prompt("Ingrese las cuotas en las que desea pagar su producto")    
    if(isNaN(cantCuotas) || cantCuotas == null || cantCuotas == "" || cantCuotas > 12){
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
let valorCuota = calcularCuotas(precio, cantCuotas)

//declaramos funcion flecha para sumarle el iva a las cuotas
const cuotaConIva = valorCuota => valorCuota * 1.21

//escribe el precio de la cuota + iva
document.write("<p>El total a pagar son " + cantCuotas + " cuotas de " + cuotaConIva(valorCuota) + "</p>")

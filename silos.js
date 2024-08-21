// Definir dos silos: uno para soja y otro para maíz.
//Cada silo tendrá una capacidad
// máxima y un stock actual de cereal.


// Implementar una función Solicitar al usuario el tipo de cereal 
// (soja o maíz) y el peso de la carga.
function ingresarCamion(){
    let salida;
    let siloSoja = {stockActual: 0, capacidadMaxima: 3000};
    let siloMaiz = {stockActual: 0, capacidadMaxima: 4500};
    do {
    let solicitarTipoCereal = prompt('Ingresá el tipo de cereal(soja/maiz)')
    let pesoCarga = solicitarPeso()
    //Validar los datos ingresados (por ejemplo, que el peso sea un número positivo).
    if(pesoCarga <= 0){
        mostrarMensaje('Debe ingresar un número positivo, diferente de 0.')
        pesoCarga = solicitarPeso()
        // ver : mejora de salida.       
    }
    // Determinar el silo correspondiente al tipo de cereal.
    // Verificar si hay suficiente espacio en el silo para almacenar la carga.
    // Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando
    // sobre el ingreso del camión.
    // o Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.
    switch (solicitarTipoCereal?.toLocaleLowerCase()) {
        case 'soja':
            if (siloSoja.stockActual >= siloSoja.capacidadMaxima) {
                mostrarMensaje('No hay suficiente espacio en el silo para almacenar la carga.')
                salida = salir()
            } else {
                siloSoja.stockActual += pesoCarga
                mostrarMensaje('El cereal fue almacenado con éxito!')
            }
            break;
        case 'maiz':
            if (siloMaiz.stockActual >= siloMaiz.stockActual.capacidadMaxima) {
                mostrarMensaje('No hay suficiente espacio en el silo para almacenar la carga.')
                salida = salir()
            } else {
                siloMaiz.stockActual += pesoCarga
                mostrarMensaje('El cereal fue almacenado con éxito!')
            }
            break;
        default:
            mostrarMensaje('Error, Ingrese un tipo de cereal válido (soja/maiz)')
            salida = salir()
            break;
    }
} 
    while (salida != 1); 
    // Si salida es false es decir, salida = 1 != 1 , false, corta el while,
    // salida 2 != 1, true sigue el while..
}

function solicitarPeso(){
    let peso = parseFloat(prompt('Ingresá el peso de la carga'))
    return peso    
}
function mostrarMensaje(mensaje){
    alert(mensaje)
}

function salir(){
    let salir = prompt('¿Desea salir? escriba 1, de lo contrario para reintentar ingrese 2')
    if(salir == 1){
         mostrarMensaje('Muchas gracias por usar el servicio de AgroSilos, Vuelva pronto!😊')
         return salir
        } else {
            return salir
        }
}

ingresarCamion()
function mostrar() {
	/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto 
el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/ 
  let carga;
  let nombre;
  let tipo;
  let precio;
  let cantidad;
  let fabricante;
  let categoria;
  let acumcantALCOHOL=0;
  let acumcantIAC=0;
  let acumcantQUAT=0;
  let contALCOHOL=0;
  let contIAC=0;
  let contQUAT=0;
  let acumcantidadbact=0;
  let acumcantidaddesinf=0;
  let acumcantidaddeter=0;
  let contdetergentemenor200=0;
  let flagproductocaro=0;
  let maxprecio;
  let fabricantecaro;
  let categoriacaro;

  for (carga = 0; carga < 5; carga++) {
    nombre = prompt("Ingrese el nombre del producto:");

    tipo = prompt("Ingrese el tipo (IAC/QUAT/ALCOHOL): ");
    while (!(tipo == "IAC" || tipo == "QUAT" || tipo == "ALCOHOL")) {
      tipo = prompt(
        "Ese tipo no es válido. Reingrese el tipo (IAC/QUAT/ALCOHOL): "
      );
    }
    precio = parseInt(prompt("Ingrese el precio (entre 100 y 300): "));
    while (!(precio >= 100 && precio <= 300)) {
      precio = parseInt(
        prompt(
          "El precio no es válido. Reingrese el precio (entre 100 y 300): "
        )
      );
    }
    cantidad = parseInt(prompt("Ingrese cantidad (entre 1 y 1000):"));
    while (cantidad <= 0 || cantidad > 1000) {
      cantidad = parseInt(
        prompt("Cantidad no válida. Reingrese cantidad (entre 1 y 1000):")
      );
    }
    categoria = prompt(
      "Ingrese la categoría (desinfectante/bactericida/detergente):"
    );
    while (
      !(
        categoria == "desinfectante" ||
        categoria == "bactericida" ||
        categoria == "detergente"
      )
    ) {
      categoria = prompt(
        "Esa categoría no es válida. Reingrese la categoría (desinfectante/bactericida/detergente): "
      );
    }
    fabricante = prompt("Ingrese fabricante:");

	switch(tipo){
		case "ALCOHOL":
			contALCOHOL++
			acumcantALCOHOL+=cantidad
			break;
		case "QUAT":
			contQUAT++
			acumcantQUAT+=cantidad
			break;
		case "IAC":
			contIAC++
			acumcantIAC+=cantidad
			
			break;		
  }
  switch(categoria){
	  case "bactericida":
		  acumcantidadbact+=cantidad
		  break;
	case "desinfectante":
		acumcantidaddesinf+=cantidad
		break;
	case "detergente":
		acumcantidaddeter+=cantidad
		if (precio <=200){
			contdetergentemenor200++
		}
		break;		  
  }
  if (flagproductocaro==0||precio>maxprecio){
	  maxprecio=precio
	  fabricantecaro=fabricante
	  categoriacaro=categoria
	  flag=1
  }

  
}
if (acumcantALCOHOL>acumcantQUAT&&acumcantALCOHOL>acumcantIAC){
	promedio=acumcantALCOHOL/contALCOHOL
}
else if (acumcantQUAT>=acumcantALCOHOL&&acumcantQUAT>acumcantIAC){
	promedio=acumcantQUAT/contQUAT
}
else {
	promedio=acumcantIAC/contIAC
}

console.log(`a. El promedio de cantidad por tipo de producto es ${promedio}`);
if (acumcantidadbact>acumcantidaddesinf&&acumcantidadbact>acumcantidaddeter){
	
	console.log(`b. La categoría con mayor cantidad de unidades al final de la compra es la de bactericidas.  `)
}
else if (acumcantidaddesinf>=acumcantidadbact&&acumcantidaddesinf>acumcantidaddeter){
	
	console.log(`b. La categoría con mayor cantidad de unidades al final de la compra es la de desinfectantes  `)
}
else {
	console.log(`b. La categoría con mayor cantidad de unidades al final de la compra es la de detergentes `)
}

console.log(`c. Se compraron ${contdetergentemenor200} detergentes de menos de $200.`)
console.log(`d. El producto más caro pertenece a la categoría de ${categoriacaro} y su fabricante es ${fabricantecaro}`)
}

function mostrar()
{
	/*"mujer con pami más joven es el punto b"
	Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con PAMI mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, 
que solo mostramos si corresponde.*/
let nombre;
let edad;
let sexo;
let obrasocial;
let temperatura;
let seguir;
let contviejoconosde=0;
let flagmujerpami=0;
let minedadmujerpami;
let nombremujerpami;
let temperaturamujerpami;
let contpasajeros=0;
let preciototal;
let contpasajerospami=0;
let porcentajepasajerospami;
let preciodescuento;
    

do {
  nombre = prompt("Ingrese el nombre: ");
  while (!(isNaN(nombre))) {
    nombre = prompt("Error. Reingrese el nombre: ");
  }
  obrasocial = prompt("Ingrese la obra social (PAMI/OSDE/otras):");
  while (!(obrasocial == "PAMI" || obrasocial == "OSDE" || obrasocial == "otras")) {
    obrasocial = prompt(
      "Error. Reingrese la obra social (PAMI/OSDE/otras):"
    );
  }
  edad = parseInt(prompt("Ingrese la edad:"));
  while (isNaN(edad)||edad<18) {
    edad = parseInt(prompt("Error. Reingrese la edad:"));
  }
  temperatura = parseInt(prompt("Ingrese la temperatura:"));
  while (isNaN(temperatura)||temperatura<0) {
    temperatura = parseInt(prompt("Error. Reingrese la temperatura:"));
  }
  sexo = prompt("Ingrese el sexo(f/m):");
  while (!(sexo == "f" || sexo == "m")) {
    sexo = prompt("Error. Reingrese el sexo(f/m):");
  }

  switch(obrasocial){
	case "OSDE":
		if (edad >60){
			contviejoconosde++
		}
		break;
	case "PAMI":
		contpasajerospami++
		if(sexo=='f'&&(flagmujerpami==0||edad <minedadmujerpami)){
			minedadmujerpami=edad
			nombremujerpami=nombre
			temperaturamujerpami=temperatura
			flagmujerpami=1
		}
		break;
	case "otras":
		break;	  
  }
  contpasajeros++
  seguir = prompt("Desea ingresar otro cliente?:");
  } while (seguir == "s");

  if(contviejoconosde!=0){
	  console.log(`a.Hay ${contviejoconosde} personas mayores de 60 años con OSDE`);
  }
  else {
	  console.log(`a.No hay personas mayores de 60 años que tengan OSDE`);
  }
  if (flagmujerpami=1){
	  console.log(`b. La mujer con PAMI más joven se llama ${nombremujerpami} y su temperatura es ${temperaturamujerpami}`);
  }
  else{
	  console.log(`b. No existe mujer con PAMI`);
  }
  preciototal=contpasajeros*600
  console.log(`c. El precio total del viaje sin descuento es ${preciototal}`);

  porcentajepasajerospami=contpasajerospami*100/contpasajeros
  if (contpasajerospami!=0&&porcentajepasajerospami>50){
	  preciodescuento=preciototal*0.75
	  console.log(`d. El precio con descuento es ${preciodescuento}`);

  }
  else {
	  console.log(`d. El porcentaje de pasajeros con PAMI no es suficiente para que se le aplique un descuento.`)
  }


}

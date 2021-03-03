function mostrar()
{
  /*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/

let nombre
let situacionlab
let cantidadmaterias
let sexo
let promedio
let edad
let seguir
let flagprombuscando=0;
let maxprombuscando;
let nombremaxprombuscando;
let flagpromestudiante=0;
let maxpromestudiante;
let nombremaxpromestudiante;
let flagalumnoviejo=0;
let edadalumnoviejo;
let nombrealumnoviejo;
let contbuscando=0;
let contestudiante=0;
let conttrabajando=0;
let acumnotabuscando=0;
let acumnotaestudiante=0;
let acumnotatrabajando=0;
let promediobuscando;
let promediotrabajando;
let promedioestudiante;
let flagcantmaterias=0;
let mincantmaterias;
let nombreminimo;
let edadminimo;


do{
  nombre=prompt("Ingrese el nombre: ");
  situacionlab=prompt("Ingrese situación laboral (buscando/trabajando/solo estudiante): ");
  while (!(situacionlab=="buscando"||situacionlab=="trabajando"||situacionlab=="solo estudiante")){
    situacionlab=prompt("Error. Reingrese situación laboral (buscando/trabajando/solo estudiante): ");

  }
  cantidadmaterias=parseInt(prompt("Ingrese la cantidad de materias (entre 1 y 7):"));
  while(isNaN(cantidadmaterias)||(cantidadmaterias<1||cantidadmaterias>7)){
    cantidadmaterias=prompt("Error. Reingrese la cantidad de materias (entre 1 y 7):");

  }
  sexo=prompt("Ingrese el sexo (femenino/masculino/nobinario):");
  while(!(sexo=="femenino"||sexo=="masculino"||sexo=="nobinario")){
    sexo=prompt("Error. Reingrese el sexo (femenino/masculino/nobinario):");
    
  }
  promedio=parseInt(prompt("Ingrese la nota promedio (entre 0 y 10):"));
  while(isNaN(promedio)||(promedio<0||promedio>10)){
    promedio=prompt("Error. Reingrese la nota promedio (entre 0 y 10):");

  }
  edad=parseInt(prompt("Ingrese la edad:"));
  while(isNaN(edad)||edad<=0){
    edad=prompt("Error. Reingrese la edad:");

  }

  switch(situacionlab){
    case "buscando":
      contbuscando++
      acumnotabuscando+=promedio
      if (flagprombuscando==0||promedio >maxprombuscando){
        maxprombuscando=promedio
        nombremaxprombuscando=nombre
        flagprombuscando=1
      }
      if (flagcantmaterias==0||mincantmaterias>cantidadmaterias){
        mincantmaterias=cantidadmaterias
        nombreminimo=nombre
        edadminimo=edad
        flagcantmaterias=1
      }
      break;
    case "solo estudiante":
      contestudiante++
      acumnotaestudiante+=promedio
      if (flagpromestudiante==0||promedio >maxpromestudiante){
        maxpromestudiante=promedio
        nombremaxpromestudiante=nombre
        flagpromestudiante=1
      }
      if(flagalumnoviejo==0||edadalumnoviejo<edad){
        edadalumnoviejo=edad
        nombrealumnoviejo=nombre
        flagalumnoviejo=1
      }

      break;
    case "trabajando":
      conttrabajando++
      acumnotatrabajando+=promedio  
      break;
    

  }
  seguir=prompt("Desea ingresar otro alumno?:")
}while(seguir=='s')
if (maxpromestudiante>maxprombuscando){
  console.log(`a. El nombre del mejor promedio entre los que no trabajan o están buscando es ${nombremaxpromestudiante}`)
}
else {
  console.log(`a. El nombre del mejor promedio entre los que no trabajan o están buscando es ${nombremaxprombuscando}`)

}
if (contestudiante!=0){
  promedioestudiante=acumnotaestudiante/contestudiante
  console.log (`b. El nombre del alumno más viejo que solo es estudiante es ${nombrealumnoviejo}`)
  console.log (`c. El promedio de nota para los que solo están estudiando es ${promedioestudiante}`)
}
else {
  console.log (`b y c. No existe alumno que solo se encuentre estudiando.`)
}
if(contbuscando!=0){
  promediobuscando=acumnotabuscando/contbuscando
console.log (`c. El promedio de nota para los que están buscando trabajo es ${promediobuscando}`)
console.log(`d. El alumno que cursa menos cantidad de materias y se encuentra buscando trabajo se llama ${nombreminimo} y tiene ${edadminimo} años.`)
}
else{
  console.log("c. No existen alumnos que se encuentren buscando trabajo")
}
if(conttrabajando!=0){
  promediotrabajando=acumnotatrabajando/conttrabajando
console.log (`c. El promedio de nota para los que están trabajando es ${promediotrabajando}`)
}
else{
  console.log("c. No existen alumnos que se encuentren trabajando")
}



}

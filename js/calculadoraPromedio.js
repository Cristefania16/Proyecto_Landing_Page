let nomAlum = "";
let materia = "";
let n1 = 0;
let n2 = 0;
let n3 = 0;
let prom = 0;

nomAlum = prompt("Ingrese el nombre del alumno")
materia = prompt("Ingrese la materia")

do {
	n1 = parseFloat(prompt("Ingrese nuevamente la nota 1 (rango de 0 a 10)"))
	alert("Nota 1: " + n1)
} while(!(n1 >= 0 && n1 <= 10));

do {
	n2 = parseFloat(prompt("Ingrese nuevamente la nota 2 (rango de 0 a 10)"))
	alert("Nota 2: " + n2)
} while(!(n2 >= 0 && n2 <= 10));

do {
	n3 = parseFloat(prompt("Ingrese nuevamente la nota 3 (rango de 0 a 10)"))
	alert("Nota 3: " + n3)
} while(!(n3 >= 0 && n3 <= 10));

prom = (n1 + n2 + n3)/3;

if (prom >= 7){
	alert(nomAlum + " ¡Felicidades! Has aprobado con un promedio de: " + prom)
}else{
	alert(nomAlum + " gracias por tu esfuerzo. Nos vemos pronto en clases. El promedio obtenido es: " + prom)
}
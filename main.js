//1.
class Materia {
    constructor(nombre, profesor, cuatrimestre, aprobada = false) {
        this.nombre = nombre
        this.profesor = profesor
        this.cuatrimestre = cuatrimestre
        this.aprobada = aprobada
    }

//2.
    calificar(nota) {
        if(nota >= 7){
            this.aprobada = true
        } else{
            this.aprobada = false
        }
    }
    cambiarProfesor(nuevoProfesor) {
        this.profesor = nuevoProfesor
    }
}

//3.
const materia1 = new Materia("Objetos 1", "prof. Carlos Eduardo", "1C 2026");
const materia2 = new Materia("Estructura de Datos", "prof. Alberto Skay", "2C 2026", true);
const materia3 = new Materia("Base de Datos", "prof. Solari Beillinson", "1C 2026");

const materias = [materia1, materia2, materia3];

//4.
materia1.calificar(8);
materia2.calificar(5);
materia3.cambiarProfesor("prof. Ricardo Iorio");

console.log(materia1);
console.log(materia2);
console.log(materia3);

//5.
function mostrarMaterias(array) {
    for (const materia of array) {
        console.log(`Materia: ${materia.nombre}, Profesor: ${materia.profesor}, Cuatrimestre: ${materia.cuatrimestre}, Aprobada: ${materia.aprobada}`);
    }
}

mostrarMaterias(materias);
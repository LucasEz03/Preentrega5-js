# Preentrega5-js - Instanciando Objetos

## Descripción
 
Este proyecto forma parte de un simulador de cursada universitaria. En esta entrega se incorpora el uso de **clases y objetos** de JavaScript para representar las materias de la carrera, continuando con la lógica desarrollada en la preentrega anterior (manejo de arrays).
 
## Objetivo de la entrega
 
Integrar los conceptos de Programación Orientada a Objetos (clases, constructores, métodos e instanciación) dentro de la estructura del simulador ya existente.
 
## Estructura del código
 
### 1. Creación de la clase `Materia`
 
Se define la clase `Materia`, cuyo constructor recibe 4 parámetros para inicializar las propiedades del objeto:
 
- `nombre`: nombre de la materia.
- `profesor`: profesor a cargo.
- `cuatrimestre`: cuatrimestre en el que se cursa.
- `aprobada`: estado de aprobación de la materia (`true` / `false`).
### 2. Métodos de la clase
 
- **`calificar(nota)`**: recibe una nota y determina si la materia queda aprobada o no.
- **`cambiarProfesor(nuevoProfesor)`**: actualiza el profesor a cargo de la materia.
### 3. Instanciación de objetos
 
Se crean 3 objetos de la clase `Materia` usando la palabra clave `new`, guardados en las constantes `materia1`, `materia2` y `materia3`. Además, se almacenan juntos en el array `materias` para poder recorrerlos.
 
### 4. Verificación
 
Se ejecutan los métodos sobre los objetos creados y se utiliza `console.log` para mostrar el resultado final de las propiedades modificadas.
 
### 5. Reporte iterativo
 
La función `mostrarMaterias(array)` recorre el array de objetos con un bucle `for...of` y muestra la información de cada materia por consola.
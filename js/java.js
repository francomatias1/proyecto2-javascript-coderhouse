const cursos = [
    {nombre: "pasteleria inicial", precio: 25000, cupo: 40},
    {nombre: "pasteleria profesional", precio: 30000, cupo: 40},
    {nombre: "tecnicas y recetas escenciales para postres", precio: 22000, cupo: 35},
    {nombre: "chocolateria basica", precio: 15000, cupo: 20},
    {nombre: "pasteleria con chocolate", precio: 18000, cupo: 25},
]

function Curso(nombre, precio, cupo) { 
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.cupo = parseFloat(cupo);
}

let lookFor= prompt("Ingresa el nombre del curso que quisieras anotarte")
const courseFound = findCourse(cursos, lookFor)

console.log(courseFound)

//filtro
function findCourse(array, filtro){
    const found = array.find((curso)=>{
        return curso.nombre.includes(filtro.toLowerCase())
    })
    return found;
}
function filtrar(array, filtro, parametro){
    return array.filter(elemento=>{
        
if(parametro == "precio") {
    return elemento[parametro] <= filtro;
}else if(parametro === "cupo"){
    return elemento[parametro]== filtro
}else {
    return elemento[parametro].includes(filtro)
}
});
}
const porPrecio = filtrar(cursos, 18000, "precio")
const porCupo= filtrar(cursos, 35, "cupo")
const porNombre= filtrar(cursos, "choco", "nombre")
console.log(porPrecio);
console.log(porCupo);
console.log(porNombre);



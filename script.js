
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.carrera = carrera;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} tengo ${this.edad} y mi sexo es ${this.sexo} y estoy estudiando + ${this.carrera.} `);
    }
    

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando la carrera de ${this.carrera}`);
    }
}

const formPersona = document.getElementById('formPersona');
const resultPersona = document.getElementById('resultPersona');

formPersona.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;

    const persona1 = new Persona(nombre, edad, sexo);
    persona1.saludar();

    const esMayor = Persona.esMayorDeEdad(edad);

    resultPersona.innerHTML = `Persona creada: ${JSON.stringify(persona1)}, ¿Es mayor de edad? ${esMayor}`;
});
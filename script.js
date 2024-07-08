class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        return `¡Hola, soy ${this.nombre}!`;
    }
}

document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    const persona1 = new Persona(name, age, gender);
    
    const messageElement = document.getElementById('message');
    messageElement.textContent = persona1.saludar();
});
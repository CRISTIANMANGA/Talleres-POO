class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre}.`);
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
      super(nombre, edad);
      this.carrera = carrera;
    }
  
    estudiar() {
      console.log(`Estoy estudiando la carrera de ${this.carrera}.`);
    }
  }
  
  const estudiante1 = new Estudiante("Juan", 20, "Ingeniería Informática");
  estudiante1.saludar();
  estudiante1.estudiar();

class Persona {
    constructor(nombre, edad, sexo) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
    }
  
    saludar() {
      console.log(`¡Hola! Soy ${this.nombre}.`);
    }
  }

  let persona1 = new Persona('Juan', 30, 'masculino');
  

  persona1.saludar();
 
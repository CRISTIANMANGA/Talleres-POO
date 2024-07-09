class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
        return `Hola, mi nombre es ${this.nombre}.`;
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
        console.log(`Estoy estudiando ${this.carrera}.`);
        return `Estoy estudiando ${this.carrera}.`;
    }
}

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
        return `${this.nombre} hace un sonido.`;
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }
    
    moverCola() {
        console.log(`${this.nombre} está moviendo la cola.`);
        return `${this.nombre} está moviendo la cola.`;
    }
}

class Figura {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
    
    calcularArea() {
        return this.area;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color, Math.PI * radio * radio);
        this.radio = radio;
    }
}

class Rectangulo extends Figura {
    constructor(color, largo, ancho) {
        super(color, largo * ancho);
        this.largo = largo;
        this.ancho = ancho;
    }
}

class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    
    acelerar() {
        this.velocidad += 10;
    }
    
    static convertirKmHEnMph(velocidadKmH) {
        return velocidadKmH / 1.60934;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }
    
    acelerar() {
        this.velocidad += 20;
    }
}

class Empleado {
    constructor(nombre, edad, sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
    }
    
    calcularSalarioAnual() {
        return this.sueldo * 12;
    }
    
    static generarIdEmpleado() {
        if (!this.idEmpleado) {
            this.idEmpleado = 1;
        } else {
            this.idEmpleado++;
        }
        return this.idEmpleado;
    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento) {
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }
    
    calcularSalarioAnual() {
        const bono = this.sueldo * 0.1;
        return (this.sueldo + bono) * 12;
    }
}



function crearPersona() {
    const nombre = document.getElementById("nombrePersona").value;
    const edad = parseInt(document.getElementById("edadPersona").value);
    const sexo = document.getElementById("sexoPersona").value;
    
    const persona1 = new Persona(nombre, edad, sexo);
    document.getElementById("saludoPersona").innerText = persona1.saludar();
}

function crearEstudiante() {
    const nombre = document.getElementById("nombreEstudiante").value;
    const edad = parseInt(document.getElementById("edadEstudiante").value);
    const sexo = document.getElementById("sexoEstudiante").value;
    const carrera = document.getElementById("carreraEstudiante").value;
    
    const estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
    document.getElementById("saludoEstudiante").innerText = estudiante1.saludar();
    document.getElementById("mensajeEstudio").innerText = estudiante1.estudiar();
}

function crearFigura() {
    const color = document.getElementById("colorFigura").value;
    const area = parseFloat(document.getElementById("areaFigura").value);
    
    const figura1 = new Figura(color, area);
    document.getElementById("areaFiguraResult").innerText = `El área de la figura es: ${figura1.calcularArea()}`;
}

function crearCirculo() {
    const color = document.getElementById("colorCirculo").value;
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    
    const circulo1 = new Circulo(color, radio);
    document.getElementById("areaCirculoResult").innerText = `El área del círculo es: ${circulo1.calcularArea()}`;
}

function crearRectangulo() {
    const color = document.getElementById("colorRectangulo").value;
    const largo = parseFloat(document.getElementById("largoRectangulo").value);
    const ancho = parseFloat(document.getElementById("anchoRectangulo").value);
    
    const rectangulo1 = new Rectangulo(color, largo, ancho);
    document.getElementById("areaRectanguloResult").innerText = `El área del rectángulo es: ${rectangulo1.calcularArea()}`;
}

function crearVehiculo() {
    const marca = document.getElementById("marcaVehiculo").value;
    const modelo = document.getElementById("modeloVehiculo").value;
    const velocidad = parseInt(document.getElementById("velocidadVehiculo").value);
    
    const vehiculo1 = new Vehiculo(marca, modelo, velocidad);
    vehiculo1.acelerar();
    document.getElementById("velocidadVehiculoResult").innerText = `La velocidad del vehículo es: ${vehiculo1.velocidad}`;
}

function crearCoche() {
    const marca = document.getElementById("marcaCoche").value;
    const modelo = document.getElementById("modeloCoche").value;
    const velocidad = parseInt(document.getElementById("velocidadCoche").value);
    const combustible = document.getElementById("combustibleCoche").value;
    
    const coche1 = new Coche(marca, modelo, velocidad, combustible);
    coche1.acelerar();
    document.getElementById("velocidadCocheResult").innerText = `La velocidad del coche es: ${coche1.velocidad}`;
}

function crearEmpleado() {
    const nombre = document.getElementById("nombreEmpleado").value;
    const edad = parseInt(document.getElementById("edadEmpleado").value);
    const sueldo = parseFloat(document.getElementById("sueldoEmpleado").value);
    
    const empleado1 = new Empleado(nombre, edad, sueldo);
    document.getElementById("salarioEmpleadoResult").innerText = `El salario anual del empleado es: ${empleado1.calcularSalarioAnual()}`;
}

function crearGerente() {
    const nombre = document.getElementById("nombreGerente").value;
    const edad = parseInt(document.getElementById("edadGerente").value);
    const sueldo = parseFloat(document.getElementById("sueldoGerente").value);
    const departamento = document.getElementById("departamentoGerente").value;
    
    const gerente1 = new Gerente(nombre, edad, sueldo, departamento);
    document.getElementById("salarioGerenteResult").innerText = `El salario anual del gerente es: ${gerente1.calcularSalarioAnual()}`;
}

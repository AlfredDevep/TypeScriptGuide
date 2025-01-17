/**
 * EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 */


abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    abstract mostrarDatosPersonales(): void;
  
    imprimirMayorEdad(): void {
      if (this.edad >= 18) {
        console.log('Es mayor de edad.');
      } else {
        console.log('No es mayor de edad.');
      }
    }
  }

  class Empleado extends Persona {
    private sueldo: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
      super(nombre, apellido, direccion, telefono, edad);
      this.sueldo = sueldo;
    }
  
    cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
    }
  
    imprimirSueldo(): void {
      console.log(`El sueldo del empleado es: ${this.sueldo}`);
    }
  
    mostrarDatosPersonales(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Teléfono: ${this.telefono}`);
      console.log(`Edad: ${this.edad}`);
    }
  }
  
const empleado = new Empleado('Juan', 'Pérez', 'Calle 123', '123456789', 25, 2000);
empleado.mostrarDatosPersonales();
empleado.imprimirSueldo();

/**
 * EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */

class CabeceraPagina {
    private title: string;
    private color: string;
    private font: string;

    constructor(title: string, color: string, font: string) {
        this.title = title;
        this.color = color;
        this.font = font;
    }

    // Método para obtener título, color y fuente
    getProperties(): string {
        return `Title: ${this.title}, Color: ${this.color}, Font: ${this.font}`;
    }

    // Método para especificar la alineación del título
    setTitleAlignment(alignment: 'center' | 'right' | 'left'): string {
        // Implementa la lógica para establecer la alineación del título
        // Puedes usar un switch o if/else según tus necesidades
        // ...

        return `Title alignment set to ${alignment}`;
    }

    // Método para imprimir todas las propiedades
    printAllProperties(): void {
        console.log(this.getProperties());
        // Agrega cualquier otra propiedad que desees imprimir
        // ...
    }
}

// Ejemplo de uso:
const header = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
console.log(header.getProperties()); // Imprime las propiedades
console.log(header.setTitleAlignment('center')); // Establece la alineación del título
header.printAllProperties(); // Imprime todas las propiedades
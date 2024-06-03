var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(title, color, font) {
        this.title = title;
        this.color = color;
        this.font = font;
    }
    // Método para obtener título, color y fuente
    CabeceraPagina.prototype.getProperties = function () {
        return "Title: ".concat(this.title, ", Color: ").concat(this.color, ", Font: ").concat(this.font);
    };
    // Método para especificar la alineación del título
    CabeceraPagina.prototype.setTitleAlignment = function (alignment) {
        // Implementa la lógica para establecer la alineación del título
        // Puedes usar un switch o if/else según tus necesidades
        // ...
        return "Title alignment set to ".concat(alignment);
    };
    // Método para imprimir todas las propiedades
    CabeceraPagina.prototype.printAllProperties = function () {
        console.log(this.getProperties());
        // Agrega cualquier otra propiedad que desees imprimir
        // ...
    };
    return CabeceraPagina;
}());
// Ejemplo de uso:
var header = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
console.log(header.getProperties()); // Imprime las propiedades
console.log(header.setTitleAlignment('center')); // Establece la alineación del título
header.printAllProperties(); // Imprime todas las propiedades

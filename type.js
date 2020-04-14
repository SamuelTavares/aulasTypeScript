var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
        this.array1 = [
            {
                teste: "teste"
            }
        ];
    }
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = 'Este é um alert simples em TypeScript ${this.numero}';
        return alert(this.texto);
    };
    return Default;
}());

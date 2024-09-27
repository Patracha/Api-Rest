class Producto {
    constructor(id, codigo, descripcion, precio, stock) {
        this._id = id;
        this._codigo = codigo;
        this._descripcion = descripcion;
        this._precio = precio;
        this._stock = stock;
    }

    // Getter y setter para ID
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    // Getter y setter para Código
    get codigo() {
        return this._codigo;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    // Getter y setter para Descripción
    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Getter y setter para Precio
    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    // Getter y setter para Stock
    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }
}

module.exports = Producto; 
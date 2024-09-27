class Cliente {
    
    constructor(id, nombre, apellido) {
        this._id = id;
        this._nombre = nombre; 
        this._apellido = apellido;
    }

    // Getter para id
    get id() {
        return this._id; 
    }

    // Setter para id
    set id(id) {
        this._id = id;
    }

    // Getter para nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para nombre
    set nombre(nombre) {
        this._nombre = nombre;
    }

    // Getter para apellido
    get apellido() {
        return this._apellido;
    }

    // Setter para apellido
    set apellido(apellido) {
        this._apellido = apellido;
    }
}


module.exports = Cliente;
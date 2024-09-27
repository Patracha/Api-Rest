const express = require("express");



class Server {
  constructor() {
    this._app = express(); // Inicializamos la app de express
    this.routes(); // Configuramos las rutas
  }

  // Método para definir las rutas
  routes() {
    this._app.use('/productos', require('../routes/productosRouters'))
    this._app.use('/clientes', require('../routes/clientesRoutes'))
    
  }

  // Método para hacer que el servidor escuche en un puerto
  listen() {
    const port = 3000; // El puerto en el que correrá tu servidor
    this._app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  }
}

module.exports = Server; 


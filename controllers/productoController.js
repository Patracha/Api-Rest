const findAllProductos = require('../service/productoService'); 

const findAllProductosController = async (req, res) =>{
    const arregloProductos = await findAllProductos(); 
    res.jsoon(arregloProductos); 
}
const { Router } = require("express");
const findAllProductos = require("../service/productoService");
const router = Router();

router.get("/productos", async (req, res) => {
  const arregloProductos = await findAllProductos();
  res.json(arregloProductos);
});


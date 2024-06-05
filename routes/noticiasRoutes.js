const { Router } = require("express");
const { agregarNoticiaPara } = require("../controllers/noticiaControllers");
const { funcionMulter2 } = require("../middlewares/multerCompleto");
// const validateFields = require("../middlewares/validateFields");
const router = Router();


// Rutas
router.post('/alta', funcionMulter2().array("files",5), agregarNoticiaPara);



module.exports = router;
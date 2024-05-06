const { Router } = require("express");
const { check } = require("express-validator");
const { funcionMulter } = require("../middlewares/multerFileStorage");
const { agregarNoticia } = require("../controllers/noticiaControllers");
// const validateFields = require("../middlewares/validateFields");
const router = Router();

router.use("/alta",(req, res, next) => {
    // Acceder a req antes de llegar al controlador
    funcionMulter(req.user).array("files",5)(req, res, () => {
      next();
    });
  })

router.post("/alta", agregarNoticia);

module.exports = router;
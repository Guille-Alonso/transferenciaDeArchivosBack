const multer = require("multer");
const path = require('path');
const fs = require('fs');

const funcionMulter = (carpeta) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.carpeta);
        // cb(null, `./uploads/${user.nombreUsuario}`);
        const uploadPath = `./archivosPrueba/${carpeta}`; // Ruta de la carpeta de destino
        fs.mkdirSync(uploadPath, { recursive: true }); // Crear carpeta si no existe
        cb(null, uploadPath);
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
        // const nombre = req.carpeta || Date.now(); // Usa el ID o un timestamp si no existe
        //     cb(null, `${nombre}-${file.originalname}`);
      },
    });

    const upload = multer({ storage: storage });
    // const maxSize = 5 * 1024 * 1024; // 5 MB
    // const upload = multer({
    //   storage: storage,
    //   limits: { fileSize: maxSize },
    // });

    return upload;
};

module.exports = {
  funcionMulter,
};
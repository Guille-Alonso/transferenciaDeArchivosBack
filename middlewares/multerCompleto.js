const multer = require("multer");
const path = require('path');
const fs = require('fs');

const funcionMulter2 = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const uploadPath = `./archivosPrueba`;
            fs.mkdirSync(uploadPath, { recursive: true });
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            // Almacenar archivos temporalmente con un nombre genérico
            cb(null, `temp-${Date.now()}-${file.originalname}`);
        }
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
  funcionMulter2,
};
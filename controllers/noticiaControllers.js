const path = require('path');
const fs = require('fs');
// const Noticia = require("../models/Noticia");
// const ArchivoNoticia = require("../models/ArchivoNoticia");
// const archiver = require('archiver');

const agregarNoticia = async (req, res) => {
    const { fecha } = req.body;
    console.log(fecha);

    const folderPath = `C:\\Users\\guill\\Desktop\\testMulter\\back`;

    fs.readdir(folderPath, async (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta:', err);
            // Maneja el error aquí si es necesario.
            res.status(500).json({ message: 'Error al leer la carpeta' });
        } else {

            try {

                // const newNoticia = new Noticia({
                //     titulo,
                //     fecha,
                //     usuario: userReq._id
                // });

                // const noticiaNueva = await newNoticia.save();

                for (let index = 0; index < req.files.length; index++) {
                    const filePath = path.join(folderPath, req.files[index].filename); // Ruta completa al archivo
                 
                    // const newArchivoNoticia = new ArchivoNoticia({
                    //     rutaArchivo: filePath,
                    //     noticia: noticiaNueva._id
                    // })
                    // await newArchivoNoticia.save();
                }

                res.status(200).json({ message: "Se agregó una nueva noticia con éxito" });

            } catch (error) {
            
                if (error.name === 'ValidationError' || error.name === 'MongoServerError') {
                    res.status(400).json({ message: "Hubo un error, intente nuevamente" });
                } else {
                    res.status(error.code || 500).json({ message: 'Error al crear reporte' });
                }
            }
        }
    });
};

module.exports = {
    agregarNoticia
  }
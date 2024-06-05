const path = require('path');
const fs = require('fs');
const {  conectarBDMySql } = require('../config/dbMySql');

const agregarNoticia = async (req, res,next) => {
    try {
        // const { fecha } = req.body;
        console.log(req.body);
        // console.log(fecha);
        req.carpeta = "nombreDeLaCarpeta4";
        // res.status(200).json({ message: "Se agregó una nueva noticia con éxito" });
        next()
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({ message: 'Error al crear reporte' });
    }
  
};

const agregarNoticiaPara = async (req, res, next) => {
    try {
        const { fecha } = req.body;
        console.log(fecha);
        // Realiza el insert en la base de datos y obtiene el ID
        // const insertId = await insertarNoticiaEnBD({ fecha }); // Función hipotética para insertar en la BD
        const insertId = "guille"

        const connection = await conectarBDMySql();
        const [empleados] = await connection.query(
          "SELECT empleado.IdPersona FROM empleado WHERE empleado.idEmpleado=1");
    
        console.log(empleados);
        
        // Renombrar archivos después de obtener el insertId
        // req.files.forEach(file => {
        //     const newPath = path.join(file.destination, `${insertId}-${file.originalname}`);
        //     fs.renameSync(file.path, newPath);
        // });
  
              // Crear una nueva carpeta con el insertId como nombre
              const newUploadPath = path.join('./archivosPrueba', empleados[0].IdPersona.toString());
              fs.mkdirSync(newUploadPath, { recursive: true });
      
              // Mover archivos a la nueva carpeta
              req.files.forEach(file => {
                  const newPath = path.join(newUploadPath, file.originalname);
                  fs.renameSync(file.path, newPath);
              });
  
        res.json({ message: 'Noticia y archivo(s) subidos correctamente', id: empleados[0].IdPersona });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar la noticia' });
    }
  };

module.exports = {
    agregarNoticia,agregarNoticiaPara
  }
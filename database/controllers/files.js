const { Files, Users } = require("../db");
const files = {};
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, '../../public/uploads/');

async function create(name, description, user_id) {
  const file = await Files.create({
    name: name,
    description: description,
    user_id: user_id,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return file;
}

async function findAll() {
  const file = await Files.findAll({
    include: [
      {
        model: Users,
      },
    ],
    order: [["created_at", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return file;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Directorio donde se guardarán los archivos subidos
    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    // Nombre del archivo en el directorio
    cb(null, file.originalname);
  },
});



async function checkFileExists(filename) {
    const filePath = path.join(folderPath, filename);

    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                // El archivo no existe
                resolve(false);
            } else {
                // El archivo existe
                reject(new Error('El archivo ya existe'));
            }
        });
    });
}


// Configuración de Multer
const upload = multer({ storage: storage });


async function deleteFile(fileName) {
  const filePath = path.join(folderPath, fileName); // Ajusta la ruta según donde se guarden tus archivos
  try {
      await fs.promises.unlink(filePath);
      console.log(`El archivo ${fileName} ha sido eliminado exitosamente.`);
      return { code: 1, message: `El archivo ${fileName} ha sido eliminado exitosamente.` };
  } catch (error) {
      console.error(`Error al eliminar el archivo ${fileName}:`, error);
      return { code: 0, message: `Error al eliminar el archivo ${fileName}: ${error.message}` };
  }
}

async function destroy(id){
    const file = await Files.destroy({
        where: {
            id: id
        }
    })
    .then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return file

}

files.create = create;
files.findAll = findAll;
files.upload = upload;
files.checkFileExists = checkFileExists;
files.deleteFile = deleteFile;
files.destroy = destroy;

module.exports = files;

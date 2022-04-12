const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products')) // Indica donde tiene que guardar el archivo que se suba
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`) // Construye el nuevo nombre del archivo removiendo el original
    }
})

const uploadFile = multer({storage})

module.exports = uploadFile
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = 'public/images';
    fs.mkdirSync(path, { recursive: true });

    cb(null, path)
  },
  filename: (req, file, cb) => {
      console.log(file)
    const uniqueTime = new Date().toISOString().replace(/:/g, '-');
    const fileName = `${uniqueTime}-${file.originalname}`;

    cb(null, fileName);
  }
});


const upload = multer({ storage: storage });

module.exports = upload;
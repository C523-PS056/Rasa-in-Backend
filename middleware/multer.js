/* eslint-disable object-shorthand */
const multer = require('multer');

const storage = multer.diskStorage({
  // eslint-disable-next-line func-names
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

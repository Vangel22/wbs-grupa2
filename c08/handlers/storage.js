const fs = require("fs");
const makeId = require("../helper/strings");

// 8 bit -> 1 byte
// 1024 byte -> 1 kb
// 1024 kb -> 1 mb
// 1024 mb -> 1 gb

// 1024 * 1024 = 1 MB
// 10 * 1024 * 1024 = 10 MB

const MAX_FILESIZE = 10 * 1024 * 1024;
const ALLOWED_FILETYPES = ["image/jpeg", "image/jpg", "image/png"];

const upload = async (req, res) => {
  console.log("files", req.files);

  // config[option]

  if (!req.files) {
    return res.status(400).send("No file was uploaded!");
  }

  if (MAX_FILESIZE < req.files.document.size) {
    return res.status(400).send("File exceeds max file size!");
  }

  if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
    return res.status(400).send("File type not allowed!");
  }

  const userDir = `user_${req.auth.id}`; // imeto na folderot vo /uploads
  const userDirPath = `${__dirname}/../uploads/${userDir}`; // /uploads/user_1234

  // Nema da kreira folder za istiot korisnik dva pati
  if (!fs.existsSync(userDirPath)) {
    fs.mkdirSync(userDirPath);
  }

  const newFileName = req.files.document.name.split("."); // slika.jpg
  // newFileName = ["slika", "jpg"]
  // newFileName[0] = "slika"
  // newFileName[1] = "jpg"

  const fileName = `${newFileName[0]}_${makeId(6)}.${newFileName[1]}`; // slika_1234.jpg
  // `${slika}_${1234}.${jpg}`
  const filePath = `${userDirPath}/${fileName}`; // /uploads/user_1234/slika_1234.jpg

  req.files.document.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send("Internal Server Error!");
    }
    return res.status(200).send({ file_name: fileName });
  });
};

const download = async (req, res) => {
  const userDir = `user_${req.auth.id}`;
  const userDirPath = `${__dirname}/../uploads/${userDir}`;

  const filePath = `${userDirPath}/${req.params.filename}`;
  console.log("file path", filePath);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found!");
  }

  res.download(filePath);
};

module.exports = {
  upload,
  download,
};

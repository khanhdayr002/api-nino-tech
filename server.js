const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./routes/api");
const app = express();
const rateLimit = require("express-rate-limit");
const fs = require("fs");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10000
});
app.use(limiter);

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/", api);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});

const NINO_PATH = `./controllers/data/nino.json`;
const NINO_PATH_BAK = `./controllers/data/nino.bak.json`;


function isFileExists(path) {
  try {
    return fs.statSync(path).isFile();
  } catch (e) {
    return false;
  }
}

(async () => {
  app.listen(process.env.PORT || 80);

  try {
    const isExists = isFileExists(NINO_PATH);
    if (!isExists) throw null;
    const oldNino = fs.readFileSync(NINO_PATH);
    const parsedOldNino = JSON.parse(oldNino);

    fs.writeFileSync(
      NINO_PATH_BAK,
      JSON.stringify(parsedOldNino, null, 2)
    );
  } catch (e) {
    const isExists = isFileExists(NINO_PATH_BAK);
    const bkNino = isExists ? fs.readFileSync(NINO_PATH_BAK) : "{}";
    const parsedBkNino = JSON.parse(bkNino);

    fs.writeFileSync(
      NINO_PATH,
      JSON.stringify(parsedBkNino, null, 2)
    );
  }


  global.data = JSON.parse(fs.readFileSync(NINO_PATH));

  console.log(
    "-----------------\n----connected----\n-----------------"
  );
})();

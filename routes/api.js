const router = require("express").Router();
const { getInfo, addInfo, main } = require("../controllers/nino");
const { getLoli } = require("../controllers/loli");
const { getWallpaper } = require("../controllers/wallpaper");
const { home } = require("../controllers/home");
const { getGai } = require("../controllers/gai");
const { lac, taixiu } = require("../controllers/taixiu");
const { cadao } = require("../controllers/cadao");

router.get("/nino/get/:input", getInfo);
router.get("/nino/add/:input", addInfo);
router.get("/nino", main);
router.get("/loli", getLoli);
router.get("/wallpaper", getWallpaper);
router.get("/", home);
router.get("/gai", getGai);
router.get("/taixiu/:input", lac);
router.get("/taixiu", taixiu);
router.get("/cadao", cadao);

module.exports = router;
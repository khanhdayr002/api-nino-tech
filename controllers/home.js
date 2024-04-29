const { errorHandler } = require("../utils");
const database = require("../db");

exports.home = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/../data.json"));
  database.up("home");
  // let update = () => {
  //   data = JSON.parse(require("fs").readFileSync(__dirname + "/../data.json"));
  //   res.send(`TOTAL ACCESSES: ${data.total}`);
  //   return setTimeout(() => update(), 1000);
  // }
  // update();
  let total = data.nino + data.taixiu + data.home + data.loli + data.wallpaper + data.gai;
  let text = `TOTAL ACCESSES: ${total || 0}`;
  text += "<br>";
  text += `home: ${data.home || 0}`;
  text += "<br>";
  text += `loli: ${data.loli || 0}`;
  text += "<br>";
  text += `wallpaper: ${data.wallpaper || 0}`;
  text += "<br>";
  text += `gai: ${data.gai || 0}`;
  text += "<br>";
  text += `nino: ${data.nino || 0}`;
  text += "<br>";
  text += `taixiu: ${data.taixiu || 0}`;
  text += "<br>";
  text += `cadao: ${data.cadao || 0}`;
  res.send(text);
};

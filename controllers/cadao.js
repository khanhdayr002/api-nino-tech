const { errorHandler } = require("../utils");
const database = require("../db");

exports.cadao = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/data/cadao.json"));
  database.up("cadao");
  let cadao = data[Math.floor(Math.random() * data.length)];
  res.json({"from":"https://gist.github.com/tuyenld","data":cadao});
};

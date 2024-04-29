const { errorHandler } = require("../utils");
const database = require("../db");

exports.lac = async (req, res, next) => {
  database.up("taixiu_lac");
  database.up("taixiu");
  let { input } = req.params;
  input = input.replace(/\s+/g, ' ').trim().toLowerCase();
  let one = Math.ceil(Math.random()*6);
  let two = Math.ceil(Math.random()*6);
  let three = Math.ceil(Math.random()*6);
  let results = (one == two == three) ? "thua" : (one + two + three <= 10) ? (["xỉu","xiu","x"].includes(input)) ? "thắng" : "thua" : (["tài","tai","t"].includes(input)) ? "thắng" : "thua";
  let dices = (one == two && two == three) ? "3 nút bằng nhau" : (one + two + three <= 10) ? "xỉu" : "tài";
  res.json({"Authors": "DungUwU && Lê Anh Trí", "dices": `${one} | ${two} | ${three} - ${dices}`, "input": input, "results": results});
};

exports.taixiu = async (req, res, next) => {
  database.up("taixiu_home");
  database.up("taixiu");
  res.json({"Authors":"DungUwU && Lê Anh Trí","data":"hi"});
};
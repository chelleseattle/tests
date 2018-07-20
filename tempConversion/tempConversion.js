var ftoc = function(temp) {
  newtemp = (temp - 32) * 5 / 9;
  newtemp = Math.round(newtemp * 10) / 10;
  return newtemp;
}

var ctof = function(temp) {
  newtemp = temp * 9 / 5 + 32;
  newtemp = Math.round(newtemp * 10) / 10;
  return newtemp;
}

module.exports = {
  ftoc,
  ctof
}

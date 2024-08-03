// array
// console.time("time");
// const POINT_COUNT = 1e7;
// var oneDay = 24 * 3600 * 1000;
//   var base = +new Date(1987, 9, 3);
//   var y = Math.random() * 1000;
//   var values = new Array(POINT_COUNT * 2);
//   var off = 0;
//   for (var j = 0; j < POINT_COUNT; j++) {
//     y += Math.round(10 + Math.random() * (-10 - 10));
//     values[off++] = base += oneDay;
//     values[off++] = y;
//   }
// console.timeEnd("time");

// typed array
console.time("time");
const POINT_COUNT = 1e7;
var oneDay = 24 * 3600 * 1000;
  var base = +new Date(1987, 9, 3);
  var y = Math.random() * 1000;
  var values = new Float64Array(POINT_COUNT * 2);
  var off = 0;
  for (var j = 0; j < POINT_COUNT; j++) {
    y += Math.round(10 + Math.random() * (-10 - 10));
    values[off++] = base += oneDay;
    values[off++] = y;
  }
console.timeEnd("time");

exports.min = function min (array) {
  if(!Array.isArray(array) || !array.length) return 0;
  array.sort((val1, val2) => {
    if(val1 > val2) {
      return 1;
    }
    else {
      return -1;
    }
  });
  return array[0];
}

exports.max = function max (array) {
  if(!Array.isArray(array) || !array.length) return 0;
  array.sort((val1, val2) => {
    if(val1 < val2) {
      return 1;
    }
    else {
      return -1;
    }
  });
  return array[0];
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || !array.length) return 0;
  return array.reduce((acc, val) => acc + val)/array.length;
}

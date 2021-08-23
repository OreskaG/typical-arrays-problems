
exports.min = function min (array) {
  if ( !array ) return 0;
  if ( !array.length ) return 0;
  return Math.min( ...array );
}

exports.max = function max (array) {
    if ( !array ) return 0;
    if ( !array.length ) return 0;
    return Math.max( ...array );
}

exports.avg = function avg (array) {
    if ( !array ) return 0;
    if ( !array.length ) return 0;
    let result = 0;
    for ( let i = 0; i < array.length; i++ ) {
      result += array[i];
    };
    return result / array.length;
}

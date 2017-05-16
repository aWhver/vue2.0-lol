export const filterRead = function(val){
  return val>10000? parseFloat(val/10000).toFixed(1)+'w': val;
}


export const filterComment = function(val){
  return val>10000? parseFloat(val/10000000).toFixed(1)+'w': val;
}

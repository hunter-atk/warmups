const largestProduct = (array) => {
  let sorted = array.sort(function(a, b) {
    return a - b;
  });

  const prod1 = sorted[0] * sorted[1];
  const prod2 = sorted[sorted.length-1] * sorted[sorted.length-2];

  if (prod1 > prod2){
    return prod1;
  } else return prod2;


}

module.exports = largestProduct;
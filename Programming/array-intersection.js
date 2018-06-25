const commonElements = (arr1, arr2) => {
  let result = [];
  let obj = {}

  let arr3 = arr1.concat(arr2)

  arr3.forEach(x => {

    if (obj.hasOwnProperty(x)){
      obj[x]++;
      if (obj[x] == 2){
        result.push(x);
      }
    }

    else {
      obj[x] = 1;
    }

  })

  return result;

}

module.exports = commonElements;

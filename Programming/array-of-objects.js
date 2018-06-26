module.exports.removeBadPeople = (people) => {
  // let result = [];
  // if (people == []){
  //   result.push(people);
  // }
  // people.forEach(x => {
  //   if ((x.name != '') && (x.age > 0)){
  //     result.push(x);
  //   }
  // })
  // return result;

  // const validPeople = [];

  // for (const person of people) {
  //   if (person.hasOwnProperty('name') && person.hasOwnProperty('age')){
  //     if (person.name && person.age >= 1){
  //       validPeople.push(person)
  //     }
  //   }
  // }
  // return validPeople;

  return people.reduce((acc = [], person) => {
    if (person.hasOwnProperty('name') && person.hasOwnProperty('age')) {
      if (person.name && person.age >= 1) {
        acc.push(person)
      }
    }
    return acc;
  }, [])
}

module.exports.sumAgesValid = (people) => {
  let arr = removeBadPeople(people);
  
  if(arr == []){
    return 'sum cannot be calculated; there are no valid people'
  }

  let result = 0;
  if (people == []){
    return result;
  }
  for(person of people){
    if(person.age){
    result += person.age;
    }
  }
  return result;

}

module.exports.sumAgesAll = (people) => {
  let result = 0;
  if (people == []){
    return result;
  }
  for(person of people){
    if(person.age){
    result += person.age;
    }
  }
  return result;
}
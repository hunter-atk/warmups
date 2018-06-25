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
  let result = 0;
  arr.forEach(x => {
    result += x.age;
  })
}

module.exports.sumAgesAll = (people) => {

}
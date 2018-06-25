// Given a string, determine if all of the characters in the string are unique or not. This function, allCharsUnique should return a Boolean value.
function allCharsUnique (input) {
    let array = [];
    let result = true;
    input.split('').forEach(x => {
        if(array.includes(x)){
          result = false;
        } else {
          array.push(x)
        }
    })
    return result;
}

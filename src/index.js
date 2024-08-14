module.exports = function check(str, bracketsConfig) {


  const findSameOpenClose = () => {
    let bracketObj = {};
    for (let i = 0; i < bracketsConfig.length; i++) {

      if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
        bracketObj[bracketsConfig[i][0]] = true;
      }
    }
    return bracketObj;
  }


  const isOpenBracket = (bracket) => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i].indexOf(bracket) === 0) {
        return true;
      }
    }
    return false
  }

  const findPair = (bracket) => {

    for (let i = 0; i < bracketsConfig.length; i++) {

      if (bracketsConfig[i][1] === bracket) {
        return bracketsConfig[i][0]
      }
    }
  }
  let sameBracketObj = findSameOpenClose();

  // if obj value is true, there is no brackets in stack
  // if add open bracket change to false
  // removed closing bracket change to true

  let stack = [];
  let charArr = str.split('');

  for (let i = 0; i < charArr.length; i++) {

    if (sameBracketObj.hasOwnProperty(charArr[i])) {

      if (sameBracketObj[charArr[i]] === false && charArr[i] === stack[stack.length - 1]) {
        stack.pop();
        sameBracketObj[charArr[i]] = true;

      } else {

        stack.push(charArr[i]);
        sameBracketObj[charArr[i]] = false;

      }
    }


    if (!sameBracketObj.hasOwnProperty(charArr[i])) {

      if (isOpenBracket(charArr[i])) {
        stack.push(charArr[i])
      } else {

        if (stack.length === 0) {

          return false;
        } else {
          let pair = findPair(charArr[i])

          if (pair === stack[stack.length - 1]) {
            stack.pop();
          }
        }

      }

    }

    // console.log("Stack", stack)
  }


  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }


}


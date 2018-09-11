function flattenDepth(bracketsConfig) {
  let result = [];
  for (let arr of bracketsConfig) {
    result.push(arr[0], arr[1])
  }
  return result
}

function getBracketIndex (brackets, bracket) {
  let bracketIndex = brackets.indexOf(bracket);
  return (bracketIndex % 2) ? bracketIndex : ++bracketIndex;
}

function isRightBracket (brackets, bracket) {
  return brackets.indexOf(bracket) % 2;
}

function isLastSameBrackets (result, brackets, bracket) {
  let bracketIndex = result[result.length - 1];
  return brackets[bracketIndex] === bracket;
}


module.exports = function check(str, bracketsConfig) {
  const brackets = flattenDepth(bracketsConfig);
  let result = [];

  let isNonCorrectSequence = str.split('').some((bracket) => {
    let bracketIndex = getBracketIndex(brackets, bracket);

    if (!isRightBracket(brackets, bracket) && !isLastSameBrackets(result, brackets, bracket)) {
      result.push(bracketIndex);
    } else {
      if (result.length === 0) {
        return true;
      } else if (result[result.length - 1] === bracketIndex) {
        result.pop();
      } else {
        return true;
      }
    }
  })

  return result.length === 0 && !isNonCorrectSequence;
}



function toEqual(a,b) {
  if (a == b) {
    return "passed";
  }
    else {
      return "error";
    }
}

function toBe(a,b) {
  if (a === b) {
    return "passed";
  }
    else {
      return "error";
    }
}

function isTrue(expectation) {
  if (expectation = true) {
    return "passed";
  }
    else {
      return "error";
    }
}


function isNotTrue(expection) {
  if (expectation != true) {
    return "passed";
  }
    else {
      return "error";
    }
}

function isIncludedInArray(value, array) {
  if (array.includes(value)) {
  return "passed";
}
  else {
    return "error";
  }
}

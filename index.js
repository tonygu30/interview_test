let inputValue = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
};

const reverseObj = (object, newObj = null) => {
  let resultObject = object;
  let resultData = newObj;
  const objKeys = Object.keys(resultObject)[0];
  const objValue = Object.values(resultObject);
  if (typeof objValue[0] === "object") {
    if (newObj === null) {
      resultData = `${objKeys}`;
      return reverseObj(Object.values(resultObject)[0], resultData);
    }
    resultData = { [objKeys]: resultData };
    return reverseObj(Object.values(resultObject)[0], resultData);
  } else if (typeof objValue[0] === "string") {
    resultData = { [objValue]: { [objKeys]: resultData } };
    return resultData;
  }
};

let outputValue = reverseObj(inputValue);

exports.reverseObj = reverseObj;

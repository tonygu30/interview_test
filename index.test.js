const { reverseObj } = require("./index");
const { inputValue, outputValue } = require("./testData");

test("reverseObj testing", () => {
  expect(reverseObj(inputValue)).toStrictEqual(outputValue);
});

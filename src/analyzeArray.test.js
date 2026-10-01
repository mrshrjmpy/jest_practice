import analyzeArray from "./analyzeArray";

test("[1,2,3,4]", () => {
    expect(analyzeArray([1,2,3,4])).toEqual({
  average: 2.5,
  min: 1,
  max: 4,
  length: 4
});
});

test("null", () => {
    expect(analyzeArray([])).toEqual("Error! enter an array")
})
import reverseString from "./reverseString";

test("abc", () => {
    expect(reverseString("abc")).toBe("cba");
});

test("datatype error", () => {
    expect(reverseString(1)).toBe("Error! Please enter string input.");
});

test("numbers and symbols", () => {
    expect(reverseString("321##abc")).toBe("cba##123");
})
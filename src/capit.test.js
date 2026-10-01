import capitalize from "./capit"; 
test('abc', () => {
    expect(capitalize("abc")).toBe("Abc");
});

test('123', () => {
    expect(capitalize("123")).toBe("123");
});

test('AbC', () => {
    expect(capitalize("AbC")).toBe("AbC");
});

test("datatype error", () => {
    expect(capitalize(123)).toBe("Error! Please enter a string.");
})

test("empty string", () => {
    expect(capitalize("")).toBe("");
})
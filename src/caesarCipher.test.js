import caesarCipher from "./caesarCipher";

test("ABC shift 1", () => {
    expect(caesarCipher("ABC",1)).toBe("BCD");
});

test("ZAB shift 1", () => {
    expect(caesarCipher("ZAB",1)).toBe("ABC");
})

test("ZAB shift 10", () => {
    expect(caesarCipher("ZAB",10)).toBe("JKL");
})

test("abc shift 1", () => {
    expect(caesarCipher("abc",1)).toBe("bcd");
});

test("HeLLo shift 3", () => {
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr");
});
test("Hello world! shift 1", () => {
    expect(caesarCipher("Hello world!",3)).toBe("Khoor zruog!");
});
export default function reverseString(inputString) {
    if(typeof inputString !== "string")
        return "Error! Please enter string input.";
    return (inputString.split('').reverse().join(''));
}
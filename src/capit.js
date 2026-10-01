export default function capitalize(inputString) {
    if(typeof inputString !== 'string')
        return "Error! Please enter a string.";
    return (inputString.charAt(0).toUpperCase() + inputString.slice(1));
}
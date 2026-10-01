export default function caesarCipher(string, shift) {
    let result = "";
    for(const char of string){
        if(char.charCodeAt(0) >=65 && char.charCodeAt(0) <= 90)
        {
            result += String.fromCharCode((char.charCodeAt(0) - 65 + shift)%26 + 65);
        }
        else if(char.charCodeAt(0) >=97 && char.charCodeAt(0) <= 122)
        {
            result += String.fromCharCode((char.charCodeAt(0) - 97 + shift)%26 + 97);
        }
        else {
            result += char;
        }
        
    }
    return result;
}
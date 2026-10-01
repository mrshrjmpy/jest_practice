export default function analyzeArray(array){
    if(array.length == 0){
        return "Error! enter an array";
    }
    let result = {};
    let sum = 0;

    result.length = array.length;
    result.min = array[0];
    result.max = array[0];

    for (const i of array){
        sum += i;
        if(i < result.min)
            result.min = i;
        else if(i > result.max)
            result.max = i;
    }

    result.average = sum / result.length;
    return result;
}
const calculator = {
    add(a,b){
        if(a===undefined || b===undefined || typeof a !== "number" || typeof b !== "number")
            return "Error! Please enter two numbers.";
        return (a+b);
    },
    subtract(a,b){
        if(a===undefined || b===undefined || typeof a !== "number" || typeof b !== "number")
            return "Error! Please enter two numbers.";
        return (a-b);
    },
    multiply(a,b){
        if(a===undefined || b===undefined || typeof a !== "number" || typeof b !== "number")
            return "Error! Please enter two numbers.";
        return (a*b);
    },
    divide(a,b){
        if(a===undefined || b===undefined || typeof a !== "number" || typeof b !== "number")
            return "Error! Please enter two numbers.";
        if(b===0)
            return "Divisor cannot be zero.";
        return (a/b);
    }
};

export default calculator;
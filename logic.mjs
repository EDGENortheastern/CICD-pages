const convertToNum = (val) => parseFloat(val);

const calculateResults = (amount, percent) => {
    if (percent > 100){
        return "You cannot calculate the percentage";
    }
    return (convertToNum(amount)*convertToNum(percent))/100;
}

export {
    calculateResults,
    convertToNum
}
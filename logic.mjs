const convertToNum = (val) => parseFloat(val);

const calculateResults = (amount, percent) => {
    return (convertToNum(amount)*convertToNum(percent))/100;
}

export {
    calculateResults,
    convertToNum
}
  
const calcTotal = (total, tipAmt, taxAmt) => {
    const grandTotal = total + tipAmt + taxAmt;
    return grandTotal;
}

// const calcTip = (total, rate) => {
//     return total * (rate/100);
// }

// const calcTax = (total) => {
//     return total * (5.50/100);
// }


document.querySelector("#addButton1").addEventListener("click", () => {
    //Reading in total and rate value
    const total1 = parseFloat(document.querySelector("#guest").value);
    const rate = parseFloat(document.querySelector("#firstNumber").value);
    const rate1 = parseFloat(document.querySelector("#secondNumber").value);
    
    //Calculating tip, tax, and grand total
    // const tipTotal = calcTip(total, rate);
    // const taxTotal = calcTax(total);
    const result = calcTotal(total1, rate, rate1);

    //Displaying results
    document.querySelector("#guest").innerHTML = guest;
    document.querySelector("#firstNumber").innerHTML = "$" + firstNumber;
    document.querySelector("#secondNumber").innerHTML = "$" + secondNumber;
    document.querySelector("#addButton").innerHTML = "$" + result;
    
});
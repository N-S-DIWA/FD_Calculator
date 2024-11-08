function calcMaturityAmount(){

    // Code for getting input values.

    const principle =parseFloat(document.getElementById('principle').value);
    const interestRate =parseFloat(document.getElementById('interestRate').value);
    const tenure =parseFloat(document.getElementById('tenure').value);
    // to calculate maturityamount.
    const maturityAmount = principle * (principle*interestRate*tenure)/100;

    document.getElementById('result').innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}

// Add listener to the button outside of function.
// Event Listener.

document.getElementById('calculateBtn').addEventListener('click',calcMaturityAmount);
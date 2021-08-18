// handle deposit button id
document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit amount
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newdepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newdepositAmount);

    balanceTotal.innerText = newBalanceTotal;

    //clear input deposit field
    depositInput.value = '';
});


// handle withdraw button id
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newwithdrawAmount = withdrawInput.value;

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotal = withdrawTotal.innerText;
    const newwithdrawTotal = parseFloat(previouswithdrawTotal) + parseFloat(newwithdrawAmount);
    withdrawTotal.innerText = newwithdrawTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - parseFloat(newwithdrawAmount);

    balanceTotal.innerText = newBalanceTotal;

    //clear input withdraw field
    withdrawInput.value = '';
});
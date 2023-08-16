
function updateMoney(inputValue, currentValue){
    var inputValueNum = parseFloat(inputValue.value);
    var currentValueNum = parseFloat(currentValue.innerText);
    var newCurrentValue = inputValueNum + currentValueNum;
    currentValue.innerText = newCurrentValue;
    inputValue.value = '';
}

document.getElementById('deposite-button').addEventListener('click',function(){
    var total = document.getElementById('total-money');
    var depositeInput = document.getElementById('deposite-input');
    var currentDepositeValue = document.getElementById('deposite-money');
    if(isNaN(parseInt(depositeInput.value)) || parseFloat(depositeInput.value) < 0){
        alert('Amount is not valid')
        return;
    }
    totalMoney = parseFloat(total.innerText) + parseFloat(depositeInput.value);
    total.innerText = totalMoney;
    updateMoney(depositeInput ,currentDepositeValue);
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    var total = document.getElementById('total-money');
    var withdrawInput = document.getElementById('withdraw-input');
    var currentWithdrawValue = document.getElementById('withdraw-money');

    if(parseFloat(withdrawInput.value) > parseFloat(total.innerText) || isNaN(parseInt(withdrawInput.value)) || parseFloat(withdrawInput.value) <0){
        alert('Amount is not valid')
        return;
    }
    totalMoney = parseFloat(total.innerText) - parseFloat(withdrawInput.value);
    total.innerText = totalMoney;
    updateMoney(withdrawInput ,currentWithdrawValue);
})

document.getElementById('login-button').addEventListener('click',function(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email === 'salehinrifat52@gmail.com' && password === 'rifat'){
        window.location.href = 'bank.html';
    }else{
        alert('Please Enter valid id & pass')
    }
})

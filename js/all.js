var xhr = new XMLHttpRequest();
xhr.open('post',
    'https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader("Content-type",
    "application/x-www-form-urlencoded");
xhr.send('account=aaaa&password=aaaa');


//傳送表單
// var account = {
//     email: 'qqq@gmail.com',
//     password: '1234'
// }
// var xhr = new XMLHttpRequest();
// xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)
// xhr.setRequestHeader("Content-type","application/json");
// var data = JSON.stringify(account);
// xhr.send(data);

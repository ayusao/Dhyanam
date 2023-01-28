
// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const server = http.createServer(function(req,res){
//  res.writeHead(200, { 'Content-Type': 'text/html'})  
//  fs.readFile('index.html',function(error, data){
//     if(error){
//         res.writeHead(404)
//         res.write('Error:File Not Found')
//     }
//     else{
//         res.write(data)
//     }
//     res.end()
//  })
// })

// server.listen(port,function(error){
// if(error){
//     console.log('Something went wrong', error)
// }else{
//     console.log('Server is listening on port '+port)
// }

// })
// const form = [...document.querySelector('.form').childern];
// form.forEach((item,i)=>{
//     setTimeout(()=>{
//         item.style.opacity = 1;
//     },i*100);
// })

function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    // store();
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    console.log('storedName',storedName);

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == 'hiiii@gmail.com' && userPw.value == '1234'){
        // alert('You are logged in.');
        window.location.href="http://programminghead.com"; 
    }else{
        alert('Error on login');
    }
}
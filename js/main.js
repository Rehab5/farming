 alert("Welcome to my page \n Rehab Kosbar");

let temp = document.querySelector('template');
let Button = document.querySelector('.press');


Button.addEventListener('click' ,()=>{
    let x = temp.content.cloneNode(true);
    document.body.appendChild(x);
});



// function Show(e){
// 	e.preventDefault();
//     console.log(e);

//     if(ShowText){
//     	let x = temp.cloneNode(true);
//     	document.body.appendChild(x);
//     }else{
//     	let x = temp.cloneNode(false);
//     	document.body.appendChild(x);
//     }
// };


var userdetails ={
    name:'',
    email:'',
    phone:'',
    password:''
};

var Name= document.getElementById('name');
var email= document.getElementById('email');
var phone= document.getElementById('phone');
var password= document.getElementById('password');

var Users=[];

function addUser(event){

    event.preventDefault();
    console.log(event);
    
    userdetails.name =Name.value;
    userdetails.email= email.value;
    userdetails.phone = phone.value;
    userdetails.password =password.value;
    

    Users.push(userdetails);
    console.log(Users);
    
    var table = '';
    for (var user of Users){
        table +=
        `<tr>
            <th scope="row">${user.name}</th>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.password}</td>
        </tr>`
    };

    document.getElementById('tbody').innerHTML=table;
    userdetails={};
    Name.value='';
    email.value ='';
    phone.value ='';
    password.value='';
    
};

//pega o elemento pelo nome da tag do html, como exmplo a tag "button"
let btnAlert = document.getElementsByClassName("button")[0];

btnAlert.onclick = function(){
    alert("Isso é um alert!");
}

//pega o elemento pelo nome do id usado no html, como exmplo o id "btn1"
let btnAlertId = document.getElementById("btn1");

btnAlertId.onclick = function(){
    alert("Isso é um alert!");
}

//pega o elemento pelo nome da class usada no html, como exmplo a class "btn2"
let btnAlertClass = document.getElementsByClassName("btn2")[0];

btnAlertClass.onclick = function(){
    alert("Isso é um alert!");
}

//é usado para selecionar o primeiro elemento do css
let btnQuery = document.querySelector(".btn3");

btnQuery.onclick = function(){
    alert("Isso é um alert!");
}

//o queryall seleciona todos os elementos do css especificados
let QueryAll = document.querySelectorAll(".btn4");

for (let i = 0; i < QueryAll.length; i++) {
    QueryAll[i].style.backgroundColor = "red";
}


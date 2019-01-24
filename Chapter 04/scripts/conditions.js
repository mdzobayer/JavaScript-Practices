// prompt for name
var msg = document.getElementById("message");
var name = prompt("What is your name?", "");
var output = "";

if(name !== "") {  
    output = name;
    msg.style.color = "green";
}
else {
    output = "Come on - don't be shy!";
    msg.style.color = "red";
}

// output message
msg.innerHTML = output;
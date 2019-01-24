// prompt for number
var msg = document.getElementById("message");
var num = String(prompt("Bank Account Number", ""));

//while (num.length < 8) {
//	num = "0" + num;
//}
num = ("00000000" + num).substr(-8);

// output factorial message
msg.textContent = num;
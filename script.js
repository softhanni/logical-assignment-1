const notesCoins = [5000,1000,500,100,50,20,10,5,2,1]
var amount = prompt("Please enter amount");
if (amount < 0 || amount==0){
  alert("Please enter a positive number")
}
else{
  console.log("amount: " + amount + " repees");

for (var i = 0; i < notesCoins.length; i++){
var value = notesCoins[i];
var count = Math.floor(amount / value);
 if (count > 0) {
  console.log(count + " x " + value + " rupee " + (value > 10? "notes" : "coins"));
 }
  amount -=  value * count ;
 
}}
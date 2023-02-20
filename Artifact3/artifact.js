// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(rHeight, pColorEven, pColorOdd, pSymbol) {
upSide(rHeight, pColorEven, pColorOdd, pSymbol);
downSide(rHeight, pColorEven, pColorOdd, pSymbol);


}

function upSide(rHeight, pColorEven, pColorOdd, pSymbol) {

 for (let i = 1; i <= rHeight; i++) {
  var rLine =" ";
  
  
for(let j=1; j<=rHeight - i; j++) {  
 rLine +="<p>";
}
 
for (let k=1; k<=2*i - 1; k++) {
//Create each line on the Rhombus


//Is the position even or odd so we change the color
if (k%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("upSide").innerHTML = rLine;
}


function downSide(rHeight, pColorEven, pColorOdd, pSymbol){

for (let i= rHeight - 1;i >= 1;i--){
var rLine +=" ";
//Create each line on the Rhombus
for(let j=1; j<= rHeight - i;j++){
 rLine += "<p>";
}
for (let k =1; k<=2*i-1; k++){
//Is the position even or odd so we change the color
if (k%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downSide").innerHTML = rLine;
}

 

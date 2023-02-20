// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upSide(pHeight, pColorEven, pColorOdd, pSymbol);
downSide(pHeight, pColorEven, pColorOdd, pSymbol);


}

function upSide(pHeight, pColorEven, pColorOdd, pSymbol) {

 for (i = 1; i <= pHeight; i++) {
  var rLine =" ";
  
 
for(j=1; j<=pHeight - i; j++) {  
 rLine +="<p>";
}
 
for (k=1; k<=2*i - 1; k++) {
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


function downSide(pHeight, pColorEven, pColorOdd, pSymbol){

for (i= pHeight - 1;i >= 1;i--){
	var rLine =" ";
//Create each line on the Rhombus
for( j=1; j<= pHeight - i;j++){
 rLine += "<p>";
}
for ( k =1; k<=2*i-1; k++){
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



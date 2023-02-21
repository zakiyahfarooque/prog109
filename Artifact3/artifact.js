function makeRhombus() {
	let size = parseInt(document.getElementById("size").value);
	let color = document.getElementById("color").value;
	let symbol = document.getElementById("symbol").value;

	let rhombus = "";
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size - i - 1; j++) {
			rhombus += "&nbsp;&nbsp;";
		}
		for (let j = 0; j < 2 * i + 1; j++) {
			rhombus += "<span style=\"color: " + color + "\">" + symbol + "</span>";
		}
		rhombus += "<br>";
	}
	for (let i = size - 2; i >= 0; i--) {
		for (let j = 0; j < size - i - 1; j++) {
			rhombus += "&nbsp;&nbsp;";
		}
		for (let j = 0; j < 2 * i + 1; j++) {
			rhombus += "<span style=\"color: " + color + "\">" + symbol + "</span>";
		}
		rhombus += "<br>";
	}
	document.getElementById("rhombus").innerHTML = rhombus;
}

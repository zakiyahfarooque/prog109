function makeRhombus() {
  let size = parseInt(document.getElementById("size").value);
  let symbol = document.getElementById("symbol").value;
  let color1 = document.getElementById("color1").value;
  let color2 = document.getElementById("color2").value;

  let rhombus = "";
  let colors = [color1, color2];
  let colorIndex = 0;

  for (let i = 0; i < size; i++) {
    for (let j = size - i; j > 1; j--) {
      rhombus += "&nbsp;&nbsp;";
    }
    for (let j = 0; j <= i; j++) {
      let color = colors[colorIndex % 2];
      rhombus += "<span style=\"color: " + color + "\">" + symbol + "</span>";
      colorIndex++;
    }
    for (let j = i - 1; j >= 0; j--) {
      let color = colors[colorIndex % 2];
      rhombus += "<span style=\"color: " + color + "\">" + symbol + "</span>";
      colorIndex++;
    }
    rhombus += "<br>";
  }

  for (let i = size - 2; i >= 0; i--) {
    for (let j = size - i; j > 1; j--) {
      rhombus += "&nbsp;&nbsp;";
    }
    for (let j = 0; j <= i; j++) {
      let color = colors[colorIndex % 2];
      rhombus += "<span style=\"color: " + color + "\">" + symbol + "</span>";
      colorIndex++;
    }
    for (let j = i - 1; j >= 0; j--) {
      let color = colors[colorIndex % 2];
      rhombus += "<span style=\"color: " + color + "\">" + symbol + "</span>";
      colorIndex++;
    }
    rhombus += "<br>";
  }

  document.getElementById("rhombus").innerHTML = rhombus;
}

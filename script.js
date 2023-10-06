

function generateSentence() {
  var element1 = document.getElementById("element1").value;
  var element2 = document.getElementById("element2").value;
  var element3Select = document.getElementById("element3-select");
  var element3 = element3Select.value || document.getElementById('element3-input').value;
  var element4Select = document.getElementById('element4-select');
  var element4 = element4Select.value || document.getElementById('element4-input').value;
  var element5 = document.getElementById("element5").value;

  var sentence = element1 + " " + element2 + " " + element3 + " " + element4 + " " + element5;

  document.getElementById("sentence").innerHTML = sentence;
}

function generateSentence() {
  var element1 = document.getElementById("element1").value;
  var element2 = document.getElementById("element2").value;
  var element3 = document.getElementById("element3").value;
  var element4 = document.getElementById("element4").value;
  var element5 = document.getElementById("element5").value;

  var sentence = element1 + " " + element2 + " " + element3 + " " + element4 + " " + element5;

  document.getElementById("sentence").innerHTML = sentence;
}

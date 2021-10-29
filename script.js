function cal() {
  var tp = document.getElementById('totalbill').value;
  var option = document.getElementById("tippercent").value;
  var share = document.getElementById('split').value;

  var pem;

  if (option == "1") {
    pem = tp * (20 / 100);

  } else if (option == "2") {
    pem = tp * (10 / 100);

  } else if (option == "5") {
    pem = tp * (5 / 100);

  }
  var rslt = pem / share;
  document.getElementById('Tip').innerHTML = rslt;


}

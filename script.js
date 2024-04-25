var password = document.getElementById("password");
function generate() {
  var char = "1234567890QWERTYUIOPASDFGHJKLXCVBNM"
  var password = "";
  var Length = 10;
  for (var i = 0; 1 <= Length; i++) {
    var randonNum = Math.floor(Math.random() * char.length);
    password += char.substring(randonNum, randonNum +1);
  }
  document.getElementById("password").value = password;
}
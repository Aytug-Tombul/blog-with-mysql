var loginDiv = ` <div id="loginStatus">
<input type="text" class="username" style="margin-bottom : 10px;" placeholder="Username"><br>
<input type="password" class="password" style="margin-bottom : 10px;" placeholder="Password"><br>
<button type="button" id="login">login</button>
<button type="button" id="register">register</button><br>
<br>
<a  onclick="forgot()">Forgot Password ? (Click)</a>
</div>`;

var forgotDiv = ` <div id="forgotStatus">
<form>
<h2>Forgot Password</h2>
<a>Input E-mail:</a>
<input type="text" class="forgotEmail" style="margin-bottom : 10px;" placeholder="Email"><br>
<button type="button" id="forgotBtn">Submit</button>
<form>
</div>`;

var registerDiv = `<div id="RegisterStatus">

<h2>Register</h2>
<form enctype="multipart/form-data" method="post" name="register">
<input type="text" id="username" style="margin-bottom : 10px;" placeholder="Username"><br>
<input type="password" id="password" style="margin-bottom : 10px;" placeholder="Password"><br>
<input type="text" id="email" style="margin-bottom : 10px;" placeholder="E-mail"><br>
<input type="text" id="referrer" style="margin-bottom : 10px;" placeholder="Referrer"><br>
<input type="file" id="image" style="margin-bottom : 10px;"><br>
<button type="button" id="signup">Sign Up</button><br>
</form>
<br>
</div>`;

$(document).on("click", "#forgotBtn", function() {
  var forgotEmail= $(".forgotEmail").val();
  $.ajax({
    url: "forgotpassword.php",
    type: "POST",
    dataType: "text",
    data: {email : forgotEmail},
    success: function(response) {
        window.alert(response);
    }
  });
});

function forgot() {
  $("#loginStatus").remove();
  $("body").append(forgotDiv);
}
$(document).on("click", "#register", function() {
  $("#loginStatus").remove();
  $("body").append(registerDiv);
});

$(document).on("click", "#signup", function() {
  var images = $("#image")[0].files[0];
  var usernameVal = $("#username").val();
  var passwordVal = $("#password").val();
  var emailVal = $("#email").val();
  var referrerVal = $("#referrer").val();
 
  var fd = new FormData();
  fd.append("username", usernameVal);
  fd.append("password", passwordVal);
  fd.append("email", emailVal);
  fd.append("referrer", referrerVal);
  fd.append("image", images);
  $.ajax({
    url: "register.php",
    type: "POST",
    dataType: "text",
    data: fd,
    processData: false,
    contentType: false,
    success: function(data) {
        window.alert(data)
        $("#RegisterStatus").remove();
        $("body").append(loginDiv);
    }
  });
});

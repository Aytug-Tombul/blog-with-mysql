var loginDiv = ` <div id="loginStatus">
<form>
  <div class="form-group col-md-3">
    <label>Username</label>
    <input
      type="text"
      class="form-control"
      id="username"
      placeholder="Username"
    />
    <small class="form-text text-muted"
      >We'll never share your username with anyone else.</small
    >
  </div>
  <div class="form-group col-md-3">
    <label>Password</label>
    <input
      type="password"
      class="form-control"
      id="password"
      placeholder="Password"
    />
  </div>
  <div class="form-group col-md-3">
    <button type="button" class="btn btn-primary" id="login">
      login
    </button>
    <button type="button" class="btn btn-primary" id="register">
      register</button
    > 
    <span class="badge badge-pill badge-warning" onclick=forgot()>Forgot Password ?</span>
  </div>
</form>
</div>`;

var forgotDiv = ` <div id="forgotStatus">
<form>
<div class="form-group col-md-3">
  <label>Email</label>
  <input
    type="text"
    class="form-control"
    id="forgotEmail"
    placeholder="Email"
  />
  <small class="form-text text-muted"
    >We'll never share your Email with anyone else.</small
  >
  <button type="button" class="btn btn-primary" id="forgotBtn">Submit</button>
</div>
</form> 
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
  var forgotEmail = $("#forgotEmail").val();
  $.ajax({
    url: "forgotpassword.php",
    type: "POST",
    dataType: "text",
    data: { email: forgotEmail },
    success: function(response) {
      window.alert(response);
    }
  });
});

$(document).on("click", "#login", function() {
  var loginUserName = $("#username").val();
  var loginUserPw = $("#password").val();
  $.ajax({
    url: "login.php",
    type: "POST",
    dataType: "text",
    data: { username: loginUserName, password: loginUserPw },
    success: function(res) {
      res = JSON.parse(res);
      if (res.result == "success") {
        window.alert("Login Success Welcome " + res.username);
        $("#loginStatus").remove();
      } else {
        window.alert("Login failed Please Check your username and password");
      }
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
      window.alert(data);
      $("#RegisterStatus").remove();
      $("body").append(loginDiv);
    }
  });
});

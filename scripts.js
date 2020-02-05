var forgotDiv = ` <div id="forgotStatus">
<h2>Forgot Password</h2>
<a>Input E-mail:</a>
<input type="text" class="email" style="margin-bottom : 10px;" placeholder="Email"><br>
<button type="button" id="Submit">Submit</button>
</div>`


var registerDiv=`<div id="RegisterStatus">

<h2>Register</h2>
<input type="text" id="username" style="margin-bottom : 10px;" placeholder="Username"><br>
<input type="password" id="password" style="margin-bottom : 10px;" placeholder="Password"><br>
<input type="text" id="email" style="margin-bottom : 10px;" placeholder="E-mail"><br>
<input type="text" ="referrer" style="margin-bottom : 10px;" placeholder="Referrer"><br>
<input type="file" ="image" style="margin-bottom : 10px;"><br>

<button type="button" id="signup">Sign Up</button><br>
<br>
</div>`


function forgot() {
    $("#loginStatus").remove();
    $("body").append(forgotDiv);
}
$(document).on("click", "#register", function() {
    $("#loginStatus").remove();
    $("body").append(registerDiv);
  });

$()
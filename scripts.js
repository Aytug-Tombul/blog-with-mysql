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
<h2>Forgot Password <span class="badge badge-secondary">?</span></h2>
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

<div class="container">
            <div class="row text-white">
                <div  class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <div class="px-2">
                        <form class="justify-content-center" method="post" role="form" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" class="form-control" id="username" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" placeholder="example@example.com">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="referrer" placeholder="Referrer">
                            </div>
                            <div class="form-group">
                              <input type="file" class="form-control" id="image">
                            </div>
                            <button type="button" class="btn btn-primary btn-lg" id="signup" >Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>
<br>
</div>`;

var blogDiv = `<div class="container">
<div id="posts"></div>
<div class="form-group green-border-focus">
<textarea class="form-control" id="post" rows="5" placeholder="Write Something Here..."></textarea>
<button type="button" class="btn btn-primary btn-lg" id="postIt">POST</button>
</div>
</div>`;
var loggedUsername = "";
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
                loggedUsername = res.username;
                $("#loginStatus").remove();
                $("body").append(blogDiv);
            } else {
                window.alert("Login failed Please Check your username and password");
            }
        }
    });
});

function postIt(post, username, postID = null) {
    postDiv = `<div class="card mb-3" id="listedPost">
    <img class="card-img-top">
    <div class="card-body">
      <h5 class="card-postUsername">` + username + `</h5>
      <p class="card-text">` + post + `</p>
      <p class="card-text"><small class="text-muted">` + postID +
        `</small></p>
    </div>
  </div>`
    $("#posts").append(postDiv);
}

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

$(document).on("click", "#postIt", function() {
    var post = $("#post").val();
    $.ajax({
        url: "post.php",
        type: "POST",
        data: { post: post, username: loggedUsername },
        success: function(res) {
            res = JSON.parse(res);
            console.log();
            postIt(post, loggedUsername, res[0].id);
        }
    });

});
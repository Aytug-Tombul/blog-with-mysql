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

var mod =""

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
var buttonsDiv = `
  <div class="row" style="padding: 10px;">
  <div class="form-group col-md-3">
  <button type="button" class="btn btn-primary" id="deleteBtn">
    Delete User
  </button>
  </div>
  <div class="form-group col-md-3">
             <button type="button" class="btn btn-primary" id="updateBtn">
               Update User
             </button>
             </div>
             <div class="form-group col-md-3">
  <button type="button" class="btn btn-primary" id="updatePostBtn">
    Update Post
  </button>
  </div>
  <div class="form-group col-md-3">
  <button type="button" class="btn btn-primary" id="deletePostBtn">
    Delete Post
  </button>
  </div>
             </div>`;

var blogDiv = `<div id="blog">
<div class="container">
<div id="posts" style="padding: 10px;"></div>
<div class="form-group green-border-focus">
<textarea class="form-control" id="post" rows="5" placeholder="Write Something Here..."></textarea>
<button type="button" class="btn btn-primary btn-lg" id="postIt">POST</button>
</div>
</div>
</div>`;

var tableDiv = `<table class="table">
<thead>
  <tr>
    <th scope="col">User Photo</th>
    <th scope="col">id</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>
    <th scope="col">Referrer</th>
    <th scope="col">Role</th>
  </tr>
</thead>
<tbody id="users">
</tbody>
</table>`;

var modalCreate = ` <!-- The Modal -->
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body" style="text-align: center;">
                
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>`;

var deleteDiv = `<div class="col-md-6" id="deleteArea" class="row" style="margin: 30px;" >
    <div class="input-group">
    <input type="text" class="form-control" placeholder="Input ID" aria-label="ID" aria-describedby="basic-addon2" id="inputDelete">
<div class="input-group-append">
  <button class="btn btn-outline-secondary bg-dark text-light" id = "deleteBtn2"type="button">Delete</button>
</div>
</div>
</div>`;

var updatePostDiv = `<div class="col-md-6" id="updatePostArea" class="row" style="margin: 30px;" >
    <div class="input-group">
    <input type="text" class="form-control" placeholder="Input ID" aria-label="ID" aria-describedby="basic-addon2" id="postID">
    
<div class="input-group">
<textarea class="form-control" id="post" rows="5" placeholder="Write Something Here..."></textarea>
</div>
<button class="btn btn-outline-secondary bg-dark text-light" id = "updateBtn2"type="button">Update</button>
</div>
</div>`;

var updateDiv = `<div class="col-md-6" id="updateArea" class="row" style="margin: 30px;" >
<div class="input-group">
<input type="text" class="form-control" placeholder="Input ID" aria-label="ID" aria-describedby="basic-addon2" id="inputID">
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
                            <button type="button" class="btn btn-primary btn-lg" id="change" >Change</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>

</div>

<br>
</div>`;





function modalSend(_src) {
  $(".modal-body").empty();
  var imgCreate = '<img style="width: 300px;" src="' + _src + '">';
  $(".modal-body").append(imgCreate);
}

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
$(document).on("click", "#panelOpen", function() {
  $(".container").remove();
  getUsers();
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
        listPosts();
        var panel = res.panelBtn;
        if (res.panelBtn != null) {
          $("#addHere").append(String(panel));
        }
      } else {
        window.alert("Login failed Please Check your username and password");
      }
    }
  });
});

function postIt(post, username, postID = null, postdate) {
  postDiv =
    `<div class="card mb-3" id="listedPost">
    <img class="card-img-top">
    <div class="card-body">
      <p class="card-text">` +
    post +
    `</p>
      <p class="card-text text-right"><small class="text-muted">` +
    "#" +
    postID +
    "  " +
    username +
    " " +
    postdate +
    `</small></p>
    </div>
  </div>`;
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

function listPosts() {
  $.ajax({
    url: "getPosts.php",
    type: "GET",
    success: function(data) {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        postIt(data[i].post, data[i].username, data[i].id, data[i].post_date);
      }
    }
  });
}
$(document).on("click", "#postIt", function() {
  var post = $("#post").val();
  $.ajax({
    url: "post.php",
    type: "POST",
    data: { post: post, username: loggedUsername },
    success: function() {
      $("#posts").empty();
      listPosts();
      $("#post").val("");
    }
  });
});

function getUsers() {
  $.ajax({
    url: "getUsers.php",
    type: "GET",
    success: function(result) {
      $("#blog").empty();
      $("#blog").append(buttonsDiv);
      $("#blog").append(tableDiv);
      $("#blog").append(modalCreate);
      var data = JSON.parse(result);
      for (let i = 0; i < data.length; i++) {
        var imageSrc = "images/" + data[i].photo;
        var tableElement =
          "<tr id=" +
          data[i].id +
          ">" +
          "<td>" +
          '<img src="' +
          imageSrc +
          '" data-toggle="modal" data-target="#myModal" onclick="modalSend(this.src)" style="width: 50px;">' +
          "</td>" +
          "<td>" +
          data[i].id +
          "</td>" +
          "<td>" +
          data[i].username +
          "</td>" +
          "<td>" +
          data[i].email +
          "</td>" +
          "<td>" +
          data[i].referrer +
          "</td>" +
          "<td>" +
          data[i].role +
          "</td>" +
          "</tr>";
        $("#users").append(tableElement);
      }
      $("#blog").append(deleteDiv);
    }
  });
}

function backBlog() {
  $("#blog").remove();
  $("body").append(blogDiv);
  listPosts();
}
$(document).on("click", "#deleteBtn", function() {
  getUsers();
  mod=1
});

$(document).on("click", "#deletePostBtn", function() {
  $("#deleteArea").remove();
  $("#blog").append(deleteDiv);
  $(".container").empty();
  $(".table").remove();
  $("#blog").append(`<div id="posts" style="padding: 10px;"></div>`);
  listPosts();
  mod=2
});

$(document).on("click", "#deleteBtn2", function() {
  var deleteID = $("#inputDelete").val();
  console.log(deleteID);
  $.ajax({
    url: "delete.php",
    type: "POST",
    data: { deleteID: deleteID, mode :mod},
    success: function() {
      if (mod==1) {
        window.alert("User Has Been Deleted");
      $(".table").remove();
      getUsers();
      }
      else if (mod==2) {
        window.alert("Post Has Been Deleted");
      $("#posts").empty()
      listPosts()
      }
    }
  });
});
$(document).on("click", "#updateBtn", function() {
  $("#blog").empty();
  $("#blog").append(buttonsDiv);
  $("#blog").append(updateDiv);
});

$(document).on("click", "#change", function() {
  var updateID = $("#inputID").val();
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
  fd.append("updateID", updateID);
  $.ajax({
    url: "update.php",
    type: "POST",
    dataType: "text",
    data: fd,
    processData: false,
    contentType: false,
    success: function(data) {
      window.alert(data);
      getUsers();
    }
  });
});

$(document).on("click", "#updatePostBtn", function() {
  $("#blog").empty();
  $("#blog").append(buttonsDiv);
  $("#blog").append(updatePostDiv);
  $("#blog").append(`<div id="posts" style="padding: 10px;"></div>`);
  listPosts();
});
$(document).on("click", "#updateBtn2", function() {
  var updateID = $("#postID").val();
  var changePost = $("#post").val();
  console.log(updateID+" "+changePost);
  $.ajax({
    url: "updatePost.php",
    type: "POST",
    data: { updateID: updateID, post :changePost},
    success: function(data) {
      window.alert(data);
      listPosts;
      }
});
})
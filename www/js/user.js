"use strict";

//TEMPORARY STUFF
function moreTempStuff() {
  var tempInfo = document.getElementById("user-form");
  var username = tempInfo.elements[0].value;
  var email = tempInfo.elements[1].value;
  console.log("username: " + username + "\nemail: " + email);
  $("#login").hide();
  $("#info").show();
  $("#logout").show();
  $("#info").html('<h1>Hello!</h1><h2>'+username+'</h2><h3>'+email+'</h3>');
}
function logOut() {
  $("#login").show();
  $("#info").hide();
  $("#logout").hide();
}

<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <input id="in" type="text"></input>
  <button id="button">a</button>
  <p id="p"></p>

<script>
var input=document.getElementById("in");
var button=document.getElementById("button");
var p=document.getElementById("p");
button.addEventListener("click",function(event)
{
  var xhr= new XMLHttpRequest();
  xhr.open("GET","https://api.github.com/users?since="+input.value);
  xhr.onload=function()
  {
    p.innerHTML="";
    console.log(xhr.responseText);
    var user=JSON.parse(xhr.responseText);
    var main=user[0].login;
    p.innerHTML=main;
  };
  xhr.send();
});

</script>
</body>
</html>

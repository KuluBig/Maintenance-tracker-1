function signup() {
    var username = document.forms["signup"]["username"].value;
    console.log(username);
    document.getElementByName("result").innerHTML = username;
    //alert(username);
    //alert("testing")
}

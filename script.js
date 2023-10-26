function openSignin(){
    var div = document.getElementById("login");
    div.style.display = "none";
    var div = document.getElementById("signin");
    div.style.display = "inline-block";
}

function openLogin(){
    var div = document.getElementById("signin");
    div.style.display = "none";
    var div = document.getElementById("login");
    div.style.display = "inline-block";
}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }
function login() {

  let us = document.getElementById('loginEmail').value;
  let pw = document.getElementById('loginPassword').value;

  let data = {email: us, password: pw};
  console.log(data)
  let p = fetch(`/login/${us}/${pw}`, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"}
  });
  p.then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
    if (text.startsWith('true')) {
    	window.location.href = '/app/homepage.html'; //?user=' + encodeURIComponent(us);
    } else {
    	console.log("attempt failed")
    }
  });
}

function createAccount() {
  let us = document.getElementById('signUpEmail').value;
  let pw = document.getElementById('signUpPassword').value;

  console.log(us);
  console.log(pw);

  let p = fetch('/create/account', {
  	method: 'POST',
  	body: JSON.stringify({email: us, password: pw}),
  	headers: {"Content-Type": "application/json"}
  });
  p.then((response) => {
    return response.text();
  }).then((text) => { 
    if (text.startsWith('true')) {
      // successful sign up
    	window.location.href = '/account/editprofile.html'; 
    } else {
      alert("Account already exist!");
    }
  }).catch((err) => {
    alert(err);
  });
}

function showSignUp() {
	let signUP = document.getElementById("signUpForm");
	let login = document.getElementById("loginForm");

	login.classList.add("hidden")
	signUP.classList.remove("hidden")
}

function showLogin() {
	let signUp = document.getElementById("signUpForm");
	let login = document.getElementById("loginForm");

	signUp.classList.add("hidden")
	login.classList.remove("hidden")
}




function Click() {
  let inp = document.getElementById('email');
  let rep = document.getElementById('psw-repeat');
  let inp2 = document.getElementById('psw');
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let passwor =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  if (emailPattern.test(inp.value) != true) {
    let p = document.getElementById('out');
    p.innerHTML = `Wrong email address`;
  } else {
    setCookie('email', inp.value);
  }
  if (passwor.test(inp2.value) != true) {
    let p = document.getElementById('out2');
    p.innerHTML = `Passwords wrong`;
  }

  if (inp2.value.includes(rep.value) != true) {
    let p = document.getElementById('rep');
    p.innerHTML = `Passwords must match`;
  }
}

function setCookie(cname, cvalue) {
  let d = new Date();
  d.setTime(new Date().getTime() + 60 * 60 * 1000);
  let expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

function Load() {
  let p = document.getElementById('inf');
  p.innerHTML = `Hello ${getCookie('email')}!`;
  let a = document.createElement('a');
  a.href = `index.html`;
  a.text = ' exit';
  p.appendChild(a);
}

function Check() {
  let name = document.getElementById('fname').value;
  let lastname = document.getElementById('lname').value;
  let t1 = /^[A-Za-z]+$/;
  if (
    t1.test(name) &&
    t1.test(lastname) &&
    name.length > 1 &&
    name.length < 20 &&
    lastname.length > 1 &&
    lastname.length < 20
  ) {
    setCookie('name', name);
    setCookie('lastname', lastname);
  } else {
    let p = document.getElementById('nm');
    let p1 = document.getElementById('ln');
    p1.innerHTML = 'Registry error';
    p.innerHTML = 'Registry error';
  }
}

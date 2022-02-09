function Click() {
  const inp = document.getElementById('email');
  let inp2 = document.getElementById('psw');
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let passwor =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  if (emailPattern.test(inp.value) != true) {
    let p = document.getElementById('out');
    p.innerHTML = `Wrong email address`;
  } else if (passwor.test(inp2.value) != true) {
    let p = document.getElementById('out2');
    p.innerHTML = `Passwords must match`;
  } else {
    document.location.href = 'http://ru.stackoverflow.com';
    return false;
  }
}

let p = document.getElementById('hell');
p.innerHTML = `Hello,${inp.value}`;

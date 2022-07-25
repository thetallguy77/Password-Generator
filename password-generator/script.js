let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-=+";
let isAlive = false;
let randomPass1 = document.getElementById("pw-1");
let randomPass2 = document.getElementById("pw-2");
let randomPass3 = document.getElementById("pw-3");
let randomPass4 = document.getElementById("pw-4");
let passwords = [];

function startPasswords() {
  isAlive = true;
  let p1 = randomPasswords();
  let p2 = randomPasswords();
  let p3 = randomPasswords();
  let p4 = randomPasswords();
}

function randomPasswords() {
  let password1 = "";
  for (var i = 0; i < 18; i++)
    password1 += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  randomPass1.innerHTML = password1;

  let password2 = "";
  for (var i = 0; i < 18; i++)
    password2 += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  randomPass2.innerHTML = password2;

  let password3 = "";
  for (var i = 0; i < 18; i++)
    password3 += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  randomPass3.innerHTML = password3;

  let password4 = "";
  for (var i = 0; i < 18; i++)
    password4 += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  randomPass4.innerHTML = password4;
}

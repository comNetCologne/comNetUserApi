const form = document.getElementById("login-form");
const lost_psw = document.getElementById("psw_span");
const register = document.getElementById("reg_span");

form.addEventListener("submit", formSubmit);
lost_psw.addEventListener("click",lost_psw_click)
register.addEventListener("click",register_click)
function formSubmit(e) {
  e.preventDefault()

  const formData = {
    username: document.querySelector('input[name="username"]').value,
    key: document.querySelector('input[name="key"]').value
  };

  fetch("http://192.168.90.10:5000/api/auth",
  {
    mode: 'cors',
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error))
}

function lost_psw_click(){
  location.replace('/webserverKoeln/reset_password.html');
}

function register_click(){
  location.replace('/webserverKoeln/register.html');
}
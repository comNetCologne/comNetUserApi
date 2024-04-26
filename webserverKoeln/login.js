const form = document.getElementById("login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault()

  const formData = new FormData();
  formData.append(
    'username',
    document.querySelector('input[name="username"]').value
  )
  formData.append(
    'key',
    document.querySelector('input[name="key"]').value
  )

  fetch("http://192.168.90.10:5000/api/auth",
  {
    mode: 'cors',
    method: "POST",
    body: formData,
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error))
}
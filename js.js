
function afterLogin(){
  w3.hide('#login_btn');
  w3.show('#loading');
  wait();
  redirect();
}
function wait() {
    setTimeout(function(){ w3.hide('#loading')}, 3000);
  }
function redirect() {
    setTimeout(function(){ window.location.replace('/join.html');document.getElementById('login_success').innerHTML = "Login Success";}, 2000);
  }

  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxp4lREQWKMaX9R6hAFNgh7yVXyOM9sV9hTQ19hSJp5P9uxpZmRLnWO8IXN68O3H7dQ/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => afterLogin())
        .catch(error => console.error('Error!', error.message))
    })

 
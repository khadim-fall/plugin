 let myForm = document.getElementById('myForm');

myForm.addEventListener('submit',function(e){
  let username =document.getElementById('id');
  let password =document.getElementById('password');
  if (username.value.trim() != 'Ahmath Bamba MBACKE' && password.value.trim()!='passer') {
    let myError = document.getElementById('error');
    let myError1 = document.getElementById('error1');
    myError.innerHTML = "le champs nom utilisateur est incorrect";
    myError.style.color='red';
    myError1.innerHTML = "le champs password est incorrect";
    myError1.style.color='red';
    e.preventDefault();
  }
  else if (username.value.trim() == 'Ahmath Bamba MBACKE' && password.value.trim()!='passer') {
    let myError1 = document.getElementById('error1');
    myError1.innerHTML = "le champs password est incorrect";
    myError1.style.color='red';
    e.preventDefault();
  }
  else if (username.value.trim() != 'Ahmath Bamba MBACKE' && password.value.trim()=='passer') {
    let myError = document.getElementById('error');
    myError.innerHTML = "le champs utilisateur est incorrect";
    myError.style.color='red';
    e.preventDefault();
  }
  else if (username.value.trim() == '' && password.value.trim()=='') {
    let myError = document.getElementById('error');
    let myError1 = document.getElementById('error1');
    myError.innerHTML = "le champs nom utilisateur est vide";
    myError.style.color='red';
    myError1.innerHTML = "le champs password est vide";
    myError1.style.color='red';
    e.preventDefault();
  }
});
   
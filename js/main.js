
const btn = document.getElementById('buton');
const miForm = document.getElementById("formCont");

window.onscroll = function() {
  scrollFunction();
}

 miForm.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_b9077ps';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje Enviado';
      let imagen = '<img src= "img/ok.com.png" width=30 height=30 >'
      document.getElementById("mensaje").innerHTML = "El Formulario se Completo con Exito" + imagen;
    }, (err) => {
      btn.value = 'Mensaje Enviado';
      alert(JSON.stringify(err));
    });
});



function scrollFunction() {
  var btnScrollToTop = document.getElementById("btnScroll");
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "block";
    btnScrollToTop.style.right = "30px";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

function scrolltoTop() {
  document.body.scrollTop = 0;

  document.documentElement.scrollTop = 0;
}







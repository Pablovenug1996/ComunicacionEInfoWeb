'use strict'

window.addEventListener('load', init, false);

function init() {
    let email =  document.getElementById('suscripcionTxt');
    let btnEnviar =  document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = suscripcionTxt.value;

        if(email === '') {
            alerta.textContent = 'El campo email está vacío!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Campo vacío",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 

        }else if(expressionEmail.test(email) === false) {
            alerta.textContent = 'Email invalido!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Email invalido!!!",
                showConfirmButton: false,            
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 
        }else {
            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            emailjs.sendForm('service_q0qyd96', 'template_9nl7n6p', '#form2', 'atYuuM_A7yhQPkzs6');
            cleanInputs();

            swal.fire({
                title: "Enviando",
                showConfirmButton: false,
                timer: 3000,          
                html: '<iframe src="https://lottie.host/?file=24fb22c4-cef9-4a6e-857a-3b74c96bd107/udJYyYaXmi.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 
        }
    }
    function cleanInputs(){
        suscripcionTxt.value = '';
    }
}
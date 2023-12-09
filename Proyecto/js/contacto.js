window.addEventListener('load', init, false);

function init() {
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        mensaje = mensajeTxt.value;

        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe rellenar todos los campos!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Todos los campos están vacíos",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            })  

        } else if (nombre === '') {
            alerta.textContent = 'El campo nombre está vacío!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Campo nombre vacío",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            })  

        } else if (apellido === '') {
            alerta.textContent = 'El campo apellido esta vacío!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Campo apellido vacío",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            })  

        } else if (email === '') {
            alerta.textContent = 'El campo email esta vacío!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Campo email vacío",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 

        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email invalido!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Email invalido",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 

        } else if (numero === '') {
            alerta.textContent = 'El campo teléfono esta vacío!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Campo telefono vacío",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 

        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje esta vacío!!!';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

            swal.fire({
                title: "Campo mensaje vacío",
                showConfirmButton: false,               
                html: '<iframe src="https://lottie.host/?file=d7f0aa73-e5d2-4070-8d51-832b08fcd063/3Q40Y31TWZ.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            }) 

        } else {
            alerta.textContent = 'Mensaje enviado';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            
            swal.fire({
                title: "Enviando",
                showConfirmButton: false,
                timer: 3000,          
                html: '<iframe src="https://lottie.host/?file=24fb22c4-cef9-4a6e-857a-3b74c96bd107/udJYyYaXmi.json"></iframe>',
                customClass: {
                    title: 'tituloCarga',
                  }
            })

            emailjs.sendForm('service_q0qyd96', 'template_xvzpctc', '#form', 'atYuuM_A7yhQPkzs6');
            cleanInputs();
        }
    }

    function cleanInputs() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}
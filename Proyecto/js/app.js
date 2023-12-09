// Carrusel testimonial

document.addEventListener('DOMContentLoaded', function() {
    let testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) testimonial.classList.remove('active');
    });
});

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const next = document.getElementById('next')
const prev = document.getElementById('prev')
if(next) next.addEventListener('click', () => changeTestimonial(1));
if(prev) prev.addEventListener('click', () => changeTestimonial(-1));

function changeTestimonial(dir) {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + dir + testimonials.length) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
}


// Carrusel navidad

let currentIndex2 = 0;
const slides = document.querySelectorAll('.slide');
const next2 = document.getElementById('next2')
const prev2 = document.getElementById('prev2')
if(next2) next2.addEventListener('click', () => changeSlide(1));
if(prev2) prev2.addEventListener('click', () => changeSlide(-1));

function changeSlide(dir) {
  slides[currentIndex2].classList.remove('active');
  currentIndex2 = (currentIndex2 + dir + slides.length) % slides.length;
  slides[currentIndex2].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  slides[0].classList.add('active');
});


// Suscripción

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

//Catalogo
const catalogueElements = document.querySelectorAll('.masonry-grid > .element > img');
console.log(catalogueElements);
catalogueElements.forEach(element=>{
    element.addEventListener('click',(event)=>{
        const parent = event.target.parentNode;
        console.log(parent);
        const modal = parent.querySelector('.element-modal');
        if(modal) modal.classList.remove('hidden');
    })
})

const catalogueModals = document.querySelectorAll('.masonry-grid > .element > .element-modal');

catalogueModals.forEach(modal=>{
    modal.addEventListener('click',event=> {
        if(event.target === modal){
            event.target.classList.add('hidden');
        }
    })
})

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion =>{
    const accordionHeader = accordion.querySelector('.accordion-header');
    accordionHeader.addEventListener('click',event=>{
        accordion.classList.toggle('active');
    })
})



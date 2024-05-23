document.addEventListener('DOMContentLoaded', function () {
    const camposFormulario = document.querySelectorAll('.campo_formulario');
    const erros = document.querySelectorAll('.erro');
    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('click', function (evento) {
        evento.preventDefault();
    })


    camposFormulario.forEach(function (campo, index) {
        campo.addEventListener('blur', function () {
            if (!campo.checkValidity()) {
                if (campo.validity.typeMismatch) {
                    erros[index].textContent = '*Preencha corretamente';
                    erros[index].style.color = 'red'
                } else if (campo.validity.tooShort) {
                    erros[index].textContent = `Deve conter no mínimo ${campo.getAttribute('minlength')} caracteres`;
                    erros[index].style.color = 'red'
                } else if (campo.validity.valueMissing) {
                    erros[index].textContent = ' *Este campo é obrigatório';
                    erros[index].style.color = 'red'
                }
            } else {
                erros[index].textContent = '';
            }
        });
    });
});


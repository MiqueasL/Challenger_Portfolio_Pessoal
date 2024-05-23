
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('[data-formulario]');

    if (formulario) {
        formulario.addEventListener('click', function (e) {
            if (e.target && e.target.matches('.btn_formulario')) {
                e.preventDefault();
                
                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const assunto = document.getElementById('assunto').value;
                const mensagem = document.getElementById('mensagem').value;

                const listRepostas = {
                    'nome': nome,
                    'email': email,
                    'assunto': assunto,
                    'mensagem': mensagem
                };

                localStorage.setItem('cadastro', JSON.stringify(listRepostas));
                window.location.href = 'index.html';
            }
        });
    } 
});


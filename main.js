const form = document.getElementById('form-cadastro');
    const mensagemSucesso = 'Valor adicionado corretamente!';
    const mensagemError = 'Valor A maior do que B!';
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    //const button = document.querySelector('#btn-cadastrar')
    //button.addEventListener('click', 

    form.addEventListener('submit', function(e) {
        e.preventDefault()
        var a = window.document.getElementById('numero-campoA').value
        var b = window.document.getElementById('numero-campoB').value
        if(b > a){
            containerMensagemSucesso.innerText = mensagemSucesso
            containerMensagemSucesso.style.display = 'block'
            document.querySelector('.error-message').style.display = 'none'
        }
        else{
            document.querySelector('.error-message').innerText = mensagemError
            document.querySelector('.error-message').style.display = 'block'
            containerMensagemSucesso.style.display = 'none'
            
        }
        window.document.getElementById('numero-campoA').value = ''
        window.document.getElementById('numero-campoB').value = ''
    }
)



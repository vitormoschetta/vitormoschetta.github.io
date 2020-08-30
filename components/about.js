Vue.component('about', {
    props: ['identificacao'],
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Sobre</h2>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    <p>Casado, 31 anos, pai de dois lindos meninos. Fui militar das forças armadas por 8 anos. Gerente comercial por 2 anos e meio.
                    Sempre me preocupei em facilitar as coisas, criando mecanismos, testando ferramentas e automatizando processos.  
                    Percebi que essa era a minha paixão: resolver problemas por meio da tecnologia. 
                    <a href="documents/Curriculo.pdf" class="btn btn-fill" target="_blank">Download Curriculo</a>                  
                </div>
            </div>
        </div>
    `
  })


  var about = new Vue({
    el: '#about',
    data: {
    
    }
  })
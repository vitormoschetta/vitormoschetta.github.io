Vue.component('about', {
    props: ['identificacao'],
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Sobre</h2>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    <p>Casado, 31 anos, pai de dois lindos meninos. Fui militar das forças armadas por 8 anos. Gerente comercial por 2 anos e meio.
                    Agora uso meus conhecimentos em análise e desenvolvimento de sistemas.
                    <a href="documents/cv.pdf" class="btn btn-fill" target="_blank">Download Curriculo</a>
                  
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
Vue.component('about', {
    props: ['identificacao'],
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Sobre</h2>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    <p>Graduado em Análise e Desenvolvimento de Sistemas.<br>                    
                    Apaixonado por ciência e conhecimento.<br>                    
                    Inspirado por relacionamentos.</p>                    
                    
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
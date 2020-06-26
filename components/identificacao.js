Vue.component('identificacao', {
    props: ['identificacao'],
    template: `
        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <h1>Vitor Moschetta</h1>
                    <div class="page-scroll">
                        <p class="job-title">Developer</p>
                        <a href="#contact" class="btn btn-fill ">Entre em contato</a>
                        <div class="clearfix visible-xxs"></div>
                        <a href="#service" class="btn btn-border">O que eu faço</a>
                    </div>
                </div>
            
                <div class="col-md-6 text-right">
                    
                </div>

            </div>
        </div>
    `
  })


  var identificacao = new Vue({
    el: '#hero',
    data: {
    
    }
  })
Vue.component('service', {
    props: ['service'],
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>O que eu faço</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <img src="assets/img/front-end.svg" alt="Front End Developer">
                        <h4>Front-end</h4>
                        <p>Experiência apenas com HTML, CSS, JavaScript, JSON, AJAX, jQuery e Bootstrap. <br>
                        [ Desenvolvimento de Interfaces ]</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <img src="assets/img/back-end.svg" alt="Back End Developer">
                        <h4>Back-end</h4>
                        <p>Experiência com Asp.NET Core MVC e Web API. Sólidos conhecimentos nas linguagens C# e SQL. 
                        Como ORM utilizamos o Entity Framework (Code e Database First), e o Micro ORM Dapper quando necessário um melhor desempenho.<br>
                        [ Aplicações seguras e robustas ]
                        </p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <img src="assets/img/consultancy.svg" alt="Coding">
                        <h4>Analise de Requisitos</h4>
                        <p>Facilidade para abstrair informações de negócio e levantamento de requisitos, além de boa comunicação. <br>
                        [ Desenvolvimento de Soluções ]
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    `
  })


  var service = new Vue({
    el: '#service',
    data: {
    
    }
  })
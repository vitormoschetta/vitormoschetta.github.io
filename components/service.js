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
                     <img src="assets/img/consultancy.svg" alt="Coding">
                        <h4>Análise de Requisitos</h4>
                        <p>Entender a necessidade do cliente e encontrar a melhor solução é o primeiro passo para um projeto bem sucedido.         
                        </p>                                                
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <img src="assets/img/back-end.svg" alt="Back End Developer">
                        <h4>Back-end</h4>
                        <p>O conhecimento técnico nos permite pensar na solução mais apropriada ainda na fase de análise. 
                        Experiência com Asp.NET Core MVC, Razor Pages e WebAPI. Sólidos conhecimentos nas linguagens C# e SQL. 
                        Trabalhamos com modernas bibliotecas de persistência de dados, como o Entity Framework (Code e Database First), 
                        e o Micro ORM Dapper.                     
                        </p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <img src="assets/img/front-end.svg" alt="Front End Developer">
                        <h4>Front-end</h4>
                        <p>Entender como as coisas acontecem na tela do usuário também é muito importante. 
                        Experiência com HTML, CSS, JavaScript e Bibliotecas robustas, como jQuery e Bootstrap.                        
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
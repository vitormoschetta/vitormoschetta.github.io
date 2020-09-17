Vue.component('service', {
    props: ['service'],
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>O que eu faço</h2>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">

                    <h4>Análise de Requisitos</h4>
                    <p>
                        Entender a necessidade do cliente e encontrar a melhor solução é o primeiro passo para um projeto bem sucedido.<br> 
                        Existem ferramentas e modelos de desenvolvimento para os mais variados tipos de projeto.
                        O conhecimento técnico nos permite pensar na solução mais apropriada ainda na fase de análise.
                    </p>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                     <img src="assets/img/consultancy.svg" alt="Coding">
                        <h4>Aplicação Desktop</h4>
                        <p>
                            
                        </p>                                                
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                     <img src="assets/img/consultancy.svg" alt="Coding">
                        <h4>Aplicação Web</h4>
                        <p>
                            Blog / Site / Portal / Web App / Formulário Web
                        </p>                                                
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                     <img src="assets/img/consultancy.svg" alt="Coding">
                        <h4>Web Services</h4>
                        <p>
                            Web API                         
                        </p>                                                
                    </div>
                </div>
                
                <div class="col-sm-4">
                    <div class="service">
                     <img src="assets/img/consultancy.svg" alt="Coding">
                        <h4>Aplicação Corporativa</h4>
                        <p>
                            Domain Drive Design (DDD) 
                            <br> / <br>
                            Aplicação MVC                            
                        </p>                                                
                    </div>
                </div>
                
                <!--
                <div class="col-sm-4">
                    <div class="service">
                        <img src="assets/img/back-end.svg" alt="Back End Developer">
                        <h4>Mobile</h4>
                        <p>                                                                               
                            App Multiplataforma                 
                        </p>
                    </div>
                </div>
                -->
                
            </div>
        </div>  
    `
})


var service = new Vue({
    el: '#service',
    data: {

    }
})
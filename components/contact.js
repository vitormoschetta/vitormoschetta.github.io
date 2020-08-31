Vue.component('contact', {
    props: ['contact'],
    template: `
        <div class="container">

            <h3>Contato</h3>
            <img src="assets/img/lines.svg" class="img-lines" alt="lines">
            <div class="row">
                <div class="col-sm-6">
                    e-mail:
                    <label>vitormoschetta@gmail.com</label>
                </div>
                <div class="col-sm-6">
                    linkedin:
                    <a href="https://www.linkedin.com/in/vitor-moschetta/" target="_blank">https://www.linkedin.com/in/vitor-moschetta/</a> 
                </div>
                
            </div>
            <div class="row">
                <div class="col-sm-6">
                    Phone:
                    <label>+55 (69) 9 99222-1727</label>
                </div>
                <div class="col-sm-6">
                    Site pessoal:
                    <a href="https://vitormoschetta.wordpress.com/" target="_blank">vitormoschetta</a>
                </div>
            </div>                                  
        </div>
    `
  })


  var contact = new Vue({
    el: '#contact',
    data: {
    
    }
  })















           
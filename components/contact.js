Vue.component('contact', {
    props: ['contact'],
    template: `
        <div class="container">

            <h3>Contato</h3>
            <img src="assets/img/lines.svg" class="img-lines" alt="lines">
            <div class="row">
                <div class="col-sm-6">
                    e-mail: <label>vitormoschetta@gmail.com</label>
                    <br/>
                    Phone: <label>+55 (69) 9 99222-1727</label>
                </div>
                <div class="col-sm-6">                    
                    <a href="https://www.linkedin.com/in/vitor-moschetta/" target="_blank">
                        <img src="assets/img/linkedin.jpg" width="90" height="90">
                    </a> 
                    <a href="https://github.com/vitormoschetta" target="_blank">
                        <img src="assets/img/github.jpg" width="70" height="70">
                    </a>
                    <a href="https://vitormoschetta.wordpress.com/" target="_blank">
                        <img src="assets/img/blog.jpg" width="70" height="70">Blog
                    </a>
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















           
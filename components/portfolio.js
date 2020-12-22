Vue.component('portfolio', {
    props: ['a'],
    template: `

    <div class="row">               
        
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-04.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio </h4>
                    <a href="https://frontend-netcore-bootstrap.azurewebsites.net/" target="_blank">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a>                    
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-05.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="https://frontend-netcore-bootstrap.azurewebsites.net/" target="_blank">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a>                    
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-06.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="https://frontend-netcore-bootstrap.azurewebsites.net/" target="_blank">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a>                    
                </div>
            </div>
        </div>              
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-08.png" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="https://frontend-netcore-uikit.azurewebsites.net/" target="_blank">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a>     
                </div>
            </div>
        </div>                    

        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-01.png" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio </h4>
                    <a href="https://frontend-netcore-uikit.azurewebsites.net/" target="_blank">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a> 
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-02.png" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="https://frontend-netcore-uikit.azurewebsites.net/" target="_blank">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a> 
                </div>
            </div>
        </div>         
        <br>
        <br>
        <div class="col-12">
            <a href="https://github.com/vitormoschetta" target="_blank">
                <img src="assets/img/icons/github.jpg" width="70" height="70">
                Visite meu repositório no GitHub.                
            </a>
        </div>
    </div>
    
    `
})


var portfolioBody = new Vue({
    el: '#portfolioBody',
    data: {

    }
})
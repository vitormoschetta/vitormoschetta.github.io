Vue.component('portfolio', {
    props: ['a'],
    template: `

    <div class="row">
        <div class="col-12">
            <a href="https://vitor-monolito-mvc.herokuapp.com/Cliente" target="_blank">                
                Experimente uma das aplicações cliando Aqui.                
            </a>
        </div>       
        
        <br>
        <br>
        
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-04.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio </h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-05.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-06.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>              
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-07.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem7"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>                    

        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-01.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio </h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem4"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio/portfolio-02.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Portfolio</h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem5"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
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
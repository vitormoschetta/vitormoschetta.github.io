Vue.component('portfolio', {
    props: ['a'],
    template: `
    <div class="row">
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio-01.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Contratos </h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio-02.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Educação</h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-6">
            <div class="portfolio-item">
                <img src="assets/img/portfolio-03.jpg" class="img-res" alt="">
                <div class="portfolio-item-info">
                    <h4>Educação</h4>
                    <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <!-- <a href="#"><span class="glyphicon glyphicon-link"></span></a> -->
                </div>
            </div>
        </div>                   
    </div>
    `
  })


  var portfolioBody = new Vue({
    el: '#portfolioBody',
    data: {
    
    }
  })
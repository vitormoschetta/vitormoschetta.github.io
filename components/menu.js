Vue.component('menu-site', {
    props: ['menu'],
    template: `
        <div class="container">                            
            <div class="navbar-header page-scroll">

                <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                
                <a href="#hero" class="site-logo"><img src="assets/img/logo.png" alt="logo"></a>

            </div><!-- /.navbar-header -->

            <div class="main-menu" id="portfolio-perfect-collapse">

                <ul class="nav navbar-nav navbar-right">

                    <li class="page-scroll"><a href="#hero">Home</a></li>
                    <li class="page-scroll"><a href="#about">Sobre</a></li>
                    <li class="page-scroll"><a href="#service">Serviços</a></li>
                    <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
                    <li class="page-scroll"><a href="#contact">Contato</a></li>
                    
                </ul><!-- /.navbar-nav -->

            </div><!-- /.navbar-collapse -->
        </div>
    `
  })


  var menu = new Vue({
    el: '#primary-navigation',
    data: {
    
    }
  })
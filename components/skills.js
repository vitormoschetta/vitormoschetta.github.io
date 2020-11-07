Vue.component('skills', {
    props: ['skills'],
    template: `
        <div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>C#</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>
                </div>
                <div class="skill">                 
                </div>
            </div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>Asp.NET Core</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>
                </div>
                <div class="skill">                 
                </div>
            </div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>Windows Forms</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="60"></div>
                    </div>
                </div>
                <div class="skill">                  
                </div>
            </div>  
            <div class="col-md-4">
                <div class="skill">
                    <h4>Sql Server</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>
                </div>
                <div class="skill">                    
                </div>
            </div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>MySql</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>
                </div>
                <div class="skill">                  
                </div>
            </div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>SqLite</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>
                </div>
                <div class="skill">                
                </div>
            </div>  
            <div class="col-md-4 linha-skill">
                <div class="skill">     
                    <h4>ORM - EF / Dapper</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>               
                </div>
                <div class="skill">                   
                </div>
            </div>  
            <div class="col-md-4 linha-skill">
                <div class="skill">  
                    <h4>Autenticação Cookie e JWT</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>                  
                </div>
                <div class="skill">                 
                </div>
            </div>  
            <div class="col-md-4 linha-skill">
                <div class="skill">    
                    <h4>ORM - EF / Dapper</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>                
                </div>
                <div class="skill">               
                </div>
            </div>  
            <div class="col-md-4 linha-skill">
                <div class="skill">     
                    <h4>Frontend (HTML/CSS/JS)</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>               
                </div>
                <div class="skill">                   
                </div>
            </div>  
            <div class="col-md-4 linha-skill">
                <div class="skill">  
                    <h4>Angular</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="30"></div>
                    </div>                  
                </div>
                <div class="skill">                 
                </div>
            </div>  
            <div class="col-md-4 linha-skill">
                <div class="skill">    
                    <h4>ORM - EF / Dapper</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>                
                </div>
                <div class="skill">               
                </div>
            </div>  
            <br/>            

        </div>
        
    `
})


var skills = new Vue({
    el: '#skills',
    data: {

    }
})
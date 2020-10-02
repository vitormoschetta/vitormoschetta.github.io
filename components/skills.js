Vue.component('skills', {
    props: ['skills'],
    template: `
        <div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>Html/css</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>
                </div>
                <div class="skill">
                    <h4>SQL</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="75"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>Javascript</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>
                </div>
                <div class="skill">
                    <h4>Asp.NET Core</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="90"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="skill">
                    <h4>C#</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="70"></div>
                    </div>
                </div>
                <div class="skill">
                    <h4>ORM - EF / Dapper</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-transitiongoal="50"></div>
                    </div>
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
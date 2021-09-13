

xyz.appendChild(
    `<div class="question_1">
        <h5>
            <div class="row pb-2">
                    <div class="col-12 mb-2">1] A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?</div>

            </div>
            <div class="row p-3 pt-0">
                <button class="btn btn_answer text-start" id="1.1" onclick="getAnswer(0,'1.1')">
                    <div class="col-12">
                        A] 120 meters 
                    </div>
                </button>
            </div>
            <div class="row p-3 pt-0">
                <button class="btn btn_answer text-start" id="1.2" onclick="getAnswer(0,'1.2')">
                    <div class="col-12">
                        B] 180 meters
                    </div>
                </button>
            </div>
            <div class="row p-3 pt-0">
                <button class="btn btn_answer text-start" id="1.3" onclick="getAnswer(0,'1.3')">
                    <div class="col-12">
                        C] 324 meters
                    </div>
                </button>
            </div>
            <div class="row p-3 pt-0 pb-1">
                <button class="btn btn_answer text-start" id="1.4" onclick="getAnswer(1,'1.4')">
                    <div class="col-12">
                        D] 150 meters
                    </div>
                </button>
            </div>                        
        </h5>
        <div class="answer_1" id="answer_1" style="display:none;">
            <hr class="p-0 m-0">
            <div class="row pt-1">
                <h6 class="p-3 pb-0 pt-0">Answer: Option C</h6>
            </div>
            <hr class="p-0 m-0">
            <div class="row pt-1">
                <h6 class="p-3 pb-0 pt-0">Solution:</h6>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12 bg-white" id="latex" style="font-size:0.8rem; color:rgb(78, 78, 78);"> 
                    $$\eqalign{
                        & {\text{Speed}} = \left( {60 \times \frac{5}{{18}}} \right){\text{m/sec}} =  {\frac{{50}}{3}} {\text{m/sec}}  \cr 
                        & {\text{Length}}\,{\text{of}}\,{\text{the}}\,{\text{train}} = \left( {{\text{Speed}} \times {\text{Time}}} \right)  \cr 
                        & \therefore {\text{Length}}\,{\text{of}}\,{\text{the}}\,{\text{train}}  \cr 
                        &  = \left( {\frac{{50}}{3} \times 9} \right)m = 150m \cr}$$
                </div>
            </div>
        </div>
        <hr class="p-0 m-0">
        <div class="row p-3 pt-1">
            <div class="col-lg-4 col-sm-4 col-xs-12 pt-1">
                <button class="btn btn-success" style="width:134px" onclick="showAnswer('1')">
                    View Answer
                </button>
            </div>
            <div class="col-lg-4 col-sm-4 col-xs-12 pt-1">
                <button class="btn btn-warning" style="width:134px" onclick="clearBackground('1')">
                    Clear Selection  
                </button>
            </div>
            <div class="col-lg-4 col-sm-4 col-xs-12 pt-1">
                <button class="btn btn-secondary" style="width:134px">
                    Discuss Answer
                </button>
            </div>
        </div>
    </div>`

)
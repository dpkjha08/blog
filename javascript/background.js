function getAnswer(a,b)
    {
        var answer = document.getElementById(b);
        if(a===0){
            answer.style.backgroundColor="#f8d7da";
        }
        else{
            answer.style.backgroundColor="#d4edda";
        }
    }

function clearBackground(a){
    document.getElementById(a+'.1').style.backgroundColor = "white";
    document.getElementById(a+'.2').style.backgroundColor = "white";
    document.getElementById(a+'.3').style.backgroundColor = "white";
    document.getElementById(a+'.4').style.backgroundColor = "white";
    
}

function showAnswer(div_id){
    var display = document.getElementById('answer_'+div_id).style.display;
    if(display === "none"){
        document.getElementById('answer_'+div_id).style.display = "block";
        document.getElementsByClassName("MathJax_Display")[div_id-1].removeAttribute("style");
        document.getElementsByClassName("MathJax_Display")[div_id-1].style.textAlign = "left";
    }
    else{
        document.getElementById('answer_'+div_id).style.display = 'none';
    }
    // document.getElementById('answer_'+div_id).toggleAttribute('display');
}
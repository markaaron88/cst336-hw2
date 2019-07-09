$("#submitButton" ).click(function() {
    $("#submitButton").hide();
    $("#playAgain").show();
  gamePlay();
});

$( "#textBoxButton" ).click(function() {
    var userName = document.forms.gameForm.textBox.value;
    document.getElementById('name').innerHTML = "PREPARE TO LOSE " + userName + "!-Bowser";
});

var gameScore = 0;

function gamePlay()
{
    if(document.forms.gameForm.ans1.value == "0")
    {
        document.getElementById('result1').innerHTML = "Correct!";
        gameScore++;
    } else
    {
        document.getElementById('result1').innerHTML = "WRONG!";
    }
    
    if(document.forms.gameForm.ans2.value == 0)
    {
        document.getElementById('result2').innerHTML = "Correct!";
        gameScore++;
    } else
    {
        document.getElementById('result2').innerHTML = "PRINCESS PEACH IS MINE!";
    }
    
  
  
    if(document.forms.gameForm.ans3.value == 4)
    {
        document.getElementById('result3').innerHTML = "Correct!";
        gameScore++;
    } else
    {
        document.getElementById('result3').innerHTML = "TAKE THAT L!";
    }
    
     document.getElementById('showScore').innerHTML = "Your score is " + gameScore + ".";
     
}





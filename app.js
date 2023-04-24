//Question bank
var qnBank= [
    {
        question : 'What is the maximum number of Members in Lok Sabha?',
        option : ['512','532','542','552'],
        answer : '552'
    },
    {
        question : 'Which of the following bills can be introduced only in the Lok Sabha?',
        option : ['Constitution Amendment Bill','Government Bill','Money Bill','Private Member Bill'],
        answer : 'Money Bill'
    },
    {
        question : 'How many General Elections to the Lok Sabha have been held till April 2022?',
        option : ['24','13','17','10'],
        answer : '17'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'According to the Indian Constitution, the Prime Minister shall be appointed by the ______. ',
        option : ['Speaker of the House of the people','President of India','Council of Ministers','Chief Justice of India'],
        answer : 'President of India'
    },
    {
        question : 'Which of the following states has two houses in its state legislature? ',
        option : ['Gujarat','Maharastra','Rajasthan','Jharkhand'],
        answer : 'Maharastra'
    },
    {
        question : 'Who among the following was addressed as the "Ambassador of Hindu Muslim Unity?" ',
        option : ['Mahatma Gandhi','Mohammad Ali Jinnah','Bhagat Sigh','Jawaharlal Nehru'],
        answer : 'Mohammad Ali Jinnah'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= (i+1)+'. '+qnBank[i].question;
    option0.innerHTML= qnBank[i].option[0];
    option1.innerHTML= qnBank[i].option[1];
    option2.innerHTML= qnBank[i].option[2];
    option3.innerHTML= qnBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+qnBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===qnBank[i].answer && score<qnBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= '#00b33c';
    }
    else{
        document.getElementById(e.id).style.background= '#ff3333';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<qnBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ qnBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<qnBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= qnBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
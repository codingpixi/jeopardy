fetch('http://jservice.io/api/random?count=3')
    .then(response => response.json())
    // .then(object => console.log(object))
    .then (array => array.map(build)) //change object word to array
    .then (genericDisplay);//invoke function
// console.log(Handlebars);
function build (object){
  console.log(object);
  return new Question(object.question, object.answer, object.value, object.category.title);
}

let showCategories = document.querySelector('#showCategories');
let showQuestions = document.querySelector('#showQuestions');


function Question(text, answer, points, category) {
    this.text = text;
    this.answer = answer;
    this.points = points;
    this.category = category;


    this.categoryDisplay = function () {
      let source = document.querySelector('#tv').innerHTML;
      let template = Handlebars.compile(source);//method being invoked returns value of template
      let html = template(this);
      document.querySelector('#showCategories').insertAdjacentHTML('beforeend', html);
      document.querySelector('#showCategories article.boxOne:last-of-type div').addEventListener('click', this.questionShowsHere.bind(this));
    }
    this.questionShowsHere = function(){
      let source = document.querySelector('#alexSaid').innerHTML;
      let template = Handlebars.compile(source);
      let html = template(this);
      document.querySelector('#showQuestions').insertAdjacentHTML('beforeend', html);
      document.querySelector('button.questionAnswer').addEventListener('click', this.isCorrect.bind(this));
    }

    this.isCorrect = function(event) {
        let submitButton = event.target;
        let answerSpace = submitButton.previousElementSibling;
        let answerTyped = answerSpace.value;
        let rightOrWrongAnswer = document.querySelector('span.answer');
        if (answerTyped === this.answer) {
            rightOrWrongAnswer.textContent = "correct";
            score.push(this.points);
        } else {
            rightOrWrongAnswer.textContent = "incorrect";
            score.push(this.points*(-1));
        }
        document.querySelector('button.nextQuestion').addEventListener('click', this.nextQuestion.bind(this));
    }
    this.nextQuestion = function (){
      showCategories.innerHTML = ""; //resets questions to erase previous fetch
      showQuestions.innerHTML = "";
      fetch('http://jservice.io/api/random?count=3')
          .then(response => response.json())
          // .then(object => console.log(object))
          .then (object => object.map(build))
          .then (genericDisplay)
          .then (displayScore);
    }

}

function tallyScore (previousScore, currentScore){
  return previousScore + currentScore;
}

function displayScore (){
  document.querySelector('#scoreBoard').innerHTML = score.reduce(tallyScore);
}

Question.prototype.display = function (){
  this.genericDisplay()
  document.querySelector('#tv article.multi:last-of-type ul').addEventListener('click', this.isCorrect.bind(this))
}


function genericDisplay (displayEachQuestion) {
  displayEachQuestion.forEach(individualQuestion => individualQuestion.categoryDisplay());
}

let score =[];

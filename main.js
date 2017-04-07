fetch('http://jservice.io/api/random?count=3')
    .then(response => response.json())
    .then(object => console.log(object));
// .then (object => object)
// .then (resultsArr => resultsArr.map(getMoney))
// .then (resultsArr => resultsArr.forEach(question => ))


function onClicker(categories, answer, question, points) {
    this.categories = categories;
    this.answer = answer;
    this.question = question;
    this.points = points;

    this.isCorrect = function(event) {
        let li = event.target;
        let answerSpace = li.parentElement.nextSiblingElement;
        if (li.textContent === this.answer) {
            answerSpace.textContent = "correct";
        } else {
            answerSpace.textContent = "incorrect";
        }
    }

    this.display = function () {
      let source = document.querySelector('#tv').insertAdjacentHTML('beforeend', html);
      document.querySelector('#tv article.multi:last-of-type ul')
    }
}

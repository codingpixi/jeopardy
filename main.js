fetch ('http://jservice.io/api/random?3')
.then (response => response.json())
.then(object => console.log(object))
// .then (object => object.results)
// .then (resultsArr => resultsArr.map(getMoney))
// .then (resultsArr => resultsArr.forEach(question => ))





// fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=hard&type=multiple')
// .then(response => response.json())
// .then (object => object.results)
// .then (apiArr => apiArr.map(getData))//getData is being invoked by running it through getData
// .then (apiArr => apiArr.forEach(question => question.display()));
// .then(jsonData => console.log(jsonData))

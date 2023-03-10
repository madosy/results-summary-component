const data = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const criteriaFields = document.querySelectorAll('.criteria');

    criteriaFields.forEach((field, ind) => {
    const icon = field.querySelector('img');
    const fieldTitle = field.querySelector('h2');
    const fieldScore = field.querySelector('.score');

    icon.src = data[ind].icon;
    icon.alt = `${data[ind].category} category icon`
    fieldTitle.textContent = data[ind].category;
    fieldScore.textContent = data[ind].score;
    })
 })
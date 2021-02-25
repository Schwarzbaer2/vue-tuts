const buttonEl = document.querySelector('button')
const inputEl = document.querySelector('input')
const listEl = document.querySelector('ul')

addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
}

button.addEventListener('click',addGoal);
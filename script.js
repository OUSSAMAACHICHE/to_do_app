// select elements
const inputBox = document.getElementById('input-box');
const parentList = document.querySelector('.list-container');

// get the localStorage data
function returnData() {

  parentList.innerHTML = localStorage.getItem('data');

}

// fn for add tasks
function addTask() {
  // check if the input is empty
  if (inputBox.value === '') {

    alert('You must write something!');
  } else {
    // create li element
    let li = document.createElement('li');
    // add the inputBox text to li text
    li.innerHTML = inputBox.value;

    let span = document.createElement('span');

    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // add the createed li to main parent list 
    parentList.appendChild(li);
  }
  // empty the input field
  inputBox.value = '';
  saveData();
  inputBox.focus();
}
handleItemClick();

returnData();


function handleItemClick() {

  parentList.addEventListener('click', function (element) {

    if (element.target.tagName === 'LI') {

      element.target.classList.toggle('checked');

      saveData();
    } else if (element.target.tagName === 'SPAN') {
      // delete the task
      element.target.parentElement.remove();

      saveData();

    } else {
      return false;
    }
  });

}

// save the elements on the localStorage
function saveData() {

  localStorage.setItem('data', parentList.innerHTML);

}
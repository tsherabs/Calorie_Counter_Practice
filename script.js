const calorieCounter = document.getElementById('calorie-counter')
const calorieInput = document.getElementById('calorie-input'); 
const entryDropdown = document.getElementById('entryDropdown'); 
const addEntryBtn = document.getElementById('add-entry'); 
const clearBtn = document.getElementById('clear'); 
let isError = false; 

function checkValid(str){
    const regex = /[+-\s]/g; 
    return str.replace(regex, "");  
}

function isInvalidCheck(str){
    const regex = /\d+e\d+/; 
    return str.match(regex); 
}
function addEntry(){
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); 
    const entryNumber = targetInputContainer.querySelectorAll('input[type = "text"]').length + 1; 
    console.log(entryNumber)
    const HTMLString = `
    <label for = ${entryDropdown.value}-${entryNumber}-name>Entry ${entryNumber} Name: </label>
    <input type = "text" id = "${entryDropdown.value}-${entryNumber}-name"/>
    <label for = ${entryDropdown.value}-${entryNumber}-calories>Entry ${entryNumber} Calories:</label>
    <input
    type = "number"
    min = 0
    id = "${entryDropdown.value}-${entryNumber}-calories"/>`; 

    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString); 
}

addEntryBtn.addEventListener('click', addEntry); 


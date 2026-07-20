const calorieCounter = document.getElementById('calorie-counter')
const calorieInput = document.getElementById('calorie-input'); 
const entryDropdown = document.getElementById('entryDropdown'); 
const addEntry = document.getElementById('add-entry'); 
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
    const targetId = "#" + entryDropdown.value; 
    
}
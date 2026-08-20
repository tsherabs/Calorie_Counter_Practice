const calorieCounter = document.getElementById('calorie-counter')
const budgetInput = document.getElementById('budget-input'); 
const entryDropdown = document.getElementById('entryDropdown'); 
const addEntryBtn = document.getElementById('add-entry'); 
const clearBtn = document.getElementById('clear'); 
const output = document.getElementById('output'); 

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
        console.log(budgetInput); 

}

function calculateCalories(e){
    e.preventDefault(); 
    isError = false; 

    const breakfastInput = document.querySelectorAll("#breakfast input[type = 'number']"); 
    const lunchInput = document.querySelectorAll("#lunch input[type = 'number']"); 
    const dinnerInput = document.querySelectorAll("#dinner input[type = 'number']"); 
    const snacksInput = document.querySelectorAll("#snacks input[type = 'number']"); 
    const exerciseInput = document.querySelectorAll("#exercise input[type = 'number']"); 


    const breakfastCalories = getCaloriesFromInputs(breakfastInput); 
    const lunchCalories = getCaloriesFromInputs(lunchInput); 
    const dinnerCalories = getCaloriesFromInputs(dinnerInput); 
    const snacksCalories = getCaloriesFromInputs(snacksInput); 
    const exerciseCalories = getCaloriesFromInputs(exerciseInput); 
    const budgetCalories = getCaloriesFromInputs([budgetInput]);

    console.log(budgetInput); 

    if(isError){
        return; 
    }


    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories; 
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories; 
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit'; 
    
    output.innerHTML = `<span class = ${surplusOrDeficit}>${Math.abs(remainingCalories)} Calories Remaining</span>
    <p>${consumedCalories} Consumed</p>
    <p>${budgetCalories} Budgeted Calories</p>
    <p>${exerciseCalories} Calories Burned</p>
    `

    output.classList.remove('hide'); 
}

function getCaloriesFromInputs(list){
    let calories = 0 

    for(let item of list){
        const curval = checkValid(item.value); 
        const invalidCheck = isInvalidCheck(curval); 

        if(invalidCheck){
            alert(`${invalidCheck}` + "is an invalid input"); 
            return null; 
        }
        calories += Number(curval); 
    }
    return calories; 
}

function clearForm(){
    const inputContainers = Array.from(document.querySelectorAll(".input-container")); 
    console.log(inputContainers); 

    for(let container of inputContainers){
        container.innerHTML = ""; 
    }
    budgetInput.innerHTML = ""; 
    output.classList.add('hide'); 
}

addEntryBtn.addEventListener('click', addEntry); 
calorieCounter.addEventListener('submit', calculateCalories); 
clearBtn.addEventListener('click',clearForm); 

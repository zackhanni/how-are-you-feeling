// notes - overall this code works but the node value is based on index and isnt searching the actual feelingNodes.id value like it should. this breaks the code when I set id to value 20,30, etc instead of going on order.

const questionElement = document.querySelector("#question")
const feelingButtonsElement = document.querySelector("#feeling-buttons")

// keep track of current feelingNodes.id
let node = 0

function beginFeelingsJournal() {
    targetQuestion(node)
    targetFeelingButtons(node)
}

// target id 'question' and replace innervalue with the value of feelingNodes.question
function targetQuestion(nodeId) {
    questionElement.innerHTML = feelingNodes[nodeId].question
}

// find clicked button's nextFeeling value and change node to that value
function onclickFunction(num) {
    node = num - 1
    beginFeelingsJournal()
    // selectedButton = 1
    // node = feelingNodes[node].options[selectedButton].nextFeeling
}

//create a <button> for each value stored in feelingNodes.options.text depending on current feelingNodes.id value
function targetFeelingButtons() {
    // remove placeholder buttons
    while (feelingButtonsElement.children[0]) {
        feelingButtonsElement.removeChild(feelingButtonsElement.firstElementChild)
    }
    
    i = 0
    while (i < feelingNodes[node].options.length) {

        feeling = feelingNodes[node].options[i].text

        newButton = document.createElement("button")
        newButton.innerText = feeling
        newButton.classList.add("feeling-btn")
        newButton.setAttribute("onclick", `onclickFunction(${feelingNodes[node].options[i].nextFeeling})`)
        newButton.setAttribute("option", `${i}`)
        feelingButtonsElement.appendChild(newButton)
        i++;
    }
}

beginFeelingsJournal();
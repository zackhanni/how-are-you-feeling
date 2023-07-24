const questionElement = document.getElementById("question")
const feelingButtonsElement = document.getElementById("feeling-buttons")




function beginFeelingsJournal() {
    
}

// find out and keep track of current feelingNodes.id should be displayed on screen
function whichFeelingNode() {
    let currentFeelingNode = 1
    return currentFeelingNode
}

// target id 'question' and replace innervalue with the value of feelingNodes.question
function targetQuestion(questionArrayValue) {
    const z = questionElement
    z.innerHTML = feelingNodes[currentFeelingNode]
}

//create a <button> for each value stored in feelingNodes.options.text depending on current feelingNodes.id value
function targetFeelingButtons() {

}


// document.createElement("button").classList.add("feeling-btn")


beginFeelingsJournal();
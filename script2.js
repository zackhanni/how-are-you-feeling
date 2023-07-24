const questionElement = document.querySelector("#question")
const feelingButtonsElement = document.querySelector("#feeling-buttons")




function beginFeelingsJournal() {
    
    targetQuestion(currentNode())
    targetFeelingButtons(currentNode())
    // alert("begin feelings journal has been run")
}

// find out and keep track of current feelingNodes.id should be displayed on screen
function currentNode() {
    let node = feelingNodes[0].id - 1
    return node
}

// target id 'question' and replace innervalue with the value of feelingNodes.question
function targetQuestion(nodeId) {
    const question = questionElement
    question.innerHTML = ""
    question.innerHTML = feelingNodes[nodeId].question
}

//create a <button> for each value stored in feelingNodes.options.text depending on current feelingNodes.id value
function targetFeelingButtons(z) {
    let button = feelingButtonsElement.children[0].innerHTML
    button = feelingNodes[0].options[0].text


    alert(button)

   // document.querySelector("#feeling-buttons > button:nth-child(1)")

    
    // document.createElement("button").classList.add("feeling-btn")
}


// document.createElement("button").classList.add("feeling-btn")


beginFeelingsJournal();
// alert("this is the end of the script2 page")
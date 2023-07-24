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

    let currentButton = 0

    let buttonOption = feelingButtonsElement.children[currentButton].innerHTML
    feeling = feelingNodes[0].options[0].text



    newButton = document.createElement("button")
    newButton.innerText = feeling
    newButton.classList.add("feeling-btn")
    feelingButtonsElement.appendChild(newButton)


i = 0
while (i < feelingNodes[0].options.length) {
    newButton = document.createElement("button")
    newButton.innerText = feeling
    newButton.classList.add("feeling-btn")
    feelingButtonsElement.appendChild(newButton)

    i++;

}


    // alert(currentButton)    // 0
    // alert(buttonOption)    // Option 1
    // alert(feeling)        // Happy

   // document.querySelector("#feeling-buttons > button:nth-child(1)")



}





beginFeelingsJournal();
// alert("this is the end of the script2 page")
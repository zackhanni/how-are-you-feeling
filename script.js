const textElement = document.getElementById('question')
const feelingButtonsElement = document.getElementById('feeling-buttons') 

function startDiary() {
    showFeelingNode(1)
}

function showFeelingNode(feelingNodeIndex) {
    const feelingNode = feelingNodes.find(feelingNode => feelingNode.id === feelingNodeIndex)
    textElement.innerText = feelingNode.question
    while (feelingButtonsElement.firstChild) {
      feelingButtonsElement.removeChild(feelingButtonsElement.firstChild)
    }

    feelingNode.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener('click', () => selectOption(option))
            feelingButtonsElement.appendChild(button)

    })
}

function selectOption(option) {
    const nextFeelingNodeId = option.nextFeeling
    if (nextFeelingNodeId <= 0 ) {
        return startDiary()
    }
    showFeelingNode(nextFeelingNodeId)
}

startDiary()